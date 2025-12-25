import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      console.log("🔐 LOGIN ACTION DISPATCHED:", action.payload);
      state.status = true;
      state.userData = action.payload.userData;
      console.log("✅ User logged in. State updated:", { status: state.status, userData: state.userData });
    },
    logout(state) {
      console.log("🚪 LOGOUT ACTION DISPATCHED");
      state.status = false;
      state.userData = null;
      console.log("✅ User logged out. State cleared.");
    }
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer;