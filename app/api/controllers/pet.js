'use strict';


module.exports = {getPetByName, put, post}


function getPetByName(req, res, next) {
    console.log('getPetByName');
    res.json({
        name: req.swagger.params.name.value,
        photoUrls: [],
        id: 1,
    });
}

function post(req, res) {
    console.log('post');
}
function put(req, res) {
    console.log('put');
}

