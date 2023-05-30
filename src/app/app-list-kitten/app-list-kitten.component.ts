import { Component, Input } from '@angular/core';
import { AppUserKittenComponent } from '../app-user-kitten/app-user-kitten.component';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './app-list-kitten.component.html',
  styleUrls: ['./app-list-kitten.component.css']
})
export class AppListKittenComponent {
  @Input() appUserKittenComponent!: AppUserKittenComponent;

  kittens = [
    {
      name: 'Minou',
      breed: 'Chartreux',
      birthdate: '2022-01-01',
      photo: 'https://placekitten.com/300/300'
    },
    {
      name: 'Félix',
      breed: 'Persan',
      birthdate: '2022-03-15',
      photo: 'https://placekitten.com/300/301'
    },
    {
      name: 'Momo',
      breed: 'Persan',
      birthdate: '2022-03-15',
      photo: 'https://placekitten.com/300/302'
    },
    {
      name: 'Grumpy',
      breed: 'Persan',
      birthdate: '2022-03-15',
      photo: 'https://placekitten.com/300/303'
    },
    {
      name: 'Pacha',
      breed: 'Persan',
      birthdate: '2022-03-15',
      photo: 'https://placekitten.com/300/304'
    }
  ];

  onKittenAdded(kitten: any):void {
    console.log('Chaton adopté :', kitten);
    console.log('Liste des chatons avant adoption :', this.kittens);
    this.kittens.push(kitten);
    console.log('Liste des chatons après adoption :', this.kittens);
  }

  selectedKitten: any = null;

  showKittenDetails(kitten: any) {
    this.selectedKitten = kitten;
  }

  hideKittenDetails() {
    this.selectedKitten = null;
  }

  adoptKitten(kitten: any) {
    const index = this.kittens.indexOf(kitten);
    if (index !== -1) {
      this.kittens.splice(index, 1);
      this.appUserKittenComponent.onKittenAdopted(kitten);
    }
  }
  
}
