module.exports = HttpResponseMiddleware;

function HttpResponseMiddleware(thrownResponse, req, res, next) {
    if (! thrownResponse instanceof OkResponse) {
        console.error(thrownResponse);
    }

    res.status(thrownResponse.httpStatusCode || 500).send(thrownResponse);
    next();
}