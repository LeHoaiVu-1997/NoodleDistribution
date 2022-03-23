import {createAction} from '@reduxjs/toolkit';

export const getUser = createAction<string>('getUser');
export const getNoodleMachineStatus = createAction('getNoodleMachineStatus');
