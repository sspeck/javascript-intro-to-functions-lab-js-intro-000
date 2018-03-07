function shout (hello) {
  return "hello".toUpperCase()
}

function whisper (HELLO) {
  return"HELLO".toLowerCase()
}

function logShout (hello) {
  console.log('hello'.toUpperCase())
}

function logWhisper (HELLO) {
  console.log('HELLO'.toLowerCase())
}

function sayHiToGrandma(hello){
  if(HELLO.toLowerCase()==='hello'){
    return "I can't hear you!"
  }else if(hello.toUpperCase()==='HELLO'){
    return "YES INDEED!"
  }else if (hello === "I love you, Grandma.") {
  return "I love you, too."
}
}
