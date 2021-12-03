import { Switch, Route } from 'react-router-dom';
import Bisavo from './pre-aula/components/Bisavo';
import Dia17 from './pages/Dia17';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ Dia17 } />
      <Route path='/pre-aula' component={ Bisavo } />
    </Switch>
  );
}

export default App;
