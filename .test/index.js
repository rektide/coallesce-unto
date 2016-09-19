"use strict"
var
  cu= require(".."),
  tape= require("tape")

tape("some primitives then an object", function(t){
	var out= cu(42, "meaning", {all:"well"})
	console.log(out)
	t.end()
})

tape("just primitives", function(t){
	var out= cu(42, "meaning", {all:"well"})
	console.log(out)
	t.end()
})

tape("a primitive then two objects", function(t){
	var out= cu(42, {all:"well"}, {more:"objects"})
	console.log(out)
	t.end()
})



