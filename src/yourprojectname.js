// Given a _sharedData from instagram script, return a JSON.

class YourClass {
  constructor(say) {
    this.say = say;
  }

  speak() {
    console.log('I am saying: ' + this.say);
  }
}

function areYouHappy(bool) {
  if (bool) {
    console.log('I am happy0');
  } else {
    console.log('I want to be happ');
  }
}

module.exports = {
  YourClass,
  areYouHappy
}
