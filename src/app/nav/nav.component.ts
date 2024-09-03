import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  toggleofcanvas(): void {
    const menuBtn = document.querySelector('#ofcanvas-btn');
    const ofcanvas = document.querySelector('#ofcanvas');

    if (menuBtn && ofcanvas) {
      menuBtn.classList.toggle('change');
      ofcanvas.classList.toggle('active');
    }
  }
}
