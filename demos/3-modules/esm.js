import fs from 'fs/promises';

const myFn = async () => {
  const fileName = 'test.txt';
  const content = 'Hello World :)';

  await fs.writeFile(fileName, content);
};

export const createFile = myFn;
