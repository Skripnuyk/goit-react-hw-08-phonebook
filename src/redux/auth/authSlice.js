import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
};

const handlerPending = (state, action) => {
    state.isLoading = true;
};

const handlerFulfilled = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
    state.isLoading = false;
};

const handlerRejected = (state, action) => {
    state.isLoading = false;
};

const logOutFulfilled = (state, action) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
    state.isLoading = false;
};

const refreshUseFulfilled = (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
    state.isLoading = false;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, handlerPending)
      .addCase(register.fulfilled, handlerFulfilled)
      .addCase(register.rejected, handlerRejected)
      .addCase(logIn.pending, handlerPending)
      .addCase(logIn.fulfilled, handlerFulfilled)
      .addCase(logIn.rejected, handlerRejected)
      .addCase(logOut.pending, handlerPending)
      .addCase(logOut.fulfilled, logOutFulfilled)
      .addCase(logOut.rejected, handlerRejected)
      .addCase(refreshUser.pending, handlerPending)
            .addCase(refreshUser.fulfilled, refreshUseFulfilled)
    .addCase(refreshUser.rejected, handlerRejected),
});

export const authReducer = authSlice.reducer;