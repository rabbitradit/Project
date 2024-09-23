import Login from './pages/Login';
import Profile from './pages/Profile';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
