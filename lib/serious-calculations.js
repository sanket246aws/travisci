exports.performSeriousCalculations = function (x) {
  //
  // Perform very serious calculations on very important data.
  //
  console.log("---------------- hello word 123456-78901 -----------");
  console.log(process.env.TEST_SANKET_NAME);
  console.log(process.env.TRAVIS_BRANCH);
  console.log(process.env.AWS_BUCKET);
  
  if(process.env.TRAVIS_BRANCH=='master')
  {
    console.log('In master branch');
  } 
  else  if(process.env.TRAVIS_BRANCH=='Development')
  {
    console.log('In Development branch');
  }
  else  if(process.env.TRAVIS_BRANCH=='Staging')
  {
    console.log('In Staging branch');
  }


  
  console.log("---------------- hello word 123456-78901 -----------");
  console.log(process.env);
console.log("---------------- hello word 123456-78901 -----------");
  return 2 * x;
};

