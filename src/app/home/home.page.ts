/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-types */
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public alertController: AlertController) {}

  async exibirAlerta(mensagem: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Título',
      subHeader: 'Subtitulo',
      message: mensagem,
      buttons: ['OK'],
    });
    await alert.present();
  }

  verificaSelecionado(valor: any) { //valor: any -> ta recebendo um parâmetro, o any diz que pode ser qualquer coisa
    let mensagem: string; //variavel
    mensagem = valor.detail.value; //variavel.detail.value ($event é detail.value)(value aparece a mesma coisa que ta escrita no html)
    //sobre a multipla seleção, a variavel vira um vetor
    this.exibirAlerta(mensagem);
  }
}
