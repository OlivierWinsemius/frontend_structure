import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const Logger = createLogger({
    collapsed: true
})

export default (
    thunk,
    Logger
)