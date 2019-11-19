const INITIAL_STATE = {
  ip: null,
  password: null,
  state: false, // estado da lampada
  loadingTest: false, // loading para rota de teste
  loadingState: false, // loading para rota de pegar estado da tranca
};

export default function config(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@config/SET_PASSWORD': {
      const newState = {
        ...state,
        password: action.password,
      };
      return newState;
    }

    case '@config/TEST_REQUEST': {
      const newState = {
        ...state,
        loadingTest: true,
      };
      return newState;
    }

    case '@config/TEST_SUCCESS': {
      const newState = {
        ...state,
        loadingTest: false,
      };
      return newState;
    }

    case '@config/STATE_REQUEST': {
      const newState = {
        ...state,
        loadingState: true,
      };
      return newState;
    }

    case '@config/STATE_SUCCESS': {
      const newState = {
        ...state,
        loadingState: false,
      };
      return newState;
    }

    case '@config/FAILED': {
      const newState = {
        ...state,
        loadingState: false,
        loadingAction: false,
        loadingTest: false,
      };
      return newState;
    }

    default:
      return state;
  }
}
