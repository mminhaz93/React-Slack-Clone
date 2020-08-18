import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuthStateValue } from "./context/AuthContext";

function App() {

  const [{user}, dispatch] = useAuthStateValue();

  return (
    <div className="App">
      <Router>
        {user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="appBody">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
