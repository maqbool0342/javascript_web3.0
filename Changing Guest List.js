guestList = ["Ali","Hamza","Sana"]
for (let x in guestList) {
  console.log("Mr/Mrs " +guestList[x]+", We are gladly inviting you to join us on 03-10-22 Monday as we plan to arrange a delicious dinner party.")
}
console.log(guestList[0] + " is the guest")
guestList.splice(0, 1, 'Saleem');
for (let x in guestList) {
  console.log("Mr/Mrs " +guestList[x]+", We are gladly inviting you to join us on 03-10-22 Monday as we plan to arrange a delicious dinner party.")
}