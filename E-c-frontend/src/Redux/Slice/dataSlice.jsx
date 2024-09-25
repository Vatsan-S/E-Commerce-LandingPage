import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../Config/api_url";



// -------------------thunk fetch Products------------------
export const fetchProductList = createAsyncThunk(
  "data/fetchProductList",
  async () => {
    const response = await axios.get(`${API_URL}/api/product/list`);
console.log("response",response)
    return response.data.list;
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState: {
    product_list: [],
    
    status: "idle",
    
    filteredData: ["oil", "spice", "utilities", "devotional", "cooking", "cosmetics"],
  },
  reducers: {
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
    resetData : (state)=>{
      state.product_list = []
     
      state.status = 'idle'
      
      state.filteredData = ["oil", "spice", "utilities", "devotional", "cooking", "cosmetics"]
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.status = "Success";
        state.product_list = action.payload;
      })
      .addCase(fetchProductList.rejected, (state) => {
        state.status = "Failed";
      })
      
  },
});
export const {  setFilteredData, resetData} = dataSlice.actions
export default dataSlice.reducer;
