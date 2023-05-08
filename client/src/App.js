import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Welcome from "./components/welcome";
import Login from "./components/login";
import Register from "./components/register";
import Homepage from "./components/Homepage/Homepage";

function App() {
  const [currentForm, setCurrentForm] = useState("welcome");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Welcome onFormSwitch={toggleForm} />} />
          {currentForm === 'login' &&
            <Route path="login" element={<Login navigate={Navigate} onFormSwitch={toggleForm} />} />
          }
          {currentForm === 'register' &&
            <Route path="register" element={<Register navigate={Navigate} onFormSwitch={toggleForm} />} />
          }
          
        </Routes>
      </Router>  */}
      <Homepage />
    </div>
  );
}

export default App;
