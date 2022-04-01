import { ActionTypes } from "../constants/actionTypes";

export const setOutpass = (outpass) => {
    return {
        type: ActionTypes.SET_OUTPASS,
        payload: outpass
    }
}

export const getOutpass = (outpasses) => {
    return {
        type: ActionTypes.GET_OUTPASS,
        payload: outpasses
    }
}