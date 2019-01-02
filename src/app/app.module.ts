import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TournamentsComponent } from "./tournaments/tournaments.component";
import { TournamentComponent } from "./tournament/tournament.component";
import { HeaderComponent } from "./header/header.component";
import { ResultsComponent } from "./results/results.component";
import { ResultComponent } from "./result/result.component";
import { NamePipe } from "./name.pipe";
import { TournamentRegistrationComponent } from "./tournament.registration/tournament.registration.component";

@NgModule({
  declarations: [
    AppComponent,
    TournamentsComponent,
    TournamentComponent,
    HeaderComponent,
    ResultsComponent,
    ResultComponent,
    NamePipe,
    TournamentRegistrationComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
