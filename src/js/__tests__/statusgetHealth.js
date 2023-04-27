import getHealth from '../statusgetHealth';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 50 }, 'wounded'],
  [{ name: 'Маг', health: 10 }, 'critical'],
])('testing name %s, with %s health', (obj, status) => {
  const result = getHealth(obj);
  expect(status).toBe(result);
});
