import React from 'react';
import Menu from '../../menu';
import Rodape from '../../rodape';
import { Carousel, Jumbotron, Button, Container, Row, Col, Card } from 'react-bootstrap'

const Home = () => {
    return (
        <div>
            <Menu />
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.ilhabela.com.br/wp-content/uploads/2016/01/eventos-em-ilhabela.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.moblee.com.br/blog/wp-content/uploads/sites/2/2018/03/Organizando-eventos-as-principais-etapas-de-um-projeto-e-o-que-fazer-em-cada-uma-1.png"
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Jumbotron className="text-center">
                <h1>Diversos Eventos em um unico local</h1>
                <p>
                    Encontre eventos nos mais diversos de forma rapida
                </p>
                <p>
                    <Button variant="primary" href='/login'>Login</Button>
                    <Button variant="success" href='/cadastrar' style={{ marginLeft: '40px' }} >Cadastrar</Button>
                </p>
            </Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.saudevitalidade.com/wp-content/uploads/2016/07/bg-eventos.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.saudevitalidade.com/wp-content/uploads/2016/07/bg-eventos.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.saudevitalidade.com/wp-content/uploads/2016/07/bg-eventos.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Rodape />
        </div>
    )
}

export default Home