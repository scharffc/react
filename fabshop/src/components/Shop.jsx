import { Container, Image, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Shop = () => {

    // 5 items of fakestoreapi as the state
    const [items, setItems] = useState([]);
  
    // run fetchItems when the component mount
    // useEffect lets you synchronize a component with an external system
    useEffect(() => { fetchItems() }, []);
  
    // use of async and fetch to fetch the items online
    const fetchItems = async () => {
      const data = await fetch('https://fakestoreapi.com/products?limit=5')
        .then(res => res.json())
      setItems(data);
      console.log("data", data)
    }
  
    return (
      <div>
        <h3>Shop</h3>
        < Container >
        {items.map(item =>
          <div key={item.id}>
            <div>
              <Link to={`/shop/${item.id}`} style={{fontFamily: 'initial'}}>
                {item.title}
              </Link>
            </div>
            <Col className="text-center">
            <Image src={item.image} className="imgStyleItem" style={{ width: '200px' }} roundedCircle></Image>
            </Col>
          </div>
        )}
      </Container >
      </div>
    )
  }

  export default Shop;

/*  await fetch('https://fakestoreapi.com/products?limit=5')
.then(res => res.json())
.then(json => console.log(json)); */