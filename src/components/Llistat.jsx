import { Alert } from "react-bootstrap";

function Llistat({ tasques, eliminarTasca }) {


    return (
        <>
            <ul>
                {tasques.map((e, index) => (
                    <Alert key={index} variant={'primary'} onClick={()=>eliminarTasca(index)}>
                        {e}
                    </Alert>
                ))}
            </ul>

        </>
    )


}

export default Llistat;