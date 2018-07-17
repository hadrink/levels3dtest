import { createStore as createReduxStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import { composeWithDevTools } from 'remote-redux-devtools';

/**
 * Return a redux store object.
 * @param {*} initialState 
 */
const createStore = (initialState = {}, apiClient: APIClient) => {

    // Middlewares configuration.
    const middleware = [thunk.withExtraArgument(apiClient)]

    let composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 })

    const store = createReduxStore(
        reducer,
        composeEnhancers(
            applyMiddleware(...middleware),
        )
    )

    return store
}

export default createStore