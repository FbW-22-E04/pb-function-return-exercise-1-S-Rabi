//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// 1
function uppercase(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}
console.log(uppercase("the quick brown fox"));
// 2
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function find_longest_word(str) {
  str = str.split(" ");
  return str.sort((a, b) => b.length - a.length)[0];
}
console.log(find_longest_word("Web Development Tutorial"));

// 3
// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function Longest_Country_Name(country_name) {
  let max_str = country_name[0].length;
  let ans = country_name[0];
  for (let i = 1; i < country_name.length; i++) {
    const maxi = country_name[i].length;
    if (maxi > max_str) {
      ans = country_name[i];
      max_str = maxi;
    }
  }
  return ans;
}

console.log(
  Longest_Country_Name(["Australia", "Germany", "United States of America"])
);
console.log("----------------------------------");

// function Longest_Country_Name() {
//   arr.sort(function (a, b) {
//     return b.length - a.length;
//   })[0];
// }
// console.log(Longest_Country_Name(["Australia", "Germanyfffffffff", "UsA"]));
