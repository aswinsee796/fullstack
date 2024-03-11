import "./pages/auth/login"
import { Routes,Route } from 'react-router-dom'
import './assets/css/login.css';
 import './assets/css/footer.css';
 import './assets/css/homepage.css';
 import Userlayout from './pages/user/userlayout'
import { lazy } from 'react'
import LazyLayout from './components/LazyLayout'
import Adminlayout from './pages/admin/adminlayout';
const LazyLogin = lazy(()=> import("./pages/auth/login"))
const LazySignup = lazy(()=> import("./pages/auth/signup"))
const LazyHome = lazy(() => import("./pages/user/home"));
const LazyProfile = lazy(()=> import("./pages/user/profile"));
const LazyCourse = lazy(()=> import("./pages/user/courses"));
const LazyAbout = lazy(()=> import("./pages/user/about"));
const LazyContact = lazy(()=>import("./pages/user/contact"));
const LazyDash = lazy(()=> import("./pages/admin/dashboard"));
const LazyCrud = lazy(()=> import("./pages/admin/crud"));
const LazyDescription = lazy(()=> import("./pages/user/description"));
const LazyForm = lazy(()=>import("./pages/user/form"));



const UserRoutes = () => {
  return(
    <Userlayout>
      <Routes>
        <Route path="/homepage" element={<LazyLayout component={LazyHome}/>}/>
         <Route path="/profile" element={<LazyLayout component={LazyProfile}/>}/> 
         <Route path ="/course" element={<LazyLayout component={LazyCourse}/>}/>
         <Route path ="/about" element={<LazyLayout component={LazyAbout}/>}/>
         <Route path ="/contact" element={<LazyLayout component={LazyContact}/>}/>
         <Route path ="/description"element={<LazyDescription component={LazyDescription}/>}/>
         <Route path ="/form"element={<LazyForm component={LazyForm}/>}/>
      </Routes>
    </Userlayout>
  )
}
const AdminRoutes =()=>{
  return (
    <Adminlayout>
      <Routes>
        <Route path="/dashboard" element={<LazyLayout component={LazyDash}/>}/>
        <Route path ="/crud" element={<LazyLayout component={LazyCrud}/>}/>
      </Routes>
    </Adminlayout>
  )
  
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
 
 <Routes>
        <Route path="/" element={<LazyLayout component={LazyLogin}/>}/>
        <Route path="/signup" element={<LazyLayout component={LazySignup}/>}/>
        <Route path="/user/*" element={<UserRoutes/>}/>
        <Route path ="/admin/*" element={<AdminRoutes/>}/>
      </Routes>
       
    </>
  )
}

export default App
