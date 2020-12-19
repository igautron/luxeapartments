import React, {Component} from 'react';
import './About.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {MDBCol, MDBIcon, MDBView} from "mdbreact";


// import  imOdessa from ''

import imageSrc from '../../Image/StandardLogoFiles/OriginalonTransparent2.png'
import slideImage from "../../Image/qwertyuiop123456789.jpg";
import slideImage2 from "../../Image/der.jpg";
import slideImage3 from "../../Image/theatr.jpg";
import slideImage4 from "../../Image/seaport.jpg";
import slideImage5 from "../../Image/256995632.jpg";

class About extends Component {


    render() {
        return (
            <div className='contacts-block'>
                        <div className='container w-100'>
                            <h3 className='h3-responsive  pt-3 pt-sm-5 mb-0 pb-3 pb-md-5 pb-xl-5 pb-lg-5 font-weight-bold text-center'>About</h3>
                            <div className='border-0 d-block m-0 pb-3 pb-sm-5'>
                                <img
                                    className="logo-image d-block w-100 m-auto py-2"
                                    src={imageSrc}
                                    alt="First slide"
                                />
                                <div className='py-2 py-sm-4'>
                                    <p className='about-odessa-text m-0'>
                                        <span className='font-weight-bold'>LuxeApartments company</span> provide a real estate services in Odessa city in Ukraine. We offer a possibility to find the best variant for your staying. Our goal is to make your traveling comfortable and easy. We will find the best solution for you. Our database charges a large number of different luxe apartments. Any design and room amount for your taste.
                                    </p>
                                </div>
                            </div>
                            <div className='border-0 d-block m-0 pb-3 pb-sm-5'>
                                <img
                                    className="slide-image d-block w-100 h-100"
                                    src={slideImage}
                                    alt="First slide"
                                />
                                <div className='py-2 py-sm-4'>
                                    <p className='about-odessa-text m-0'>
                                        <span className='font-weight-bold'>Odessa</span>  is the third largest city in Ukraine located in the south of the country, the administrative center of the Odessa region and the main naval base of the Ukrainian Navy.This city, standing on the shore of the Odessa Gulf of the Black Sea, is the largest commercial sea port of Ukraine.
                                    </p>
                                    <p className='about-odessa-text m-0'>
                                        Odessa is the largest seaport of Ukraine transporting grain, sugar, coal, oil products, cement, metals, jute, timber, products of the machine-building industry. The city is also a major railway center. The main industries are oil processing, engineering, metalworking, light, food, woodworking, agricultural, and chemical industries.
                                    </p>
                                    <p className='about-odessa-text'>
                                        Odessa is one of the most important cultural centers of Ukraine. There are a lot of theaters and museums that have a long history. Many cultural figures were born and grew in this city: pianists Emil Gilels and Svyatoslav Richter, violinist David Oistrakh, singers Leonid Utesov and Valery Obodzinsky, composer Oskar Feltsman, actors, writers, artists.
                                        Its sights attract thousands and thousands of visitors every year.
                                    </p>
                                </div>
                            </div>
                            <div className='border-0 d-block m-0 pb-3 pb-sm-5'>
                                <img
                                    className="slide-image d-block w-100 h-100"
                                    src={slideImage2}
                                    alt="First slide"
                                />
                                <p className='py-2 py-sm-4 about-odessa-text'>
                                    <span className='font-weight-bold'>Deribasovskaya Street</span> is the main street of this wonderful resort city. It’s the main commercial street full of numerous shops, restaurants and bars, and in summer time it’s fully packed with tourists strolling up and down till wee hours of the morning. It’s a pedestrian street with various monuments and famous City Garden with a musical fountain. Deribasovskaya Street was named after one of the founders who became the first mayor of this city – Admiral Joseph de Ribas.
                                </p>
                            </div>
                            <div className='border-0 d-block m-0 pb-3 pb-sm-5'>
                                <img
                                    className="slide-image d-block w-100 h-100"
                                    src={slideImage3}
                                    alt="First slide"
                                />
                                <p className='py-2 py-sm-4 about-odessa-text'>
                                     <span className='font-weight-bold'>Opera & Ballet Theater.</span> Amazing building of Odessa Opera & Ballet Theater is one of the most recognizable sights of the city. It was constructed in the 1880s by Ferdinand Fellner and Herman Helmer (They also designed the famous Vienna State Opera!). Totally breathtaking interior is decorated in Viennese baroque style blended with Italian Renaissance and French rococo. Sculptures outside represent heroes from Greek mythology. Opera & Ballet Theater has the finest acoustics and even whispering on the stage can be heard at any part of the hall. The Opera House is rightfully named among the top 10 most beautiful ones in Europe!
                                </p>
                            </div>
                            <div className='border-0 d-block m-0 pb-3 pb-sm-5'>
                                <img
                                    className="slide-image d-block w-100 h-100"
                                    src={slideImage4}
                                    alt="First slide"
                                />
                                <p className='py-2 py-sm-4 about-odessa-text'>
                                      <span className='font-weight-bold'>Sea Port.</span> Ukraine’s most powerful and busy port is in Odessa. The story of the sea port (Marine Trade Port) began in 1794. Today the waterfront and port territories are equipped with about hundreds of cranes, as well as thousands of lift trucks and other port machinery. The port has several terminals: passenger terminal, freight terminal, oil & gas terminal, container terminal, etc. The passenger terminal in the central part of city features a marine gallery, a concert-exhibition hall, the museum of anchor, the museum of sea fleet of Ukraine, a yacht complex and a diving center. When it’s warm you can have a ride on one of many ships or yachts anchored at the sea port.
                                </p>
                            </div>
                            <div className='border-0 d-block m-0 pb-3 pb-sm-5'>
                                <img
                                    className="slide-image d-block w-100 h-100"
                                    src={slideImage5}
                                    alt="First slide"
                                />
                                <p className='py-2 py-sm-4 about-odessa-text'>
                                      <span className='font-weight-bold'>Arcadia Beach.</span> Arcadia (or Arkadia) Beach is indeed the most popular beach in the city. It is located in the district with quite expensive residential houses that bears the same name- Arcadia. The coastal area is full of various hotels & resorts, bars, and night clubs. Actually, Arcadia is not simply a popular beach among locals and leisure travelers, it’s the primary spot for nightlife during warm months of the year. The nightclubs at Arcadia Beach are open from May through September. So, if you want to have real fun, you should come to this area
                                </p>
                            </div>
                        </div>
            </div>
        )
    }
}

export default About;
