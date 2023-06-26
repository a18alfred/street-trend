import axios, {AxiosError} from 'axios';
import { Dispatch } from 'redux';
import { postNewsletterSignup } from '../../rest-client/rest/signup';
import { UserSignupInfo } from '../../types';
import { UserAction, UserActionTypes } from '../../types/userReduxTypes';

/**
 *@Action creator, will dispatch action to get user location, also will dispatch error action if async operation fails
 *@function getUserLocation
 *@returns {function} - Redux thunk function
 */
export const getUserLocation = () => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    dispatch({ type: UserActionTypes.GET_USER_LOCATION });
    try {
      const { data } = await axios.get(`https://extreme-ip-lookup.com/json/`);

      dispatch({
        type: UserActionTypes.LOCATION_DID_LOAD,
        payload: {
          continent: data.continent,
          country: data.country,
          countryCode: data.countryCode,
          city: data.city,
          region: data.region,
        },
      });
    } catch (error) {
      const axiosError = error as AxiosError<{error: any}>;
      dispatch({
        type: UserActionTypes.LOCATION_LOAD_ERROR,
        payload: axiosError?.response?.data.error,
      });
    }
  };
};

/**
 *@Action creator, will dispatch action to save new customer signup info in DB, also will dispatch error action if async operation fails
 *@function uploadUserSignupInfo
 *@param {object} signupInfo - signup info to be saved in DB
 *@returns {function} - Redux thunk function
 */
export const uploadUserSignupInfo = (signupInfo: UserSignupInfo) => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    dispatch({ type: UserActionTypes.UPLOAD_SIGNUP_INFO });
    try {
      const { data } = await postNewsletterSignup(signupInfo);
      dispatch({
        type: UserActionTypes.SIGNUP_INFO_WAS_UPLOADED,
        payload: data.success,
      });
    } catch (error) {
      const axiosError = error as AxiosError<{error: any}>;
      dispatch({
        type: UserActionTypes.SIGNUP_UPLOAD_ERROR,
        payload: axiosError?.response?.data.error,
      });
    }
  };
};
