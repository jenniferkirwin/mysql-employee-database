const dataAccessLayer = require("./config/dal.js");

// dataAccessLayer.select([`first_name`, `last_name`, `role_id`], [`employee`]);
dataAccessLayer.create([`first_name`, `last_name`, `role_id`], ['Jon', 'Smith', 1], [`employee`]);