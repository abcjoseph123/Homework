function calculateTime(timeInSeconds: number): Array<number | string> {
  let hours: number = Math.floor(timeInSeconds / 3600);
  let minutes: number = Math.floor((timeInSeconds - hours * 3600) / 60);
  let seconds: number = timeInSeconds % 60;

  let hoursFormat = hours < 10 ? `0${hours}` : hours;
  let minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
  let secondsFormat = seconds < 10 ? `0${seconds}` : seconds;

  return [hoursFormat, minutesFormat, secondsFormat];
}

export default calculateTime;
