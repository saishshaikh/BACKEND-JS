# BACKEND-JS 
NODE JS COMMANDS 
(1} FOR SETUP = npm init 
(2) for execute on terminal = node and tht file name ex node index.js
  


  2 ) HTTP-methods 
     req.body
     req.param
     req.query................query perform on the search bar  like localhost8000/user?Name=saish&age=22  like this if u are add more info then use to(&)
   
     
3)  CONNECT BACKEND TO FRONTEND 

  .....try to connect backend tto frontend found error bcz of cors 
  avoid tht error we install cors in backend



  4) MongodB Operator 
  $eq  = equal (barabar)
$ne  = not equal
$gt  = greater than
$gte = greater than or equal
$lt  = less than
$lte = less than or equal
$in  = array me se koi bhi match kare
$nin = array me na ho

$and = sab condition true
$or  = koi ek true
$not = condition ka ulta
$nor = sab false

$exists = field hai ya nahi
$type   = field ka data type check

$expr = query me expressions use karna
$jsonSchema = schema validation
$mod = remainder check
$regex = pattern search
$text = text search
$where = JS condition

$all = array me sab values ho
$elemMatch = array ka specific match
$size = array ki length

$bitsAllClear = bits clear check
$bitsAllSet = bits set check
$bitsAnyClear = koi bit clear
$bitsAnySet = koi bit set

$set = value update kare
$unset = field delete kare
$inc = number increase/decrease
$mul = number multiply
$rename = field ka naam change
$min = minimum value set
$max = maximum value set
$currentDate = current date set kare

$push = array me add kare
$pull = array se remove kare
$addToSet = duplicate ke bina add
$pop = first/last remove
$each = multiple values add
$position = array position set
$slice = array limit kare
$sort = array sort kare

$match = filter data
$group = group banana
$project = fields select
$limit = records limit
$skip = records skip
$lookup = join jaisa
$unwind = array todna
$addFields = new field add
$replaceRoot = root change
$count = total count
$facet = multiple pipeline
$bucket = range group
$bucketAuto = auto group
$sample = random data

$sum = total
$avg = average
$min = smallest
$max = biggest
$first = first value
$last = last value
$concat = strings jodna
$substr = string ka part
$toInt = number me convert
$toString = string me convert
$cond = if else
$ifNull = null ho to value
$mergeObjects = objects merge



// MongoDB Update Operators (List + Uses)

// • $set – field ki value change/add karna
// • $unset – field delete karna
// • $inc – number increase/decrease karna
// • $mul – number multiply karna
// • $rename – field ka naam change karna

// • $push – array me value add karna
// • $addToSet – array me unique value add karna (duplicate nahi)
// • $pull – array se value remove karna
// • $pop – array se first ya last value remove karna

// • $currentDate – current date/time set karna
// • $setOnInsert – sirf new document create hone par value set karna (upsert me)