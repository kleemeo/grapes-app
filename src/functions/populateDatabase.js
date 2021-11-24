export const populateDatabase = () => {
  const dbRef = firebase.database().ref('job-data');

  fetch('./data.json')
    .then(res => res.json())
    .then(data => {
      dbRef.update(data)
    })
}