import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss'],
})
export class ConteudoComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    window.addEventListener('load', function () {
      iniciarAnimacao();
    });

    async function iniciarAnimacao(): Promise<void> {
      let mensagens: string[] = [
        '</Desenvolvedor Web>',
        '</front-end>',
        '</back-end>',
      ];

      while (true) {
        for (let mensagem of mensagens) {
          await animarTexto(mensagem);
        }
      }
    }

    async function animarTexto(texto: string): Promise<void> {
      const elementoTexto: HTMLElement = document.querySelector(
        '#typewriter'
      ) as HTMLElement;
      let indice: number = 0;

      return new Promise<void>((resolve) => {
        const intervaloAnimacao = setInterval(function () {
          if (indice < texto.length) {
            elementoTexto.textContent += texto.charAt(indice);
            indice++;
          } else {
            clearInterval(intervaloAnimacao);
            setTimeout(() => apagarTexto(resolve), 1000);
          }
        }, 120);

        function apagarTexto(callback: () => void): void {
          const intervaloApagar = setInterval(function () {
            if (elementoTexto.textContent!) {
              elementoTexto.textContent = elementoTexto.textContent.slice(
                0,
                -1
              );
            } else {
              clearInterval(intervaloApagar);
              setTimeout(() => callback(), 1000);
            }
          }, 120);
        }
      });
    }
  }
}
