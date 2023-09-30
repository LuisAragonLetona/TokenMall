import { Navigate } from 'react-router-dom';
import Principal from '../pages/Principal';
import Sesion from '../pages/Sesion';
import Mercado from '../pages/Mercado';
import General from '../pages/General';
import Mensajes from '../pages/Mensajes';
import Perfil from '../pages/Perfil';
import Tercon from '../pages/Tercon';
import Billetera from '../pages/Billetera';
import Error404 from '../pages/404';
import Soporte from '../pages/Soporte';
import RegistroTokens from '../pages/RegistroTokens';
import Formulario from '../pages/Formulario';

const Rutas = () => {
  const routes = [
    {
      path: 'app',
      children: [
        { path: 'ajustes', element: <>Ajustes</> },
        { path: '*', element: <Navigate to="/404" /> },
        { path: '', element: <>App</> }
      ]
    },
    {
      path: '/',
      children: [
        { path: 'sesion', element: <Sesion/> },
        { path: 'mercado', element: <Mercado/> },
        { path: 'perfil', element: <Perfil/> },
        { path: 'mensajes', element: <Mensajes/> },
        { path: 'contratos', element: <>Contratos</> },
        { path: 'RegToks', element: <RegistroTokens/> },
        { path: 'billetera', element: <Billetera/> },
        { path: 'soporte', element: <Soporte/> },
        { path: 'tercon', element: <Tercon/> },
        { path: 'general', element: <General/> },
        { path: '404', element: <Error404/> },
        { path: 'formulario', element: <Formulario/> },
        {
          path: '',
          element: <Principal />,
        },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
  ];
  return routes;
};

export default Rutas;
