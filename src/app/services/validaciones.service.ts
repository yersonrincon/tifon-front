import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class ValidacionesService {
  constructor() { }

  
  passwordsIguales( passw1: string, passw2: string){
    return ( form: FormGroup) => {
    const passw1Control = form.controls[passw1];
    const passw2Control = form.controls[passw2];

    if(passw1Control.value === passw2Control.value){
      passw2Control.setErrors(null);
    } else {
      passw2Control.setErrors({ noEsigual: true});
    }
  }
}
showNotification(from, align, color, message){
  const type = ['','info','success','warning','danger'];

  $.notify({
      icon: "notifications",
      message

  },{
      type: color,
      timer: 3000,
      placement: {
          from: from,
          align: align
      },
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">notifications</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
      '</div>'
  });
}
}
