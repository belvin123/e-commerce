import { useState,useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from "axios";
let AppFunction = ()=>{
  let [products,setProducts]= useState([])
  useEffect(()=>{
    /*fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))*/
      axios.get('https://fakestoreapi.com/products')
      .then((res)=>{
        setProducts(res.data)
      })
  },[])
return(
  <Container>
    <h1>Products List</h1>
    <Row>
      {products.map((product,index)=>{
        return(
          <Col xs={3}>
          <Card>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.Title}</Card.Title>
            <Card.Text>
              ${product.price}
            </Card.Text>
            <Button variant="primary">View Product</Button>
          </Card.Body>
        </Card>      
          </Col>
        )
      })}
      
    </Row> 
  </Container>
)
}
export default AppFunction