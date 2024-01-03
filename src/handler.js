"use strict";

module.exports.generateRandomNumber = (event) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(`Random number generated: ${randomNumber}`);
  return randomNumber;
};
