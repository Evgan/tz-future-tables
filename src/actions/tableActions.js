export const SORT_TABLE = 'SORT_TABLE'

export function sortTable(e) {
  return {
    type: SORT_TABLE,
    payload: e,
  }
}
