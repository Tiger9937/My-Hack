import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: {
    imageLink: [],
    title: [],
    about: [],
    organizationName: [],
    location: [],
    timeDuration: [],
    dateStartEnd: [],
    rewards: [],
    onlineOffline: []
  }
};

const showingDataSlice = createSlice({
  name: 'showingData',
  initialState,
  reducers: {
    setImageLink: (state, action) => {
      // Update state with image link
      state.userData.imageLink = action.payload;
    },
    setTitle: (state, action) => {
      // Update state with title
      state.userData.title = action.payload;
    },
    setAbout: (state, action) => {
      // Update state with about
      state.userData.about = action.payload;
    },
    setOrganizationName: (state, action) => {
      // Update state with organization name
      state.userData.organizationName = action.payload;
    },
    setLocation: (state, action) => {
      // Update state with location
      state.userData.location = action.payload;
    },
    setTimeDuration: (state, action) => {
      // Update state with time duration
      state.userData.timeDuration = action.payload;
    },
    setDateStartEnd: (state, action) => {
      // Update state with date start end
      state.userData.dateStartEnd = action.payload;
    },
    setRewards: (state, action) => {
      // Update state with rewards
      state.userData.rewards = action.payload;
    },
    setStatus: (state, action) => {
      // Update state with status
      state.status = action.payload;
    },
    setOnlineOffline: (state, action) => {
      // Update state with online/offline status
      state.userData.onlineOffline = action.payload;
    },
  }
});

export const {
  setImageLink,
  setTitle,
  setAbout,
  setOrganizationName,
  setLocation,
  setTimeDuration,
  setDateStartEnd,
  setRewards,
  setStatus,
  setOnlineOffline
} = showingDataSlice.actions;

export default showingDataSlice.reducer;
