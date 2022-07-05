const path=require('path');
const pathStr=path.join('/a','/b/c','../','./d','e');
console.log(pathStr);
// \a\b\d\e