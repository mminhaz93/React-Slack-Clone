import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            {!currentUser ? (
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
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
