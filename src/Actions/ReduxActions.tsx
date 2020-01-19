export enum EReduxActionTypes {
    UPDATE_TEMP_PROPERTY = 'UPDATE_TEMP_PROPERTY'
}

export interface IReduxAction {
    type: EReduxActionTypes;
}