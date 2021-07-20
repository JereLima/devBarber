export const initialState = {
  user: [],
  avatar: '',
  favorits: [],
  appoinments: [],
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'setUser':
      return {...state, user: action.payload.user};
    break;
    case 'setAvatar':
      return {...state, avatar: action.payload.avatar};
    break;
    default:
      return state;
  }
};

console.log('testaaaaaando', initialState.user);