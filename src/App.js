import Counter from "./components/Counter";
import "./app.css";
import Home from "./components/Home";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./components/NotFound";
import {
  BrowserRouter as Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

function App() {
  return (
    <section className="App">
      <h1 className="my-title">Counter App</h1>
      <NavLink>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter App</Link>
          </li>
          <li>
            <Link to="/error">Error Boundary</Link>
          </li>
          <li>
            <Link to="/not-found">Not Found Page</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route
            path="/error"
            element={<ErrorBoundary>{<NotFound />}</ErrorBoundary>}
          />
          <Route path="/not-found" element={<ErrorBoundary />} />
        </Routes>
      </NavLink>
    </section>
  );
}

export default App;
