import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Eduexp from "./components/Eduexp";
import Project from "./components/Project";
import Links from "./components/Links";
import Skills from "./components/Skills";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Home key="/" />}
        errorElement={<Error />}
      />
      <Route
        exact
        path="/about"
        element={<About key="/about" />}
        errorElement={<Error />}
      />
      <Route
        exact
        path="/eduexp"
        element={<Eduexp key="/eduexp" />}
        errorElement={<Error />}
      />
      <Route
        exact
        path="/skills"
        element={<Skills key="/skills" />}
        errorElement={<Error />}
      />
      <Route
        exact
        path="/project"
        element={<Project key="/project" />}
        errorElement={<Error />}
      />
      <Route
        exact
        path="/links"
        element={<Links key="/links" />}
        errorElement={<Error />}
      />
      <Route
        exact
        path="/contact"
        element={<Contact key="/contact" />}
        errorElement={<Error />}
      />
    </Routes>
  );
}

export default App;
