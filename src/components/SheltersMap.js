import React from 'react'
import mapMarkerImg from '../images/logo.svg';
import { Link} from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import '../styles/pages/shelters-map.css';
import  { MapContainer, Marker, Popup }  from 'react-leaflet';
import {TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet, { popup } from 'leaflet';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

export default function SheltersMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="happy" />

                    <h2>Choose a shelter on the map</h2>
                    <p>Your new buddy is waiting for you :)</p>
                </header>

                <footer>
                    <strong>Atlanta</strong>
                    <span>Georgia</span>
                </footer>
            </aside>

            <MapContainer 
                center={[33.8623597,-84.4697653]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
            {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

            <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

            <Marker 
                icon={mapIcon}
                position={[33.8623597,-84.4697653]}
            >

                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                    Shelter's name
                    <Link to="">
                        <FiArrowRight size={20} color="#FFF"/>
                    </Link>
                </Popup>

            </Marker>

            </MapContainer>

            <Link to="" className="create-shelter">
                <FiPlus size={32} color="FFF"/>
            </Link>
        </div>
    )
}
