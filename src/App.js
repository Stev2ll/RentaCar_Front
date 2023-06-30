import Navbar from './componentes/navbar/Navbar';
import Home from './componentes/home/Home';
import { Route, Routes } from 'react-router-dom';
import Registro from '../src/componentes/registrar/Registro';
import Login from '../src/componentes/login/Login'; 
import Vehiculos from '../src/componentes/products/Productos';
import Vehiculo from '../src/componentes/product/Product';
import { RecuperarCount } from './componentes/login/RecuperarCount';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
|       <Route path='/' element={<Home/>} />
        <Route path='/registro' element = {<Registro/>}/>
        <Route path='/vehiculos' element= {<Vehiculos/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/vehiculos/:id_auto' element={<Vehiculo/>}/>
        <Route path='/recuperar' element={<RecuperarCount/>}/>
      </Routes>
    </>
  );
}

export default App;
