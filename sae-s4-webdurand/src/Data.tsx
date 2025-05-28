import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Data(){
    const [data, setData] = useState(null);
    useEffect (() => {
        const fetchData = async () => {
            try { const response = await axios.get('http://localhost:3001/api/');
                setData(response.data);
            } catch (error) { 
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className='mt-30 text-center px-5 text-white'>
                {data ? (
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
                                    <td className='p-3'>{item.nom_reg}</td>
                                    <td className='p-3'>{item.nom_dep}</td>
                                    <td className='p-3'>{item.nom_com}</td>
                                    <td className='p-3'>{item.latitude}</td>
                                    <td className='p-3'>{item.longitude}</td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
                ) : ( <p>Chargement des données...</p> )}
            </div>
        </>
    );
}

export default Data