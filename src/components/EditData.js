import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editItems } from "../store/editDataSlice";

var name;
var description;
var id;

export const getId = (names, descriptions, Id) => {
  name = names;
  description = descriptions;
  id = Id;
};
export default function EditData() {
  const [editData, setEditData] = useState({
    name: "",
    description: "",
    image:
      "https://brookconcrete.com/wp-content/uploads/2020/12/Building-materials-suppliers-in-Nigeria-300x199.jpg",
  });

  const dispatch = useDispatch();

  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const handleInputNameChange = (e) => {
    setNewName(e.target.value);
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };
  const handleInputDesChange = (e) => {
    setNewDescription(e.target.value);
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editItems(id, editData));
  };
  return (
    <div
      style={{ backgroundColor: "powderblue", width: "800px", height: "500px" }}
    >
      <h2 style={{ paddingTop: "10px", marginLeft: "10px" }}>Edit the Data</h2>
      <form method="POST" onSubmit={handleSubmit}>
        <div style={{ marginLeft: "10px" }}>
          <div>
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              id="name"
              value={newName}
              onChange={handleInputNameChange}
              required
              style={{ width: "300px", height: "30px", marginLeft: "50px" }}
            />
          </div>
          <div>
            <label htmlFor="description">Description :</label>
            <input
              type="text"
              placeholder="Description"
              name="description"
              id="description"
              value={newDescription}
              onChange={handleInputDesChange}
              required
              style={{
                width: "300px",
                height: "30px",
                marginTop: "2px",
                marginLeft: "10px",
              }}
            />
          </div>
          <div>
            <button
              className="btn btn-primary"
              type="submit"
              style={{
                width: "100px",
                height: "40px",
                marginLeft: "200px",
                marginTop: "5px",
              }}
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
