import React, { useEffect, useState } from 'react'
import {Container, Row} from 'react-bootstrap';

const Product = ({title}) => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:4001/api/category")
        .then((res)=> res.json())
        .then((data)=>setItems(data))
        .catch((error)=> console.log(error));
    
    },[]);


  return (
    <Container className='Row'>
    <Row>
        <table>
        <tr>
            <th>Title</th>
            <th>Description</th>
            <th>img</th>
        </tr>
        {items.map((item)=>(
            <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td><img alt="" src={item.thumbnail} height="100"></img></td>
                </tr>
        ))}
    </table>
    </Row>

    </Container> 
  )
}

export default Product;
