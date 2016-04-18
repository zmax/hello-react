import 'whatwg-fetch';

const users = {
  4: {name: 'Mark'},
  5: {name: 'Paul'},
};

export default function request(url) {

  return new Promise((resolve, reject) => {
    const userID = parseInt(url.substr('/users/'.length), 10);
    if (userID && userID >= 0) {
      process.nextTick(
        () => users[userID] ? resolve(users[userID]) : reject({error: userID})
      );
    } else {
      // 
    }
  });

}
