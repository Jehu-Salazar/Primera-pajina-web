


document.getElementById("historia").innerText = `
Perú nació de un gran imperio, los hijos del Dios Sol, los incas. Este imperio, con su capital en el Cusco, dominó gran parte de Sudamérica gracias a su avanzada organización, su impresionante red de caminos y su legado cultural. Sin embargo, con la llegada de los españoles en 1532, el Imperio Inca fue conquistado, dando inicio a la época colonial, que duró casi 300 años.

En 1821, Perú proclamó su independencia bajo el liderazgo de José de San Martín y Simón Bolívar. Desde entonces, el país ha pasado por diferentes etapas de desarrollo y cambios políticos. Hoy, el Perú es reconocido por su diversidad cultural, sus tradiciones ancestrales y sus impresionantes paisajes, desde Machu Picchu hasta la Amazonía. Gracias a este legado, el Perú sigue siendo un destino único lleno de historia y maravillas naturales.
`;

const imagenes = [
    "../Imagenes/Fondo/aracari.jpg",
    "../Imagenes/Fondo/bosq.jpg",
    "../Imagenes/Fondo/bosque.jpg",
    "../Imagenes/Fondo/china.jpg",
    "../Imagenes/Fondo/cueva.jpg",
    "../Imagenes/Fondo/desierto.jpg",
    "../Imagenes/Fondo/laguna.jpg",
    "../Imagenes/Fondo/marte.avif",
    "../Imagenes/Fondo/pichito.jpg",
    "../Imagenes/Fondo/selva.jpg",
    "../Imagenes/Fondo/soldado.jpg",
    "../Imagenes/Fondo/suiza.webp",
    "../Imagenes/Fondo/vikingos.jpg",
    "../Imagenes/Fondo/sogas.jpg"
];


let index = 0;

function cambiarFondo() {
    document.body.style.backgroundImage = `url('${imagenes[index]}')`;
    index = (index + 1) % imagenes.length;
}

setInterval(cambiarFondo, 2000);

