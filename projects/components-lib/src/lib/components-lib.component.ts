import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-components-lib',
  template: `
    <p>
      components-lib works!
      add content
      add item-2 content
      add item-3 content
      add item-4 content
      add update 1
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
