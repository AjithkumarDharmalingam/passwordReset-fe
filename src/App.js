import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Forgotpassword from './components/Forgotpassword';
import Passwordreset from './components/Passwordreset';
import Dashboard from './components/Dashboard';


export const url = 'https://passwordreset-wqsq.onrender.com'

function App() {
  return<>
   <BrowserRouter>
    <Routes>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='passwordreset' element={<Passwordreset/>}/>
      <Route exact path='/forgotpassword/:id/:token' element={<Forgotpassword/>}/>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
   </BrowserRouter>
  </>
}

export default App;