/*-----------------------------------------------------------------------------------------*/
document.querySelectorAll(".visitar").forEach((boton, index) => {
    boton.addEventListener("click", function(event) {
        let cajaOriginal = event.target.closest(".caja");

        // Verificar si ya hay una caja expandida y eliminarla antes de abrir otra
        let cajaExpandida = document.querySelector(".caja.expandida");
        if (cajaExpandida) {
            cajaExpandida.remove();
        }

        // Clonar la caja original
        let nuevaCaja = cajaOriginal.cloneNode(true);
        nuevaCaja.classList.add("expandida");

        // Ocultar el botón "VISITAR"
        let botonVisitar = nuevaCaja.querySelector(".visitar");
        botonVisitar.style.display = "none"; 

        // Definir diferentes leyendas para cada caja
        let leyendas = [
            "Esta ciudad fue construida por orden de los dioses para proteger un tesoro sagrado: el conocimiento y la conexión con la naturaleza. Según la leyenda, los Apus, espíritus de las montañas, advirtieron a los incas sobre la llegada de invasores extranjeros que traerían destrucción, por lo que el emperador Pachacútec mandó edificar Machu Picchu en un lugar oculto entre las nubes, donde solo los elegidos podrían llegar. Se dice que esta ciudad estaba protegida por sacerdotes y guerreros, quienes juraron mantener su existencia en secreto. Otra versión de la leyenda habla de una princesa inca y un valiente guerrero de una tribu rival que, perseguidos por su amor prohibido, huyeron a Machu Picchu, donde los dioses, conmovidos por su amor, los transformaron en cóndores para que pudieran volar juntos por la eternidad. También se cree que los descendientes de los incas aún habitan en lo más profundo de las montañas, custodiando los secretos de su civilización y esperando el día en que su pueblo renazca. Machu Picchu sigue siendo un lugar místico y enigmático, donde quienes lo visitan pueden sentir la presencia de sus antiguos habitantes y la energía sagrada de los incas.",
            "Esta ciudad fue construida en torno a una laguna mágica en el desierto de Ica, envuelta en la leyenda de una hermosa princesa inca llamada Huacca China. Se dice que la joven, afligida por la muerte de su amado, lloraba junto a un espejo de agua cuando un cazador la descubrió y trató de atraparla. Al huir, dejó caer su espejo, que se convirtió en la laguna, y ella misma se transformó en una sirena que habita en sus aguas hasta el día de hoy. Se cree que en las noches de luna llena, la sirena emerge para cantar tristes melodías, atrayendo a viajeros desprevenidos hacia las profundidades del oasis. Algunos lugareños sostienen que la laguna tiene poderes curativos y que su arena dorada guarda los secretos de la princesa. Así, Huacachina sigue siendo un lugar lleno de misterio y magia en medio del desierto peruano.",
            "Esta ciudad fue construida por los valientes Chachapoyas, un pueblo guerrero conocido como los (Hombres de las Nubes), que habitó la selva alta del Perú mucho antes de la llegada de los incas. Según la leyenda, su ciudad más sagrada, Kuélap, fue edificada con la ayuda de dioses y espíritus de la montaña para proteger un tesoro oculto y el conocimiento ancestral de su pueblo. Se dice que sus murallas gigantescas y sus intrincadas construcciones fueron diseñadas para resistir cualquier invasión, y que en su interior vivían sacerdotes y guerreros que mantenían una conexión con los dioses. Otra historia cuenta que, tras la conquista inca y posteriormente la española, los últimos Chachapoyas se refugiaron en lo más profundo de la selva, donde aún custodian los secretos de su civilización. Algunos viajeros afirman que, en noches de luna llena, es posible ver sombras y escuchar susurros entre las ruinas de Kuélap, como si los espíritus de los antiguos guerreros aún vigilaran su ciudad sagrada",
            "Esta ciudad fue construida por una civilización ancestral que dejó un enigma grabado en el desierto: las misteriosas Líneas de Nazca. Según la leyenda, estas enormes figuras fueron trazadas por los dioses para comunicarse con los humanos y marcar el camino hacia sus moradas celestiales. Algunos relatos cuentan que la sacerdotisa Nazca, elegida por los dioses, recibió el encargo de dibujar estos geoglifos para invocar la lluvia en tiempos de sequía. Con la ayuda de su pueblo, trazó gigantescas figuras de animales, plantas y seres mitológicos, esperando que los dioses respondieran a su llamado. Otra versión dice que las líneas fueron hechas por una civilización que dominaba el cielo y que, desde lo alto, observaban la tierra como si fuera un enorme libro sagrado. Se cree que aquellos que recorren las líneas con respeto pueden sentir la energía de los antiguos habitantes y escuchar los susurros del viento que aún guarda los secretos de esta cultura milenaria."
        ];

        // Crear un nuevo elemento <p> para mostrar el texto correspondiente a la caja seleccionada
        let texto = document.createElement("p");
        texto.textContent = leyendas[index]; // Asigna la leyenda correspondiente
        texto.style.padding = "20px";
        texto.style.textAlign = "justify";
        texto.style.fontSize = "16px";
        texto.style.color = "black";
        texto.style.backgroundColor = "white";
        texto.style.overflowY = "auto";
        texto.style.maxHeight = "300px"; // Agrega una barra de desplazamiento si el texto es muy largo

        // Ajustar la caja para que tenga espacio
        nuevaCaja.style.overflow = "hidden";
        nuevaCaja.style.padding = "20px";
        nuevaCaja.style.backgroundColor = "white";
        nuevaCaja.style.maxWidth = "600px";
        nuevaCaja.style.maxHeight = "400px";
        nuevaCaja.style.position = "fixed";
        nuevaCaja.style.left = "50%";
        nuevaCaja.style.top = "50%";
        nuevaCaja.style.transform = "translate(-50%, -50%)";
        nuevaCaja.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.5)";
        nuevaCaja.style.zIndex = "100";

        // Agregar el texto a la nueva caja
        nuevaCaja.appendChild(texto);

        // Agregar la nueva caja al final del body
        document.body.appendChild(nuevaCaja);

        // Evento para cerrar la caja cuando el cursor salga de ella
        nuevaCaja.addEventListener("mouseleave", function() {
            nuevaCaja.remove();
        });

        // También cerrará la caja si se hace clic fuera de ella
        setTimeout(() => {
            document.addEventListener("click", function cerrar(event) {
                if (!nuevaCaja.contains(event.target)) {
                    nuevaCaja.remove();
                    document.removeEventListener("click", cerrar);
                }
            });
        }, 100); // Pequeño retraso para evitar que el clic inicial lo cierre inmediatamente
    });
});
