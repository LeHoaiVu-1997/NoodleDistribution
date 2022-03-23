import {RootRepository} from './../../domain/repositories/repositories';
import {from, Observable} from 'rxjs';
import {
  GetNoodleMachineStatusResult,
  GetUserResult,
} from '../../domain/entities/entities';
import {getNoodleMachineStatus, getUser} from '../providers/FirebaseAPI';

export class RootRepositoryImpl implements RootRepository {
  getNoodleMachineStatus(): Observable<GetNoodleMachineStatusResult> {
    return from(getNoodleMachineStatus());
  }
  getUser(id: string): Observable<GetUserResult> {
    return from(getUser(id));
  }
}
