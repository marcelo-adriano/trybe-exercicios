import { Switch, Route } from 'react-router-dom';
import Dia2 from './Pages/Dia2';
import Index from './Pages/pre-aula/Index';
import ToDoList from './Pages/pre-aula/ToDoList';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Dia2} />
      <Route exact path="/pre-aula" component={Index} />
      <Route path="/pre-aula/todolist" component={ToDoList} />
    </Switch>
  );
}

export default App;
