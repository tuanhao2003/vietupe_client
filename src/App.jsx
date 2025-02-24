import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Main from './components/main';
import Layout from './layouts/MainLayout';
import Profile from "./pages/Profile";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
