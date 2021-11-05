export default function orderByProps(obj, order) {
  const inputObject = { ...obj };
  const result = [];

  order.forEach((item) => {
    for (const prop in inputObject) {
      if (item === prop) {
        result.push({ key: prop, value: obj[prop] });
        delete inputObject[prop];
      }
    }
  });

  const keysOrderInRest = Object.keys(inputObject);

  if (keysOrderInRest.length > 0) {
    keysOrderInRest.sort();
    keysOrderInRest.forEach((item) => {
      result.push({ key: item, value: obj[item] });
    });
  }
  return result;
}
