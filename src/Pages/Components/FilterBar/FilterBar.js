import { Form, Row, Col, Button } from "react-bootstrap";
import styles from "../FilterBar/FilterBar.module.css"
const FilterBar = ()=>{
    return (
        <>
            {/* <Form > */}
                <Row className={`bg-light pt-3 ${styles.marginize}`}>
                    <Col className={'px-2'}>
                        <Form.Group controlId="ControlSelect2" >
                            <Form.Control as="select">
                            <option value="Acheter">Acheter</option>
                            <option value="Louer">Louer</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col className={'px-2'}>
                        <Form.Group controlId="ControlSelect3" >
                            <Form.Control as="select">
                            
                            <option value="Acheter">Ville, code postal, région…</option>
                            <option value="Louer">Louer</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col className={'px-2'}>
                        <Form.Group >
                            <Form.Control type="text" placeholder="Prix Minimum" />
                        </Form.Group>
                    </Col>
                    <Col className={'px-2'}>
                        <Form.Group >
                            <Form.Control type="text" placeholder="Prix Maximum" />
                        </Form.Group>
                    </Col>
                    <Col className={'px-2'}>
                        <Form.Group >
                            <Form.Control type="text" placeholder="Surface Minimum" />
                        </Form.Group>
                    </Col>
                    <Col className={'text-nowrap'}>
                        <Button variant={'outline-primary'} >RECHERCHER <i className={'fas fa-arrow-right ml-3'}></i></Button>
                    </Col>
                    <Col >
                        <Form.Group >
                            <Form.Control type="text" placeholder="Préciser ma recherche" />
                        </Form.Group>
                    </Col>
                </Row>
            {/* </Form> */}
        </>
    )
}

export default FilterBar