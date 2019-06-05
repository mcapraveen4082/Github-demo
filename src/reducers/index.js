import {GIT_USER, GIT_REPO} from "../constants/index";

const initialState = {
    user_bio: {},
    user_repo:[]
};
function rootReducer(state = initialState, action) {
    if (action.type === GIT_USER) {
        return Object.assign({}, state, {
            user_bio: action.payload
        })
    }
    if (action.type === GIT_REPO) {
        return Object.assign({}, state, {
            user_repo: action.payload
        })
    }
    return state;
};
export default rootReducer;