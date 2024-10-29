const $head = document.querySelector("#head");
const $body = document.querySelector("body");
const $footer = document.querySelector(".footer")
const $a = document.querySelector("#aitem")
const $a2 = document.querySelector("#aitem2")

$a2.classList.add("a2")
$a.classList.add("a")
$footer.classList.add("colorFuente")

const $sitioEtq = document.querySelector("#SITIOETQ")
const $parrafo = document.querySelector(".p")

const $flexSection = document.querySelector(".flex-section")

$parrafo.setAttribute("id","p2")
 console.log($sitioEtq.getAttribute("href"));

 const $agregarParrafo = document.querySelector(".addP")

 function addParrafo() {
    let p2 = document.createElement("p");
    
    let infP = document.createTextNode("HOLA HOLA HOLA")
    p2.appendChild(infP);

    p2.setAttribute("class", "parrafo2");
    $flexSection.appendChild(p2)
 }

 $agregarParrafo.addEventListener("click", addParrafo)


 let dias = ['lunes', 'martes',' miercoles','jueves','viernes','sabado','domingo']

const $section2 = document.querySelector(".flex-section2");
 /*let ul = document.createElement("ul");

 $section2.appendChild(ul);

 dias.forEach(item =>{
   let li = document.createElement("li");
   li.textContent = item;
   ul.appendChild(li);
 })*/


 let meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']

 let ul = document.createElement("ul");
 $section2.appendChild(ul);
 let fragmento = document.createDocumentFragment();

 meses.forEach(item =>{
   let li = document.createElement("li");
   li.textContent = item;
   fragmento.appendChild(li);
 })

 ul.appendChild(fragmento);
