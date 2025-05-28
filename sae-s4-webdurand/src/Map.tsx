import './App.css'
import { MapContainer, TileLayer } from 'react-leaflet'

function Map(){
    return (
        <>
            <div className='mt-30 flex justify-center items-center"'>
                <MapContainer style={{ width: "100rem", height: "50rem" }} center={[49.871144, 2.2641492]} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </div>
        </>
    );
}

export default Map