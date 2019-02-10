import sortJsonArray from 'sort-json-array'
import { GET_DATA_FAILURE, GET_DATA_SUCCESS } from '../../actions/dataActions'
import {
  PAGE_CHANGED,
  SELECT_ROW,
  SORT_TABLE,
} from '../../actions/tableActions'
import { localData } from './localData'
const TYPE_SORT_DEFAULT = 'default'
const TYPE_SORT_ASC = 'asc'
const TYPE_SORT_DESC = 'des'

const initialState = {
  data: [],
  dataBody: [],
  maxRows: 10,
  sliceStart: 0,
  sliceEnd: 0,
  tableColumns: [
    { name: 'id', sort: TYPE_SORT_DEFAULT },
    { name: 'firstName', sort: TYPE_SORT_DEFAULT },
    { name: 'lastName', sort: TYPE_SORT_DEFAULT },
    { name: 'email', sort: TYPE_SORT_DEFAULT },
    { name: 'phone', sort: TYPE_SORT_DEFAULT },
  ],
  pager: {
    total: 11,
    current: 1,
    visiblePage: 3,
  },
  idSelectRow: '',
  fullDataSelectRow: {},
}

function getDataBody(data, i, maxRows, tableColumns, idSelectRow) {
  const sliceStart = (i - 1) * maxRows
  const sliceEnd = i * maxRows
  var fullDataSelectRow
  let dataBody = data.slice(sliceStart, sliceEnd)
  // В итоговый массив запишим только те поля строк, которые соответсвуют шапке
  dataBody = dataBody.map(item => {
    // ДЛя выделенной строки:
    const className = item.id === idSelectRow ? 'select' : ''
    if (className === 'select') {
      fullDataSelectRow = item
    }
    //
    return {
      data: tableColumns.map(itemColumn => {
        return item[itemColumn.name]
      }),
      slass: className,
    }
  })
  return {
    sliceStart: sliceStart,
    sliceEnd: sliceEnd,
    dataBody: dataBody,
    fullDataSelectRow: fullDataSelectRow,
  }
}

function initStatePager(pagerState, data, maxRows) {
  const total = Math.ceil(data.length / maxRows)
  const visiblePage =
    total > pagerState.visiblePage ? pagerState.visiblePage : total
  return { ...pagerState, total: total, visiblePage: visiblePage }
}

function SortByIdAsc(x, y) {
  return x.id - y.id
}
function SortByIdDes(x, y) {
  return y.id - x.id
}

export function dataBodyReducer(state = initialState, action) {
  switch (action.type) {
    // ПОЛУЧИЛИ ИНФОРМАЦИ С СЕРВЕРА (основной массив данных)
    case GET_DATA_SUCCESS:
    case GET_DATA_FAILURE:
      const data = action.type === GET_DATA_SUCCESS ? action.payload : localData
      const { sliceStart, sliceEnd, dataBody } = getDataBody(
        data,
        state.pager.current,
        state.maxRows,
        state.tableColumns,
        state.idSelectRow
      )
      const statePager = initStatePager(state.pager, data, state.maxRows)
      return {
        ...state,
        data: data,
        sliceStart: sliceStart,
        sliceEnd: sliceEnd,
        dataBody: dataBody,
        pager: statePager,
      }

    // СОРТИРОВКА
    case SORT_TABLE:
      const { index, name } = action.payload
      let typeSort = action.payload.typeSort
      switch (typeSort) {
        case TYPE_SORT_ASC:
          typeSort = TYPE_SORT_DESC
          break
        case TYPE_SORT_DESC:
        case TYPE_SORT_DEFAULT:
        default:
          typeSort = TYPE_SORT_ASC
          break
      }
      // Вносим изменения в инфу для шапки
      const tableColumns = state.tableColumns.map((column, i) => ({
        ...column,
        sort: i === index ? typeSort : TYPE_SORT_DEFAULT,
      }))
      // Сортируем основной массив данных
      const dataSort =
        name === 'id'
          ? typeSort === TYPE_SORT_ASC
            ? state.data.sort(SortByIdAsc)
            : state.data.sort(SortByIdDes)
          : sortJsonArray(state.data, name, typeSort) //(Цифры некорректно сортирует)
      // Выборка данных для отображения в таблице
      // Страницу сбрасываем на первую
      const dataBodySort = getDataBody(
        dataSort,
        1,
        state.maxRows,
        state.tableColumns,
        state.idSelectRow
      ).dataBody
      return {
        ...state,
        data: dataSort,
        tableColumns: tableColumns,
        dataBody: dataBodySort,
        pager: { ...state.pager, current: 1 },
      }

    // ПРИ СОБЫТИИ НА ПАГИНАЦИИ
    case PAGE_CHANGED:
      const { nextPage } = action.payload
      const dataBodyNext = getDataBody(
        state.data,
        nextPage,
        state.maxRows,
        state.tableColumns,
        state.idSelectRow
      ).dataBody
      return {
        ...state,
        dataBody: dataBodyNext,
        pager: { ...state.pager, current: nextPage },
      }

    // НАЖАЛИ НА ОДНУ ИЗ СТРОК ТАБЛИЦЫ
    case SELECT_ROW:
      const { idSelectRow } = action.payload
      const {
        dataBody: dataBodyWithSelectRow,
        fullDataSelectRow,
      } = getDataBody(
        state.data,
        state.pager.current,
        state.maxRows,
        state.tableColumns,
        idSelectRow
      )
      return {
        ...state,
        dataBody: dataBodyWithSelectRow,
        idSelectRow: idSelectRow,
        fullDataSelectRow: fullDataSelectRow,
      }

    default:
      return state
  }
}
