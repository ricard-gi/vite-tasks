import { useState } from "react";
import { Form, Button } from "react-bootstrap";
function Formulari(props) {

    const [tasca, setTasca] = useState("cinema");

    function handleInput(e) {
        setTasca(e.target.value)
    }

    function enviarForm(e) {
        e.preventDefault();
        props.afegirTasca(tasca);
        setTasca("");
    }

    return (
        <Form onSubmit={enviarForm} >
            <Form.Group className="mb-3" controlId="tasca">
                <Form.Label>Nota tasca</Form.Label>
                <Form.Control type="text" placeholder="tasca..." value={tasca} name="tasca" onChange={handleInput} />
                <br />
                <Button type="submit">Enviar</Button>
            </Form.Group>
        </Form>
    )
}


export default Formulari;

