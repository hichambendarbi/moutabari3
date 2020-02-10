import express from 'express';
import * as userHandler from '../user-medical-api'




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

    $.all('/users', userHandler.User)

    return $;
}





export default routes;