import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MoviesService } from 'src/app/core/services/movies.service';
import { TIPOS } from 'src/app/shared/constants/tipos.constants';

@Component({
    templateUrl: 'movie-form.component.html',
    styleUrls: ['./movie-form.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class MovieFormComponent implements OnInit {
    formRegister: FormGroup;
    tipos = TIPOS;


    constructor(
        private formBuilder: FormBuilder, 
        private movie: MoviesService,
        private toastr: ToastrService
        ) { 

        // TODO: Melhorar depois com @wall
        this.formRegister = this.formBuilder.group({
            title: [null, Validators.required],
            year: [null],
            imdbID: [null, Validators.required],
            type: [null],
            poster: [null]
        });
    }

    ngOnInit() { 
        // this.toastr.success(this.formRegister.value.title + ' Registrado!');
    }

    onDestroy() {
        
    }

    get fieldsRegister() { return this.formRegister.controls; }

    register(): void {
        if (this.validate(this.formRegister)) {
            this.movie.registerMovie(this.formRegister.value).subscribe(() => {
                
                this.toastr.success(this.formRegister.value.title + ' Registrado!');
                
            }, () => {
                this.toastr.error('Houve um erro ao registrar ' + this.formRegister.value.title);
            });
        }
    }

    clearForm(): void {
        this.formRegister.reset();
        this.toastr.info('Os campos foram limpos!');
    }

    private validate(form: FormGroup): boolean {
        Object.keys(form.controls).forEach((key: string) => {
          const control = form.controls[key];
          control.markAsTouched();
          control.markAsDirty();
          control.updateValueAndValidity({ emitEvent: true });
    
          if (control instanceof FormGroup) {
            this.validate(control);
          }
        });
    
        return !form.invalid;
    }

}