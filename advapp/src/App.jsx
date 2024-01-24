import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/user/Login'
import {Signup} from './pages/user/Signup'
import { Landing } from './pages/user/Landing'
import { AdminLogin } from './components/admin/AdminLogin'
function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/landing' element={<Landing></Landing>}></Route>
      <Route path='/admin' element={<AdminLogin></AdminLogin>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
