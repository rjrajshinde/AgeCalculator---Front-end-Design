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

  document.getElementById("outputYear").textContent = "__";
  document.getElementById("outputMonth").textContent = "__";
  document.getElementById("outputDay").textContent = "__";

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

    if (
      yearValue <= 0 ||
      yearValue == "" ||
      parseInt(yearValue) > todaysYear ||
      noSpaceYearValue.length != 4
    ) {
      yearInput.classList.add("red-border");
      yearError.style.visibility = "visible";
    } else {
      yearInput.classList.remove("red-border");
      yearError.style.visibility = "hidden";
    }
  });

  //!_________________________________________________
  //!_________________________________________________
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    //todo Validation
    const dayValue = dayInput.value;
    const monthValue = monthInput.value;
    const yearValue = yearInput.value;

    if (
      isNaN(dayValue) ||
      isNaN(monthValue) ||
      isNaN(yearValue) ||
      dayValue === "" ||
      monthValue === "" ||
      yearValue === "" ||
      dayValue.length !== 2 ||
      monthValue.length !== 2 ||
      yearValue.length !== 4 ||
      parseInt(yearValue) > todaysYear
    ) {
      console.log("Exit");
      document.getElementById("outputYear").textContent = "__";
      document.getElementById("outputMonth").textContent = "__";
      document.getElementById("outputDay").textContent = "__";
      return; // Exit the function
    }

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
      parseInt(yearValue) > todaysYear ||
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
      if (dayIntValue > listofDaysInMonths[monthIntValue - 1]) {
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

    let currentDate = todaysYear + "-" + todaysMonth + "-" + todaysDay;
    let inputDate = yearIntValue + "-" + monthIntValue + "-" + dayIntValue;

    function calculateAge(birthdate, referenceDate) {
      const birthDateObj = new Date(birthdate);
      const referenceDateObj = referenceDate
        ? new Date(referenceDate)
        : new Date();

      // Calculate the difference in years
      let ageYears =
        referenceDateObj.getFullYear() - birthDateObj.getFullYear();

      // Calculate the difference in months
      let ageMonths = referenceDateObj.getMonth() - birthDateObj.getMonth();

      // Calculate the difference in days
      let ageDays = referenceDateObj.getDate() - birthDateObj.getDate();

      // Adjust for negative ageMonths or ageDays
      if (ageDays < 0) {
        const lastDayOfMonth = new Date(
          referenceDateObj.getFullYear(),
          referenceDateObj.getMonth(),
          0
        ).getDate();

        ageDays += lastDayOfMonth;
        ageMonths--;
      }
      if (ageMonths < 0) {
        ageMonths += 12;
        ageYears--;
      }

      return { years: ageYears, months: ageMonths, days: ageDays };
    }
    const age = calculateAge(inputDate, currentDate);

    if (
      age.years !== NaN ||
      age.months !== NaN ||
      age.days !== NaN ||
      age.years !== "NaN" ||
      age.months !== "NaN" ||
      age.days !== "NaN" ||
      age.years !== "" ||
      age.months !== "" ||
      age.days !== ""
    ) {
      document.getElementById("outputYear").textContent = age.years;
      document.getElementById("outputMonth").textContent = age.months;
      document.getElementById("outputDay").textContent = age.days;
    } else {
      document.getElementById("outputYear").textContent = "__";
      document.getElementById("outputMonth").textContent = "__";
      document.getElementById("outputDay").textContent = "__";
    }
  });
});
