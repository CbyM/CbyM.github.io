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
      ["  "],
      //3 SKILLS
      [""],
      //4 INTERESTS
      [" "],
      //5 Presentation
      [""],
      //6
      ["],
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
