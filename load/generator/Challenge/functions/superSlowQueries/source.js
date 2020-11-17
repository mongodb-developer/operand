exports= async function(){

    console.log("Trial6: Remove Aggregate - SUPERSLOWQUERIES NOV 23");

  const users = context.services.get('mongodb-atlas').db('social').collection('linkedInUsers');
 
      
      let z = await users.find({"lastName":"Smith"}).sort({"companies.title":1}).toArray();
      let y = await users.find({"companies.title":"CEO"}).sort({"firstName":-1, "lastName":1}).toArray();
      let x = await users.find({"firstName":"Mark"}).sort({"lastName":-1}).toArray();
      let w = await users.find({"companies.title":"Owner"}).sort({"lastName":1,"firstName":-1}).toArray();
      let v = await users.find({"companies.title":"Founder"}).sort({"lastModificationDateTime":1}).toArray();
   
    let a = await users.find({"companies.title":"CEO"}).sort({"firstName":-1, "lastName":1}).toArray();
   
   
  
}

  

 