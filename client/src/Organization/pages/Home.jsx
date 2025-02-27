import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { decodeToken } from "react-jwt";
import { GlobalContext } from "../../Context/login/context.jsx";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Home = () => {
  const { state } = useContext(GlobalContext);
  const [bloodSummary, setBloodSummary] = useState({});
  const [bookingRequests, setBookingRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookingStats, setBookingStats] = useState({
    total: 0,
    reserved: 0,
    expired: 0,
  });

  useEffect(() => {
    if (!state.token) return;

    const res = decodeToken(state.token);
    const userID = res?.userID;
    console.log("organizationID: ", userID);

    const fetchUserData = async () => {
      try {
        const userRes = await axios.get("http://localhost:8000/api/user/loggedUser", {
          headers: { Authorization: `Bearer ${state.token}` },
        });

        const userData = userRes.data.user;
        if (userData?.role === "organization") {
          const summary = userData.bloodInventory.reduce((acc, item) => {
            acc[item.bloodType] = (acc[item.bloodType] || 0) + item.quantity;
            return acc;
          }, {});
          setBloodSummary(summary);
        }

        const bookingRes = await axios.get(`http://localhost:8000/api/get-bookings/${userID}`, {
          headers: { Authorization: `Bearer ${state.token}` },
        });

        setBookingRequests(bookingRes.data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [state.token]); // Ensure token is available before making requests

  useEffect(() => {
    if (bookingRequests.length > 0) {
      setBookingStats({
        total: bookingRequests.length,
        reserved: bookingRequests.filter((b) => b.status === "Reserved").length,
        expired: bookingRequests.filter((b) => b.status === "Expired").length,
      });
    }
  }, [bookingRequests]); // Recalculate stats whenever bookings update

  const data = {
    labels: ["Total Bookings", "Reserved", "Expired"],
    datasets: [
      {
        label: "Bookings",
        data: [bookingStats.total, bookingStats.reserved, bookingStats.expired],
        backgroundColor: ["#3498db", "#2ecc71", "#e74c3c"],
        borderWidth: 1,
      },
    ],
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mt-3 w-full px-3">
        {Object.keys(bloodSummary).length > 0 ? (
          Object.entries(bloodSummary).map(([bloodType, quantity]) => (
            <div key={bloodType} className="bg-red text-white text-center p-3 rounded-md w-[32%] min-w-[250px]">
              <h2 className="text-xl font-bold">{bloodType}</h2>
              <p>{quantity} units</p>
            </div>
          ))
        ) : (
          <p>No blood inventory available.</p>
        )}
      </div>
    

      <div className="w-full flex  p-6  mt-2 justify-center items-center">
        <div className="w-2/3">
          <Bar data={data} />
        </div>

        {/* <div w-full>
         <div>
         <Doughnut data={data} />
         </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
