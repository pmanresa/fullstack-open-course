import { ceil, floor, random } from 'mathjs'

function initializePoints(anecdoteLength) {
    var points = {};
    var index;
    for (index = 0; index < anecdoteLength; ++index) {
        points[index] = 0;
    }
    return points
  }
  
  function getRandomInt(min, max) {
    min = ceil(min);
    max = floor(max);
    return floor(random() * (max - min + 1)) + min;
  }

  export {getRandomInt, initializePoints};
