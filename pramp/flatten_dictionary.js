/*
In simple terms, a dictionary is a collection of unique keys and their values.
The values can typically be of any primitive type (i.e an integer, boolean, double,
string etc) or other dictionaries (dictionaries can be nested).
However, for this exercise assume that values are either an integer, a string or another dictionary.

Given a dictionary dict, write a function flattenDictionary that returns a flattened version of it.

If you're using a compiled language such Java, C++, C#, Swift and Go, you may want to use a
Map/Dictionary/Hash Table that maps strings (keys) to a generic type
(e.g. Object in Java, AnyObject in Swift etc.) to allow nested dictionaries.

If a certain key is empty, it should be excluded from the output (see e in the example below).
*/
function flattenDictionary(dictionary) {
	let keys = Object.keys(dictionary)
	let values = keys.map(function(key)  {return dictionary[key];  })
	  let new_dict = {}
	  while (keys.length > 0){
		  let key = keys.shift()
		  let value = values.shift()
		  if (typeof(value) == 'number' || typeof(value) == 'string'){
			  new_dict[key] = value
		  } else {
			  for (let child_key in value){
				  let dot = "."
				  if (child_key === "" || key === ""){
					  dot = ""
				  }
				  keys.push(key + dot + child_key)
				  values.push(value[child_key])
			  }
		  }
	  }
	  return new_dict
  }
  
  let dict = {
	  "Key1" : "1",
	  "Key2" : {
		  "a" : "2",
		  "b" : "3",
		  "c" : {
			  "d" : "3",
			  "e" : {
				  "" : "1"
			  }
		  }
	  }
  }
  
  console.log(flattenDictionary(dict))
  