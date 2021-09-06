import client from '../client';

async function updateEmployee(id: number, status: number) {
  console.log('kt params id', id);
  console.log('kt params status', status);
  await client.patch(`/employees/${id}`, { status });
}

export default updateEmployee;
