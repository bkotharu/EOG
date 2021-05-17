import * as actions from "../actions";

const initialState: string[] = []

const setSelection = (state = initialState, action: any) => {
    //action payload recieved as array from dispatch in component
    const { metric } = action;
    return metric;
};

const handlers: any = {
    [actions.SET_SELECTED_METRIC]: setSelection
};

export default (state = initialState, action: any) => {
    const handler = handlers[action.type];
    if (typeof handler === "undefined") return state;
    return handler(state, action);
};
