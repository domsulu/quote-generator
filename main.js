const allOfIt = {
  greetings: [
    "Hi!",
    "Hello!",
    "Hey there!",
    "Hi dear!",
    "Hi friend",
    "Hey pal!",
    "Hi champ!",
  ],

  quotes: [
    "Be the change you wish to see in the world.",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "Not all who wander are lost.",
    "You miss 100% of the shots you don't take.",
    "The best way to predict the future is to invent it.",
    "Believe you can and you're halfway there.",
  ],

  goodbye: [
    "Goodbye, I'll miss you.",
    "Farewell and good luck.",
    "Take care and stay in touch.",
    "It's been great knowing you. Goodbye!",
    "Wishing you all the best. Goodbye.",
  ],
};

const randomGenerate = (num) => Math.floor(Math.random() * num);

let quoteOfTheDay = [];

for (let quote in allOfIt) {
  let randomIndex = randomGenerate(allOfIt[quote].length);

  switch (quote) {
    case "greetings":
      quoteOfTheDay.push(`${[allOfIt[quote][randomIndex]]}`);
      break;
    case "quotes":
      quoteOfTheDay.push(`Your quote of the day is: ${[allOfIt[quote][randomIndex]]}`);
      break;
    case "goodbye":
      quoteOfTheDay.push(allOfIt[quote][randomIndex]);
      break;
    default: 
      quoteOfTheDay.push(allOfIt[quote][randomIndex]);
  };
};

const formattedQOTD = (qotd) => {
  const formatted = qotd.join('\n');
  return formatted;
};

console.log(formattedQOTD(quoteOfTheDay));
