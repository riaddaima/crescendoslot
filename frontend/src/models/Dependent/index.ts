import API from '../../helpers/API';
import { DependentResponse, DependentRequest } from './request-helper';
import { KidI } from '../../pages/Dependents/reducer/state';

const DEPENDENT_ENDPOINT = '/dependents';

export class DependentAPI {
  static getList(): Promise<DependentResponse[]> {
    return API.get(
      DEPENDENT_ENDPOINT
    );
  }

  static get(uuid: number): Promise<DependentResponse> {
    return API.get(DEPENDENT_ENDPOINT, {
      params: {
        id: uuid,
      },
    });
  }

  static create(dependent: DependentRequest): Promise<DependentResponse> {
    return API.post(
      DEPENDENT_ENDPOINT,
      dependent
    )
  }

  static update(dependent: KidI): Promise<DependentResponse> {
    return API.put(
      DEPENDENT_ENDPOINT + '/' + dependent.id,
      dependent
    );
  }

  static delete(uuid: number): Promise<DependentResponse> {
    return API.delete(
      DEPENDENT_ENDPOINT + '/' + uuid
    );
  }
}