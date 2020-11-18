import React from 'react';
import  { MapContainer, Marker }  from 'react-leaflet';
import {TileLayer } from 'react-leaflet';
import mapMarkerImg from '../images/logo.svg';
import '../styles/pages/create-shelters.css';
import Leaflet from 'leaflet';
import Sidebar from './Sidebar';
import { FiPlus } from 'react-icons/fi';


const HappyMapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
})

export default function CreateShelter() {

    return (
        <div id="page-create-shelter">
            <Sidebar />

            <main>
                <form className="create-shelter-form">
                    <fieldset>
                        <legend>Info</legend>

                        <MapContainer 
                        center={[33.8623597,-84.4697653]}
                        style={{ width: '100%', height: 280 }}
                        zoom={14}
                        >
                        
                        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

                        <Marker 
                            interactive={false}
                            icon={HappyMapIcon}
                            position={[33.8623597,-84.4697653]}
                            />
                        </MapContainer>

                        <div className="input-block">
                            <label htmlFor="name">Name</label>
                            <input id="name" 
                            />
                            </div>

                            <div className="input-block">
                            <label htmlFor="about">
                                About <span>Maximum 300 characters</span>
                            </label>
                            <textarea
                                id="about"
                            />
                            </div>

                            <div className="input-block">
                                <label htmlFor="images">Pictures</label>

                                <div className="images-container">

                                    <label className="new-image">
                                    <FiPlus size={24} color="#15b6d6" />
                                    </label>
                                </div>

                                <input
                                />
                                </div>
                    </fieldset>

                    <fieldset>
                        <legend>Visit</legend>

                        <div className="input-block">
                        <label htmlFor="instructions">Instructions</label>
                        <textarea
                            id="instructions"
                            
                        />
                        </div>

                        <div className="input-block">
                        <label htmlFor="opening_hours">Opening hours</label>
                        <input
                            id="opening_hours"
                           
                        />
                        </div>

                        <div className="input-block">
                        <label htmlFor="open_on_weekends">Open on the weekends</label>

                        <div className="button-select">
                            <button
                            type="button"
                            className="open_on_weekends"
                            >
                            Yes
                            </button>
                            <button
                            type="button"
                            className="open_on_weekends"
                            >
                            No
                            </button>
                        </div>
                        </div>
                    </fieldset>

                    <button className="confirm-button" type="submit">
                        Submit
                    </button>
                </form>
            </main>
            
        </div>
    )
}
