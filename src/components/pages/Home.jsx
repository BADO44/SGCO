import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className=' fixed top-0 left-0 w-64 h-full bg-gray-800 '>
      <div className=' mt-5 pb-4 border-b-2 border-b-gray-500 m-4 '>
         <Link className=' flex justify-center items-center text-lg text-white text-center font-bold '  to="/accueil">
            SGCO
        </Link>
      </div>
     
     <ul className='mt-4 text-gray-200'>
      <li className='mb-2'> 
        <Link className=' flex items-center py-2 px-4 hover:bg-gray-200 hover:text-gray-950 rounded-r-lg '>
          Tableau de bord
        </Link>
      </li>
      <li>  
        <Link className=' flex items-center py-2 px-4 hover:bg-gray-200 hover:text-gray-950 rounded-r-lg'>
          Enseignats chercheurs
        </Link></li>
      <li>
          <Link className=' flex items-center py-2 px-4 hover:bg-gray-200 hover:text-gray-950 rounded-r-lg'>
          Decisionnaires
        </Link></li>
      <li>
        <Link className=' flex items-center py-2 px-4 hover:bg-gray-200 hover:text-gray-950 rounded-r-lg'>
          Demandes
        </Link>
      </li>
      <li>
        <Link className=' flex items-center py-2 px-4 hover:bg-gray-200 hover:text-gray-950 rounded-r-lg'>
          Profil
        </Link>
        </li>
     </ul>

    </div>

  )
}
