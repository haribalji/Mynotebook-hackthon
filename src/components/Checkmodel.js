import React, { useState, useEffect } from "react";
import { Modal, Button, Form, ListGroup } from "react-bootstrap";
import axios from "axios";
// const axios=require('axios');

const ChecklistModal = ({ show, handleClose, userId, classNumber, subject, chapter }) => {
  const [checklist, setChecklist] = useState([]);
  const [newItem, setNewItem] = useState("");

  // ✅ Fetch Checklist
  useEffect(() => {
    if (show) {
      axios
        .get(`http://localhost:5000/api/checklists/${userId}/${classNumber}/${subject}/${chapter}`)
        .then((res) => setChecklist(res.data?.items || []))
        .catch((err) => console.error("Error fetching checklist:", err));
    }
  }, [show, userId, classNumber, subject, chapter]);

  // 📌 Add Item
  const addItem = () => {
    if (newItem.trim() === "") return;
    const updatedItems = [...checklist, { text: newItem, completed: false }];
    updateChecklist(updatedItems);
    setNewItem("");
  };

  // ✏️ Toggle Complete Status
  const toggleComplete = (index) => {
    const updatedItems = [...checklist];
    updatedItems[index].completed = !updatedItems[index].completed;
    updateChecklist(updatedItems);
  };

  // ❌ Remove Item
  const removeItem = (index) => {
    const updatedItems = checklist.filter((_, i) => i !== index);
    updateChecklist(updatedItems);
  };

  // 🚀 Update Checklist in Database
  const updateChecklist = (items) => {
    axios
      .put(`http://localhost:5000/api/checklists/${userId}/${classNumber}/${subject}/${chapter}`, { items })
      .then(() => setChecklist(items))
      .catch((err) => console.error("Error updating checklist:", err));
  };

  return (
   
    <Modal show={show} onHide={handleClose} centered>
      
      <Modal.Header closeButton className="bg-primary text-white">
  <Modal.Title className="fw-bold">
    📋 Checklist - {chapter} ({subject})
  </Modal.Title>
</Modal.Header>


      <Modal.Body className="bg-light">
        <ListGroup className="rounded shadow-sm">
          {checklist.length > 0 ? (
            checklist.map((item, index) => (
              <ListGroup.Item
                key={index}
                className={`d-flex justify-content-between align-items-center ${
                  item.completed ? "bg-success text-white" : "bg-white"
                } shadow-sm rounded my-2`}
                style={{ transition: "0.3s" }}
              >
                <Form.Check
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleComplete(index)}
                  label={item.text}
                  className="fw-medium"
                />
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeItem(index)}
                  className="rounded-circle"
                >
                  X
                </Button>
              </ListGroup.Item>
            ))
          ) : (
            <p className="text-muted text-center">No checklist items yet.</p>
          )}
        </ListGroup>

  

<Form.Control
  as="textarea"
  rows={3}
  placeholder="✍️ Add new item..."
  value={newItem}
  onChange={(e) => setNewItem(e.target.value)}
  className="mt-3 p-2 rounded shadow-sm"
/>

        <Button
          className="mt-2 w-100 fw-bold rounded shadow-sm"
          variant="primary"
          onClick={addItem}
          style={{ backgroundColor: "#007bff", border: "none" }}
        >
          ➕ Add Item
        </Button>
      </Modal.Body>

      <Modal.Footer className="bg-light">
        <Button
          variant="secondary"
          className="w-100 fw-bold shadow-sm"
          onClick={handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ChecklistModal;
