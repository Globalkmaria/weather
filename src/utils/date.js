export function utcToTime(num) {
  let today = new Date();
  const time = num * 1000 - today.getTimezoneOffset() * 60 * 1000;
  const date = new Date(time);
  return date;
}
export function getTime(num) {
  const date = utcToTime(num);
  return date.toJSON().slice(11, 16);
}
export function getWeekday(num) {
  const date = utcToTime(num);
  const get_date = new Date(date);
  return get_date.toLocaleDateString('en-us', { weekday: 'long' });
}
export function getmaxNmix(array) {
  const temps = [];
  for (let i = 0; i < array.length; i++) {
    temps.push(array[i]['temp']);
  }
  return [Math.floor(Math.max(...temps)), Math.floor(Math.min(...temps))];
}
