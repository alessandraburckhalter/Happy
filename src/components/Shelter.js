import React from 'react';
import { FaPhone } from "react-icons/fa";
import { FiClock, FiInfo, FiArrowLeft } from "react-icons/fi";
import  { MapContainer, Marker }  from 'react-leaflet';
import {TileLayer } from 'react-leaflet';
import { useHistory } from 'react-router-dom';
import mapMarkerImg from '../images/logo.svg';
import '../styles/pages/shelters.css';
import Leaflet from 'leaflet';
import Sidebar from './Sidebar';

const HappyMapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
})

export default function Shelter() {
    return (
        <div id="page-shelter">

            <Sidebar />

            <main>
                <div className="shelter-details">
                    <img src="https://static.fox29.com/www.fox29.com/content/uploads/2019/06/PSPCA_dog_generic_01.jpg" alt="#" />

                    <div className="images">
                        <button className="active" type="button">
                            <img src="https://static.fox29.com/www.fox29.com/content/uploads/2019/06/PSPCA_dog_generic_01.jpg" alt="#" />
                        </button>
                        <button type="button">
                            <img src="https://static.fox29.com/www.fox29.com/content/uploads/2019/06/PSPCA_dog_generic_01.jpg" alt="#" />
                        </button>
                        <button type="button">
                            <img src="https://static.fox29.com/www.fox29.com/content/uploads/2019/06/PSPCA_dog_generic_01.jpg" alt="#" />
                        </button>
                        <button type="button">
                            <img src="https://static.fox29.com/www.fox29.com/content/uploads/2019/06/PSPCA_dog_generic_01.jpg" alt="#" />
                        </button>
                        <button type="button">
                            <img src="https://static.fox29.com/www.fox29.com/content/uploads/2019/06/PSPCA_dog_generic_01.jpg" alt="#" />
                        </button>
                        <button type="button">
                            <img src="https://static.fox29.com/www.fox29.com/content/uploads/2019/06/PSPCA_dog_generic_01.jpg" alt="#" />
                        </button>
                    </div>

                    <div className="shelter-details-content">
                        <h1>Shelters name</h1>
                        <p>Shelter description. Should be at least one full line of content.</p>


                    <div className="map-container">
                        <MapContainer 
                        center={[33.8623597,-84.4697653]}
                        zoom={15}
                        style={{ width: '100%', height: 280 }}
                        dragging={false}
                        touchZoom={false}
                        zoomControl={false}
                        scrollWheelZoom={false}
                        doubleClickZoom={false}
                        >
                        
                        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

                        <Marker 
                            interactive={false}
                            icon={HappyMapIcon}
                            position={[33.8623597,-84.4697653]}
                            />
                        </MapContainer>

                        <footer>
                            <a href="">See routes on Google Maps</a>
                        </footer>
                    </div>

                    <hr />

                    <h2>Intructions to make a visit</h2>
                    <p>Come as you feel more comfortable and bring a lot of love to give.</p>

                    <div className="open-details">
                        <div className="hour">
                            <FiClock size={32} color="#15B6D6" />
                            Monday to Friday <br />
                            8 a.m. to 6 p.m.
                        </div>
                        <div className="open-on-weekends">
                            <FiInfo size={32} color="#39CC83" />
                            Open <br/>
                            on the weekends
                        </div>
                    </div>

                    <button type="button" className="contact-button">
                        <FaPhone size={20} color="FFF" />
                        Get in touch
                    </button>
                </div>
            </div>
            </main>
        </div>
    )
}
