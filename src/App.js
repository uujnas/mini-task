import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Task from './component/Task'
import Navbar from './component/Navbar'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route  path="/task">
            <Task />
          </Route>
          {/* <Route path="/create">
            <Create />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
