import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  //connect to the jate database we created
  const jateDb = await openDB('jate', 1);
  //create a new transaction, and specify the db and the data privileges
  //in this case, we want readwrite because we want to be able to write new info
  const transac = jateDb.transaction('jate', 'readwrite');
  //open the object store for this db
  const store = transac.objectStore('jate');
  //use .add() to pass the content into the store as a key:value pair
  const request = store.add({content: content});

  const result = await request;
  console.log("Data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  //connect to the db
  const jateDb = await openDB('jate', 1);
  //create a new transaction to the db
  //we only need read privileges to get the content existing in the db
  const transac = jateDb.transaction('jate', 'readonly');
  //open the object store
  const store = transac.objectStore('jate');
  //.getAll() gets all of the data in the db
  const request = store.getAll();

  const result = await request;
  console.log('request.value', result);
  return result;
};

//start the database
initdb();
