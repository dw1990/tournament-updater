import { OnInit } from "@angular/core";
import { Tournament } from "../model/tournament";
import { Subject } from "rxjs";

export class TournamentService implements OnInit {
  tournamentsChanged: Subject<Tournament[]> = new Subject();
  private data: Tournament[] = [
    new Tournament(1, "Mannheimer Aji", "ab12"),
    new Tournament(2, "Karlsruher Frühlingsfest", "ab12")
  ];

  ngOnInit(): void {
    this.tournamentsChanged = new Subject();
  }

  getData(): Promise<Tournament[]> {
    const promise = new Promise<Tournament[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 5);
    });
    return promise;
  }

  getNextId(): Promise<number> {
    const returnPromise = new Promise<number>(resolve => {
      this.getData().then(data => {
        if (!data || data.length === 0) {
          return 1;
        }
        resolve(data[data.length - 1].id + 1);
      });
    });

    return returnPromise;
  }

  addTournament(name: string, password: string) {
    this.getNextId().then(id => {
      this.data.push(new Tournament(id, name, password));
      this.tournamentsChanged.next(this.data.slice());
    });
  }

  deleteTournament(id: number) {
    this.data = this.data.filter(t => t.id !== id);
    this.tournamentsChanged.next(this.data.slice());
  }
}
