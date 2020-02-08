module.exports =($) => {
    
    $.get("/", ( req , res , next ) =>{  res.send('<bold> Hello World </b>') });

    $.all('/users', (req, res)=>{

        res.send("helloooo")

    });

    return $;
}