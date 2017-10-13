import { push } from 'redux-little-router';

export const STORE_QUERY = 'STORE_QUERY';

export function navigateTo(path) {
  return (dispatch) => {
    dispatch(push(`/${path}`))
  }
}

export function navigateQuery(string) {
  return (dispatch) => {
    dispatch(storeQuery(string));
    dispatch(
      push({
        pathname: `/query`,
        query: {
          string: string,
        },
      })
    )
  }
}

export function storeQuery(query) {
  return {
    type: STORE_QUERY,
    payload: query
  }
}

export function updateUserName(userName) {
  return {
    type: 'UPDATE_USER_NAME',
    userName: userName
  }
}
