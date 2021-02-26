import { MarsDate } from "./marsDate.js";
import * as TemporalModule from "proposal-temporal";

const Temporal = TemporalModule.Temporal;
class MarsCalendar extends Temporal.Calendar {
  constructor() {
    super("iso8601");
  }

  year(date: any) {
    const instant = Temporal.Instant.from(date.toZonedDateTime("UTC"));
    const marsDate = new MarsDate(instant.epochMilliseconds);
    return marsDate.json.y;
  }

  dateFromFields(fields: any) {
    return Temporal.now.plainDate('UTC')
  }
}

class WesternAmazonianTime extends Temporal.TimeZone {

  constructor() {
    super('UTC');
  }

  toString() {
    return 'Mars/Western_Amazonian_Time';
  }

  getPlainDateTimeFor(instant: TemporalModule.Temporal.Instant) {
    const dt = Temporal.TimeZone.from('UTC').getPlainDateTimeFor(instant).withCalendar(new MarsCalendar())
    return dt
  }

  getOffsetNanosecondsFor(/* instant */) {
    return 0;
  }

  getNextTransition(/* instant */) {
    return null;
  }

  getPreviousTransition(/* instant */) {
    return null;
  }

}

const date = Temporal.ZonedDateTime.from({
  year: 2014,
  day: 10,
  month: 11,
  timeZone: new WesternAmazonianTime(),
  calendar: new MarsCalendar()
});

console.log(date.year);
