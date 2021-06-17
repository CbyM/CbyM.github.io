//Hardcoded bot simulation 



var question = '<h1></h1>';				 
var output = document.getElementById('output');
output.innerHTML = question;


function bot() {
  
    var input = document.getElementById("input").value;
    
    input = input.toLowerCase();
    
    const trigger = [
      //0 SALUTE
      ["hi", "hey", "hello","sup","yo","what's popping"],
      //1 
      ["how are you", "how are things", "how are you doing", "how u doing", "how are u"],
      //2
      ["job", "work","experience", "career", "occupation", "work experience"],
      //3 SKILLS
      ["skills","skill set", "what skills do you have", "what are you good at?", "technical skills", "expertise", "competence"],
      //4 INTERESTS
      ["what are your interests?", "interests", "hobbies", "what are your hobbies?", "passion", "free time"],
      //5 Presentation
      ["tell me about yourself", "who are you", "what is your name", "introduce", "introduction",
      "introduce yourself", "tell me about you", "who are you?", "who are you" ],
      //6
      ["studies", "education", "degrees", "diplomas"],
      //7
      ["bye", "good bye", "goodbye"]

    ];
      
    const reply = [
      //0 SALUTE -> ANSWER
      ["Hello!", "Hi!", "Hey!", "Hi there!", "Good day to you.","Hello, hope you are having a good day.", "Greetings."], 
      //1
      [
          "Doing good! Hope you are as well.",
          "Doing well, thanks for asking"
        ],
      //2
      ["Worked in Public Relations, Event and Communication Management for a total of 5 years. Worked at a Law firm for 1 year. Worked in an NGO with kids in risk of social exclusion for 6 months. Currently freelancing. "],
      //3 SKILLS
      ["Discrete mathematics, communication, languages, applied psychology, philosophycal fundamentals, critical thinking, team working and conflict resolution "],
      //4 INTERESTS
      ["Reading, playing CTF challenges, learning new skills, trading, doing sports and hanging out with people "],
      //5 Presentation
      ["My name is Pablo Misirov, born in 1996. Currently studying UX Design and InfoSec."],
      //6
      ["European School of Brussels | International Communication Management | Event and Media Entertainment Managament | UX Design "],
      //7
      ["Goodbye and Have a good day.", "Wish you a good day", "Have a good day", "Hope seeing you again."],

    ];
      
    for (let x = 0; x < trigger.length; x++) {
      for (let y = 0; y < reply.length; y++) {
        if (trigger[x][y] == input) {
          console.log(trigger[x][y]);
          items = reply[x];
          item = items[Math.floor(Math.random() * items.length)];
          output.innerHTML = `<h1>${item}</h1>`;
        }
      } 

      }


  }

document.addEventListener("DOMContentLoaded", () => {
  
  document.querySelector("#input").addEventListener("keydown", function(e) {
    if (e.code === "Enter") {
      console.log("You clicked the form and pressed the enter button!")
      let input = document.getElementById("input").value;
      console.log(`Input: '${input}'`)

      bot();
        
      document.getElementById("input").value = "";
        
    }
  });
});