guestList = ["Fizza","Farheen","Sana"]
for (let x in guestList) {
  console.log("Mr/Mrs " +guestList[x]+", We are gladly inviting you to join us on 03-10-22 Monday as we plan to arrange a delicious dinner party.")
}
console.log("\n")
console.log(guestList[0] + " is the guest")
guestList.splice(0, 1, 'Hafsa');
for (let x in guestList) {
  console.log("Mr/Mrs " +guestList[x]+", We are gladly inviting you to join us on 03-10-22 Monday as we plan to arrange a delicious dinner party.")
}
console.log("\n")
console.log("I have found a bigger dinner table.")
guestList.splice(0, 0, 'Daniyal');
guestList.splice(2, 0, 'Ayehsa');
guestList.push("Saad")
for (let x in guestList) {
  console.log("Mr/Mrs " +guestList[x]+", We are gladly inviting you to join us on 03-10-22 Monday as we plan to arrange a delicious dinner party.")
}
console.log("\n")
console.log("I can invite only two people for dinner")
for (let x in guestList) {
  while (guestList.length > 2) {
    console.log(guestList.pop() +" I am sorry i can't invite you for diiner")
  
}
}
console.log("\n")
for (let x in guestList) {
  console.log("Mr/Mrs " +guestList[x]+", you are still invited")
}