import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlert } from './success-alert/success-alert.component';
import { FormsModule} from '@angular/forms';
import { UserComponentComponent } from './user-component/user-component.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-list/recipe-detail/recipe-detail.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping/shopping-list-edit/shopping-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlert,
    UserComponentComponent,
    DetailsComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingListEditComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
