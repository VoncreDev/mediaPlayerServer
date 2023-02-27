const fs = require('fs');
var databases = fs.readDirSync('./database');

function openDB(dbName) {
  if (databases.includes(dbName)) {
    console.log('omg');
  }
}

module.exports = {
  openDatabase: openDB,
};
