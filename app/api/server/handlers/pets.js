module.exports = {
    get: function (req, res) { console.log('get pets'); },
    put: function (req, res) { res.send(req); }
}
