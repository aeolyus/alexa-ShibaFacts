'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.b9ecfef4-b4a8-408f-a12a-d3a415dde87d"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Shiba Facts';

/**
 * Array containing ice cream facts.
 */
var FACTS = [
	"Their name means \"brushwood\" dog",
	"Shibas were originally bred to be hunters",
	"The Shiba Ken is one of the oldest dog breeds in the world. In fact, it is a basal breed, which means that it predates all modern dog breeds.",
	"The Shiba is incredibly loyal and devoted to his family.",
	"When upset, they make Shiba screams, which is a type of high-pitched scream that is incredibly loud.",
	"Their average lifespan ranges from 12 to 15 years.",
	"The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
	"They are very clean, so grooming needs can be kept to a minimum.",
	"The Doge meme consists of a picture of a Shiba Inu.",
	"The dogecoin is a cryptocurrency featuring a likeness of the Shiba Inu dog from the Doge intetnet meme as its logo."

	



];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random ice cream fact from the ice cream facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a ice cream fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
