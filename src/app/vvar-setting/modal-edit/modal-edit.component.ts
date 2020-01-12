import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'vvar-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {

  public form: FormGroup;

  public locations = ['Português', 'Inglês', 'Espanhol', 'Italiano', 'Frances'];
  public listType = ['Nativo', 'Fluente', 'Intermediário', 'Básico'];

  public list = [{
    locs: this.locations,
    typeLocs: this.listType
  }];

  public idiomas: any [] = [];


  public bio = 'Doze anos de experiência no setor imobiliário. '
  + 'Amplo conhecimento sobre diversos tipos de empreendimento para ajudá-lo a '
  + 'encontrar o melhor investimento para você, tanto residencial quanto comercial.';


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      banner_image_url: [],
      profile_image_url: [],
      name: [],
      nickname: [],
      is_editable: [],
      state: ['São Paulo'],
      country: ['Brasil'],
      phone: ['+55 11 90009 8866'],
      alternative_phone: ['+55 11 90000 1111'],
      email: ['rapha.pse@outlook.com'],
      bio: [this.bio],
      designacao_tecnica: ['Corretor Associado'],
      technical_designation: [],
      creci: ['185168-F'],
      company: ['Lopes São Paulo'],
      languages: [[], Validators.maxLength(300)],
      profile_url: []
    });
  }

    // ADD - OK
  public addIdioma() {
    this.idiomas = [];
    this.list.push({
      locs: this.locations,
      typeLocs: this.listType
    });

    if (this.form.get('languages').value !== null) {
      this.form.get('languages').value.map(x => this.idiomas.push(x));
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
    this.form.get('languages').setValue(this.idiomas);
  }

    // UPDATE IDIOMA AND TYPE
  public setIdioma(index, event, lt: string) {
    if (this.form.get('languages').value !== null) {
      this.form.get('languages').value.map((x, i) => {
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
    this.form.get('languages').value.splice(index, 1);
  }

}
