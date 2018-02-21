'use strict';


module.exports = {
    getPetByName: function(req, res) {
	      res.json({
	          name: req.swagger.params.name
	      });
    }
}
