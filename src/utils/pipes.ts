import moment from "moment-timezone";
import firebase from "firebase/app";

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

// Compare restaurant openTime and closeTime to current users timezone time
export const compareTime = (
  openTime: string | undefined,
  closeTime: string | undefined
): boolean => {
  // Get users timezone
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // Get users current time depending on timezone and format the date
  const now = moment.tz(timezone);
  const date = now.format("YYYY-MM-DD");
  // Format restaurant open and close times by moment.tz so it can compare between them
  const restOpenTime = moment.tz(
    date + " " + openTime,
    "YYYY-MM-DD h:mmA",
    timezone
  );
  const restCloseTime = moment.tz(
    date + " " + closeTime,
    "YYYY-MM-DD h:mmA",
    timezone
  );
  // Compare restaurant open and close times to current time and return
  if (restCloseTime.isBefore(restOpenTime))
    return now.isAfter(restOpenTime) || now.isBefore(restCloseTime);
  else return now.isBetween(restOpenTime, restCloseTime, null, "[)");
};

// Compare restaurant dateAdded to a month ago
export const compareDate = (
  dateAdded: firebase.firestore.Timestamp
): boolean => {
  // Get current Date
  const date = new Date();
  // Convert firebase timestamp to Date object and then get time in miliseconds
  const restDate = dateAdded.toDate().getTime();
  // Get date from a month ago and convert to miliseconds
  const monthAgo = date.setMonth(date.getMonth() - 1);
  // Compare the two dates and return a boolean depending on that
  return restDate > monthAgo;
};
