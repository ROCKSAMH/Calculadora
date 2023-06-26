class Calculadora {
    constructor() {
      this.pantalla = document.querySelector(".pantalla");
      this.botones = document.querySelectorAll(".btn");
      this.pantalla.textContent = "0";
      this.asignarEventListeners();
    }
  
    asignarEventListeners() {
      this.botones.forEach(boton => {
        boton.addEventListener("click", () => {
          this.realizarOperacion(boton);
        });
      });
    }
  
    realizarOperacion(boton) {
      const botonApretado = boton.textContent;
  
      if (boton.id === "c") {
        this.pantalla.textContent = "0";
        return;
      }
  
      if (boton.id === "borrar") {
        if (this.pantalla.textContent.length === 1 || this.pantalla.textContent === "Error") {
          this.pantalla.textContent = "0";
        } else {
          this.pantalla.textContent = this.pantalla.textContent.slice(0, -1);
        }
        return;
      }
  
      if (boton.id === "igual") {
        try {
          this.pantalla.textContent = eval(this.pantalla.textContent);
        } catch {
          this.pantalla.textContent = "Error";
        }
        return;
      }
  
      if (this.pantalla.textContent === "0" || this.pantalla.textContent === "Error") {
        this.pantalla.textContent = botonApretado;
      } else {
        this.pantalla.textContent += botonApretado;
      }
    }
  }
  
  const calculadora = new Calculadora();
  