export default function getHealth(data) {
  let result = '';

  if (data.health > 50) {
    result = 'healthy';
  } else if (data.health < 15) {
    result = 'critical';
  } else {
    result = 'wounded';
  }

  return result;
}
