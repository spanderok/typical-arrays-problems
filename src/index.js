
exports.min = function min (array) {
  if (array === undefined){
    return 0;
  }   if (array.length === 0){
    return 0;
  }  else {
 return result = Math.min.apply(null, array);}
  
}

exports.max = function max (array) {
  if (array === undefined){
    return 0;
  }   if (array.length === 0){
    return 0;
  }  else {
  return result = Math.max.apply(null, array);}
}

exports.avg = function avg (array) {
  if (array === undefined){
    return 0;
  }   if (array.length === 0){
    return 0;
  }  else {
  var sum = 0;
  for( var i = 0; i < array.length; i++ ){
  sum += parseInt( array[i], 10 ); //don't forget to add the base
 };

  var avg = sum/array.length;
  return avg;}

}
