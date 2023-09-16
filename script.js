document.addEventListener("DOMContentLoaded", function () {
  const dayInput = document.getElementById("dayinput");
  const dayError = document.getElementById("dayError");
  const monthInput = document.getElementById("monthinput");
  const monthError = document.getElementById("monthError");
  const yearInput = document.getElementById("yearinput");
  const yearError = document.getElementById("yearError");
  const submitBtn = document.getElementById("submitBtn");
  const dateError = document.getElementById("dateError");
  dayError.style.visibility = "hidden";
  monthError.style.visibility = "hidden";
  yearError.style.visibility = "hidden";
  dateError.style.visibility = "hidden";

  //! todays live Date
  let todayDate = new Date();
  let todaysMonth = todayDate.getUTCMonth() + 1;
  let todaysDay = todayDate.getUTCDate();
  let todaysYear = todayDate.getUTCFullYear();

  //todo oninput validation for date
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

    //todo Validation
    const dayValue = dayInput.value;
    const monthValue = monthInput.value;
    const yearValue = yearInput.value;

    if (dayValue <= 0 || dayValue > 31 || dayValue == "") {
      dayInput.classList.add("red-border");
      dayError.style.visibility = "visible";
    } else {
      dayInput.classList.remove("red-border");
      dayError.style.visibility = "hidden";
    }

    if (monthValue <= 0 || monthValue > 12 || monthValue == "") {
      monthInput.classList.add("red-border");
      monthError.style.visibility = "visible";
    } else {
      monthInput.classList.remove("red-border");
      monthError.style.visibility = "hidden";
    }
    const noSpaceYearValue = yearValue.replace(/\D/g, "");

    // year is not greater than todays year validation and year must be 4 digits only
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

    //! month day count wise validation
    let listofDaysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const dayIntValue = parseInt(dayInput.value);
    const monthIntValue = parseInt(monthInput.value);
    const yearIntValue = parseInt(yearInput.value);

    if (monthIntValue == 1 || monthIntValue > 2) {
      if (dayIntValue > listofDaysInMonths(monthIntValue - 1)) {
        dayInput.classList.add("red-border");
        monthInput.classList.add("red-border");
        yearInput.classList.add("red-border");
        dateError.style.visibility = "visible";
      } else {
        dayInput.classList.remove("red-border");
        monthInput.classList.remove("red-border");
        yearInput.classList.remove("red-border");
        dateError.style.visibility = "hidden";
      }
    } else if (monthIntValue == 2) {
      //! leap year validation
      let leapYear = false;
      if (
        (0 == yearIntValue % 4 && 0 != yearIntValue % 100) ||
        0 == yearIntValue % 400
      ) {
        leapYear = true;
      }
      if (leapYear == false && dayIntValue >= 29) {
        dayInput.classList.add("red-border");
        monthInput.classList.add("red-border");
        yearInput.classList.add("red-border");
        dateError.style.visibility = "visible";
      } else if (leapYear == true && dayIntValue > 29) {
        dayInput.classList.add("red-border");
        monthInput.classList.add("red-border");
        yearInput.classList.add("red-border");
        dateError.style.visibility = "visible";
      } else {
        dayInput.classList.remove("red-border");
        monthInput.classList.remove("red-border");
        yearInput.classList.remove("red-border");
        dateError.style.visibility = "hidden";
      }
    } else {
      dayInput.classList.remove("red-border");
      monthInput.classList.remove("red-border");
      yearInput.classList.remove("red-border");
      dateError.style.visibility = "hidden";
    }
  });
});
