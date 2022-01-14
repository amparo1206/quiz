# Quiz de Harry Potter ⚡🧙🏼
_Este proyecto se realiza con el fin de aprender a implementar HTML5, CSS3 Y JS vanilla. Proyecto realizado en The Bridge 🖥️_

_El editor que he utilizado es Visual Studio Code_

# COMENZAMOS ✅
_En el Index tenemos el comienzo del juego, como vemos tenemos unos botones con unos estilos de neon, quería unos estilos genuninos y únicos para mi quiz, este tipo de estilo me gusto. Aquí dejo las css_

![Image Text](https://github.com/amparo1206/quiz/blob/main/imagenes/inicio.png)

### Código Neon

```CSS
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

_Una vez entramos en el quiz nos encontramos las preguntas, hay un total de 10 preguntas, aunque se han almacenado más siempre aparecen 10, van cambiando en cada partida tanto de orden como cual es la pregunta que aparece._
_Tenemos un contador de cuantas preguntas llevamos y el puntuaje para que el usuario sepa cómo va en el juego._
_Si la pregunta es correcta antes de cambiar a la siguiente se pondrá en verde una vez selecciones la respuesta, si la fallas aparecerá en rojo._

![Image Text](https://github.com/amparo1206/quiz/blob/main/imagenes/preguntas.jpg)