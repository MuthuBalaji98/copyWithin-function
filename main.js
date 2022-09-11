const num = [1,2,3,4,5];
console.log("original array :", num);
console.log("length of the array is "+num.length);
console.log("method : array.copyWithin(2,0)");
num.copyWithin(2, 0);
console.log("change in array : ", num);
console.log("return: length of array after copyWithin() is "+num.length);