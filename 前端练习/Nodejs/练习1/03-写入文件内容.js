//1.导入fs文件系统模块
const fs=require('fs');

//2.调用fs.writeFile()方法，写入文件的内容
fs.writeFile('./files/3.txt','bronya zakchik',function(err){
    //如果文件写入成功，err的值为null
    //如果文件写入失败，err的值等于一个错误对象
    if(err){
        console.log('文件写入失败'+err.message);
    }
    console.log('文件写入成功')
})