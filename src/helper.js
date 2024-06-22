export default function generatePassword(length, filters) {
  let res = {
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers: "0123456789",
      symbols: "~`!@#$%^&*()_-+={[}]|:;\"'<,>.?/",
    },
    retVal = "";
  let charset = Object.keys(filters)
    .map((el) => {
      return filters[el] ? res[el] : "";
    })
    .join("");
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
