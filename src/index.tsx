import { createBrowserHistory } from "history";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StoreState } from './store/index';
import { Route, Router, Switch } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import indexRoutes from "./routes/index";
import { tournament } from './reducers/index';
import { TournamentAction } from './actions/index';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {env} from './constants/index';

const client = new ApolloClient({
  uri: env.graphqlUrl
});

const hist = createBrowserHistory();

const store = createStore<StoreState, TournamentAction, {}, {}>(tournament,
  {
    tournamentList: [
      {
        id: 1,
        participantNum: 10,
        isEntry: false,
      },
      {
        id: 2,
        participantNum: 20,
        isEntry: false,
      },
      {
        id: 3,
        participantNum: 30,
        isEntry: false,
      }
    ], entry: {
      teamName: "teamName1",
      leaderName: "leaderName1",
      email: "email1",
      phoneNo: "phone1"
    }
  }, composeWithDevTools(
    applyMiddleware(),
  ));

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop: any, key) => {
            return <Route path={prop.path} component={prop.component} key={key} />;
          })}
        </Switch>
      </Router>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
