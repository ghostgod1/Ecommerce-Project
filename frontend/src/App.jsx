import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'
import { Toaster } from "sonner"
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
   <BrowserRouter>

      {/* Toaster is used for notification */}
      <Toaster position="top-right" />

      <Routes>

        {/* User Layout */}
        <Route path="/" element={<UserLayout />}>

          {/* Home  */}
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          
        </Route>

        <Route>
          {/* Admin Layout */}
        </Route>

      </Routes>
      
   </BrowserRouter>
  )
}

export default App