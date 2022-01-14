# Quiz de Harry Potter ⚡🧙🏼
_Este proyecto se realiza con el fin de aprender a implementar HTML5, CSS3 Y JS vanilla. Proyecto realizado en The Bridge 🖥️_

_El editor que he utilizado es Visual Studio Code_

# COMENZAMOS ✅
_En el Index tenemos el comienzo del juego, como vemos tenemos unos botones con unos estilos de neon, quería unos estilos genuninos y únicos para mi quiz, este tipo de estilo me gusto. Aquí dejo las css_

![Image Text](https://github.com/amparo1206/quiz/blob/main/imagenes/inicio.png)

### Código Neon

```
@keyframes flicker {

    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
      
        text-shadow:
            -0.2rem -0.2rem 1rem #fff,
            0.2rem 0.2rem 1rem #fff,
            0 0 2rem var(--neon-text-color),
            0 0 4rem var(--neon-text-color),
            0 0 6rem var(--neon-text-color),
            0 0 8rem var(--neon-text-color),
            0 0 10rem var(--neon-text-color);
        
        box-shadow:
            0 0 .5rem #fff,
            inset 0 0 .5rem #fff,
            0 0 2rem var(--neon-border-color),
            inset 0 0 2rem var(--neon-border-color),
            0 0 4rem var(--neon-border-color),
            inset 0 0 4rem var(--neon-border-color);        
    }
    
    20%, 24%, 55% {        
        text-shadow: none;
        box-shadow: none;
    }    
}

```
### Pantalla de preguntas

