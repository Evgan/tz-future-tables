export const SORT_TABLE = 'SORT_TABLE'
export const PAGE_CHANGED = 'PAGE_CHANGED'
export const SELECT_ROW = 'SELECT_ROW'

export function sortTable(e) {
  return {
    type: SORT_TABLE,
    payload: e,
  }
}
export function changePage(e) {
  return {
    type: PAGE_CHANGED,
    payload: e,
  }
}

export function selectRow(e) {
  return {
    type: SELECT_ROW,
    payload: e,
  }
}
