var client = require('./connections.js');

client.indices.create({
    index: 'pets'
},function(err,resp,status) {
    if(err) {
        console.log(err);
        module.exports = err;
    }
    else {
        module.exports = resp;
        console.log("create",resp);
    }
});
