const { check } = require('express-validator');

//validate email name and password
exports.clientCreateValidator = [
    check('name').not().isEmpty().withMessage('Category name is required!'),
]
