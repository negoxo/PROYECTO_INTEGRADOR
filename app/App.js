// Definición de la función de la aplicación
export const App = () => {
    
    // Actualiza el contenido del elemento con ID "root" utilizando una cadena de plantilla
    document.getElementById("root").innerHTML = `

    <div class="contenedor_principal">  <h1>contenedor_principal</h1>

        <div class="contenedor_a">
            <div class="cajita_1"><h1>cajita_1</h1></div>
            <div class="cajita_2"><h1>cajita_2</h1></div>
            <div class="cajita_3"><h1>cajita_3</h1></div>
        </div>
        <div class="contenedor_b"><h1>contenedor_b"</h1></div>
    </div>
    <aside class="contenedor_lateral"><h1>contenedor_lateral</h1>
            <div class="cajita_4"><h1>cajita_4</h1></div>
            <div class="cajita_5"><h1>cajita_5</h1></div>
            <div class="cajita_6"><h1>cajita_6</h1></div>
    </aside>
    `
}
