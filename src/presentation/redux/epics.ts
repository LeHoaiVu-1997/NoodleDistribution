import {Epic, combineEpics} from 'redux-observable';
import {of, concat} from 'rxjs';
import {filter, switchMap, map, catchError} from 'rxjs/operators';
import {GetUserUseCase} from '../../domain/usecases/GetUser.usecase';
import {container} from 'tsyringe';
import {getUser} from './actions';
import {getUserBegin, getUserFailed, getUserSuccess} from './slice';

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

export {GetUserEpic};
export const RootEpic = combineEpics(GetUserEpic);
