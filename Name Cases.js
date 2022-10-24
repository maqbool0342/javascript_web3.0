personalMessage = "MaQbOol HuSSain"
console.log("Actual Message : " + personalMessage)
console.log("lowercase : " + personalMessage.toLowerCase());
console.log("uppercase : " + personalMessage.toLocaleUpperCase());
const newStr = personalMessage.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
console.log("titlecase : " + newStr);