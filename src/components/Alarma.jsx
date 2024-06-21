import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";


function Pantalla({ valor }) {
    return (
        <div>
            <hr />
            <h1>{valor}</h1>
            <hr />
        </div>
    )
}

function Teclat({ clica }) {

    return (
        <>
            <Button onClick={() => clica("A")} >A</Button>
            <Button onClick={() => clica("B")} >B</Button>
            <Button onClick={() => clica("C")} >C</Button>
            <Button onClick={() => clica("D")} >D</Button>
        </>

    )
}





function Alarma() {

    const [valor, setValor] = useState(" ");


    function clica(lletra) {
        setValor(valor + lletra);
    }

    return (
        <Container>
            <Row>
                <Col xs={4}>
                    <Pantalla valor={valor} />
                    <Teclat clica={clica} />
                </Col >
            </Row >
        </Container>)
}

export default Alarma;