exports = function() {
  function getRandomString(length) {
    let s = '';
    while (s.length < length && length > 0) {
        const r = Math.random();
        if (r < 0.1) {
            s += Math.floor(r * 100);
        } else if (r > 0.5) {
            s += String.fromCharCode(Math.floor(r * 26) + 97);
        } else {
            s += String.fromCharCode(Math.floor(r * 26) + 65);
        }
    }
    return s;
  }
  const collection = context.services.get("mongodb-atlas").db("level12").collection("players");
  
  
  
  const numFooDocs = 10e5;
  let x;
  x = collection.find({"b": getRandomString(10), "f": true}).toArray();
  x = collection.find({"a": Math.round(Math.random()*10e5)}).toArray();
  x = collection.find({"c": 0}).sort({"b":1}).toArray();
  x = collection.find({"g.h": new Date()});
  var cursor = collection.aggregate([
      {$match: { a: Math.round(Math.random()*10e5) } },
      {$sort: { b: 1 } }
  ]).next().then(() => {}).catch(err => {});
  return true;
  
  
  

};
