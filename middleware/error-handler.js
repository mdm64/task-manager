const {CustomAPIError} = require('../errors/custom-error')

const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).josn({msg: err.message})
    }
    return res.status(500).json({msg: 'something went wrong please try again'})
}

module.exports = errorHandlerMiddleware

//this how we can create our own error handler customized version
// earlier we were creating try catch block to handle each error then we write a wrapper and put try catch block
//ther but therre in error block we were using next(error) which is a inbuilt error handler
// customised error handler can be used any where now, no matter what file or what function is giving error iy'll handdle it
// so we will use this middleware in app.js (main) file