/* eslint-disable max-len */
/* eslint-disable import/no-cycle */

export const getAllDataAction = (data) => async (dispatch) => { 
  dispatch({ type: `GET_LISTS_SUCCESS`, updatePayload:  data});
};
