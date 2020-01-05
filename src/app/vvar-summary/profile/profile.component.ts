import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'vvar-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public form: FormGroup;
  public isEdit: boolean = true;

  public bio = 'Doze anos de experiência no setor imobiliário. '
  + 'Amplo conhecimento sobre diversos tipos de empreendimento para ajudá-lo a '
  + 'encontrar o melhor investimento para você, tanto residencial quanto comercial.';

  public idiomas: any [] = [];

  public locations = ['Português', 'Inglês', 'Espanhol', 'Italiano', 'Frances'];
  public listType = ['Nativo', 'Fluente', 'Intermediário', 'Básico'];

  public list = [{
    locs: this.locations,
    typeLocs: this.listType
  }];

  // IMG
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      state: ['São Paulo'],
      country: ['Brasil'],
      phone_main: ['+55 11 90009 8866'],
      phone_alternative: ['+55 11 90000 1111'],
      email: ['rapha.pse@outlook.com'],
      bio: [this.bio],
      designacao_tecnica: ['Corretor Associado'],
      creci: ['185168-F'],
      enterprise: ['Lopes São Paulo'],
      idiomas: [[], [Validators.required]]
    });
  }

  public edited() {
    this.isEdit = !this.isEdit;
  }

  // ADD - OK
  public addIdioma() {
    this.idiomas = [];
    this.list.push({
      locs: this.locations,
      typeLocs: this.listType
    });

    if (this.form.get('idiomas').value !== null) {
      this.form.get('idiomas').value.map(x => this.idiomas.push(x));
    }

    this.list.map(x => {
      if (this.list.length === this.idiomas.length) {
       return false;
      }
      this.idiomas.push({
        loc: x.locs[0],
        type: x.typeLocs[0]
      });
    });
    this.form.get('idiomas').setValue(this.idiomas);
  }

  // UPDATE IDIOMA AND TYPE
  public setIdioma(index, event, lt: string) {
    if (this.form.get('idiomas').value !== null) {
      this.form.get('idiomas').value.map((x, i) => {
        if (index === i && lt === 'loc') {
          x.loc = event.srcElement.value;
        } else if (index === i && lt === 'tp') {
          x.type = event.srcElement.value;
        }
      });
    }
  }

  // CLEAR - OK
  public clearIdioma(index: number) {
    this.list.splice(index, 1);
    this.form.get('idiomas').value.splice(index, 1);
  }

  // SEND IMG
  public openModalImage() {
    console.log(' data ');
  }

  // IMG
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed(event) {
      // show message
      console.log(' img ', event)
  }

}
