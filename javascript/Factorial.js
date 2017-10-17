//程序仅在freecodecamp下运行调试，无法在vscode里调试，问题原因;无法在PATH上找到”node“，请确保已安装”node“
//正在解决问题
//，测试 vs code 提交 到 github
function factorialize(num){
  var s=1;
  for (var i=1;i<num;i++) {
      s=s*i;   
  }
 return s;
}
factorialize(5);
console.log(factorialize(5));