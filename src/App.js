import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Home from "./components/Home";
import Panel from "./components/manage-post/Panel";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostContent from "./components/PostContent";


function App() {
  return (
    <Router>
      <div className="App">

        <Header />

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={ Home } />
        <Route path="/panel" component= { Panel } />
        <Route path="/post/:id" component={ PostContent } />

        <Footer />

      </div>
    </Router>
  );
}

export default App;
