import Table from "./components/Table";
import Content from "./components/Content";
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
        </div>
          <Switch>
            <Route path="/" exact component={Table} />
            <Route path="/content/:id"  component={Content} />
          </Switch>
      </Router>
  );
}

export default App;
