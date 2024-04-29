import React from 'react';
import { useState, useEffect } from 'react';
import './SearchComponent.css';

function SearchComponent() {

  const url = `https://api.mercadolibre.com/sites/MLA/search?q=lenovo`
   
  interface Post {
    id: String,
    title: String,
    thumbnail: String,
    price: Number,
    currency_id: String,
    available_quantity: String,
  }

  const [ products, setProducts] = useState<Post[]>([])
 
  const getData = async () => {
    const data = await fetch(url);
    const response = data.json();
    console.log(response)
 
    return response
  }

  useEffect(() => {
    const data = async () => {
      const productsData = await getData();
      console.log("Datos del producto",productsData);
      setProducts(productsData.results)
    };

    data()
  }, [])
  

  return (
      <section>
        <article className='container-products'>
          {products.slice(0,9).map((item) => (
            <div className='card-product' key={item.id}>
                <img src={item.thumbnail} alt={item.id} />
                  <div className='line'></div>
                  <div className='info-product'>
                  <a className="an" href=""><h2 className='title-product'>{item.title}</h2></a>
                    <p className='price'>{Number(item.price).toLocaleString('es-AR', {
                      style: "currency",
                      currency: item.currency_id,
                    })}</p>
                    <p className='title-stock'>Stock disponible</p>
                    <p className='stock'>Cantidad: {item.available_quantity}</p>
                  </div>
            </div>          
          ))}
        </article>
      </section>
  )
}

export default SearchComponent
