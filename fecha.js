// Función para generar una fecha aleatoria entre dos fechas dadas
function generarFechaAleatoria(inicio, fin) {
    const fechaInicio = new Date(inicio).getTime(); // Convertir fecha de inicio a milisegundos
    const fechaFin = new Date(fin).getTime(); // Convertir fecha de fin a milisegundos

    // Generar un número aleatorio entre el rango de fechas
    const fechaAleatoria = new Date(Math.floor(Math.random() * (fechaFin - fechaInicio + 1)) + fechaInicio);

    // Mostrar la fecha aleatoria en formato "DD/MM/YYYY"
    console.log(fechaAleatoria.toLocaleDateString());
}

// Generar una fecha aleatoria entre el 1 de enero de 2020 y el 31 de diciembre de 2025
generarFechaAleatoria('2020-01-01', '2025-12-31');
