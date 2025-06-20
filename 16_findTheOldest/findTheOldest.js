const findTheOldest = function (persons) {
  let oldest = 0;
  let oldestPerson = "";
  let temp;
  for (let key of persons) {
    if (!("yearOfDeath" in key)) {
      temp = new Date().getFullYear() - key.yearOfBirth;
    } else {
      temp = key.yearOfDeath - key.yearOfBirth;
    }
    if (oldest < temp) {
      oldest = temp;
      oldestPerson = key;
    }
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
