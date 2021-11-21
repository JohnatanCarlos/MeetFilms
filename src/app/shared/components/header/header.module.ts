import { NgModule } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';

@NgModule({
    imports: [MatBadgeModule, MatIconModule, RouterModule],
    exports: [HeaderComponent],
    declarations: [HeaderComponent],
    providers: [],
})
export class HeaderModule { }
