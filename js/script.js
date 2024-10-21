
    console.log(document);

    const $flexItem2 = document.querySelector(".flex-item");
    const $flexItem1 = document.getElementById("flex-item2");
    const $a1 = document.querySelector("#a1");
    const $body = document.querySelector("#cuerpo")


    const $enviar = document.querySelector("#enviar");

    function cambiarNombre() {
        let edad = 1;
        if(edad == 0){
            $a1.textContent = "facebook"
        }else{
            $a1.textContent = "tiktok"
        }
    }
    
    function cambioColor() {
        $a1.style.backgroundColor = "yellow";
        $a1.classList.add("scale");
        $flexItem2.classList.toggle("rotate");
        $body.classList.toggle("body");
    }

    //$enviar.addEventListener("click", cambiarNombre);

    $enviar.addEventListener("click", cambioColor);
