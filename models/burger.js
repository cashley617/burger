// Import ORM 
var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
        cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(cols, vals, condition, cb) {
        orm.updateOne("burgers", cols, vals, condition, function(res) {
            cb(res);
        });
    }

};

// Export
module.exports = burger;
