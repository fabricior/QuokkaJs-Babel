import axios from 'axios';

const url ='https://httpbin.org/get';

function fallbackForRequestFail(err, calledBy) {
    console.log('fallbackForRequestFail. It was called by ' + calledBy);
}

function doSomething(data, calledBy) {
    throw 'doSomethingFailed. It was called by ' + calledBy  // <---- INTENTIONAL ERROR HERE
    console.log('doSomething with ', data);
}

/* it looks like fallbackForRequestFail would execute only when there is an error in the request
  BUT it also fails when for some reason doSomething fails.
  Keep in mind this anti-pattern when writing Redux code since doSomething is usually where dispatch goes
  https://twitter.com/dan_abramov/status/770914221638942720 */ 
function requestA() {
    console.log('executing requestA...');
    return axios.get(url)
                .then((res) => 
                    {
                        return doSomething(res.data, 'requestA')
                    })
                .catch((err) => 
                {
                    return fallbackForRequestFail(err, 'requestA')
                })
}

requestA()

function requestB() {
    console.log('executing requestB...');
    return axios.get(url)
                .then((res) => 
                      {
                          return doSomething(res.data, 'requestB')
                      },
                      (err) => 
                      {
                          return fallbackForRequestFail(err, 'requestB')
                      } 
                    );                
}

requestB()
