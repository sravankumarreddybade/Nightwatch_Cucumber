const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

defineSupportCode(({Before, After}) => {

    Before(function (Feature){
    return client.init();
    });
    
    After(function (Feature){
        return client.end();
        });  
})