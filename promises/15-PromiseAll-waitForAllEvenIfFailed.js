// based on
// https://stackoverflow.com/questions/31424561/wait-until-all-es6-promises-complete-even-rejected-promises/36115549#36115549

const a = Promise.resolve(1);
const b = Promise.reject(new Error(2));
const c = Promise.resolve(3);

var succeded = Promise.all(
        [a, b, c]
          .map(promise => 
            promise.catch(e => ({ ...(e || {}), isError: true }))))
          .then(results => (results.filter(x => !x.isError))) // 1,Error: 2,3
          .catch(e => console.log(e))

succeded
