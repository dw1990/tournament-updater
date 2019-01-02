import { Component, OnInit, ViewChild } from "@angular/core";
import { TournamentService } from "../service/tournament.service";
import { NgForm } from "@angular/forms";
import { Tournament } from "../model/tournament";

@Component({
  selector: "app-tournament-registration",
  templateUrl: "./tournament.registration.component.html",
  styleUrls: ["./tournament.registration.component.css"]
})
export class TournamentRegistrationComponent implements OnInit {
  @ViewChild("form") form: NgForm;

  pattern = "^[a-zA-Zd]{4,}$";

  constructor(private tournamentService: TournamentService) {}

  ngOnInit() {}

  onRegistration() {
    const name = this.form.value.name;
    const password = this.form.value.password;

    this.tournamentService.addTournament(name, password);
  }
}
