// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener todas las imágenes de los luchadores
var images = document.querySelectorAll(".gallery-SUPERSTARS-item img");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en una imagen de luchador, abrir el modal
images.forEach(function(image) {
    image.addEventListener("click", function() {
        modal.style.display = "block";
        var imgSrc = this.getAttribute("src");
        var wrestlerName = this.nextElementSibling.textContent;
        var championship = this.parentElement.getAttribute("data-championship");
        var championshipImg = this.parentElement.getAttribute("data-championship-img");
        document.getElementById("modalImg").src = imgSrc;
        document.getElementById("modalTitle").textContent = wrestlerName;
        document.getElementById("modalChampionship").textContent = "Campeonato: " + championship;
        document.getElementById("modalChampionshipImg").src = championshipImg;
    });
});

// Cuando el usuario haga clic en <span> (x), cerrar el modal
span.onclick = function() {
    modal.style.display = "none";
};

// Cuando el usuario haga clic fuera del modal, también cerrarlo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

document.querySelector('.search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = event.target.search.value.toLowerCase();
    const galleryItems = document.querySelectorAll('.gallery-SUPERSTARS-item');
    
    galleryItems.forEach(item => {
        const caption = item.querySelector('.caption-SUPERSTARS').innerText.toLowerCase();
        if (caption.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
