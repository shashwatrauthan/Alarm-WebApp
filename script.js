let dateinput = document.getElementById("date");
let setbtn = document.getElementById("set");

setbtn.addEventListener("click", set_alarm);

// Set Alarm Function
function set_alarm() {
  let alarmtime = new Date(dateinput.value);
  let current_time = new Date();

  let alarmtimeout = alarmtime - current_time;

  if (alarmtime == "Invalid Date") {
    let invalid_mod = new bootstrap.Modal(
      document.getElementById("invalid_modal")
    );
    invalid_mod.show();
  } else if (alarmtimeout < 0) {
    let previous_mod = new bootstrap.Modal(
      document.getElementById("previous_modal")
    );
    previous_mod.show();
  } else {
    setbtn.innerText = "Alarm is Set";
    setbtn.className = "btn btn-primary active my-1";

    $(".progress-bar").animate(
      {
        width: "100%",
      },
      alarmtimeout
    );

    setTimeout(() => {
      let audio = new Audio(
        "https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg"
      );
      audio.play();

      let alarm_mod = new bootstrap.Modal(
        document.getElementById("alarm_modal")
      );
      alarm_mod.show();
    }, alarmtimeout);
  }
}


// Reset Alarm Function
function reset_alarm() {
  setbtn.innerText = "Set Alarm";
  setbtn.className = "btn btn-primary my-1";

  $(".progress-bar").animate(
    {
      width: "0%",
    },
    200
  );
}