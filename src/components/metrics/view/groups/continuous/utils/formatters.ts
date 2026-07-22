export function formatHourLabel(hour: number): string | undefined {
  switch (hour) {
    case 0:
      return "12am";
    case 6:
      return "6am";
    case 12:
      return "12pm";
    case 18:
      return "6pm";
    default:
      return undefined;
  }
}

export function formatDayLabel(date: Date): string {
  const day = date.getDate();

  return String(day).padStart(2, "0");
}
