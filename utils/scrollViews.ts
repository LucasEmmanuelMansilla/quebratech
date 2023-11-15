export function scrollToForm() {
  const elemento = document.getElementById("name");
  function estaEnPantalla(elemento: any): boolean {
    const rect = elemento.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Verifica si la parte superior del elemento está visible
    // y si la parte inferior del elemento también está visible
    return rect.top >= 0 && rect.bottom <= windowHeight;
  }

  // Llama a la función y verifica si el elemento está en pantalla
  function desplazarHastaElemento(elemento: any) {
    elemento.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  desplazarHastaElemento(elemento);
}

export function scrollToServices() {
  const elemento = document.getElementById("services");
  function estaEnPantalla(elemento: any): boolean {
    const rect = elemento.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top >= 0 && rect.bottom <= windowHeight;
  }
  function desplazarHastaElemento(elemento: any) {
    elemento.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  desplazarHastaElemento(elemento);
}

export function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
