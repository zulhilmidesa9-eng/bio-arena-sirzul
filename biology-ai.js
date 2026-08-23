let selectedLevel="";



function selectLevel(level){

selectedLevel=level;


document.getElementById("level").innerHTML=

"Selected: "+level;


}





function askBiologyAI(){


let question=

document.getElementById("question").value.toLowerCase();



let topic=

document.getElementById("topic").value;



let answer="";





if(question.includes("mitosis")){


answer = `

🧬 <b>MITOSIS</b>

<br><br>

<b>Definition:</b><br>

Mitosis is a type of cell division that produces two genetically identical daughter cells from one parent cell.

<br><br>

<b>Process:</b>

<br>

1. <b>Prophase</b><br>
- Chromosomes become visible.<br>
- Nuclear membrane breaks down.<br>

<br>

2. <b>Metaphase</b><br>
- Chromosomes arrange at the equator of the cell.<br>

<br>

3. <b>Anaphase</b><br>
- Sister chromatids separate and move to opposite poles.<br>

<br>

4. <b>Telophase</b><br>
- Two new nuclei are formed.<br>
- Cell division is completed.

<br><br>

<b>Importance:</b><br>

✓ Growth<br>
✓ Repair damaged tissues<br>
✓ Replacement of old cells

<br><br>

<b>SPM Focus:</b><br>

Remember:
Mitosis produces <b>identical diploid cells</b>.

`;

}





else if(question.includes("meiosis")){


answer=

"🧬 Meiosis is a cell division process that produces four haploid cells. It is important for producing gametes and creates genetic variation.";

}





else if(question.includes("enzyme")){


answer=

"🧪 Enzymes are biological catalysts that speed up chemical reactions. Their activity is affected by temperature, pH and substrate concentration.";

}





else if(question.includes("photosynthesis")){


answer=

"🌱 Photosynthesis is the process where green plants produce glucose using carbon dioxide, water and light energy. Oxygen is released as a by-product.";

}





else if(question.includes("respiration")){


answer=

"⚡ Cellular respiration releases energy from glucose. Aerobic respiration uses oxygen while anaerobic respiration occurs without oxygen.";

}





else if(question.includes("homeostasis")){


answer=

"🏠 Homeostasis is the maintenance of a stable internal environment. Examples include body temperature regulation and blood glucose control.";

}





else if(question.includes("dna") || question.includes("gene")){


answer=

"🧬 DNA contains genetic information. A gene is a segment of DNA that controls inherited characteristics.";

}





else if(question.includes("ecosystem")){


answer=

"🌎 Ecosystems involve interactions between organisms and their environment. Energy flows through food chains and food webs.";

}





else{


answer=

"🤖 Please ask a KSSM Biology question related to Form 4 or Form 5 topics.";

}





document.getElementById("chat").innerHTML +=

`

<div class="student">

🧑‍🎓 ${question}

</div>


<div class="bot">

🤖 AI Mentor (${selectedLevel}):

${answer}

</div>

`;



document.getElementById("question").value="";


}
