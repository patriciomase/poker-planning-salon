import giveMeName from '../libraries/names.js';
const person = giveMeName();

export function currentTicketName(state = 'To kill pandas', action) {
  switch (action.type) {
    case 'UPDATE_TICKET_NAME':
      return action.ticketName;
    default:
      return state;
  }
}

export function userName(state = person.name, action) {
  switch (action.type) {
    case 'UPDATE_USER_NAME':
      return action.name;
    default:
      return state;
  }
}