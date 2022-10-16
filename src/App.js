import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import SignUpForm from './SignUpForm'
import Login from './Login'
import Subscriptions from './Subscriptions'
import Providers from './Providers'
import Reminders from './Reminders'
function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUpForm />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/subscriptions" element={<Subscriptions />} />
          <Route exact path="/providers" element={<Providers />} />
          <Route exact path="/reminders" element={<Reminders />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App

