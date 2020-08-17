type InputObj = {
  something: string;
};

type OutputObj = InputObj & {
  myValue: number;
};

const myFn = (obj: InputObj): OutputObj => {
  const myValue = 3;
  const result = { ...obj, myValue };

  return result;
};

myFn({ something: 'cool' });
