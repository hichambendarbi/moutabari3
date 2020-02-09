import express from 'express';




interface expressExchange {
    req : express.Request
    res : express.Response
    next : express.NextFunction
}

const routes = ($: express.Router) => {

    $.get("/", (
        req : express.Request,
        res : express.Response,
        next : express.NextFunction)=>
    {
        res.send('<bold> Hello World </b>')
    });

    // $.all('/tests', HandlerLab.users)

    return $;
}





export default routes;