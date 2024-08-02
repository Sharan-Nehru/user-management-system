import axios from 'axios';

export const editProfile = (name: string, email: string, bio: string) => {
  return async (dispatch) => {
    try {
      const response = await axios.put('/profile', { name, email, bio });
      dispatch({ type: 'EDIT_PROFILE_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'EDIT_PROFILE_ERROR', payload: error.message });
    }
  };
};