import {RootRepository} from './../repositories/repositories';
import {GetNoodleMachineStatusResult} from './../entities/entities';
import {UseCase} from './../../core/usecase/usecase';
import {Observable} from 'rxjs';
import {injectable, inject} from 'tsyringe';

@injectable()
export class GetNoodleMachineStatusUseCase
  implements UseCase<GetNoodleMachineStatusResult, any>
{
  constructor(
    @inject('RootRepository')
    private readonly repository: RootRepository,
  ) {}
  call(param?: any): Observable<GetNoodleMachineStatusResult> {
    return this.repository.getNoodleMachineStatus();
  }
}
