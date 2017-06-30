import giveMeName from '../libraries/names.js';
const person = giveMeName();

export function userName(state = person.name, action) {
  switch (action.type) {
    case 'UPDATE_USER_NAME':
      return action.name;
    default:
      return state;
  }
}