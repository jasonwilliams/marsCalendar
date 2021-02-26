import { MarsDate } from "./marsDate.js";
import { Temporal } from "proposal-temporal";
import { AiryMeanTime } from "./timeZones";

class MarsTemporal {
  private marsDate: MarsDate;

  constructor(inst: Temporal.Instant) {
    // Use that instant to convert to Mars Time
    this.marsDate = new MarsDate(inst.epochMilliseconds);
  }

  getPlainDate() {
    const json = this.marsDate.json;
    return Temporal.PlainDate.from({year: json.y, month: json.m, day: json.d})
  }

  getZonedDate() {
    const json = this.marsDate.json;
    return Temporal.ZonedDateTime.from({year: json.y, month: json.m, day: json.d, hour: json.H, minute: json.M, second: json.s, millisecond: json.L, timeZone: new AiryMeanTime(), calendar: new MarsCalendar()})
  }
}

class MarsCalendar extends Temporal.Calendar {
  constructor() {
    super("iso8601");
  }

  toString() {
    return 'mars-calendar'
  }

}

const instant = Temporal.now.instant();
const date = new MarsTemporal(instant);
console.log(date.getPlainDate());
const zonedDate = date.getZonedDate();
