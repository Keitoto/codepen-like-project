import produce from 'immer';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface BundlesState {
  [key: string]:
    | {
        loading: boolean;
        code: string;
        err: string;
      }
    | undefined;
}

const initialState: BundlesState = {};
const reducer = produce(
  (state: BundlesState = initialState, action: Action): BundlesState => {
    const { type, payload } = action;
    switch (type) {
      case ActionType.BUNDLE_START:
        state[payload.cellId] = {
          loading: true,
          code: '',
          err: '',
        };
        return state;
      case ActionType.BUNDLE_COMPLETE:
        state[payload.cellId] = {
          loading: false,
          code: payload.bundle.code,
          err: payload.bundle.err,
        };
        return state;
      default:
        return state;
    }
  },
  initialState
);

export default reducer;
