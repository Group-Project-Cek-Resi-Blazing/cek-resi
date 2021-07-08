const errorHandler = (err, req, res, next) => {
    let statusCode
    let msg
    switch(err){
        case 'NOT_LOGIN':
            statusCode = 401
            msg = {message: 'Please Login First'}
            break
        case 'AUTHENTICATION_FAILED' :
            statusCode= 401
            msg = {message: 'Authentication Failed'}
            break
        case 'RESI_NOT_FOUND' :
            statusCode= 404
            msg = {message: 'Resi Not Found'}
            break
        default :
            statusCode = 500
            errorMessage = {message: err}
            break

    }
}

module.exports = errorHandler