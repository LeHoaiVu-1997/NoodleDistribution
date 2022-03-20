import {RootRepository} from './../repositories/repositories';
import {GetUserResult} from './../entities/entities';
import {UseCase} from './../../core/usecase/usecase';
import {Observable} from 'rxjs';
import {injectable, inject} from 'tsyringe';

@injectable()
export class GetUserUseCase implements UseCase<GetUserResult, any> {
  constructor(
    @inject('RootRepository')
    private readonly repository: RootRepository,
  ) {}
  call(param?: any): Observable<GetUserResult> {
    return this.repository.getUser(param);
  }
}
