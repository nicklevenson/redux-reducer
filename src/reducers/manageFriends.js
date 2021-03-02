export function manageFriends(state, action){
  switch(action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
      let newFriends = [...state.friends]
      newFriends.splice(removalIndex, 1)
      return {...state, friends: newFriends}
    default: 
      return {friends: state.friends}
  }
}
