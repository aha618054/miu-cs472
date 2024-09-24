console.log('start');

const myPromise = new Promise(resolve => {
  console.log('1');
  resolve('Fairfield');
  console.log('2');
});

async function firstFunction() {
  console.log(await myPromise);
  console.log('3');
}

function secondFunction() {
  myPromise.then(data => console.log(data));
  console.log('4');
}

secondFunction();
firstFunction();

console.log('end');