import { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { GlobalContext } from "../../Context/login/context";
import { decodeToken } from "react-jwt";
import Form from "react-bootstrap/Form";
import axios from "axios";

const AddBlood = ({ setBloodInventory }) => {
  const { state } = useContext(GlobalContext);

  const [bloodType, setBloodType] = useState("");
  const [bloodQuantity, setBloodQuantity] = useState("");
  const [error, setError] = useState(null); // State for handling errors

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const res = decodeToken(state.token);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!bloodType || !bloodQuantity || isNaN(bloodQuantity) || bloodQuantity <= 0) {
      setError("Please provide valid blood type and quantity.");
      return;
    }

    const payload = {
      bloodType,
      quantity: Number(bloodQuantity), // Convert to number
    };

    setError(null); // Reset error state

    try {
      const response = await axios.post(
        "http://localhost:8000/api/create-bloodinventory",
        payload,
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      
      setBloodInventory(response.data.bloodInventory);
      alert("Blood has been added successfully!");
      handleClose();
      setBloodQuantity("");
      setBloodType(""); // Reset blood type after successful submission
    } catch (err) {
      console.error(err);
      setError("Failed to add blood. Please try again.");
    }
  };

  return (
    <>
      <button
        className="bg-red text-white cursor-pointer p-2 mb-2 rounded"
        onClick={handleShow}
      >
        Add Blood
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Blood</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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

            {error && <div className="text-red-500 text-sm mt-2">{error}</div>} {/* Display error */}

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
                Add Blood
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddBlood;
