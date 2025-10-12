import './../App.css';
import { Container, Image } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

const Item = () => {

    // 1 item of fakestoreapi as the state, the once that was clicked
    const [item, setItem] = useState({});
  
    // run fetchItem when the component is mounted
    // useEffect lets you synchronize a component with an external system
    useEffect(() => { fetchItem() }, []);
  

    const { id } = useParams();

    const fetchItem = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
      console.log(data)
      setItem(data);
    }
  
    return (
      < Container >
        <h3>Item Details</h3>
        <h2>{item.title}</h2>
        <Image src={item.image} className="imgStyleItem" style={{ width: '200px' }} roundedCircle></Image>
        <br></br>
        {item.description}
        <br></br>
        <br></br>
        {item.price}
      </Container >
    )
  }

  export default Item;