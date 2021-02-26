import { Temporal } from "proposal-temporal";


export class AiryMeanTime extends Temporal.TimeZone {
    constructor() {
        super('UTC')
    }

    toString() {
        return 'Mars/Airy Mean Time'
    }
}