import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import Todos from './components/todos/index'

const App = ()=>{
    return (
        <Container>
            <Row>
                <Col>
                    <Todos/>
                </Col>    
            </Row> 
        </Container>
    )
}

export default App