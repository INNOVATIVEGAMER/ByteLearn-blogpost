import "./App.css";
import Dashboard from "./Features/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogForm from "./Features/Blogs/BlogForm";
import Blog from "./Features/Blogs/Blog";
import AppContext from "./AppContext";
import blogsData from "./Data/Blogs.json";
import { useState } from "react";

function App() {
  const [blogs, setblogs] = useState(blogsData);
  const contextValue = {
    data: {
      blogs,
    },
    setblogs,
  };
  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/new" exact>
              <BlogForm />
            </Route>
            <Route path="/:id" exact>
              <Blog />
            </Route>
            <Route path="/:id/edit" exact>
              <BlogForm />
            </Route>
          </Switch>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
