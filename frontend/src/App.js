import {Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Home} from './landing/Home';
import { Login} from './register/Login';
import { SignUp} from './register/Sign';
import {Dashboard} from './landing/Dashboard';
import {Upload} from './landing/Upload';
import {Review} from './landing/Review';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/review" element={<Review/>}/>
      </Routes>
    </div>
  );
}

export default App;
