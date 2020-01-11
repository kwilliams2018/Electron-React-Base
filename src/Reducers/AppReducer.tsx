import { IAppToggleTempPropertyAction } from '../Actions/AppActions';
import { EReduxActionTypes } from '../Actions/ReduxActions';

export interface IReduxAppState {
    tempProperty: boolean
}

const initialState: IReduxAppState = {
    tempProperty: true
}

type TAppReducerActions = IAppToggleTempPropertyAction;

export default function(
    state: IReduxAppState = initialState, 
    action: TAppReducerActions) {

        switch(action.type) {
            case EReduxActionTypes.GET_TEMP_PROPERTY: 
                return {
                    ...state, 
                    tempProperty: !state.tempProperty
                }

            default: 
                return state;
        }
}