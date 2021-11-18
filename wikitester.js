const wiki = require('wikijs').default;
const ContentRetriever = require('./controllers/article-retriever');
const contentRetriever = new ContentRetriever();
const md5 = require('blueimp-md5');
const noun = require('./noun')

//const article = contentRetriever.retrieveArticle();

str = md5('gunther')
console.log(str);
arr=str.match(/.{1,3}/g)
//arr=str.split('')
console.log(arr);
let arr2=[];
arr.forEach(el=>{
    hexR=parseInt(el,16)
    arr2.push(noun[hexR])
})
console.log(arr2)
//const reducer = (prev,curr) => prev + curr.charCodeAt()
//console.log(arr.reduce(reducer,0))

/*
wiki().random()
.then(titles=>{
    console.log(titles[0]);
    wiki().page(titles[0])
    .then(page=>{
        page.categories()
        .then(categories=>console.log(categories));
    });
});
*/