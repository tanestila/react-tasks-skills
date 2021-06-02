import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import CategoryPage from "./views/CategoryPage";
import Main from "./views/Main";
import TodoPage from "./views/TodoPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/category">
            <CategoryPage />
          </Route>
          <Route path="/todo">
            <TodoPage />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
