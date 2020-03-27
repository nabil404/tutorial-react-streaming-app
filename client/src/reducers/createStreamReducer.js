const INITIAL_FORM_STATE = {
  title: null,
  description: null
};

export default (state = INITIAL_FORM_STATE, action) => {
  switch (action.type) {
    case "CREATE_STREAM":
      return {
        ...state,
        title: action.payload.title,
        description: action.payload.description
      };
    default:
      return state;
  }
};
