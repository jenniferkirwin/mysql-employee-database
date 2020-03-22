// -------------------------------------------------------------
// Data Access Layer
// -------------------------------------------------------------

const connection = require("../config/connection.js");

// connection.query('INSERT INTO posts SET ?', {title: 'test'}, function (error, results, fields) {
//     if (error) throw error;
//     console.log(results.insertId);
//   });

// -------------------------------------------------------------
// Creates questionmarks for multiple parameters
// -------------------------------------------------------------

function questionmark(arryLen) {

    const arr = [];

    for (i = 0; i < arryLen; i++) {
      arr.push(`?`);
    }
  
    return arr.toString();    
}

function questionmarks(arryLen) {

    const arr = [];

    for (i = 0; i < arryLen; i++) {
      arr.push(`??`);
    }
  
    return arr.toString();    
}

// -------------------------------------------------------------
// Object for mySQL query pulls
// -------------------------------------------------------------

const dataAccessLayer = {

    select: function(cols, table) {

        const query = `SELECT ${questionmarks(cols.length)} FROM ${questionmarks(table.length)}`;
        const params = [...cols, ...table];

        return new Promise((resolve, reject) => {
            connection.query(query, params, function(err, res) {
                if (err) throw err;
                console.table(res);
            });
        });

    },

    create: function(cols, vals, table) {

        const query = `INSERT INTO ${questionmarks(table.length)} (${questionmarks(cols.length)}) VALUES (${questionmark(vals.length)})`;
        const params = [...table, ...cols, ...vals];

        console.log(params);
        console.log(query);

        return new Promise((resolve, reject) => {
            connection.query(query, params, function(err, res) {
                if (err) throw err;
                return res.insertId;
            });
        });

    },

    update: function(cols, vals, table) {

        // NOT FINISHED

        const query = `UPDATE ${questionmarks(table.length)} SET ${questionmarks(cols.length)} = ${questionmark(vals.length)} WHERE`;
        const params = [...table, ...cols, ...vals];

        console.log(params);
        console.log(query);

        return new Promise((resolve, reject) => {
            connection.query(query, params, function(err, res) {
                if (err) throw err;
                return res.insertId;
            });
        });

    },

    delete: function() {

    }
}

module.exports = dataAccessLayer;

