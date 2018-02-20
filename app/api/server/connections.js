var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {
    host: 'http://elasticsearch:9200/'
    
});

module.exports = client;
