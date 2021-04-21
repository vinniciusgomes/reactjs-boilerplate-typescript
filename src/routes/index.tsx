import { Route, Switch } from 'react-router-dom';

import { Home } from 'pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);

export default Routes;
