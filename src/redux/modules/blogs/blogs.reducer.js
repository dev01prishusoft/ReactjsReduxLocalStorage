const homeReducer = (state, action) => {
  if (typeof state === 'undefined') {
    return [];
  }
  switch (action.type) {
    case 'GET_LISTS_SUCCESS':
    case 'GET_LISTS_ERROR':
      return {
        ...state,
        GetAllData: action.updatePayload,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        apiErrorHome: action.updatePayload,
      };
    default:
      return state;
  }
};

export default homeReducer;
