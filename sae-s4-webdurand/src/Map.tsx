import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

function Map() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/all/`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='mt-30 flex justify-center items-center"'>
        <MapContainer
          style={{ width: "100rem", height: "50rem" }}
          center={[49.871144, 2.2641492]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data ? (
            <>
              {data.data.map((item) => (
                <>
                  <Marker
                    position={[
                      parseFloat(item.latitude.replace(",", ".")),
                      parseFloat(item.longitude.replace(",", ".")),
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
