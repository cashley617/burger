// Import MySQL connection 
var connection = require("../config/connection");

// Establish Table Name 
const tableName = "burgers";


// Helper function for SQL 
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};



// ORM 
const orm = {

    // selectAll Method
    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + ";";
        // var queryString = `SELECT * FROM ${tableName};`;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }, 

    // insertOne Method
    // insertOne: function (tableName, cols, vals, cb) {
    //     var queryString = "INSERT INTO " + table;

    //     queryString += " (";
    //     queryString += cols.toString();
    //     queryString += ") ";
    //     queryString += "VALUES (";
    //     queryString += printQuestionMarks(vals.length);
    //     queryString += ") ";

    //     console.log(queryString);

    //     connection.query(queryString, vals, function(err, result) {
    //         if (err) {
    //             throw err;
    //         }
    //         console.log("Added One!");
    //         cb(result);
    //     });
    // },

    insertOne: (tableName, cols, vals, callback) => {

        let queryStatement = `INSERT INTO  ${tableName} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});`;

        connection.query(queryStatement, vals, (err, result) => {
            if (err) throw err;
            console.log("Sucesfully Added");
            callback(result);
        });

    },

    // updateOne Method
    updateOne: function(tableName, cols, vals, condition, cb) {
        var queryString = `UPDATE ${tableName} SET ${cols.toString()} = ? WHERE ${condition}`;

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;
            console.log("Updated One!");
            cb(result);
        });

    }

}


// Export ORM 
module.exports = orm;