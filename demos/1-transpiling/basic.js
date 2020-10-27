const myFn = (obj) => {
  const myValue = 3;
  const result = { ...obj, myValue };

  return result;
};

myFn({ something: 'cool' });
