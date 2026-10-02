import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Formulario() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMensaje">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Deja tu mensaje" />
            </Form.Group>

            <Button variant='success' type="submit" className='me-2'>Enviar mensaje</Button>
            <Button variant='primary' type="reset">Limpiar formulario</Button>
        </Form>

    );
}

export default Formulario;