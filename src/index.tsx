import { createBrowserHistory } from "history";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Router, Switch } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import indexRoutes from "./routes/index";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop: any, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
