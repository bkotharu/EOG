import * as actions from "../actions";

const initialState = false

const getLiveStream = (state = initialState, action: any) => {
    const { bool } = action;
    return bool
};

const handlers: any= {
    [actions.GET_LIVE_STREAM]: getLiveStream
};

export default (state = initialState, action: any) => {
    const handler = handlers[action.type];
    if (typeof handler === "undefined") return state;
    return handler(state, action);
};
