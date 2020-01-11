export enum EReduxActionTypes {
    GET_TEMP_PROPERTY = 'GET_TEMP_PROPERTY'
}

export interface IReduxAction {
    type: EReduxActionTypes;
}