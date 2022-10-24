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