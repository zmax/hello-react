jest.unmock('../request');

import request from '../request';

describe('utils/request', () => {
  pit('can get json data from url', () => {
    // https://api.github.com/user/77148
    // https://api.github.com/user/77148/repos
    return request('https://api.github.com/user/77148').then((data)=>{
      expect(data.login).toEqual('zmax');
    });

  });

  // pit('can get json data from local file', () => {
  //   return request('./request-data.json').then((data) => {
  //     expect(data.login).toEqual('zmax');
  //   });
  // });

});
