exports.handler = function(context, event, callback) {
  
    console.log(`Incoming message from ${event.From}: ${event.Body}`);
    
    // Here's an example of setting up some TWiML to respond to with this function
      let twiml = new Twilio.twiml.MessagingResponse();
    twiml.message('Thanks for your submission! 😁 It is working!!!');
  
    console.log(`TwiML was: ${twiml}`);
    
    // This callback is what is returned in response to this function being invoked.
    // It's really important! E.g. you might respond with TWiML here for a voice or SMS response.
    // Or you might return JSON data to a studio flow. Don't forget it!
    return callback(null, twiml);
  }; 
  