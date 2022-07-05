const path=require('path');

//定义文件的存放路径
const fpath='/a/b/c/index.html';

//带后缀文件名
const fullName=path.basename(fpath);
console.log(fullName);

//不带后缀文件名
const nameWithoutExt=path.basename(fpath,'.html');
console.log(nameWithoutExt)