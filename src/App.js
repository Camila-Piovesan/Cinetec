import logo from '../src/elementos/logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import PaginaMenu from './pages/PaginaMenu/Index';
import PaginaLogin from './pages/PaginaLogin/Index';
import PaginaCadastro from './pages/PaginaCadastro/Index';
import Header from './components/Header/Index';
import Footer from './components/Footer/Index';

function App() {
  return (
  <>
  <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<PaginaMenu />} />
        <Route path='/paginalogin' element={<PaginaLogin />} />
        <Route path='paginacadastro' element={<PaginaCadastro />} />
      </Routes>
      <Footer />
    </BrowserRouter><ToastContainer />
    </>

)}

export default App;
