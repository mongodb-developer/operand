exports = async function(payload, response) {
  
  console.log("In Twilio Webhook");
  // const { To, From, Body } = payload;
  const mongodb = context.services.get("mongodb-atlas");
  const superheroes = mongodb.db("AtlasChallenge").collection("superheroes");
  
   var hero = payload.Body.trim();
   console.log(hero);

  try {
    // Save the text message body, to number, and from number
    const { insertedId } = await superheroes.insertOne(
      { "alias": hero,
        "superheroStatus" : 8,
        "input_method": "Twilio"
      });
    // Send the user a confirmation text message
    const idString = insertedId.toString();
    const code  = idString.substr(20, 4);
    console.log(typeof(code));
  //  const code = insertedId.substr(4, 4);
    response.setBody(`Thank you for entering ${hero}. Enter ${code} in your quiz`);
  } catch (error) {
    // Send the user an error notification text message
    response.setBody(`Failed to save ${hero}: ${error}`);
  }
}

