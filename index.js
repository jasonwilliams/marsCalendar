"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const marsDate_js_1 = require("./marsDate.js");
const proposal_temporal_1 = __importDefault(require("proposal-temporal"));
const Temporal = proposal_temporal_1.default.Temporal;
class MarsCalendar extends Temporal.Calendar {
  constructor() {
    super("iso8601");
    this.id = "mars";
  }
  year(date) {
    const instant = Temporal.Instant.from(date.toZonedDateTime("UTC"));
    const marsDate = new marsDate_js_1.MarsDate(instant.epochMilliseconds);
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
