const wiki = require('wikijs').default;

class ContentRetriever{

    constructor(){
        this.wikiSpecificTerms=["article","wiki","page","ac with","use dmy","infobox","stub","categor","CS1",
                                "webarchive","surname","births","deaths"];
    }

    retrieveArticle(){
        let output;
        wiki()
        //get a random Wikipedia article
        .random()
        .then(titles=>{
            console.log(`title: ${titles[0]}`);
            wiki()
            .page(titles[0])
            .then(page=>{
                page.categories()
                .then(categories=>{
                    console.log(`categories: ${categories}`);
                    //remove all categories that have Wikipedia-specific information
                    let filteredCategories = categories.filter(category => !this.wikiSpecific(category));
                    if(filteredCategories.length>0){
                        return {
                            title:titles[0],
                            categories:filteredCategories
                        }
                    }
                    else{
                        return null;
                    }
                })
            })
        })
        .then(output=>{
            console.log(`output: ${output}`)
        })
    }

    wikiSpecific(category){
        this.wikiSpecificTerms.forEach(term=>{
            if(category.includes(term)){
                return true;
            }
        })
        return false;
    }

}

module.exports = ContentRetriever;