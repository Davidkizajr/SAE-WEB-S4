import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";

function Map() {
  const [data, setData] = useState(null);
  const [latitude, setLatitude] = useState(49.871144);
  const [longitude, setLongitude] = useState(2.2641492);
  const [zoom, setZoom] = useState(13);

  const MapEvents = () => {
    useMapEvents({
      zoomend: (e) => {
        const { lat, lng } = e.target.getCenter();
        setLatitude(lat);
        setLongitude(lng);
        setZoom(e.target.getZoom());
      },
    });
    return null;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(zoom);
        const response = await axios.get(
          `http://localhost:3001/api?page=1&lat=${latitude}&lon=${longitude}`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [latitude, longitude, zoom]);

  return (
    <>
      <div className="mt-30 flex justify-center items-center">
        <MapContainer
          style={{ width: "100rem", height: "50rem" }}
          center={[latitude, longitude]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapEvents />
          {data ? (
            <>
              {data.data.map((item) => (
                <>
                  <Marker
                    key={item.num_site}
                    position={[
                      parseFloat(item.latitude),
                      parseFloat(item.longitude),
                    ]}
                  ></Marker>
                </>
              ))}
            </>
          ) : (
            <p>Oui</p>
          )}
        </MapContainer>
      </div>
    </>
  );
}

export default Map;
