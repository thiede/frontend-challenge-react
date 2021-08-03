import client from '../client';
import { IEmployee } from '../../../types/employee';

async function getEmployees() {
  return client.get<IEmployee[]>('/employees');
}

export default getEmployees;
