import {
  GetNoodleMachineStatusResult,
  Information,
  NoodleMachineStatus,
} from './../../domain/entities/entities';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const INITIAL_STATE = {
  user: {
    avatar_uri: '',
    DOB: '',
    gender: '',
    full_name: '',
    department: '',
  },
  user_id_error: false,
  isGettingUser: false,
  amount: 0,
  cups_status: [],
  isGettingMachineStatus: false,
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
      state.user_id_error = true;
    },
    resetIDError: state => {
      state.user_id_error = false;
    },
    getNoodleMachineStatusBegin: state => {
      state.isGettingMachineStatus = true;
    },
    getNoodleMachineStatusSuccess: (
      state,
      action: PayloadAction<NoodleMachineStatus>,
    ) => {
      state.isGettingMachineStatus = false;
      state.amount = action.payload.amount;
      state.cups_status = action.payload.cups_status;
      console.log('payload: ', action.payload);
    },
    getNoodleMachineStatusFailed: state => {
      state.isGettingMachineStatus = false;
    },
    setAmount: (state, action: PayloadAction<number>) => {
      if (action.payload > 0) {
        state.amount = action.payload;
      } else {
        state.amount = 0;
      }
    },
    reset: () => INITIAL_STATE,
  },
});

export const {
  getUserBegin,
  getUserSuccess,
  getUserFailed,
  getNoodleMachineStatusBegin,
  getNoodleMachineStatusSuccess,
  getNoodleMachineStatusFailed,
  resetIDError,
  setAmount,
  reset,
} = rootSlice.actions;
export default rootSlice.reducer;
