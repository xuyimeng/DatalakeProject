var ForwardIndex = [{ "_id" : ObjectId("572d0b02ed9e1ae12eafefa4"), "source" : "20", "destination" : "21" },
{ "_id" : ObjectId("572d0b02ed9e1ae12eafefa5"), "source" : "20", "destination" : "22" },
{ "_id" : ObjectId("572d0b02ed9e1ae12eafefa6"), "source" : "22", "destination" : "23" },
{ "_id" : ObjectId("572d0b02ed9e1ae12eafefa7"), "source" : "22", "destination" : "24" },
{ "_id" : ObjectId("572d0b02ed9e1ae12eafefa8"), "source" : "22", "destination" : "25" },
{ "_id" : ObjectId("572d0b02ed9e1ae12eafefa9"), "source" : "25", "destination" : "26" }];
//> db.InvertedIndex.find()


var InvertedIndex = [ { "_id" : ObjectId("572d0b02ed9e1ae12eafef9d"), "test4" : [ 20 ] },
{ "_id" : ObjectId("572d0b02ed9e1ae12eafef9e"), "b" : [ 21 ] },
{ "_id" : ObjectId("572d0b02ed9e1ae12eafef9f"), "c" : [ 21 ] },
{ "_id" : ObjectId("572d0b02ed9e1ae12eafefa0"), "d" : [ 21 ] },
{ "_id" : ObjectId("572d0b02ed9e1ae12eafefa1"), "i" : [ 23 ] },
{ "_id" : ObjectId("572d0b02ed9e1ae12eafefa2"), "g" : [ 24 ] },
{ "_id" : ObjectId("572d0b02ed9e1ae12eafefa3"), "y" : [ 26 ] }];