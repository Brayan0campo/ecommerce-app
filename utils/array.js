export const objectToArray = (object) => {
  if (!object) return [];
  return Object.keys(object).map((key) => ({ id: key, ...object[key] }));
};
