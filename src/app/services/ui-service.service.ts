import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class UiServiceService {
  constructor(
    private alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {}

  async alertaInformativa(message: string) {
    const alert = await this.alertCtrl.create({
      message,
      buttons: ['OK'],
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      position: 'top',
      duration: 1500,
    });
    toast.present();
  }
}
