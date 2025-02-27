import { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { GlobalContext } from "../../Context/login/context";
import { decodeToken } from "react-jwt";
import Form from "react-bootstrap/Form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const BookBloodModal = ({ bloodInventory, organizationID }) => {
  const { state } = useContext(GlobalContext);

  const [bloodType, setBloodType] = useState("");
  const [bloodQuantity, setBloodQuantity] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const res = decodeToken(state.token);
  const userID = res?.userID;
  const username = res?.name;
  const useremail = res?.email;

  const notifySuccess = () => {
    toast.success("Booking has been done successfully!");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Blood Quantity Requested:", bloodQuantity);

    if (!organizationID) {
      console.error("Error: Organization ID is missing.");
      return;
    }

    const payload = {
      username,
      useremail,
      bloodType,
      quantity: Number(bloodQuantity), // Convert to number
    };

    try {
      const response = await axios.post(
        `http://localhost:8000/api/create-booking/${organizationID}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      console.log(response.data);

      notifySuccess();
      setTimeout(() => {
        handleClose();
      }, 2000); // Ensuring the loading state is at least 3 seconds before error

      setBloodQuantity(""); // Clear input
    } catch (err) {
      console.error(
        "Booking Error:",
        err.response?.data?.message || err.message
      );
    }
  };

  return (
    <>
      <button
        className="bg-red text-white cursor-pointer p-2 rounded"
        onClick={handleShow}
      >
        Book Blood
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Get Blood</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Toaster position="top-center" reverseOrder={false} />
          <p>Your Booking will get expire after one hour</p>
          <form onSubmit={handleSubmit} className="p-3">
            <Form.Select
              className="w-100"
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Blood Group...
              </option>
              {bloodInventory.map((blood, key) => (
                <option key={key} value={blood.bloodType}>
                  {blood.bloodType}
                </option>
              ))}
            </Form.Select>

            <input
              className="border w-full p-2 rounded mt-3 mb-3"
              type="number"
              min="1"
              placeholder="Enter quantity"
              value={bloodQuantity}
              onChange={(e) => setBloodQuantity(e.target.value)}
              required
            />

            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="bg-gray-500 text-white cursor-pointer p-2 rounded"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-red text-white cursor-pointer p-2 rounded"
              >
                Book Blood
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BookBloodModal;
