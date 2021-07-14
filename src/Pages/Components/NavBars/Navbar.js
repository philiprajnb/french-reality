import { Row,Col,Form,Image } from "react-bootstrap";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg"
const NavBar = () => {
  return (
    <>
        
        <Row className={'py-4 bg-light'}>
                <Col  className={`d-flex justify-content-right align-items-center text-uppercase`}>  
                    <Link  className={`${styles.link}`} to="/">acheter</Link>
                    <Link className={`${styles.link}`} to="/">vendre</Link>
                    <Link className={`${styles.link}`} to="/">louer</Link>
                    <Link className={`${styles.link}`} to="/">L'agence</Link>
                </Col>
                <Col >
                    <Row className={'text-center text-uppercase'}>
                        <Col>
                            <Image src={logo} fluid />
                        </Col>
                    </Row>
                </Col>
                <Col  className={`d-flex justify-content-right align-items-center text-uppercase`}>
                    <Form.Group controlId="formBasicEmail" className={'mr-4'}>
                        <Form.Control type="text" placeholder="Creer Une Alerte" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail1" className={'mr-4'}>
                        <Form.Control type="text" placeholder="Référence" />
                    </Form.Group>
                    <Form.Group controlId="ControlSelect1" style={{width:'70px'}}>
                        <Form.Control as="select">
                        <option value="FR">FR</option>
                        <option value="EN">EN</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
        
    </>
  );
};

export default NavBar;
