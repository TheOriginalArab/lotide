const obfuscate = function (password) {
  const rules = {
    a: "4",
    e: "3",
    o: "0",
    l: "1",
  };

  let obfuscatedPassword = "";

  for (const char of password) {
    obfuscatedPassword += rules[char] || char;
  }

  return obfuscatedPassword;
};

if (process.argv.length <= 2) {
  console.log("Please provide a word to obfuscate.");
} else if (process.argv.length > 3) {
  console.log("Passwords cannot contain spaces");
} else if (typeof process.argv[2] !== "string") {
  console.log("Please provide a valid string as a password.");
} else {
  const inputPass = process.argv[2];
  console.log(`${obfuscate(inputPass)}`);
}
