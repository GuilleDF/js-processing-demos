const fs = require('fs/promises');

const myFn = async () => {
  const fileName = 'test.txt';
  const content = 'Hello World :)';

  await fs.writeFile(fileName, content);
};

module.exports = {
  createFile: myFn,
};
