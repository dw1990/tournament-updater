import { Component, OnInit, Input } from "@angular/core";
import { Tournament } from "../model/tournament";

@Component({
  selector: "app-tournament",
  templateUrl: "./tournament.component.html",
  styleUrls: ["./tournament.component.css"]
})
export class TournamentComponent implements OnInit {
  @Input() tournament: Tournament;

  constructor() {}

  ngOnInit() {}
}
