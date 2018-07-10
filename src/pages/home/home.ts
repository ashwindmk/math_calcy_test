import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MathProvider } from '../../providers/math/math';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public math: MathProvider) {

  }

  testAdd(arg1, arg2) {
    let data = {
      param1: arg1,
      param2: arg2
    }

    this.math.add(data)
      .then(result => {
        alert("Result: " + result);
      })
      .catch(error => {
        alert("Error: " + error);
      });
  }

}
