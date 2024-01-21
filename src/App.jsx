
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Route/Route'
// import Home from './Componets/Home/Home'

function App() {


  return (
    <div>
      
      <RouterProvider  router={router}></RouterProvider>
      {/* <Home></Home> */}
    </div>
  )
}

export default App
