export interface Information {
  avatar_uri: string;
  DOB: string;
  gender: string;
  full_name: string;
  department: string;
}

export interface GetUserResult {
  success: boolean;
  user?: Information;
  note?: string;
}

export interface NoodleMachineStatus {
  amount: number;
  cups_status: boolean[];
}

export interface GetNoodleMachineStatusResult {
  success: boolean;
  data?: NoodleMachineStatus;
  note?: string;
}
