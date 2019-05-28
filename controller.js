////MODULARIZATION WITH MODELS:
const Pet = require("./models")


//EXPORT OUR CONTROLLERS SO OUR ROUTES CAN ACCESS IT
module.exports = {
    index : ( req , res ) => {
        Pet.find ( { } )
        .then ( data => {
            console.log ( 'displaying objects' , data );
            res.json ( { message : 'success' , data : data } );
        } )
        .catch ( err => {
            console.log ( 'query error' , err );
            res.json ( { message : 'Error' , error : err } );
        } )
    } ,
		

	show : ( req , res ) => {
		console.log ( req.params )
		Pet.findById( req.params.id )
		.then ( data => {
			console.log ( 'reading data' , data );
			res.json ( { message : 'showing object' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not find' , error : err } );
		} )
	} ,
		

	add : ( req , res ) => {
		console.log ( req.params )
		Pet.create( {
			name : req.body.name,
			type: req.body.type,
			description : req.body.description,
			skill1 : req.body.skill1,
			skill2 : req.body.skill2,
			skill3 : req.body.skill3,
			} )
		.then ( data => {
			console.log ( 'successfully added' , data );
			res.json ( { message : 'Object added' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not add' , error : err } );
		} )
	} ,
		

	
	updt : ( req , res ) => {
		console.log ( req.params )
		Pet.findByIdAndUpdate( req.params.id, {
			name : req.body.name,
			type : req.body.type,
			description : req.body.description,
			skill1 : req.body.skill1,
			skill2 : req.body.skill2,
			skill3 : req.body.skill3,
		},{runValidators: true} )
		.then ( data => {
			console.log ( 'successfully updeted' , data );
			res.json ( { message : 'Object added' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not add' , error : err } );
		} )
	} ,
		
	
    
    delete : ( req , res ) => {

		console.log ( req.params )
		Pet.findByIdAndDelete( req.params.id )
		.then ( data => {
			console.log ( 'successfully deleted' , data );
			res.json ( { message : 'Object deleted' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not delete' , error : err } );
		} )
	} ,







    // c_index : ( req , res ) => {
	// 	Pet.findById( req.params.PetId )
	// 	.then ( data => {
	// 		console.log ( 'reading data' , data );
	// 		res.json ( { message : 'showing object' , data : data } )
	// 	} )
	// 	.catch ( err => {
	// 		console.log ( 'error' , err );
	// 		res.json ( {message: 'Could not find' , error : err } );
	// 	} )
    // } ,
		

	// c_show : ( req , res ) => {
	// 	console.log ( req.params )
	// 	Pet.findById( req.params.PetId )
	// 	.then ( data => {
	// 		console.log ( 'reading data' , data );
	// 		res.json ( { message : 'showing object' , data : data } )
	// 	} )
	// 	.catch ( err => {
	// 		console.log ( 'error' , err );
	// 		res.json ( {message: 'Could not find' , error : err } );
	// 	} )
	// } ,
		

	// c_add : ( req , res ) => {

	// 	Pet.create( )
	// 		.then ( data => {
	// 			// data is the Pet information (from db)
	// 			// req.body is info from user (comment information)
	// 			let Pet = data;
	// 			let newSkill = req.body;
	// 			Pet.skills.push(newSkill);
	// 			Pet.save()
	// 			.then ( saveData => {
	// 				console.log ( 'successfully added pet' , saveData );
	// 				res.json ( { message : 'Comment added' , data : saveData } )
	// 			} )
	// 			.catch ( err => {
	// 				console.log ( 'error' , err );
	// 				res.json ( {message: 'Could not add' , error : err } );
	// 			} )
	// 		} )
	// 		.catch ( err => {
	// 			console.log ( 'error' , err );
	// 			res.json ( {message: 'Could not find' , error : err } );
	// 		} )
	// 	console.log ( req.params )
	// } ,
		

	// c_updt : ( req , res ) => {
	// 	Pet.findById( req.params.PetId )
	// 	.then ( data => {
	// 		console.log ( 'reading data' , data );
	// 		res.json ( { message : 'showing object' , data : data } )
	// 	} )
	// 	.catch ( err => {
	// 		console.log ( 'error' , err );
	// 		res.json ( {message: 'Could not find' , error : err } );
	// 	} )
	// 	console.log ( req.params )
	// 	Pet.findByIdAndUpdate( req.params.id, {
	// 		$push: {skills: {
	// 			skill :req.body.skill,
	// 			like : req.body.like,

	// 		}}} )
	// 	.then ( data => {
	// 		console.log ( 'successfully updeted' , data );
	// 		res.json ( { message : 'Object added' , data : data } )
	// 	} )
	// 	.catch ( err => {
	// 		console.log ( 'error' , err );
	// 		res.json ( {message: 'Could not add' , error : err } );
	// 	} )
	// } ,
		
	
    
    // c_delete : ( req , res ) => {

	// 	Pet.findById( req.params.PetId )
	// 	.then ( data => {
	// 		console.log ( 'reading data' , data );
	// 		res.json ( { message : 'showing object' , data : data } )
	// 	} )
	// 	.catch ( err => {
	// 		console.log ( 'error' , err );
	// 		res.json ( {message: 'Could not find' , error : err } );
	// 	} )
	// 	console.log ( req.params )
	// 	Pet.findByIdAndDelete( req.params.id )
	// 	.then ( data => {
	// 		console.log ( 'successfully deleted' , data );
	// 		res.json ( { message : 'Object deleted' , data : data } )
	// 	} )
	// 	.catch ( err => {
	// 		console.log ( 'error' , err );
	// 		res.json ( {message: 'Could not delete' , error : err } );
	// 	} )
	// } ,


    
}