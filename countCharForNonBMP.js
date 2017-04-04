function codePointLength(text) {
let result = text.match(/[\s\S]/gu);
return result ? result.length : 0;
}
console.log(codePointLength("abc")); // 3
console.log(codePointLength("𠮷bc")); // 3