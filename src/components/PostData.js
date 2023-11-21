import React from "react";
import { useDispatch } from "react-redux";
import { postItems } from "../store/postDataSlice";
import { useState } from "react";

export default function PostData() {
  // Here I have defined the form fields using React state so that we can set the data..
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image:
      "https://brookconcrete.com/wp-content/uploads/2020/12/Building-materials-suppliers-in-Nigeria-300x199.jpg",
  });

  //Here I have used the dispatch hooks to send the data to the store..
  const dispatch = useDispatch();

  //This method is used to handle the Form input changes..
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(postItems(formData));
  };
  return (
    <div
      className="container"
      style={{
        backgroundColor: "powderblue",
        width: "800px",
        height: "500px",
        marginLeft: "0px",
      }}
    >
      <form method="POST" onSubmit={handleOnSubmit}>
        <h2>Fill the Form</h2>
        <div>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            placeholder="Your name"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
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
            value={formData.description}
            onChange={handleInputChange}
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
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
