import {Epic, combineEpics} from 'redux-observable';
import {of, concat} from 'rxjs';
import {filter, switchMap, map, catchError} from 'rxjs/operators';
import {GetUserUseCase} from '../../domain/usecases/GetUser.usecase';
import {container} from 'tsyringe';
import {getNoodleMachineStatus, getUser} from './actions';
import {
  getNoodleMachineStatusBegin,
  getNoodleMachineStatusFailed,
  getNoodleMachineStatusSuccess,
  getUserBegin,
  getUserFailed,
  getUserSuccess,
} from './slice';
import {GetNoodleMachineStatusUseCase} from '../../domain/usecases/GetNoodleMachineStatus.usecase';

const GetUserEpic: Epic = action$ => {
  return action$.pipe(
    filter(getUser.match),
    switchMap(action => {
      let usecase = container.resolve<GetUserUseCase>('GetUserUseCase');
      return concat(
        of(getUserBegin()),
        usecase.call(action.payload).pipe(
          map(res => {
            if (res.success === true) {
              return getUserSuccess(res.user);
            } else {
              return getUserFailed();
            }
          }),
          catchError(() => of(getUserFailed())),
        ),
      );
    }),
  );
};

const GetNoodleMachineStatusEpic: Epic = action$ => {
  return action$.pipe(
    filter(getNoodleMachineStatus.match),
    switchMap(action => {
      let usecase = container.resolve<GetNoodleMachineStatusUseCase>(
        'GetNoodleMachineStatusUseCase',
      );
      return concat(
        of(getNoodleMachineStatusBegin()),
        usecase.call().pipe(
          map(res => {
            if (res.success === true) {
              return getNoodleMachineStatusSuccess(res.data);
            } else {
              return getNoodleMachineStatusFailed();
            }
          }),
          catchError(() => of(getNoodleMachineStatusFailed())),
        ),
      );
    }),
  );
};

export {GetUserEpic, GetNoodleMachineStatusEpic};
export const RootEpic = combineEpics(GetUserEpic, GetNoodleMachineStatusEpic);
