import React, { useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error/Error';
import './App.css';
import Cart from './components/Cart/Cart';
import ThemeProvider from './context/ThemeContext';
import CartProvider from './context/CartContext';
// import { getfirestore,doc,getDoc, getFirestore } from 'firebase/firestore';
// import { getFirestore,collection,getDocs } from 'firebase/firestore';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const App = () => {

  // const [ticket,setTicket] = useState(null)

  // useEffect(()=>{
  //   const db = getFirestore()

  //   const entradaRef = doc(db,"item","CtE2WPODWqcphN3GtwBj")

  //   getDoc(entradaRef).then((snapshot) => {
  //     if(snapshot.exists){
  //       setTicket({id: snapshot.id,...snapshot.data()})
  //     }
  //   })
  // },[])

  // const [ticket,setTickets] = useState([])
  // useEffect(()=>{
  //   const db = getFirestore()

  //   const itemsCollection = collection(db,"item")

  //   getDocs(itemsCollection).then((snapshot) => {
  //     setTickets(snapshot.docs.map((doc)=> (
  //       {id:doc.id,...doc.data()}
  //     )))
  // }
  // )

  // },[])

  const [ticket, setTickets] = useState([])
  useEffect(() => {
    const db = getFirestore()

    const q = query(
      collection(db,"item"),
      where("precio",">",190000)
    )

    getDocs(q).then((snapshot.size ===  0),
        {id: doc.id,...doc.data}
    )


  }, [])


  return (
    <div>
      <BrowserRouter>

        <CartProvider>

          <Navbar />

          <Routes>

            <Route path='/' element={<ItemListContainer />} />

            <Route path='/categoria/:categoryId' element={<ItemListContainer />} />

            <Route path='/detalle/:id' element={<ItemDetailContainer />} />

            <Route path='/cart' element={<Cart />} />

            <Route path='*' element={<Error />} />

          </Routes>

          <Footer />

        </CartProvider>

      </BrowserRouter>




    </div>
  )
}

export default App
