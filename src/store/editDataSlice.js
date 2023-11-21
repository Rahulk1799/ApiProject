import { createSlice } from "@reduxjs/toolkit";

// By the below code you can fetch the api which has the access token..
export const editItems = async (itemId, editData) => {
  const accessToken =
    "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzaG9wb20iLCJzdWIiOiI0OTQxNmY2ZC1kNDkwLTRiZWItOTVhNy1jNTAzY2ViMGFiYzIiLCJleHAiOjE3MDMzMTUxNjAsImlhdCI6MTY5OTQyNzE2MH0.RX19yJSDvUkX-quWBh_72Q6JwHu0YMurH3H4Vr8eliDO0P2DboAX5hJmAFKa32442NxpBRwzxLm3OVnVFxYb4sPluuRV7bVuarycq06-_vo38eKHa9FbrmCqWfg43uCgx0tKio3LLjX58FXQ_fBPsLiZKyWXWRdmJAQ6T2yMwXlb5hckdPOaTDiiffrPrVAybrb08Z7bbclEHEbAlnhi2Yjw0nnQleEIAU2kI7DIfcy4An_iyrIdAu20qKaB0kyn1bTOtlGHt48cNFaEh9TDd1LsJJvQcfq8mOWMqH5uWhOfe_ER2pGPpjkGcKSsfc9xwpcnzGvXkhRdRvpoP4K43g";
  const url = `http://192.168.1.51:8080/api/v2/catalogs/${itemId}`;

  // Created headers with the access token
  const headers = new Headers({
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  });

  const response = await fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(editData),
  });

  if (!response.ok) {
    // Here I have handled the error  if the response is not okay
    throw new Error("Failed to edit the item");
  }

  return { itemId }; //Here Returning the ID of the deleted item
};

const editDataSlice = createSlice({
  name: "editdata",
  initialState: [],
  reducers: {},
});

export const editActions = editDataSlice.actions;
export default editDataSlice;
