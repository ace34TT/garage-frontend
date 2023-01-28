export const LSHUrlQueryGenerator = (object: any) => {
  let query =
    'page=' + (object.page || 1) + '&step=' + (object.step || 5) + '&';
  for (const [key, value] of Object.entries(object)) {
    if (key !== 'page' && key !== 'step') {
      for (const [operator, filterValue] of Object.entries(value as object)) {
        if (operator === 'in' || operator === 'nin') {
          if (filterValue.length !== 0)
            query = query + `${key}[${operator}]=${filterValue.toString()}&`;
        } else {
          query = query + `${key}[${operator}]=${filterValue}&`;
        }
      }
    }
  }
  return query;
};
