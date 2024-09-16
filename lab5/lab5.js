//-----------------------1-----------------------
class Meditation {
    constructor(duration) {
      this.duration = duration;
    }
  
    start() {
      console.log(`Start meditation`);
      let countdown = this.duration;
  
      const intervalId = setInterval(() => {
        if (countdown > 0) {
          console.log(countdown);
          countdown--;
        } else {
          console.log('Jay Guru Dev');
          clearInterval(intervalId); // Stops the interval when the countdown is over
        }
      }, 1000); // 1000 milliseconds (1 second) interval
    }
  }
  
  // Usage
  const morning_meditation = new Meditation(5);
  morning_meditation.start();
  
  //-----------------------2-----------------------
  const isPrime = (n) => {
    return new Promise((resolve, reject) => {
      if (n < 2) {
        reject({ prime: false });
        return;
      }
  
      for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) {
          reject({ prime: false });
          return;
        }
      }
  
      resolve({ prime: true });
    });
  };
  const testPrime = async(n) => {
    console.log('start')
    try{
      const result = await isPrime(n);
      console.log(result);
    } catch(err) {
      console.log(err)
    }
  }
  
  // Testing with async/await
  testPrime(7);  // Prime number
  testPrime(4);  // Not a prime number
  