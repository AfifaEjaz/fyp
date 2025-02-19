import React, {useState, useEffect, useContext} from 'react'
import { decodeToken } from "react-jwt";
import {GlobalContext} from '../../Context/login/context.jsx'
import axios from 'axios'

const BookingRequest = () => {

  const { state, dispatch } = useContext(GlobalContext);
  console.log(state.token);
  const res = decodeToken(state.token)
  console.log("organizationID: ",res.userID);

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

  return (
   <>
    <div className="p-5">
        <table className="table-auto border-collapse border border-gray-400 w-100">
          <thead className="text-center">
            <tr>
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2 ">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Blood Type</th>
              <th className="border border-gray-300 p-2">Quantity</th>
              <th className="border border-gray-300 p-2">Status</th>
              <th className="border border-gray-300 p-2">Expired at</th>
            </tr>
          </thead>
          <tbody>
            {bookingRequests.map((booking, key) => (
              <tr key={key}>
                <td className="border border-gray-300 p-2">{booking._id}</td>
                <td className="border border-gray-300 p-2">{booking.username}</td>
                <td className="border border-gray-300 p-2">{booking.useremail}</td>
                <td className="border border-gray-300 p-2">{booking.bloodType}</td>
                <td className="border border-gray-300 p-2">{booking.quantity}</td>
                <td className="border border-gray-300 p-2">{booking.status}</td>
                <td className="border border-gray-300 p-2">{booking.expiresAt}</td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
   </>
  )
}

export default BookingRequest