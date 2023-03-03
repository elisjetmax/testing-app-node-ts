const NORMAL_RATE_HOUR = 35;
const EXTRA_RATE_HOUR = 35;
const MAX_HOURS_PER_DAY = 8;

export default class GeneralClass {
  constructor() {}
  public static calculatePaymentPerDay = (hours: number) => {
    if (hours <= MAX_HOURS_PER_DAY) {
      return hours * NORMAL_RATE_HOUR;
    }
    return (
      MAX_HOURS_PER_DAY * NORMAL_RATE_HOUR +
      (hours - MAX_HOURS_PER_DAY) * EXTRA_RATE_HOUR
    );
  };
}
