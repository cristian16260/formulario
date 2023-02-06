import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

poderes = ['Realmente inteligente', 'Súper flexible',
              'Super caliente', 'Cambiador de clima'];

model = new Hero(18,'Dr. IQ', this.poderes[0], 'Megamente');

submitted = false;

onSubmit() {this.submitted = true; }  

newHero(){
  this.model = new Hero(42,'','');
  }

}




