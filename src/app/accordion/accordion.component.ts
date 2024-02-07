import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() items: any[] = [];

  toggleOptions(item: any) {
    item.isOpen = !item.isOpen;
    console.log(item.isOpen);
  }
}
