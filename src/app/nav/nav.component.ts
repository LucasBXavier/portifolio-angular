import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // Define a função de clique
    const clickHandler = (): void => {
      console.log('Você clicou no botão!');
    };

    // Obtém o elemento do botão dentro do componente
    const botao = this.el.nativeElement.querySelector(
      '#clicou'
    ) as HTMLButtonElement;

    // Adiciona o evento de clique se o botão for encontrado
    if (botao) {
      botao.addEventListener('click', clickHandler);
    } else {
      console.error('Botão com o ID "clic" não encontrado.');
    }
  }
}
