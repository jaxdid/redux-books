// Reducers take a state argument that does not represent the whole application state,
// but instead only the property of state for which it is responsible
export default (state = null, action) => {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
    default:
      return state
  }
}