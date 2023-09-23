import jsonData from "../../services/data/data.json"
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "productsData",
  initialState: jsonData,
//   reducers: {},
});

export default dataSlice.reducer;
