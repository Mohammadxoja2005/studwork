import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_PATH } from "../../tools/constants";
import axios from "axios";

const accessToken = localStorage.getItem("accessToken");
const userIndex = localStorage.getItem("userIndex");


export const getProfile = createAsyncThunk('accounts/getprofile', (userId) => {

  return axios.get(`${API_PATH}accounts/rud-myaccount/${userId}`, {
    headers: {
      Authorization: `Token ${accessToken}`
    }
  })
    .then((response) => {
      return response.data;
    })
})


export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: [],
    loading: false
  },

  reducers: {
    updateProfile: (state, action) => {
      const data = action.payload;

      try {
        axios.patch(`${API_PATH}accounts/rud-myaccount/${userIndex}/`, data)
          .then((response) => {
            console.log(response);
            window.location.reload();
          }).catch((error) => {
            console.log(error);
          })
      } catch (error) {
        console.log('error from try and catch', error);
      }
    },

    updateProfilePassword: (state, action) => {
      const data = action.payload;
      try {
        axios.put(`${API_PATH}/accounts/change-password/${userIndex}/`, data)
          .then((response) => {
            console.log(response);
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          })
      } catch (error) {
        console.log('error from try and catch', error);
      }
    }
  },

  extraReducers: {
    [getProfile.pending]: (state, action) => {
      state.loading = false;
    },
    [getProfile.fulfilled]: (state, action) => {
      state.loading = true;
      state.profile = action.payload;
    },
    [getProfile.rejected]: (state, action) => {
      state.loading = false;
    }
  },

})

export const { updateProfile, updateProfilePassword } = profileSlice.actions;
export default profileSlice.reducer;