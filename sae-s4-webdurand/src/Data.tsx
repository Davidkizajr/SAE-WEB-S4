import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Data() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(null);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    if (!isFiltered) {
      const fetchData = async (page) => {
        try {
          const response = await axios.get(
            `http://localhost:3001/api?page=${page}`
          );
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData(currentPage);
    }
  }, [currentPage, isFiltered]);

  function searchLatLon(lat: number, lon: number, page = 1) {
    setIsFiltered(true);
    if (!isNaN(lat) && !isNaN(lon)) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3001/api?page=${page}&lat=${lat}&lon=${lon}`
          );
          setCurrentPage(page);
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }

  const handlePrevPage = () => {
    if (latitude && longitude) {
      searchLatLon(latitude, longitude, currentPage - 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (latitude && longitude) {
      searchLatLon(latitude, longitude, currentPage + 1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="mt-30 text-center px-5 text-white">
        {data ? (
          <>
            <div className="justify-center items-center">
              <input
                className="bg-gray-400 m-5 p-1"
                placeholder="Latitude"
                type="number"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
              />

              <input
                className="bg-gray-400 m-5 p-1"
                placeholder="Longitude"
                type="number"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
              />

              <button
                className="bg-gray-500 m-5 p-1"
                onClick={() =>
                  searchLatLon(Number(latitude), Number(longitude))
                }
              >
                Rechercher
              </button>
            </div>

            <table className="table-auto w-full overflow-hidden rounded-xl">
              <thead className="bg-gray-700">
                <tr className="border-b border-black">
                  <th className="p-3">Région</th>
                  <th className="p-3">Départment</th>
                  <th className="p-3">Commune</th>
                  <th className="p-3">Latitude</th>
                  <th className="p-3">Longitude</th>
                </tr>
              </thead>
              <tbody className="bg-gray-600">
                {data.data.map((item) => (
                  <tr className="border-b border-black">
                    <td className="p-2.5">{item.nom_reg}</td>
                    <td className="p-2.5">{item.nom_dep}</td>
                    <td className="p-2.5">{item.nom_com}</td>
                    <td className="p-2.5">{item.latitude}</td>
                    <td className="p-2.5">{item.longitude}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-5">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="mr-2"
              >
                Précédent
              </button>
              <button disabled="disabled">
                {currentPage} sur {data.totalPages}
              </button>
              <button
                className="ml-2"
                onClick={handleNextPage}
                disabled={currentPage === data.totalPages}
              >
                Suivant
              </button>
            </div>
          </>
        ) : (
          <p>Chargement des données...</p>
        )}
      </div>
    </>
  );
}

export default Data;
