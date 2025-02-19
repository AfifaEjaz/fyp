import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../../Context/login/context";
import { MdModeEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import AddBlood from "../components/AddBlood";

const BloodInventory = () => {
  const { state } = useContext(GlobalContext);
  const [bloodInventory, setBloodInventory] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    setLoading(true); // Set loading to true when data fetch begins

    axios
      .get("http://localhost:8000/api/get-all-bloodinventory", {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then((res) => {
        setBloodInventory(res.data.bloodInventory);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false); // Set loading to false in case of an error
      });
  }, [state.token]); // Ensure to reload data if token changes

  const updateBloodInventory = (bloodInventoryID) => {
    console.log(bloodInventoryID);
    // Update logic here
  };

  const deleteBloodInventory = (bloodInventoryID) => {
    axios
      .post(
        `http://localhost:8000/api/bloodInventory/delete/${bloodInventoryID}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      )
      .then((res) => {
        setBloodInventory(res.data.bloodInventory);
        alert("Blood Inventory Deleted Successfully");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <div className="p-3">
        <div className="flex justify-between items-center">
          <h2 className="text-black text-lg font-bold">Blood Inventory</h2>
          <AddBlood setBloodInventory={setBloodInventory} />
        </div>
        <hr />
      </div>

      <div className="p-3">
        {loading ? ( // Show loading indicator when fetching data
          <div className="flex justify-center items-center">
            <div className="spinner-border text-red-500" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <table className="table-auto border-collapse border border-gray-400 w-full shadow-lg rounded-lg overflow-hidden">
            {/* Table Header */}
            <thead className="bg-red-500 text-black text-lg text-center">
              <tr>
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Blood Type</th>
                <th className="border border-gray-300 p-2">Quantity</th>
                <th className="border border-gray-300 p-2">Date</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {bloodInventory.map((binventory, key) => (
                <tr key={key} className="bg-white hover:bg-gray-100 transition">
                  <td className="border border-gray-300 p-2 text-center">
                  {key + 1}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {binventory.bloodType}
                  </td>
                  <td className="border border-gray-300 p-2 text-center font-bold">
                    {binventory.quantity} units
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {new Date(binventory.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 p-2 flex justify-center gap-3">
                    <button
                      className="p-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition"
                      onClick={() => updateBloodInventory(binventory._id)}
                    >
                      <MdModeEdit size={20} />
                    </button>
                    <button
                      className="p-2 bg-red text-white rounded-md shadow-md hover:bg-red-600 transition"
                      onClick={() => deleteBloodInventory(binventory._id)}
                    >
                      <MdDeleteForever size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default BloodInventory;
