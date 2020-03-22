// -------------------------------------------------------------
// Data Access Layer
// -------------------------------------------------------------

const connection = require("../config/connection.js");

// -------------------------------------------------------------
// Cleans the data
// -------------------------------------------------------------






// -------------------------------------------------------------
// Object for mySQL query pulls
// -------------------------------------------------------------

const dataAccessLayer = {

    selectall: function(table) {

        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM ??", [table], function(err, res) {
                if (err) throw err;
                console.table(res);
            });
        });

    },

    select: function() {

        connection.query("SELECT ? FROM ? WHERE ? = ?", function(err, res) {
            if (err) throw err;
            console.table(res);
        });

    },

    create: function() {

    },

    update: function() {

    },

    delete: function() {

    }
}

module.exports = dataAccessLayer;

