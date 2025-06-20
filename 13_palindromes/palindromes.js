const palindromes = function (string) {
  let tempString = "";
  for (let i = 0; i < string.length; i++) {
    if (
      (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) || // 0–9
      (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) ||
      (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) // a–z
    )
      tempString += string.at(i).toLowerCase();
  }
  const ans = tempString.split("").reverse().join("");
  return ans === tempString;
};
palindromes("r3ace3car");
// Do not edit below this line
module.exports = palindromes;
