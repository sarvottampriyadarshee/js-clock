const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

let refreshTime = () => {
  let d = new Date();

  let date = d.toLocaleDateString(undefined, options);
  let sec = d.getSeconds();
  let min = d.getMinutes();
  let hour = d.getHours();
  let localTotalMinutes = min + hour * 60;

  if (sec < 10)
    sec = '0' + sec;
  if (min < 10)
    min = '0' + min;
  if (hour < 10)
    hour = '0' + hour;

  let time = hour + ':' + min + ':' + sec;
  let meridian = (localTotalMinutes - (d.getUTCMinutes() + d.getUTCHours() * 60)) / 60;

  if (meridian > 0)
    meridian = '+' + meridian;
  meridian += ' GMT';

  document.getElementById('time').innerHTML ="<center>" + time + "<br>" + date + "<br><h2>" + meridian + "</h2></center>";
};

setInterval(refreshTime, 1000);
