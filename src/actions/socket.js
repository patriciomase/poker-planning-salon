export function addUser(user) {
  return {
    type: 'ADD_USER',
    id: user.id,
    name: user.name
  }
}
