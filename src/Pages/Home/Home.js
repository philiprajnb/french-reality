import { Container, Row, Col, Button,Image } from "react-bootstrap";
import NavBar from "../Components/NavBars/Navbar";
import styles from "./Home.module.css";
import FilterBar from "../Components/FilterBar/FilterBar"
import logo from "../../assets/images/Path131.svg";
import CarouselContent from "../Components/Carousel/CarouselContent";
const Home = ()=>{
    return (
        <>
            <Container fluid className={`${styles.theBG}`}>
                <NavBar/>
                <Row className={'mx-5'}>
                    <Col md={12}>
                        <FilterBar/>
                    </Col>
                </Row>
            </Container>
            <Container className={`${styles.section1}`}>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8} className={`text-center ${styles.toCenter}`}>
                        <h4>KRETZ</h4>
                        <div className="display-3 text-center text-uppercase mt-4">
                            Plus qu’une <br/>
                            agence immobilière,<br/> 
                            une maison de <br/> famille
                        </div>
                        <p className={'text-center mt-3'}>
                        Fondée en 2007 par Sandrine et Olivier Kretz, KRETZ est une société indépendante<br/> spécialisée dans l’immobilier de luxe en France et à l’international.
                        </p>
                        <p className="text-center">
                        Rejoints par leurs trois enfants, Martin, Valentin et Louis, c’est en famille, dans leur maison-bureau des années 30 à Boulogne Billancourt, qu’ils inventent une autre façon de faire de l’immobilier : plus innovante, plus personnalisée, plus généreuse.
                        </p>

                        <Button variant={'outline-primary'} className={'my-4'}>Découvrir l’agence</Button>
                    </Col>
                    <Col md={2}>
                        <Image src={logo} className={`${styles.toTopRight}`} />
                    </Col>
                </Row>
            </Container>
            <Container fluid  className={`${styles.section2} bg-secondary`}>
                <Row className={`${styles.section2Header}`}>
                    <Col md={12} className={'text-center'}>
                    <div className="display-1 text-uppercase position-relative" style={{zIndex:999}}>
                        STYLES DE VIE
                    </div>
                    <CarouselContent/>
                    </Col>
                </Row>
                
            </Container>    
        </>
    )
}

export default Home;
