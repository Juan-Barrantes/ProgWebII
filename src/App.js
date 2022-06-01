import { useState, useEffect } from "react"; /*es un hook,funcinoes internas de react q permite usar caractirista de react*/
import Product from "./components/Product";
// import { v4 as uuidv4 } from 'uuid';
// import Header from "./components/shared/layout/Header";
// import Footer from "./components/shared/layout/Footer";
// import Main from "./components/shared/layout/Main";
import ProductContainer from "./components/ProductContainer";
import Layout from "./components/shared/layout/Layout";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {  
  const [loadingProducts, setLoadingProducts] = useState(false);  /*No existe hoisting en react asi q pusimos arriba estos const*/
  //en el useState variable, función que obliga a hacer cambio - Destructuring
  const [products, setProducts] = useState([]); //el parámetro de entrada es el valor inicial de ese estado



  //Nos permite trabajar con 3 fases del ciclo de vida (inicialización, actualización, destrucción)  
  //Todos los useEffects invocan su función en la fase de inicialización
  useEffect(() =>{
    //Trabaja en la fase de inicialización del componente
    console.log("Componente Inicializado");
    fetchProducts();
  }, []); //inicializar algo sin depencias usamos array vacío


  useEffect(()=>{
    console.log("Actualización de productos");
  },[products]);//arreglo de dependencias | ejecuta la función cada q 'products' se actualiza (elementos dentro del array ese -.-)

    
  const fetchProducts = async () =>{
    setLoadingProducts(true);
    console.log('fetch products');
    const Products_url = 'http://localhost:4000/products';
    const productsData = await fetch(Products_url);
    const productsJSON = await productsData.json(); //cuando se actualiza un estado RAECT vuelve a renderizar un componente
    setProducts (productsJSON);
    console.log(productsJSON);
    setLoadingProducts(false);
  }


  /*El componente se vuelve a renderizar cuando un estado o un prop ha cambiado*/

  return (
    
    <div> 
      {console.log("Renderizando App")}
      {/*los name se llaman propiedads (props) y en html son atributos*/}
      {/*Los props se pasan de padres a hijos*/}

      {/* products.map(product =>
      <Product key={uuidv4()} name={product.name} desc={product.desc} price={product.price}
      stock = {product.stock} />) */}


      <BrowserRouter>
        <Layout> 
          <Routes>
            {/* <ProductDetail product={products[0]}/> */}
              {/* <ProductContainer products={products} loading = {loadingProducts}/>   */}          
            <Route exact path="/home" element={            
              <ProductContainer products={products} loading = {loadingProducts}/>
            } />                        
            <Route path="/product/:productId" element={<ProductDetail />} />          
            <Route path="*" element={<NotFound />} />          
          </Routes>    
        </Layout>
      </BrowserRouter>    
    </div>
    //el return se ejecutará en el momento del montaje y se llamará cada vez que se actualice el componente
    // un componente se actualiza cada que cambia algún estado o tambien cambia el valor de alguna 'prop'
  );
}

export default App;
