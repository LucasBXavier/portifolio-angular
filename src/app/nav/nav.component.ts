import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  isOffcanvasOpen: boolean = false;

  toggleOffcanvas(): void {
    this.isOffcanvasOpen = !this.isOffcanvasOpen;
    const offcanvas = document.getElementById('offcanvas');
    const btn = document.getElementById('ofcanvas-btn');

    if (offcanvas && btn) {
      if (this.isOffcanvasOpen) {
        offcanvas.classList.add('open');
        btn.classList.add('change');
      } else {
        offcanvas.classList.remove('open');
        btn.classList.remove('change');
      }
    }
  }
}
