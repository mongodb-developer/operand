exports= async function(){

    console.log("SLOW Agg NOV 23");

  const users = context.services.get('mongodb-atlas').db('social').collection('linkedInUsers');
 
     
    return await users.aggregate([
      
      {   "$sort":{ "linkedInId":-1, "firstName": 1 }},
      { "$addFields": {    "job":"$companies.title"    }},
      {   "$match":{"email":{"$regex":'/@gmail.com/'}}},
      {   "$group":{"_id":"$lastModificationDateTime"}}
      
      ]).toArray();
        
      

   
  
}
