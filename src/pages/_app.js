import '../../styles/globals.css';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '../redux';

import Layout from '../client/layouts/Main';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default function Website({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </Provider>
  )
}