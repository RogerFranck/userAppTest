import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserInterface = {
  id:number;
  email:string;
  first_name: string;
  last_name: string;
  avatar: string;
}

type UserState = {
  users: UserInterface[];
  user: UserInterface | null
};

const initialState = {
  users: [],
  user: null
} as UserState;

export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: () => initialState,
    setUser: (state, action: PayloadAction<UserInterface[]>) => {
      state.users = action.payload;
    },
    setUserDetail: (state, action: PayloadAction<UserInterface>) => {
      state.user = action.payload;
    },
    addUser: (state, action: PayloadAction<UserInterface>) => {
      state.users = [...state.users, action.payload];
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((x)=>x.id != action.payload);
    },
    updateUser:(state, action: PayloadAction<UserInterface>) => {
      state.users = state.users.map((usr) =>
        usr.id === action.payload.id ? action.payload : usr
      );
    },
  },
});

export const {
  setUser,
  setUserDetail,
  addUser,
  deleteUser,
  updateUser,
  reset,
} = users.actions;

export default users.reducer;
