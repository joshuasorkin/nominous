const wiki = require('wikijs').default;

wiki.page('Claude_Shannon')
.then(page=>{
    console.log(page);
})