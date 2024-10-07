import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom"

import Home from './components/pages/Home';


const router = createBrowserRouter([{
  path:'/',
  element: <Home/>
},

{
  path:'/accueil',
  element: <Home/>
},
{
  path:'/enseignats',
  element: <div>Ensignants</div>
},
{
  path:'/new-enseigant',
  element: <div>Ajouter ensegnants</div>
},
{
  path:'/decisionnaires',
  element: <div>decisionnaires page</div>
},

{
  path:'/new-decisionnaire',
  element: <div>decisionnaires ajouter</div>
},

{
  path:'/demandes',
  element: <div>demandes page</div>
},

{
  path:'/new-demande',
  element: <div>ajouter demande page</div>
},

{
  path:'/profil',
  element: <div>profil page</div>
}

])

function App() {
  return (
     <RouterProvider router={router}/>
  );
}

export default App;
