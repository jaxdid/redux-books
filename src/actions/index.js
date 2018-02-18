// selectBook is an Action Creator. It needs to return an Action
// An action is an object with a type and payload
export function selectBook (book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}