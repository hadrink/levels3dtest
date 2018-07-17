import CreateStore from './src/store'
import * as React from 'react'
import { Provider } from 'react-redux'
import APIClient from './src/api/APIClient';
import Main from './src/Main'

export default class App extends React.Component {

    apiClient = new APIClient()

    state = {
        store: CreateStore({}, this.apiClient)
    }

    render() {
        return (
            <Provider store={this.state.store} >
                <Main />
            </Provider>
        )
    }
}
