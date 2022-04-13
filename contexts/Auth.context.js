import React, { Component } from 'react';
import Loading from "../shared/loading";
import Auth_MOCKS from '../shared/mocks/auth.json';

const Context = React.createContext({
	currentUser: [],
  loading: true,
});

class AuthProvider extends Component {

    state = {
      currentUser: [],
      loading: true,
    }

    get actions() {
        return {
            getUser: this.getUser,
        };
    }

    componentDidMount = () => {
      this.setState({
        currentUser: Auth_MOCKS,
        loading: false
      })
    }

    render() {
        const { children } = this.props;
        const { loading } = this.state;

        if(!loading) {
            return (
                <Context.Provider
                    value={{
                        store: this.state,
                        actions: this.actions
                    }}
                >
                    {children}
                </Context.Provider>
            );
        } else {
            return <Loading/>
        } 
    }
}


const AuthConsumer = ComposedComponent => props => (
    <Context.Consumer>
        {({ store, actions }) => (
            <ComposedComponent store={store} actions={actions} {...props} />
        )}
    </Context.Consumer>
);


export {
    AuthProvider,
    AuthConsumer
}
