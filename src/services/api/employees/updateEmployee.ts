import client from '../client';

async function updateEmployee(id: number, status: number) {
  await client.patch(`/employees/${id}`, { status });
}

export default updateEmployee;
