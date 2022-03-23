import {GetNoodleMachineStatusUseCase} from './../domain/usecases/GetNoodleMachineStatus.usecase';
import {GetUserUseCase} from './../domain/usecases/GetUser.usecase';
import {container} from 'tsyringe';

export function registerDataDependencies() {
  container.register('GetUserUseCase', {
    useClass: GetUserUseCase,
  });
  container.register('GetNoodleMachineStatusUseCase', {
    useClass: GetNoodleMachineStatusUseCase,
  });
}
