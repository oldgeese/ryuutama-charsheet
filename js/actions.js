// action types
export const SEARCH_START = "SEARCH_START"
export const SEARCH_SUCCESS = "SEARCH_SUCCESS"
export const SEARCH_FAIL = "SEARCH_FAIL"

// action creators
export function searchStart() {
  return {type: SEARCH_START}
}

export function searchSuccess(data) {
  return {type: SEARCH_SUCCESS, payload: data}
}

export function searchFail(error) {
  return {type: SEARCH_FAIL, payload: error, error: true}
}
