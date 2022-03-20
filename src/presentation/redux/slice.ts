import {Information} from './../../domain/entities/entities';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const INITIAL_STATE = {
  user: {
    avatar_uri: '',
    DOB: '',
    gender: '',
    full_name: '',
    department: '',
  },
  isGettingUser: false,
};

const rootSlice = createSlice({
  name: 'rootSlice',
  initialState: INITIAL_STATE,
  reducers: {
    getUserBegin: state => {
      state.isGettingUser = true;
    },
    getUserSuccess: (state, action: PayloadAction<Information>) => {
      state.isGettingUser = false;
      state.user = action.payload;
    },
    getUserFailed: state => {
      state.isGettingUser = false;
    },
  },
});

export const {getUserBegin, getUserSuccess, getUserFailed} = rootSlice.actions;
export default rootSlice.reducer;
