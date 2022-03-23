import {
  GetNoodleMachineStatusResult,
  GetUserResult,
} from './../entities/entities';
import {Observable} from 'rxjs';

export interface RootRepository {
  getUser(id: string): Observable<GetUserResult>;
  getNoodleMachineStatus(): Observable<GetNoodleMachineStatusResult>;
}
