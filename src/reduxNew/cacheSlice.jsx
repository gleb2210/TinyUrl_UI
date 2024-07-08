import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_SERVICE, CACHE_URL } from "../config/Config";

const initialState = {
  cacheItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getCacheItems = createAsyncThunk(
  "cache/getCacheItems",
  async (param, thunkAPI) => {
    try {
      console.log(thunkAPI.getState());
      const resp = await axios.get(CACHE_URL);
      return resp.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const addCacheItem = createAsyncThunk(
  "cache/addCacheItem",
  async (param, thunkAPI) => {
    try {
      console.log(thunkAPI.getState());
      console.log(param);
      const resp = await axios.post(URL_SERVICE, { Url: param });
      return resp.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const deleteCacheItem = createAsyncThunk(
  "cache/deleteCacheItem",
  async (param, thunkAPI) => {
    try {
      console.log(thunkAPI.getState());
      console.log(param);
      const resp = await axios.delete(param);
      return resp.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const cacheSlice = createSlice({
  name: "cache",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCacheItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCacheItems.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.cacheItems = action.payload;
      })
      .addCase(getCacheItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      })
      .addCase(addCacheItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCacheItem.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.cacheItems = [...state.cacheItems, action.payload];
      })
      .addCase(addCacheItem.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      })
      .addCase(deleteCacheItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCacheItem.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        const deletedUrl = action.payload;
        state.cacheItems = state.cacheItems.filter(
          (item) => item.id !== deletedUrl.id
        );
      })
      .addCase(deleteCacheItem.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const { clearCart, removeItem, increase, decrease } = cacheSlice.actions;

export default cacheSlice.reducer;
