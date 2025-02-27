import { useEffect, useContext, useState, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "@fortawesome/fontawesome-free/css/all.css";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { motion } from "framer-motion";
import mapBanner from "../../assets/mapBanner.png";
import { GlobalContext } from "../../Context/login/context";
import Button from "react-bootstrap/Button";
// import BookBloodModal from "../components/BookBloodModal";
import { decodeToken } from "react-jwt";

function FlyToLocation({ userLocation }) {
  const map = useMap();
  if (userLocation.lat && userLocation.lon) {
    map.flyTo([userLocation.lat, userLocation.lon], 11);
  }
  return null;
}

const Mapping = () => {
  const navigate = useNavigate();
  const { state } = useContext(GlobalContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const mapSectionRef = useRef(null);
  const [userLocation, setUserLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState(null);
  const [pinnedLocation, setPinnedLocation] = useState([]);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const redMarker = L.divIcon({
    className: "custom-div-icon",
    html: `<div style="color: red; font-size: 24px;"><i class="fas fa-map-marker-alt"></i></div>`,
    iconSize: [35, 47],
    iconAnchor: [15, 42],
    popupAnchor: [0, -36],
  });

  const getCurrLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setError(null);
      },
      (err) => {
        setError(
          "Failed to get your location. Please enable location services."
        );
        console.error(err);
      }
    );
  };

  const getLocations = async (e) => {
    e.preventDefault();
    if (!selectedBloodGroup) {
      setError("Please select a blood group.");
      return;
    }
    setError(null);
    setLoading(true); // Start loading

    try {
      const res = await axios.post(
        `http://localhost:8000/api/location-by-bloodGroup?bloodGroup=${encodeURIComponent(
          selectedBloodGroup
        )}`
      );

      // Delay the success state update for 3 seconds
      setTimeout(() => {
        setPinnedLocation(res.data.organizations);
        setLoading(false); // Stop loading
        // alert("Locations Fetched Successfully");
      }, 3000);
    } catch (error) {
      console.error(error);
      setTimeout(() => {
        setError("Failed to fetch locations. Please try again.");
        setLoading(false);
      }, 3000); // Ensuring the loading state is at least 3 seconds before error
    }
  };

  useEffect(() => {
    if (state.token === "undefined") {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [state.token]);

  return (
    <>
      <div className="flex justify-center dark:bg-black relative">
        <section
          className="relative w-[100%] h-[500px] bg-cover bg-center px-10 lg:px-28 flex flex-col justify-center items-start gap-7"
          style={{ backgroundImage: `url(${mapBanner})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"></div>
          <div className="d-flex flex-col gap-6 justify-center w-100">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-5xl leading-tight px-5 text-center text-white font-semibold relative z-10"
            >
              Search For Nearest Blood Bank
            </motion.h1>
            <div className="flex justify-center gap-3">
              <div className="d-flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="text-white bg-red px-4 py-2 rounded relative z-10"
                  onClick={() => {
                    getCurrLocation();
                    mapSectionRef.current.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Get Curr Location
                </motion.button>
                <Form
                  onSubmit={(e) => {
                    getLocations(e);
                    mapSectionRef.current.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="d-flex gap-3 relative z-10"
                >
                  <Form.Select
                    className="w-100"
                    value={selectedBloodGroup}
                    onChange={(e) => setSelectedBloodGroup(e.target.value)}
                  >
                    <option value="" disabled>
                      Select Blood Group...
                    </option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O">O</option>
                  </Form.Select>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="text-white w-full bg-red px-4 py-2 rounded relative z-10"
                    type="submit"
                  >
                    {loading ? "Searching..." : "Search Blood"}
                  </motion.button>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {loading && (
        <p className="text-center text-red text-lg font-semibold p-3">
          Fetching locations...
        </p>
      )}

      <div
        className="bg-whitee dark:bg-black p-10 d-flex justify-center items-center"
        id="map"
        ref={mapSectionRef}
      >
        <MapContainer
          center={[userLocation.lat || 51.505, userLocation.lon || -0.09]}
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
              <Popup>{error ? error : "You are here!"}</Popup>
            </Marker>
          )}
          {pinnedLocation.map((loc, key) => (
            <Marker
              key={key}
              position={[loc.location[0].lat, loc.location[0].lon]}
              icon={redMarker}
            >
              <Popup>
                <ul className="flex flex-col gap-2">
                  {loc.bloodInventory.map((blood, idx) => (
                    <li key={idx}>
                      Type: {blood.bloodType} | Quantity: {blood.quantity}{" "}
                      bottles
                    </li>
                  ))}
                  <li>Blood Bank: {loc.name}</li>
                  <li>
                    {isLoggedIn ? (
                      <BookBloodModal />
                    ) : (
                      <button
                        onClick={() => navigate("/loginReg")}
                        className="text-red"
                      >
                        Login to Book Blood
                      </button>
                    )}
                  </li>
                </ul>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        {error && <p className="text-danger mt-3">{error}</p>}
      </div>
    </>
  );
};

export default Mapping;
