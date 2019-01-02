import { Pipe, PipeTransform } from "@angular/core";
import { Tournament } from "./model/tournament";

@Pipe({
  name: "name"
})
export class NamePipe implements PipeTransform {
  transform(value: Tournament[], stringToContain: string): Tournament[] {
    if (
      value === undefined ||
      value.length === 0 ||
      !stringToContain ||
      stringToContain.length < 3
    ) {
      return value;
    }
    const returnValues = [];
    for (let tournament of value) {
      const tournamentName = tournament.name.toLowerCase();
      if (tournamentName.indexOf(stringToContain.toLowerCase()) !== -1) {
        returnValues.push(tournament);
      }
    }
    return returnValues;
  }
}
