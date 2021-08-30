import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-components-lib',
  template: `
    <p>
      components-lib works!
      add content
      add item-2 content
    </p>
  `,
  styles: [
  ]
})
export class ComponentsLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
