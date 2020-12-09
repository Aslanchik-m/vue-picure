// Convert first char of all words in a string to uppercase
export const firstCharToUppercase = (initialString: string) => {
  // Split initial string into array of strings and make sure they are all lowercase
  const stringArr = initialString.toLowerCase().split(" ");
  // Loop through array and set first character to uppercase
  for (const i in stringArr) {
    stringArr[i] =
      stringArr[i].charAt(0).toUpperCase() + stringArr[i].substring(1);
  }
  // Join array into a string separated by a space
  return stringArr.join(" ");
};
