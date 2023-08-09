import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrandHttpRequestService } from 'app/brand/services/brand-http-request.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-brand-page',
  templateUrl: './brand-page.component.html',
  styleUrls: ['./brand-page.component.scss'],
  standalone: true,
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BrandHttpRequestService]
})
export class BrandPageComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  brands = ELEMENT_DATA;

  form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _brandHttpRequestService: BrandHttpRequestService
  ) {
    this.form = this._formBuilder.group({
      search: ''
    });
  }

  onFormSubmit() {
    if (this.form.valid) {
      console.log(this.form.valid);
    }
    let response = this._brandHttpRequestService.index().subscribe(data => {
      console.log('ta no data');
      console.log(data);

      return data;
    }, error => {
      console.log('ta no error');
      console.log(error);
      return error;
    });
    console.log(response);

  }
}