import { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { GlobalContext } from "../../Context/login/context";
import { decodeToken } from "react-jwt";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { MdModeEdit } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const UpdateBlood = ({ setBloodInventory,  bID }) => {
  const { state } = useContext(GlobalContext);

  const [bloodType, setBloodType] = useState("");
  const [bloodQuantity, setBloodQuantity] = useState("");
  const [error, setError] = useState(null); // State for handling errors

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const res = decodeToken(state.token);

  console.log(bID);
  const notifySuccess = () => {
    toast.success("Blood has been Added successfully!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !bloodType ||
      !bloodQuantity ||
      isNaN(bloodQuantity) ||
      bloodQuantity <= 0
    ) {
      setError("Please provide valid blood type and quantity.");
      return;
    }

    const payload = {
      bloodType,
      quantity: Number(bloodQuantity), // Convert to number
    };

    console.log(payload);

    setError(null); // Reset error state

    // try {
    //   const response = await axios.post(
    //     "http://localhost:8000/api/create-bloodinventory",
    //     payload,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${state.token}`,
    //       },
    //     }
    //   );
    //   console.log(response.data.bloodInventory);

    //   setBloodInventory(response.data.bloodInventory);

    //   notifySuccess();
    //   setTimeout(() => {
    //     handleClose();
    //   }, 2000); // Ensuring the loading state is at least 3 seconds before error

    //   setBloodQuantity("");
    //   setBloodType(""); // Reset blood type after successful submission
    // } catch (err) {
    //   console.error(err);
    //   setError("Failed to add blood. Please try again.");
    // }
  };

  return (
    <>
      <button
        className="p-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition"
        onClick={handleShow}
      >
        <MdModeEdit size={20} />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Blood</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Toaster position="top-center" reverseOrder={false} />
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
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
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
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}{" "}
            {/* Display error */}
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
                Update
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateBlood;
