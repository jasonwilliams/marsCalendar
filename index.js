import { MarsDate } from "./marsDate.js";
import TemporalModule from "proposal-temporal";

const Temporal = TemporalModule.Temporal;
class MarsCalendar extends Temporal.Calendar {
  constructor() {
    super("iso8601");
  }
  year(date) {
    const instant = Temporal.Instant.from(date.toZonedDateTime("UTC"));
    const marsDate = new MarsDate(instant.epochMilliseconds);
    return marsDate.json.y;
  }
}

const date = Temporal.ZonedDateTime.from({
  calendar: new MarsCalendar(),
  year: 2014,
  day: 10,
  month: 11,
  timeZone: "UTC",
});
console.log(date.year);
