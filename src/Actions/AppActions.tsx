import { EReduxActionTypes, IReduxAction} from './ReduxActions';

// import types defined in the app reducer if needed
// import { } from '../Reducers/AppReducer';

export interface IAppToggleTempPropertyAction extends IReduxAction {
    type: EReduxActionTypes.UPDATE_TEMP_PROPERTY;
    // data: boolean
}

export function toggleProperty(): IAppToggleTempPropertyAction {
    return {
        type: EReduxActionTypes.UPDATE_TEMP_PROPERTY
    };
}