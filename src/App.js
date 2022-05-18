import { useState } from "react"; /*es un hook,funcinoes internas de react q permite usar caractirista de react*/
import Product from "./components/Product";

function App() {
  

    const [products, setProducts] = useState([
      {
        "id":1,  
        "name":"Razer Cynosa V2",
          "desc": "Teclado para juegos gamer ._.",
          "price": 240,
          "stock":12
      },
      {
        "id":2,
          "name":"Mouse Logi G605",
          "desc": "mouse con luces para verte gamer pero es solo finta xd",
          "price": 290,
          "stock":16
      },
      {
        "id":3,
          "name":"Micrófono HyperX",
          "desc": "microfono gamer ",
          "price": 320,
          "stock":52
      }
  ]);

  /*El componente se vuelve a renderizar cuando un estado o un prop ha cambiado*/

  return (
    <div> 
      {/*los name se llaman propiedads (props) y en html son atributos*/}
      {/*Los props se pasan de padres a hijos*/}
      {products.map(product=> 
      <Product name={product.name}
       desc={product.desc} 
       price={product.price} 
       stock={product.stock}/>
)}
    </div>
  );
}

export default App;
