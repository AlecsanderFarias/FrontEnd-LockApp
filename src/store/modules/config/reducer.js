const INITIAL_STATE = {
  ip: '',
  password: '',
};

export default function config(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@config/SET_PASSWORD': {
      const newState = {
        ...state,
        password: action.payload.password,
      };
      return newState;
    }

    case '@config/SET_IP': {
      const newState = {
        ...state,
        ip: action.payload.ip,
      };
      return newState;
    }

    default:
      return state;
  }
}
