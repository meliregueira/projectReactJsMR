import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'

const App = () => {

  return (
    <div className='ecomm'>
      <BrowserRouter>

      <Routes>

         </Route>

      </Routes>

        <Navbar/>
        <ItemListContainer greeting = {"Comprá tus entradas acá"}/>
        <Footer/>

    </BrowserRouter>

        {/* <ItemDetailContainer id={"MKT"}/> */}


    </div>
  )
}

export default App
