import {RootRepositoryImpl} from './../data/repositories/repositoriesImpl';
import {container} from 'tsyringe';

export function registerRepositoryDependencies() {
  container.register('RootRepository', {
    useClass: RootRepositoryImpl,
  });
}
