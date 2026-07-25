// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// Implement a function getCardValue, when given a string representing a playing card,
// should return the numerical value of the card.

// A valid card string will contain a rank followed by the suit.
// The rank can be one of the following strings:
//   "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
// The suit can be one of the following emojis:
//   "♠", "♥", "♦", "♣"
// For example: "A♠", "2♥", "10♥", "J♣", "Q♦", "K♦".

// When the card is an ace ("A"), the function should return 11.
// When the card is a face card ("J", "Q", "K"), the function should return 10.
// When the card is a number card ("2" to "10"), the function should return its numeric value.

// When the card string is invalid (not following the above format), the function should
// throw an error.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function getCardValue(card) {
  const rank = card.slice(0, -1);
  const suit = card.slice(-1);

  if (!["♠", "♥", "♦", "♣"].includes(suit)) {
    throw new Error("Invalid card");
  }

  if (rank === "A") {
    return 11;
  }

  if (rank === "J" || rank === "Q" || rank === "K") {
    return 10;
  }

  if (["2", "3", "4", "5", "6", "7", "8", "9", "10"].includes(rank)) {
    return Number(rank);
  }

  throw new Error("Invalid card");
}

// The line below allows us to load the getCardValue function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = getCardValue;

// Helper functions to make our assertions easier to read.
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Number cards
assertEquals(getCardValue("9♠"), 9);
assertEquals(getCardValue("10♥"), 10);

// Ace
assertEquals(getCardValue("A♣"), 11);

// Face cards
assertEquals(getCardValue("J♦"), 10);
assertEquals(getCardValue("Q♥"), 10);
assertEquals(getCardValue("K♠"), 10);

// Invalid cards
try {
  getCardValue("invalid");
  console.error("Error was not thrown for invalid card 😢");
} catch (e) {
  console.log("Error thrown for invalid card 🎉");
}

try {
  getCardValue("1♠");
  console.error("Error was not thrown for invalid rank 😢");
} catch (e) {
  console.log("Error thrown for invalid rank 🎉");
}

try {
  getCardValue("AX");
  console.error("Error was not thrown for invalid suit 😢");
} catch (e) {
  console.log("Error thrown for invalid suit 🎉");
}
