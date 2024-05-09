import {Routes, Route} from 'react-router-dom'
import { Home } from './Home/Home';
import { Login } from './register/Login';
import { SignUp } from './register/Sign';
import { Dashboard } from './dashboard/Dashboard';
import { Review } from './dashboard/Review';
import {Upload} from './dashboard/Upload';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/review/:id" element={<Review/>}/>
      </Routes>
    </div>
  );
}

export default App;
