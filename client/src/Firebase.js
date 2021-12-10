import firebase  from 'firebase';

const setting ={timestampsInSnapshots:true};

const config={
    projectId:'reactchat-f866e',
    apiKey:'AIzaSyCJM4G8sXpRGmVLQtZgKC8DMjD8Wj9jWKA',
    databaseURL:'https://reactchat-f866e-default-rtdb.firebaseio.com'
}

firebase.initializeApp(config);

export default firebase;