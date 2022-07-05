//1.导入fs模块
const fs=require('fs');
// 2.调用fs.readFile()方法读取文件
fs.readFile('./files/1.txt','utf8',function(err,dataStr){
    // 打印失败的结果
    console.log(err);   
    console.log('--------')
    //打印成功的结果
    console.log(dataStr)
})