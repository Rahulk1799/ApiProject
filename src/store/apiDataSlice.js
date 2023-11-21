import { createSlice } from "@reduxjs/toolkit";

// By the below way you can fetch the api which is without the access token..
// export const fetchItems = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   // console.log(data);
//   return data;
// };

// By the below code you can fetch the api which has the access token..
export const fetchItems = async () => {
  const accessToken =
    "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzaG9wb20iLCJzdWIiOiI0OTQxNmY2ZC1kNDkwLTRiZWItOTVhNy1jNTAzY2ViMGFiYzIiLCJleHAiOjE3MDMxMzU2ODMsImlhdCI6MTY5OTI0NzY4M30.QU0M7IJ03SIfElQ8F1az8Jb7iRc2vxqEC4210oGLBf0LTeR9SsJuY_kJEHa1PGx33jDalhPkYrNM7yMQCpg0cgg5Cwcj4YMwWK1G0lnVLonMYwk62o53IYZAB6OV8gZ0lu1ou1nCBwxLiJuW1RUQRRItTdB-DewAXl85_npmGxYrj3HDxZMVWS5gVX6O78psr4eArYVm1mwymrMceNGnoLkg7R2PbQC9p1yz8p9-DHiPDDqGKRzcmbFGxLXUvkP7mDuQUv3niEtSrPuhT6JHphO6ILPojfj9gbRfV4mdX8tfYPnZmzJmsDIIc6Un93ol5SjCQFdP5zzzS6HR_BV3OA";
  const url = "http://192.168.1.51:8080/api/v2/catalogs";

  // Created headers with the access token
  const headers = new Headers({
    Authorization: `Bearer ${accessToken}`,
  });

  try {
    const response = await fetch(url, { headers });
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

const apiDataSlice = createSlice({
  name: "apidata",
  initialState: {
    usersList: [],
  },
  reducers: {
    showApiData(state, action) {
      state.usersList = action.payload;
    },
  },
});
export const apiActions = apiDataSlice.actions;
export default apiDataSlice;
