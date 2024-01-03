"use strict";

module.exports.generateRandomNumber = (event) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(`Random number generated: ${randomNumber}`);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Random number generated: ${randomNumber}`,
      },
      null,
      2
    ),
  };
};
