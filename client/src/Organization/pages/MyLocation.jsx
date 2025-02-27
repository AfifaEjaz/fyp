import { useState, useContext ,useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { GlobalContext } from "../../Context/login/context";

function FlyToLocation({ userLocation }) {
  const map = useMap();
  if (userLocation.lat && userLocation.lon) {
    map.flyTo([userLocation.lat, userLocation.lon], 11);
  }
  return null;
}

const MyLocation = () => {

  const { state } = useContext(GlobalContext);

  const [userLocation, setUserLocation] = useState({ lat: "", lon: "", address: "" });
  const mapSectionRef = useRef(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      lat :userLocation.lat,
      lon :userLocation.lon,
      address :userLocation.address,
    }
  
    axios.post("http://localhost:8000/api/add-location", payload,
      {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      }
    ).then((res) => {console.log(res.data)
      alert("Location Added Successfully")
    })
    .catch((error) => console.log(error))

  };

  const getCurrLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: Number(position.coords.latitude),
          lon: Number(position.coords.longitude),
        });
        setError(null);
      },
      (err) => {
        setError("Failed to get your location. Please enable location services.");
        console.error(err);
      }
    );
  };

  return (
    <div className="flex flex-col md:flex-row justify-center w-full gap-8 p-4">
      {/* Form Card */}
      <div className="p-6 bg-white w-full h-fit">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Enter Location
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Latitude
            </label>
            <input
              type="text"
              value={userLocation.lat || ""}
              onChange={(e) =>
                setUserLocation((prev) => ({ ...prev, lat: e.target.value }))
              }
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter latitude"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Longitude
            </label>
            <input
              type="text"
              value={userLocation.lon || ""}
              onChange={(e) =>
                setUserLocation((prev) => ({ ...prev, lon: e.target.value }))
              }
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter longitude"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Address
            </label>
            <input
              type="text"
              value={userLocation.address || ""}
              onChange={(e) =>
                setUserLocation((prev) => ({ ...prev, address: e.target.value }))
              }
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your Addres"
            />
          </div>

          <button
            type="submit"
            className="bg-red text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="w-full h-fit">
        <div className="bg-white dark:bg-black p-2" id="map" ref={mapSectionRef}>
          <button
            className="text-white bg-red px-4 py-2 rounded mb-3 hover:bg-red-600 transition"
            onClick={() => {
              getCurrLocation();
              mapSectionRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Current Location
          </button>

          <MapContainer
            center={
              userLocation.lat
                ? [userLocation.lat, userLocation.lon]
                : [51.505, -0.09]
            }
            zoom={8}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <FlyToLocation userLocation={userLocation} />
            {userLocation.lat && userLocation.lon && (
              <Marker position={[userLocation.lat, userLocation.lon]}>
                <Popup>{error || "You are here!"}</Popup>
              </Marker>
            )}
          </MapContainer>

          {error && <p className="text-red-500 mt-3">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default MyLocation;
