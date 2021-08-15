import { Container } from "@material-ui/core";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import CategoryPage from "./views/CategoryPage";
import Main from "./views/Main";
import TodoPage from "./views/TodoPage";
import { RecoilRoot } from "recoil";
import Menu from "./components/Menu";
function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Container maxWidth="xl" className="App">
          <Menu />
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
        </Container>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
