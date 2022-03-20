import {RootRepository} from './../../domain/repositories/repositories';
import {from, Observable} from 'rxjs';
import {GetUserResult} from '../../domain/entities/entities';
import {getUser} from '../providers/FirebaseAPI';

export class RootRepositoryImpl implements RootRepository {
  getUser(id: string): Observable<GetUserResult> {
    return from(getUser(id));
  }
}
