const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function cal_Remain() {
  const currentTime = new Date();
  const futureDate = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate() + 15,
    11,
    34,
    25
  );
  var remain_Time = futureDate.getTime() - currentTime.getTime();

  const days = 24 * 60 * 60 * 1000;
  const hours = 60 * 60 * 1000;
  const minutes = 60 * 1000;
  const seconds = 1000;

  const cal_days = Math.floor(remain_Time / days);
  const cal_hours = Math.floor((remain_Time % days) / hours);
  const cal_minutes = Math.floor((remain_Time % hours) / minutes);
  const cal_seconds = Math.floor((remain_Time % minutes) / seconds);
  day.textContent = cal_days;
  hour.textContent = cal_days;
  minute.textContent = cal_minutes;
  second.textContent = cal_seconds;
}
setInterval(cal_Remain, 1000);
