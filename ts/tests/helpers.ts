'use strict';

export function promised(itFunc: (done?: any) => Promise<any>) {
  return (done: any) => itFunc(done).then(done).catch(done.fail);
}

export function spy(obj: any): jasmine.Spy {
  return <jasmine.Spy>obj;
}

export function broken(itFunc: (done?: any) => Promise<any>, expectedErr: Error) {
  return promised(done =>
    itFunc(done)
      .then(() => done.fail(`Expected to fail with ${expectedErr}`))
      .catch(err => {
        if (err && err.name === expectedErr.name) {
          expect(err).toEqual(expectedErr);
          return;
        }
        return Promise.reject(err);
      }));
}