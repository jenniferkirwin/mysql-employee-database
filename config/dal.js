// -------------------------------------------------------------
// Data Access Layer
// -------------------------------------------------------------

const connection = require("../config/connection.js");

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

    select: function(cols, table, callback) {

        const query = `SELECT ${questionmarks(cols.length)} FROM ${questionmarks(table.length)}`;
        const params = [...cols, ...table];

        connection.query(query, params, function(err, res) {
            if (err) throw err;
            callback(res);
            
        });

    },

    // selectwhere: function(cols, table, paramCol, paramVal, callback) {

    //     const query = `SELECT ${questionmarks(cols.length)} FROM ${questionmarks(table.length)} WHERE ${questionmarks(paramCol.length)} = ${questionmark(paramVal.length)}`;
    //     const params = [...cols, ...table];

    //     connection.query(query, params, function(err, res) {
    //         if (err) throw err;
    //         callback(res);
            
    //     });

    // },

    create: function(cols, vals, table, callback) {

        const query = `INSERT INTO ${questionmarks(table.length)} (${questionmarks(cols.length)}) VALUES (${questionmark(vals.length)})`;
        const params = [...table, ...cols, ...vals];

            connection.query(query, params, function(err, res) {
                if (err) throw err;
                console.log(`${vals} added to ${table}`);
                callback();
        });

    },

    update: function(cols, vals, table, paramCol, paramVal, callback) {

        // NOT FINISHED

        const query = `UPDATE ${questionmarks(table.length)} SET ${questionmarks(cols.length)} = ${questionmark(vals.length)} WHERE ${questionmarks(paramCol.length)} = ${questionmark(paramVal.length)}`;
        const params = [...table, ...cols, ...vals, ...paramCol, ...paramVal];

        connection.query(query, params, function(err, res) {
            if (err) throw err;
            console.log(`${paramCol} updated in ${table}`);
            callback();
        });

    },

}

module.exports = dataAccessLayer;

