/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

  var triangles= [];
  var count=0;
  var second, third;

  preferences.unshift(null);

  for(var a=1; a < preferences.length; a++){
    second = preferences[a];
    third = preferences[second];

    if(a === second) {continue}

    if (preferences[third] === a) {
      if(triangles.indexOf(a) === -1){
        triangles.push(a, second, third);
        count++;
      }
    }
  }
  return count;
};


