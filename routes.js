//REQUIRE CONTROLLER TO HAVE ACCESS TO ROUTE LOGIC
const controller = require("./controller")

//EXPORT ROUTES SO OUR SERVER.JS CAN ACCESS IT
module.exports = function(app){
    app.get('/pets', controller.index)
    app.get ( '/pets/:id' , controller.show );
    app.post ( '/pets' , controller.add );
    app.put( '/pets/:id' , controller.updt );
    app.delete( '/pets/:id' , controller.delete );

    // app.get('/pets/:petId/comments', controller.c_index)
    // app.get ( '/pets/:petId/comments/:commentId' , controller.c_show );
    // app.post ( '/pets/:petId/comments' , controller.c_add );
    // app.put( '/pets/:petId/comments/:commentId' , controller.c_updt );
    // app.delete( '/pets/:petId/comments/:commentId' , controller.c_delete );
}