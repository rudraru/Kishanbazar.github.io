import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import userIconPath from '../src/Component/Image/download.png'; // Replace with the actual path to your user icon
import evStationIconPath from '../src/Component/Image/download.png'; // Replace with the actual path to your EV station icon

const containerStyle = {
  width: '100%',
  height: '650px',
};

const center = {
  lat: 28.3949,
  lng: 84.1240,
};

const hotels = [
  { name: 'EV-APLHA CHARGING SPORT', location: { lat: 27.7075, lng: 85.3202 } },
  { name: 'EV-BBC CHARGING SPORT', location: { lat: 27.6724, lng: 85.4250 } },
  { name: 'EV-MAHAD CHARGING SPORT', location: { lat: 27.6707, lng: 85.3622 } },
  // ... add more hotel locations ...
];

function NepalMap() {
  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const onMapLoad = mapInstance => {
    setMap(mapInstance);
  };
  const calculateDirections = (origin, destination) => {
    const directionsService = new window.google.maps.DirectionsService();

    const directionsRequest = {
      origin,
      destination,
      travelMode: 'DRIVING',
    };

    directionsService.route(directionsRequest, (result, status) => {
      if (status === 'OK') {
        setDirections(result);
      } else {
        console.error('Directions request failed:', status);
      }
    });
  };

  useEffect(() => {
    if (map && userLocation && selectedHotel) {
      calculateDirections(userLocation, selectedHotel.location);
    }
  }, [map, userLocation, selectedHotel]);

  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        error => {
          console.error('Error getting user location:', error);
        }
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      console.error('Geolocation is not available in this browser.');
    }
  }, []);

  const userIcon = {
    url: userIconPath,
    // scaledSize: new window.google.maps.Size(32, 32), // Adjust the size as needed
  };

  const evStationIcon = {
    url: evStationIconPath,
    // scaledSize: new window.google.maps.Size(48, 48), // Adjust the size as needed
  };

  const handleHotelChange = event => {
    const selectedHotelName = event.target.value;
    const hotel = hotels.find(h => h.name === selectedHotelName);
    setSelectedHotel(hotel);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyD9T7Iz3AHsGMeGNprGoIojX6CHfbuF4EE">
      <div>
        <label htmlFor="hotelSelect">EVSTATION'S: </label>
        <select id="hotelSelect" onChange={handleHotelChange}>
          <option value="">SELECT A EV STATION</option>
          {hotels.map(hotel => (
            <option key={hotel.name} value={hotel.name}>
              {hotel.name}
            </option>
          ))}
        </select>
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={7}
        onLoad={onMapLoad}
      >
        {userLocation && (
          <Marker position={userLocation} icon={userIcon} />
        )}

        {hotels.map((hotel, index) => (
          <Marker
            key={index}
            position={hotel.location}
            title={hotel.name}
            icon={evStationIcon}
          />
        ))}
  
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
}

export default NepalMap;
