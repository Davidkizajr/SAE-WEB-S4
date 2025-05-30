import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Data(){
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState(null);

    useEffect (() => {
        const fetchData = async (page) => {
            try { const response = await axios.get(`http://localhost:3001/api?page=${page}`);
                setData(response.data);
            } catch (error) { 
                console.error(error);
            }
        };
        fetchData(currentPage);
    }, [currentPage]);

    const handlePrevPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage- 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < data.totalPages) {
        setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <div className='mt-30 text-center px-5 text-white'>
                {data ? (
                    <>
                        <table className="table-auto w-full overflow-hidden rounded-xl">
                            <thead className='bg-gray-700'>
                                <tr className='border-b border-black'>
                                    <th className='p-3'>Région</th>
                                    <th className='p-3'>Départment</th>
                                    <th className='p-3'>Commune</th>
                                    <th className='p-3'>Latitude</th>
                                    <th className='p-3'>Longitude</th>
                                </tr>
                            </thead>
                            <tbody className='bg-gray-600'>
                                {data.data.map((item) => (
                                    <tr className='border-b border-black'>
                                        <td className='p-2.5'>{item.nom_reg}</td>
                                        <td className='p-2.5'>{item.nom_dep}</td>
                                        <td className='p-2.5'>{item.nom_com}</td>
                                        <td className='p-2.5'>{item.latitude}</td>
                                        <td className='p-2.5'>{item.longitude}</td>
                                    </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className='mt-5'>
                            <button onClick={handlePrevPage} disabled={currentPage === 1} className='mr-2'>
                                Précédent
                            </button>
                            <button disabled="disabled">{currentPage}</button>
                            <button className='ml-2' onClick={handleNextPage} disabled={currentPage === data.totalPages}>
                                Suivant
                            </button>
                        </div>
                    </>
                ) : ( <p>Chargement des données...</p> )}
            </div>
        </>
    );
}

export default Data