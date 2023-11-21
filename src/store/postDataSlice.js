import { createSlice } from "@reduxjs/toolkit";

// By the below code you can fetch the api which has the access token..
export const postItems = async (formData) => {
  const accessToken =
    "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzaG9wb20iLCJzdWIiOiI0OTQxNmY2ZC1kNDkwLTRiZWItOTVhNy1jNTAzY2ViMGFiYzIiLCJleHAiOjE3MDMxMzU2ODMsImlhdCI6MTY5OTI0NzY4M30.QU0M7IJ03SIfElQ8F1az8Jb7iRc2vxqEC4210oGLBf0LTeR9SsJuY_kJEHa1PGx33jDalhPkYrNM7yMQCpg0cgg5Cwcj4YMwWK1G0lnVLonMYwk62o53IYZAB6OV8gZ0lu1ou1nCBwxLiJuW1RUQRRItTdB-DewAXl85_npmGxYrj3HDxZMVWS5gVX6O78psr4eArYVm1mwymrMceNGnoLkg7R2PbQC9p1yz8p9-DHiPDDqGKRzcmbFGxLXUvkP7mDuQUv3niEtSrPuhT6JHphO6ILPojfj9gbRfV4mdX8tfYPnZmzJmsDIIc6Un93ol5SjCQFdP5zzzS6HR_BV3OA";
  const url = "http://192.168.1.51:8080/api/v2/catalogs";

  // Created headers with the access token
  const headers = new Headers({
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    let parsedArray = [];
    parsedArray = data.data;
    //console.log(parsedArray);
    return parsedArray;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
const postDataSlice = createSlice({
  name: "postdata",
  initialState: [],
  reducers: {},
});

export const postActions = postDataSlice.actions;
export default postDataSlice;
