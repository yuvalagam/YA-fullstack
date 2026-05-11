(() => {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  console.log(helloSpeaker);
  console.log(byeSpeaker);

  for (let n in names) {
    let name = names[n];
    if (name[0] === "J" || name[0] === "j") {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }
})();
