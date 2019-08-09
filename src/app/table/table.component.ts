import { Component, Input, SimpleChanges } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  birthdays = [
    {
      name: "John Sina",
      birth: "11/30/2011"
    }, {
      name: "Barcy Washington",
      birth: "09/16/1992"
    }, {
      name: "Peter Parker",
      birth: "01/16/1992"
    }, {
      name: "Jimmy Shergil",
      birth: "12/12/2001"
    }, {
      name: "Alexander Alfred",
      birth: "02/09/1891"
    }, {
      name: "Krishna Gupta",
      birth: "12/01/1982"
    }, {
      name: "Sania Mirza",
      birth: "11/30/2011"
    }, {
      name: "Lata Pathak",
      birth: "10/31/1999"
    }
  ];
  // this takes input from the radio component
  @Input()
  sortBy: string;

  constructor() {}

  ngOnChanges(changes : SimpleChanges) {
    // call arrangeItems on form change
    if (changes.sortBy)
      this.arrangeItems();
  }

  arrangeItems() {
      // sort the `birthdays` array accordingly
      if (this.sortBy == "name") {
        this.birthdays.sort(this.compareNames);
      } else if (this.sortBy == "age") {
        this.birthdays.sort(this.compareDates);
      }
    }

    compareDates(a, b) {
      // boolean comparator for dates
      let date1 = Date.parse(a.birth);
      let date2 = Date.parse(b.birth);
      
      if (date1 > date2)
        return 1;
      if (date1 < date2)
        return -1;
      return 0;
    }

    compareNames(a, b) {
      // boolean comparator for names
      if (a.name > b.name)
        return 1;
      if (a.name < b.name)
        return -1;
      
      return 0;
    }

    getDate(str: string) {
      // convert the passed date into a human readbale form
      let datePipe = new DatePipe("en-US");
      return datePipe.transform(str,"MMMM d y");
    }
}
