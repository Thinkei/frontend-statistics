const GetData = () => {
  const dataLocation = '../data';
  const fs = require('fs');
  const listFile = [];
  fs.readdirSync(dataLocation).forEach(file => {
    listFile.push(file);
  });

  return listFile;
};

export default GetData;
