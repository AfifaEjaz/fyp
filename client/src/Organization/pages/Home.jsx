import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../../Context/login/context.jsx";

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [bloodSummary, setBloodSummary] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user/loggedUser", {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        const userData = res.data.user; // Extract user data
        if (userData && userData.role === "organization") {
          const bloodSummary = userData.bloodInventory.reduce((acc, item) => {
            acc[item.bloodType] = (acc[item.bloodType] || 0) + item.quantity;
            return acc;
          }, {});
          console.log(bloodSummary);
          setBloodSummary(bloodSummary);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mt-3 w-full px-3">
        {Object.keys(bloodSummary).length > 0 ? (
          Object.entries(bloodSummary).map(([bloodType, quantity]) => (
            <div
              key={bloodType}
              className="bg-red text-white text-center p-4 rounded-md w-[32%] min-w-[250px]"
            >
              <h2 className="text-xl font-bold">{bloodType}</h2>
              <p>{quantity} units</p>
            </div>
          ))
        ) : (
          <p>No blood inventory available.</p>
        )}
      </div>
    </>
  );
};

export default Home;
