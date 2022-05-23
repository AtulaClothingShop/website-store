import { combineReducers } from 'redux';

import ThemeOptions from './ThemeOptions';

const appReducer = combineReducers({
    ThemeOptions,
})

const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = undefined;
    }

    return appReducer(state, action);
}

export default rootReducer;