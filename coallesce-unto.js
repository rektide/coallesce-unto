"use strict"


function coallesceUnto(){
	var
	  target,
	  i= 0
	for(; i< arguments.length; ++i){
		var
		  arg= arguments[ i],
		  type= typeof arguments[ i]
		if( type== "string" || type == "number"){
			continue
		}
		target= arg
		break
	}
	if( i>= arguments.length){
		target= {}
	}
	for( var j= 0; j< i; ++j){
		var slot= arguments.callee[ j]
		target[ j]= arguments[ j]
	}
	var args= Array.prototype.slice.call( arguments, i)
	if( i>= arguments.length){
		args.unshift( target)
	}
	return args
}

module.exports= coallesceUnto
