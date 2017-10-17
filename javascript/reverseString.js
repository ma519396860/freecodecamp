//在vs code下无法运行程序- -，先测试能否由vs code提交到git hub
function reverseString(str) {
  str = str.split('');
  str = str.reverse();
  str = str.join('');
  return str;
}

reverseString("hello");
//下面为测试代码....
console.log(reverseString("hello"));
