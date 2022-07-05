const fs=require('fs');
const path=require('path');

//定义正则表达式，分别分配<style></style>和<script></script>标签
const regStyle=/<style>[\s\S]*<\/style>/
const regScript=/<script>[\s\S]*<\/script>/

//调用fs.readFile()方法读取文件
fs.readFile(path.join(__dirname,'./files/index.html'),'utf8',function(err,dataStr){
    if(err)return console.log('读取HTML文件失败'+err.message);
    //读取文件成功后调用对应的三个方法分别拆解出css,js,html文件
    resolveCss(dataStr);
    resolveJs(dataStr);
    resolveHtml(dataStr);
})

//定义处理css样式的方法
function resolveCss(htmlStr){
    //使用正则提取需要的内容
    const r1=regStyle.exec(htmlStr);
    console.log(r1);
    //将提取出来的样式字符串，进行字符串的replace替换操作
    const newCSS=r1[0].replace('<style>','').replace('</style>','');
    //调用fs.writeFile()方法，将提取的样式写入到clock目录中index.css的文件里面
    fs.writeFile(path.join(__dirname,'./clock/index.css'),newCSS,function(err){
        if(err){
            return console.log('写入css样式失败'+err.message)
        }
        console.log('写入样式文件成功');
    })
}

//定义处理js脚本的方法
function resolveJs(htmlStr){
    const r2=regScript.exec(htmlStr);
    console.log(r2);
    const newJS=r2[0].replace('<script>','').replace('</script>','');
    fs.writeFile(path.join(__dirname,'./clock/index.js'),newJS,function(err){
        if(err){
            return console.log('写入js失败'+err.message)
        }
        console.log('写入js成功');
    })
}

//定义处理html结构的方法
function resolveHtml(htmlStr){
    //将字符串调用replace方法，把内嵌的style和script标签，替换为外联的link和script标签
    const newHTML=htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css"/>').replace(regScript,'<script src="./index.js"></script>')
    //写入index.html文件
    fs.writeFile(path.join(__dirname,'./clock/index.html'),newHTML,function(err){
        if(err){
            return console.log('写入html页面成功'+err.message);
        }
        console.log('写入html页面成功');
    })
} 