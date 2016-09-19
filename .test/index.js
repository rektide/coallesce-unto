"use strict"
var
  cu= require(".."),
  tape= require("tape")

tape("some primitives then an object", function(t){
	var out= cu(42, "meaning", {all:"well"})
	t.deepEqual(out, [{0:42, 1:"meaning", all:"well"}])
	t.end()

})

tape("just primitives", function(t){
	var out= cu(42, "meaning", "solid")
	t.deepEqual(out, [{0:42, 1:"meaning", 2:"solid"}])
	t.end()
})

tape("a primitive then two objects", function(t){
	var out= cu(42, {all:"well"}, {more:"objects"})
	t.deepEqual(out, [{0:42, all:"well"}, {more:"objects"}])
	t.end()
})



