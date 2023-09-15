document.addEventListener("DOMContentLoaded", function () {
  const dayInput = document.getElementById("dayinput");
  const dayError = document.getElementById("dayError");
  const monthInput = document.getElementById("monthinput");
  const monthError = document.getElementById("monthError");
  const yearInput = document.getElementById("yearinput");
  const yearError = document.getElementById("yearError");
  const submitBtn = document.getElementById("submitBtn");
  dayError.style.visibility = "hidden";
  monthError.style.visibility = "hidden";
  yearError.style.visibility = "hidden";

  //! todays Date
  let todayDate = new Date();
  let todaysMonth = todayDate.getUTCMonth() + 1;
  let todaysDay = todayDate.getUTCDate();
  let todaysYear = todayDate.getUTCFullYear();

  console.log(todaysYear + "/" + todaysMonth + "/" + todaysDay);
  console.log(typeof todaysYear);

  dayInput.addEventListener("input", () => {
    const dayValue = dayInput.value;

    if (dayValue <= 0 || dayValue > 31 || dayValue == "") {
      dayInput.classList.add("red-border");
      dayError.style.visibility = "visible";
    } else {
      dayInput.classList.remove("red-border");
      dayError.style.visibility = "hidden";
    }
  });
  monthInput.addEventListener("input", () => {
    const monthValue = monthInput.value;

    if (monthValue <= 0 || monthValue > 12 || monthValue == "") {
      monthInput.classList.add("red-border");
      monthError.style.visibility = "visible";
    } else {
      monthInput.classList.remove("red-border");
      monthError.style.visibility = "hidden";
    }
  });
  yearInput.addEventListener("input", () => {
    const yearValue = yearInput.value;
    const noSpaceYearValue = yearValue.replace(/\D/g, "");
    console.log("typeof", typeof noSpaceYearValue);
    console.log("length", noSpaceYearValue.length);

    if (
      yearValue <= 0 ||
      yearValue == "" ||
      yearValue > todaysYear ||
      noSpaceYearValue.length != 4
    ) {
      yearInput.classList.add("red-border");
      yearError.style.visibility = "visible";
    } else {
      yearInput.classList.remove("red-border");
      yearError.style.visibility = "hidden";
    }
  });

  submitBtn.addEventListener("click", () => {
    event.preventDefault();

    //day validate
    const dayValue = dayInput.value;

    if (dayValue <= 0 || dayValue > 31 || dayValue == "") {
      dayInput.classList.add("red-border");
      dayError.style.visibility = "visible";
    } else {
      dayInput.classList.remove("red-border");
      dayError.style.visibility = "hidden";
    }

    //month validate
    const monthValue = monthInput.value;

    if (monthValue <= 0 || monthValue > 12 || monthValue == "") {
      monthInput.classList.add("red-border");
      monthError.style.visibility = "visible";
    } else {
      monthInput.classList.remove("red-border");
      monthError.style.visibility = "hidden";
    }

    //year validate
    const yearValue = yearInput.value;
    const noSpaceYearValue = yearValue.replace(/\D/g, "");
    console.log("typeof", typeof noSpaceYearValue);
    console.log("length", noSpaceYearValue.length);

    if (
      yearValue <= 0 ||
      yearValue == "" ||
      yearValue > todaysYear ||
      noSpaceYearValue.length != 4
    ) {
      yearInput.classList.add("red-border");
      yearError.style.visibility = "visible";
    } else {
      yearInput.classList.remove("red-border");
      yearError.style.visibility = "hidden";
    }
    // const date1 = new Date();
    // const date2 = new Date("07-12-21");
    // console.log("date1", date1);
    // console.log("date2", date2);
    // const result = date1 - date2;
    // console.log(result);
  });
});
