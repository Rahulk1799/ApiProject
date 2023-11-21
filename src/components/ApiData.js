import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiActions } from "../store/apiDataSlice";
import { fetchItems } from "../store/apiDataSlice";
import { useEffect } from "react";
import { deleteItems } from "../store/deleteDataSlice";
import { Link } from "react-router-dom";
import { getId } from "./EditData";

export default function ApiData() {
  //useSelector is used here to get the state's property from the store..
  //Destructuring of Object usersList which is got by the state[0] from the store..
  const { usersList } = useSelector((state) => state[0]);
  //console.log(usersList);

  //Here I have used the dispatch hooks to send the data to the store..
  const dispatch = useDispatch();

  const fetchData = async () => {
    //console.log(fetchItems());
    let x = await fetchItems();
    dispatch(apiActions.showApiData(x));
  };

  //Setting the image Paths..
  // const getimage = "https://d1km87hxuceqd6.cloudfront.net/store/";

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  const handleDelete = (imageId) => {
    //window.confirm("Are you sure! You want to delete this data?");
    //alert("Are you sure! You want to delete this data?");
    dispatch(deleteItems(imageId));
  };
  const handleEdit = (name, description, ID) => {
    //window.confirm("Do You want to edit this data?");
    getId(name, description, ID);
  };

  return (
    <div
      style={{
        backgroundColor: "powderblue",
        width: "70%",
      }}
    >
      <table>
        <thead>
          <tr>
            <th scope="col" style={{ paddingLeft: "80px" }}>
              Name
            </th>
            <th scope="col" style={{ paddingLeft: "80px" }}>
              Description
            </th>
            <th scope="col" style={{ paddingLeft: "80px" }}>
              ImageDetails
            </th>
            <th scope="col" style={{ paddingLeft: "80px" }}>
              Current Status
            </th>
            <th scope="col" style={{ paddingLeft: "80px" }}>
              Operations
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {usersList.map((element) => (
            <tr key={element.id}>
              <td style={{ paddingLeft: "80px" }}>
                <b>{element.name}</b>
              </td>
              <td style={{ paddingLeft: "80px" }}>{element.description}</td>
              <td style={{ paddingLeft: "80px" }}>
                <img
                  // src={getimage + element.image}
                  src={element.image}
                  alt=""
                  width={220}
                  // height={100}
                  style={{ paddingTop: "10px" }}
                />
              </td>
              <td style={{ paddingLeft: "80px" }}>
                <i> {element.current_status}</i>
              </td>
              <td style={{ paddingLeft: "50px" }}>
                <Link to={"/edit"}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginLeft: "12px" }}
                    onClick={() => {
                      handleEdit(element.name, element.description, element.id);
                    }}
                  >
                    Edit
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    handleDelete(element.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
