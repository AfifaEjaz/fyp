import React, { useState, useEffect, useContext } from "react";
import { decodeToken } from "react-jwt";
import { GlobalContext } from "../../Context/login/context.jsx";
import axios from "axios";
import { MdModeEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const BookingRequest = () => {
  const { state, dispatch } = useContext(GlobalContext);
  console.log(state.token);
  const res = decodeToken(state.token);
  console.log("organizationID: ", res.userID);

  const [bookingRequests, setBookingRequests] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/get-bookings/${res.userID}`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then((res) => setBookingRequests(res.data))
      .catch((err) => console.log(err.message));
  }, []);


  const deleteBooking = (bookingID) => {
    axios
      .post(
        `http://localhost:8000/api/booking/delete/${bookingID}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      )
      .then((res) => {
        setBookingRequests(res.data.booking);
        alert("Booking Deleted Successfully");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <div className="p-3">
        <div className="flex justify-between items-center">
          <h2 className="text-black text-lg font-bold pb-2">Bookings</h2>
        </div>
        <hr />
      </div>
      <div className="p-3">
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full border-collapse border border-gray-300 bg-white rounded-lg">
            <thead className="text-black text-lg text-center">
              <tr>
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Blood Type</th>
                <th className="border border-gray-300 p-2">Quantity</th>
                <th className="border border-gray-300 p-2">Status</th>
                <th className="border border-gray-300 p-2">Expired at</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookingRequests.map((booking, key) => (
                <tr
                  key={key}
                  className="border border-gray-300 hover:bg-gray-100 transition duration-200 even:bg-gray-50"
                >
                  <td className="border border-gray-300 p-3 text-center">
                    {key + 1}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {booking.username}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {booking.useremail}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {booking.bloodType}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {booking.quantity}
                  </td>
                  <td
                    className={`border border-gray-300 p-2 text-center font-medium ${
                      booking.status === "Reserved"
                        ? "text-blue-600"
                        : booking.status === "Expired"
                        ? "text-red"
                        : "bg-green-500"
                    }`}
                  >
                    {booking.status}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {booking.expiresAt}
                  </td>
                  <td className="border border-gray-300 p-2 flex justify-center gap-3">
                    <button
                      className="p-2 bg-red text-white rounded-md shadow-md hover:bg-red-600 transition"
                      onClick={() => deleteBooking(booking._id)}
                    >
                      <MdDeleteForever size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BookingRequest;
