const productos = {
    producto1: {
        nombre: "Calendario giratorio Magnético",
        precio: "$10000",
        descripcion: "Descripción del producto 1.",
         imagenes: ["image/475860475_2075545712950612_55661.webp", "image/476168641_418766061257093_442519.webp"]
    },
    producto2: {
        nombre: "Medalla de Identificación Hueso",
        precio: "$3000",
        descripcion: "Descripción del producto 2.",
        imagenes: ["image/475072694_1611450672811947_37901.webp", "image/474615349_1758142244961625_46896.webp", "image/imagen6.jpg"]
    },
    producto3: {
        nombre: "Estatua de Anubis",
        precio: "$6000",
        descripcion: "Descripción del producto 2.",
        imagenes: ["image/472392632_3972587112985625_57081.webp", "image/472536304_572790652290402_679483.webp", "image/472536304_1090685259507420_59467.webp"]
    }
    ,
    producto4: {
        nombre: "Escultura de Iron Man",
        precio: "$15000",
        descripcion: "Escultura de Iron Man.",
        imagenes: ["image/472448700_1102152928368207_10362.webp", "image/472452824_1329014384940113_81650.webp", "image/472514763_967355178580710_854191.webp", "image/472582698_1526429311409421_15718.webp"]
    }
    ,
    producto5: {
        nombre: "Torre Eiffel",
        precio: "$15000",
        descripcion: "Descripción del producto 2.",
        imagenes: ["image/472453168_563863513215406_662358.webp", "image/472537626_553092147547667_458655.webp"]
    }
    ,
    producto6: {
        nombre: "Numeros Magneticos",
        precio: "$4000",
        descripcion: "Descripción del producto 2.",
        imagenes: ["image/474263202_589109377237720_895656.webp"]
    }
    ,
    producto7: {
        nombre: "Soporte con movimiento para teléfono",
        precio: "$6000",
        descripcion: "Descripción del producto 2.",
        imagenes: ["image/2025-01-31_80c0158c52eae.webp", "image/WhatsApp_Image_2025-02-08_at_13.00.53-removebg.webp"]
    }
    ,
    producto8: {
        nombre: "Soporte Para Celular",
        precio: "$3000",
        descripcion: "Descripción del producto 2.",
        imagenes: ["image/469817814_1109157817073535_80018.webp", "image/472667301_598289746257746_513625.webp", "image/472806684_9089721187751157_59662.webp"]
    }
    ,
    producto9: {
        nombre: "Lamparas Colgantes",
        precio: "$25000",
        descripcion: "Descripción del producto 2.",
        imagenes: ["image/472697562_1327254248696706_57667.webp"]
    }
    ,
    producto10: {
        nombre: "Pastor alemán",
        precio: "$12000",
        descripcion: "Descripción del producto 2.",
        imagenes: ["image/473204602_1329416414661436_47381.webp", "image/473215991_918844790411918_399434.webp"]
    }
    ,
    producto11: {
        nombre: "Leon",
        precio: "$15000",
        descripcion: "Descripción del producto 2.",
        imagenes: ["image/472696937_465494709939443_690864.webp", "image/472548818_579387041532542_838137.webp"]
    }
    ,
    producto12: {
        nombre: "Letras Plásticas",
        precio: "$5000",
        descripcion: "Descripción del producto 2.",
        imagenes: ["image/473201924_1279609073270356_84244.webp"]
    }
    ,
    producto13: {
        nombre: "Torso de Spiderman",
        precio: "$10000",
        descripcion: "Descripción del producto 2.",
        imagenes: ["image/472563603_1110089870857993_72528.webp", "image/472569025_2307463502959360_81416.webp", "image/472689584_959494425536010_289676.webp"]
    }
    ,
    producto14: {
        nombre: "Cartel Domicilio de Casa con Número. Personalizable",
        precio: "$4000",
        descripcion: "Descripción del producto 2.",
        imagenes: ["image/470472730_1119989306249937_12997.webp"]
    }
    // Más productos
};

function cargarProducto() {
    const params = new URLSearchParams(window.location.search);
    const productoId = params.get('producto');

    const producto = productos[productoId];
    if (producto) {
        document.getElementById('nombre-producto').textContent = producto.nombre;
        document.getElementById('precio-producto').textContent = producto.precio;
        document.getElementById('descripcion-producto').textContent = producto.descripcion;

        const miniaturas = document.getElementById('miniaturas');
        miniaturas.innerHTML = '';
        producto.imagenes.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = "Miniatura";
            img.onclick = () => cambiarImagen(src);
            miniaturas.appendChild(img);
        });

        cambiarImagen(producto.imagenes[0]);
    }
}

function cambiarImagen(src) {
    document.getElementById('imagen-grande').src = src;
}

function volver() {
    window.history.back();
}

document.addEventListener("DOMContentLoaded", cargarProducto); 