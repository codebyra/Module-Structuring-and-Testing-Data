export function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(2);

  const period = hours >= 12 ? "pm" : "am";

  let hours12 = hours % 12;

  if (hours12 === 0) {
    hours12 = 12;
  }

  const formattedHours = String(hours12).padStart(2, "0");

  return `${formattedHours}${minutes} ${period}`;
}
