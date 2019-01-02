import { Component, OnInit } from "@angular/core";
import { TournamentService } from "../service/tournament.service";
import { Tournament } from "../model/tournament";

@Component({
  selector: "app-tournaments",
  templateUrl: "./tournaments.component.html",
  styleUrls: ["./tournaments.component.css"],
  providers: [TournamentService]
})
export class TournamentsComponent implements OnInit {
  tournaments: Tournament[];
  currentFilter: string = "";

  selectedTournament;

  constructor(private tournamentService: TournamentService) {}

  ngOnInit() {
    this.tournamentService.getData().then(data => {
      this.tournaments = data;
    });
    this.tournamentService.tournamentsChanged.subscribe(tournaments => {
      this.tournaments = tournaments;
    });
  }

  onDeleteTournament(id: number) {
    this.tournamentService.deleteTournament(id);
  }

  selectTournament(tournament: Tournament) {
    this.selectedTournament = tournament;
  }
}
