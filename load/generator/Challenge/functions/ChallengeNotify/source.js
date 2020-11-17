exports = function(changeEvent) {
  
  console.log("IN CHALLENGE NOTIFY FUNCTION!");
  
  const TwilioService = context.services.get("TwilioReInventChallenge");
  
  var text = `${context.values.get("Competitor")} configured the trigger correctly!`;

  
 
 TwilioService.send({
    to: "+15124230644",       // ENTER YOUR PHONE NUMBER HERE
    from: context.values.get("TwilioNumber"),
    body: text
  });
 
};
