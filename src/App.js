// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './Sass/App.scss';
import ToDoList from './components/ToDoList/ToDoList';
import UsersList from './components/UsersList/UsersList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
          <Switch>
            <Route exact path="/users-list">
              <UsersList />
            </Route>
            <Route path="/to-do-list"> 
              < ToDoList/>
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
