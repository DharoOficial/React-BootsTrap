import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../login/index.css';
import Menu from '../../menu';
import Rodape from '../../rodape';

const Login = () => {
    return (
        <div>
            <Menu />
            <div className="container_Form">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAWlBMVEX/3IezeRz/4IutcQz72IOxdhX/4ozKmEO8hS341H
            +4fyWuchD/3on/447OnkmqbADtxnLmvmrftWHBjTbFkj2mZgDSpFDyznnarlvYrVnSo06+iDHku2e6giifO07hAAAC5UlEQVR4nO3a7U7bQBBG4dl1bEi8IUBSvrn/
            2yxQWgLM2AGJKvPqPD+rWtqjrNPdSc0AAAAAAAAAAAAAAAAAAAAAAAAAAACAQAt8+9mfXvBXtWXggJW2hffgz6/5a+pm03k2l3X+2Z3z7K/FkX2KtS++bn6lw4nz8A
            HP/V9hYb9bzz2bvLB0F3P7NHth6W1mrfkLz4bpZ9MXlu58erH5C0uZfhMFCvuryX0qUFi666nlKhT2p1P7VKGwjDcT+1SisHQTR3CNwn4bH940Ckv3EL6KIoVlDJes
            Utjvoi8blcL4kiFTWEqwZp3C6JKhUxgd3oQKy8p9E5UKxysvUanQ36dShf2982UjVVhGZ0KsVeitXKzQObyJFTqHN7XCzxPixIUrN7s/+bBPExdub93EjxPixIWn65
            VX+HFCnLrwvPMCx7t3+zRz4TCc+fv03eEtdWEzL7D0j/v7NHWh1Qt/n+5PiHMX2nrn79O9CXHywrYYvcL9S0byQquX7j7t3i4Z2QttuPcK9ybE6Qvb0v0Q3y4Z6Qut
            3rqv4r9LRv5CG4LD22uDQGG79vfp64RYoNCGO3+f/rlkKBRa8wL/ToglCmtwyXiZEEsU+hWvhzeNwmb+ROP5r2gUWn3w9+nT4U2k0Iat+ymOy6ZS2Jb+JWO7riKFNtz
            4/yg+rFUKbTj1v21Udunz4W3jFp5546qUhTZc+R/io/OHOQutBpcMncLmH96ECi2YEAsVWpMvDCbEQoXRhFiosC3UC61euoc3oUKr9wf9L7/EhcGEWKgwmhALFYYTYp
            3CQw5vuQufDm+z+zR5YTQhViqc3afZC+cPb+kLm828iekLowmxUGE0IRYqnDm8CRRGE2KhQhseJ/apRGHw875QYTQhFiqcmhCLFE4c3kQKzf1hLU9hP19o/s/7R1nYj
            Z90q/nCcEJ8dIW2cBzy3HCycvVHV/htNSATCAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCT35VyNDvJlTMAAAAAAElFTkSuQmCC" className="logo"/>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Digite seu email aqui" />
                        <Form.Text className="text-muted">
                            Nao compartilhe seu email com niguem
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Digite sua senha aqui" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Entrar
                    </Button>
                    <Button variant="success" href='/cadastrar' style={{ marginLeft: '40px' }} >
                        Criar uma conta
                    </Button>
                </Form>
            </div>
            <Rodape />
        </div>
    )
}
export default Login;