function askAI(){


let question =
document.getElementById("question").value.toLowerCase();



let answer="";



if(question.includes("photosynthesis")){


answer=
"🌱 Photosynthesis is the process where plants convert light energy into chemical energy using chlorophyll. It produces glucose and oxygen.";

}



else if(question.includes("dna")){


answer=
"🧬 DNA is the molecule that stores genetic information and controls inheritance in living organisms.";

}



else if(question.includes("cell")){


answer=
"🔬 Cells are the basic units of life. They contain structures called organelles that perform essential functions.";

}



else if(question.includes("ecosystem")){


answer=
"🌎 An ecosystem is a community of organisms interacting with each other and their environment.";

}



else{


answer=
"I am still learning this topic. Try asking about cells, DNA, photosynthesis or ecosystems.";

}



document.getElementById("chat").innerHTML +=

`

<div class="student">

🧑‍🔬 Student:
${question}

</div>


<div class="bot">

🤖 AI Mentor:
${answer}

</div>

`;



document.getElementById("question").value="";


}
