import React, { Component } from 'react';
import Loading from "../shared/loading";
import AppData_MOCKS from '../shared/mocks/appData.json';

const Context = React.createContext({
	products: [],
  loading: true,
});

class AppDataProvider extends Component {

    state = {
      products: [],
      loading: true,
    }

    get actions() {
        return {
          getProducts: this.getProduts,
          toggleProduct: this.toggleProduct,
        };
    }

    toggleProduct = (action, id) => {
      if(action == "add"){
        this.setState({
          addedToCart: [...this.state.addedToCart, id]
        })
      } else (
        this.setState({
          addedToCart: this.state.addedToCart.filter(idCard => idCard != id)
        })
      )
    }
    componentDidMount = () => {
      setTimeout(() => {
        this.setState({
          ...AppData_MOCKS,
          loading: false
        })
      }, 6000)
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


const AppDataConsumer = ComposedComponent => props => (
    <Context.Consumer>
        {({ store, actions }) => (
            <ComposedComponent store={store} actions={actions} {...props} />
        )}
    </Context.Consumer>
);


export {
    AppDataProvider,
    AppDataConsumer
}
