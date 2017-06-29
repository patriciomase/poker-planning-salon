export function users(state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      return [
        {
          id: action.id,
          name: action.name
        },
        ...state
      ];
    default:
      return state;
  }
}
