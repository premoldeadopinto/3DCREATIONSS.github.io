document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    const productos = document.querySelectorAll(".producto");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const pageInfo = document.querySelector(".page-info");
    const pageNumbersContainer = document.querySelector(".page-numbers");

    const productosPorPagina = 16;
    let paginaActual = 1;
    const totalPaginas = Math.ceil(productos.length / productosPorPagina);

    function mostrarPagina(pagina) {
        const inicio = (pagina - 1) * productosPorPagina;
        const fin = inicio + productosPorPagina;

        productos.forEach((producto, index) => {
            producto.style.display = (index >= inicio && index < fin) ? "block" : "none";
        });

        actualizarNumerosDePagina();
    }

    function actualizarNumerosDePagina() {
        pageNumbersContainer.innerHTML = '';
        for (let i = 1; i <= totalPaginas; i++) {
            const pageNumber = document.createElement('span');
            pageNumber.textContent = i;
            pageNumber.classList.add('page-number');
            if (i === paginaActual) {
                pageNumber.classList.add('active');
            }
            pageNumber.addEventListener('click', function () {
                paginaActual = i;
                mostrarPagina(paginaActual);
            });
            pageNumbersContainer.appendChild(pageNumber);
        }
    }

    prevButton.addEventListener("click", function () {
        if (paginaActual > 1) {
            paginaActual--;
            mostrarPagina(paginaActual);
        }
    });

    nextButton.addEventListener("click", function () {
        if (paginaActual < totalPaginas) {
            paginaActual++;
            mostrarPagina(paginaActual);
        }
    });

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });

    mostrarPagina(paginaActual);

    // Aquí puedes inicializar otras cosas si es necesario
});
