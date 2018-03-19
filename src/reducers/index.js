import { combineReducers } from 'redux';
import auth from './auth';
import error from './error';
import { reducer as reduxFormReducer} from 'redux-form';

const reducers = combineReducers({
    auth,
    error,
    form: reduxFormReducer
});

export default reducers;