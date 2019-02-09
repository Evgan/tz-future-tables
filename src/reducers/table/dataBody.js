import sortJsonArray from 'sort-json-array'
import { GET_DATA_SUCCESS } from '../../actions/dataActions'
import { SORT_TABLE } from '../../actions/tableActions'
const TYPE_SORT_DEFAULT = 'default'
const TYPE_SORT_ASC = 'asc'
const TYPE_SORT_DESC = 'des'

const initialState = {
  data: [],
  dataBody: [],
  maxRows: 50,
  sliceStart: 0,
  sliceEnd: 0,
  tableColumns: [
    { name: 'id', sort: TYPE_SORT_DEFAULT },
    { name: 'firstName', sort: TYPE_SORT_DEFAULT },
    { name: 'lastName', sort: TYPE_SORT_DEFAULT },
    { name: 'email', sort: TYPE_SORT_DEFAULT },
    { name: 'phone', sort: TYPE_SORT_DEFAULT },
  ],
  page: 1,
}

function getDataBody(data, i, maxRows, tableColumns) {
  const sliceStart = (i - 1) * maxRows
  const sliceEnd = i * maxRows
  let dataBody = data.slice(sliceStart, sliceEnd)
  // В итоговый массив запишим только те поля строк, которые соответсвуют шапке
  dataBody = dataBody.map(item => {
    return tableColumns.map(itemColumn => {
      return item[itemColumn.name]
    })
  })
  return { sliceStart: sliceStart, sliceEnd: sliceEnd, dataBody: dataBody }
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
      const { sliceStart, sliceEnd, dataBody } = getDataBody(
        action.payload,
        state.page,
        state.maxRows,
        state.tableColumns
      )
      return {
        ...state,
        data: action.payload,
        sliceStart: sliceStart,
        sliceEnd: sliceEnd,
        dataBody: dataBody,
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
        state.tableColumns
      ).dataBody
      return {
        ...state,
        data: dataSort,
        tableColumns: tableColumns,
        dataBody: dataBodySort,
        page: 1,
      }

    default:
      return state
  }
}
