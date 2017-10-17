function factorialize(num){
  var s=1;
  for (var i=1;i<num;i++) {
      s=s*i;   
  }
 return s;
}
factorialize(5);
console.log(factorialize(5));