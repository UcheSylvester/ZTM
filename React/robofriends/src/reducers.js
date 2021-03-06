import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOT_PENDING,
    REQUEST_ROBOT_SUCCESS,
    REQUEST_ROBOT_FAILED
} from "./constant";

const intialStateSearch = {
    searchField: ''
};

// reducer for searching robots
export const searchRobots = (state = intialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}


const intialStateRobots = {
    isPending: true,
    robots: [],
    error: ''
}

// reducer for fetching robot
export const requestRobots = (state = intialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOT_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_ROBOT_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false })
        case REQUEST_ROBOT_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state;
    }
}
