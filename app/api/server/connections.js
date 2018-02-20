const INDEXNAME='pets'

var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {
    host: 'http://elasticsearch:9200/'
});


exports.health = function() {
    client.cluster.health({},function(err,resp,status) {
        console.log("-- Client Health --",resp);
    });
}

exports.createIndex = function() {
    client.indices.create({
        index: INDEXNAME
    },function(err,resp,status) {
        if(err) {
            console.log(err);
            return err;
        }
        else {
            console.log("create",resp);
            return resp;
        }
    });
}

exports.dropIndex = function() {
    client.indices.delete({index: INDEXNAME},function(err,resp,status) {
        console.log("delete",resp);
        return resp;
    });
}
