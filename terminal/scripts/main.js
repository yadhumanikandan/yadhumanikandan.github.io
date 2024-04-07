
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome");
  await delay(700);
  createText("You can run several commands:");
 
  createCode("about me", "Who am i and what do i do.");
  createCode("all", "See all commands.");
  createCode("social -a", "All my social networks.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "#user";
  span1.textContent = "@";
  span2.textContent = "~/yadhukrishnan";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "all"){
    trueValue(value);
    
    createCode("projects", "My github page with my projects. Follow me there ;)");
    createCode("about me", "Who am i and what do i do.");
    createCode("social -a", "All my social networks.");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/yadhumanikandan' target='_blank'><i class='fab fa-github white'></i> github.com/yadhumanikandan</a>")
  }
  else if(value === "about me"){
    trueValue(value);
    createText("Hi, My name is Yadhukrishnan ;)")
    createText("I am a dedicated Cybersecurity Professional specializing in Penetration Testing, Bug Bounty Hunting, and Security Analysis. Committed to fortifying digital ecosystems and safeguarding critical assets. Let's collaborate to enhance resilience and ensure a secure digital future. Connect with me at <span class='blue'>yadhumanikandan0@gmail.com </span>to discuss cutting-edge cybersecurity strategies and fortifications.")
  }
  else if(value === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/yadhumanikandan' target='_blank'><i class='fab fa-github white'></i> github.com/yadhumanikandan</a>")
    createText("<a href='https://www.linkedin.com/in/yadhukrishnan-m-m-09117a224/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/yadhukrishnan-m-m</a>")
    createText("<a href='https://twitter.com/yadhumanikandan' target='_blank'><i class='fab fa-twitter white'></i> twitter.com/yadhumanikandan</a>")
  }
  else if(value === "social"){
    trueValue(value);
    createText("Didn't you mean: <span class=blue>social -a</span>?")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <span class='text'>- ${text} </span>`;
  app.appendChild(p);
}

open_terminal();