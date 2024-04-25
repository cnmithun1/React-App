import logo from "./logo.svg";
import "./App.css";
import Router from "./router/Router";
import Parent from "./context/Parent";
import First from "./passprops/First";
import Hooks from "./hooks/Hooks";
import Users from "./redux/Users";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";

function App() {
  return (
    <Provider store={Store}>
      {/* <Users /> */}
      <Router />
    </Provider>
  );
}

export default App;
