document.addEventListener("DOMContentLoaded", function() {
    var botones = document.querySelectorAll('.botones button');
    
    botones.forEach(function(boton) {
        boton.addEventListener("click", function() {
            var color = this.getAttribute('data-color');
            cambiarColorFondo(color);
        });
    });

    function cambiarColorFondo(color) {
        switch(color) {
            case 'rojo':
                document.body.style.backgroundColor = "red";
                break;
            case 'azul':
                document.body.style.backgroundColor = "blue";
                break;
            case 'amarillo':
                document.body.style.backgroundColor = "yellow";
                break;
            case 'naranja':
                document.body.style.backgroundColor = "orange";
                break;
            case 'violeta':
                document.body.style.backgroundColor = "violet";
                break;
            case 'blanco':
                document.body.style.backgroundColor = "white";
                break;
            default:
                Element.style.backgroundColor = "white";
        }
    }
});
