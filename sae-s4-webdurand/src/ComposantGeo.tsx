import { useState } from 'react';
import './App.css'

function ComposantGeo() {
    const [userLocation, setUserLocation] = useState(null);

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude })
                },
                (error) => {
                    console.error('Erreur d\'obtention de la localisation de l\'utilisateur :', error);
                }
            );
        }

        else {
            console.error('La géolocalisation n\'est pas supportée par ce navigateur.');
        }
    }

    getUserLocation();

    return (
        <>
            <main className='mt-30 text-center text-white'>
                <h1>Localisation</h1>
                {userLocation && (
                    <>
                        <p>Latitude: {userLocation.latitude}</p>
                        <p>Longitude: {userLocation.longitude}</p>
                    </>
                )}
            </main>
        </>
    );
}

export default ComposantGeo