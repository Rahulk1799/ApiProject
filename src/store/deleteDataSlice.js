import { createSlice } from "@reduxjs/toolkit";

export const deleteItems = async (itemId) => {
  const accessToken =
    "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzaG9wb20iLCJzdWIiOiI0OTQxNmY2ZC1kNDkwLTRiZWItOTVhNy1jNTAzY2ViMGFiYzIiLCJleHAiOjE3MDMxMzU2ODMsImlhdCI6MTY5OTI0NzY4M30.QU0M7IJ03SIfElQ8F1az8Jb7iRc2vxqEC4210oGLBf0LTeR9SsJuY_kJEHa1PGx33jDalhPkYrNM7yMQCpg0cgg5Cwcj4YMwWK1G0lnVLonMYwk62o53IYZAB6OV8gZ0lu1ou1nCBwxLiJuW1RUQRRItTdB-DewAXl85_npmGxYrj3HDxZMVWS5gVX6O78psr4eArYVm1mwymrMceNGnoLkg7R2PbQC9p1yz8p9-DHiPDDqGKRzcmbFGxLXUvkP7mDuQUv3niEtSrPuhT6JHphO6ILPojfj9gbRfV4mdX8tfYPnZmzJmsDIIc6Un93ol5SjCQFdP5zzzS6HR_BV3OA";
  const url = `http://192.168.1.51:8080/api/v2/catalogs/${itemId}`;

  // Created headers with the access token
  const headers = new Headers({
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  });

  const response = await fetch(url, {
    method: "DELETE",
    headers,
  });

  if (!response.ok) {
    // Here I have handled the error  if the response is not okay
    throw new Error("Failed to delete item");
  }

  return itemId; //Here Returning the ID of the deleted item
};

const deleteDataSlice = createSlice({
  name: "deletedata",
  initialState: [],
  reducers: {},
});

export const deleteActions = deleteDataSlice.actions;
export default deleteDataSlice;
