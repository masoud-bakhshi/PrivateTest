import "./App.css";
import Home from "./pages";
import My404Component from "./pages/my404Component";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    //basename="/5002/"
    <BrowserRouter basename="/6092b28a8fda4729541cf5a5/">
      <Switch>
        <Route path="/" component={Home} exact />

        {/* <Route path="/404" component={My404Component} /> */}
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
