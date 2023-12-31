import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { LocalRootState } from '../state/reducers';

/**
 * A hook to access the redux state's state. This hook takes a selector function as an argument. The selector is called with the state state.
 * uses Root Reducer State interface to create a version of useSelector hook that is properly typed for your root state.
 *@function useTypedSelector
 *@returns {function} typed useSelectorHook
 */
export const useTypedSelector: TypedUseSelectorHook<LocalRootState> =
  useSelector;
