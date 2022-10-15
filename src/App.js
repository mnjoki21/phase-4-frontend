import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import SignUpForm from './SignUpForm'

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUpForm />} />
          {/* <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<Home />} /> */}
        </Routes>
      </Router>

      {/* <NavBar /> */}
      {/* <Home /> */}
      {/* <SignUpForm /> */}
    </div>
  );
}

export default App

