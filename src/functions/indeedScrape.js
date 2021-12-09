import firebase from '../firebase';

const indeed = require('indeed-scraper');
const { nanoid } = require('nanoid');


const queryOptions = {
  host: 'www.indeed.com',
  query: 'front end react',
  city: 'remote',
  level: 'entry_level',
  jobType: 'fulltime',
  maxAge: '7',
  sort: 'salary',
  limit: 5
};

function getData() {
  indeed.query(queryOptions).then(res => {
    // console.log(res);

    res.forEach(jobObj => {
      jobObj.id = nanoid()
      // const dbRef = admin.database().ref(`indeed-scrape/${jobObj.id}`);
    })

    const dbRef = firebase.database().ref(`indeed-scrape2`);
    dbRef.update(res)
    console.log(res);

  });
}

export default getData;



