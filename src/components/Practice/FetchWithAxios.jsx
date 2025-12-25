import { useEffect, useState } from "react";
import axios from "axios";

function FetchWithAxios(params) {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState([]);

  const fetchProducts = async () =>{
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setPost(response.data);
      console.log('Products fetched:', response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  }
  useEffect(()=>{
    fetchProducts();
    },[]);

  return (
    <>
      <h2>Fetch With Axios</h2>
      {
        post.map((item)=>{
          return(
            <div key={item.id} style={{border: '1px solid gray', margin: '10px', padding: '10px'}}>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <img src={item.image} alt={item.title} style={{height: '100px'}}/>
            </div>
          )
        })
      }
    </>
  )
  
}
export default FetchWithAxios;

// https://fakestoreapi.com/products