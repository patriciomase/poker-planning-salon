export function currentTicketName(state = 'To kill pandas', action) {
  switch (action.type) {
    case 'UPDATE_TICKET_NAME':
      return action.ticketName;
    default:
      return state;
  }
}

export function userName(state = null, action) {
  switch (action.type) {
    case 'UPDATE_USER_NAME':
      return action.userName;
    default:
      return state;
  }
}
