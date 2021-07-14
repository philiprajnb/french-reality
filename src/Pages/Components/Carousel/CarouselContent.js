import Carousel from "./Carousel";
import {Card} from "react-bootstrap"
import img5 from "../../../assets/images/img5.png"
import img6 from "../../../assets/images/img6.png";
import img7 from "../../../assets/images/img7.png";
import img8 from "../../../assets/images/img8.png";
import img9 from "../../../assets/images/img9.png";
import img10 from "../../../assets/images/img10.png"
import img11 from "../../../assets/images/img11.png"
const imgArr = [{image:img5,name:"Domaines & chateaux"}, {image:img6,name:"VILLAS DE Rêve"},{image:img7,name:"CHALETS de famille"},{image:img8,name:"Lofts & espaces atypiques"},{image:img9,name:"JARDINs & terrasses en ville"},{image:img10,name:"HÔTELS PARTICULIERS"},{image:img11,name:"appartements hausmaniens"}];

const CarouselContent = () => {
    return (
        <div style={{ maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: -80,zIndex:-999 }}>
            <Carousel
                show={4}
            >
            
                {imgArr.map(img=>{
                    return (
                      <div key={img.name}>
                        <div style={{ padding: 15 }}>
                           <Card >
                            <Card.Img src={img.image} style={{ width: "100%", height: "549px" }} />
                            <Card.ImgOverlay className={'d-flex align-items-end'}>
                              <Card.Title className={'text-left w-60'}><h3 className={'text-white'}>{img.name}</h3>
                                <div>
                                    <h6 className={'text-left text-white text-nowrap '}>PARCOURIR <i className={'fas fa-arrow-right ml-4'}></i></h6> 
                                </div>
                              </Card.Title>
                            </Card.ImgOverlay>
                          </Card>
                        </div>
                      </div>
                    );
                })}
            </Carousel>
        </div>
    )
}

export default CarouselContent
