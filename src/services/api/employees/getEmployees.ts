import client from '../client';
import { IEmployee } from '../../../types/employee';

async function getEmployees(): Promise<IEmployee[]> {
  const { data } = await client.get('/employees');

  return data;
}

export default getEmployees;
