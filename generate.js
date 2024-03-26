const weekdays = ["M", "T", "W", "T", "F", "S", "S"];

function renderYear(year) {
  const cont = document.createElement("div");
  cont.classList.add("container");
  document.body.appendChild(cont);

  // Go through each month
  Array.from({ length: 12 }).forEach((_, m) => {
    const dateMonth = new Date(year, m, 1);

    // Create month container
    const month = document.createElement("div");
    month.classList.add("month");
    cont.appendChild(month);

    // Get month title
    const title = document.createElement("h2");
    title.innerHTML = dateMonth.toLocaleString("default", { month: "long" });
    month.appendChild(title);

    // Create grid container
    const days = document.createElement("div");
    days.classList.add("days");
    month.appendChild(days);

    // Add days of the week
    Array.from({ length: 7 }).forEach((_, i) => {
      const weekday = document.createElement("div");
      weekday.innerHTML = weekdays[i];
      weekday.classList.add("weekday");
      days.appendChild(weekday);
    });

    // Add blank spaces before first of the month to fit with week layout
    const dayOffset = (dateMonth.getDay() - 1) % 7;
    Array.from({ length: dayOffset }).forEach(() => {
      const offset = document.createElement("div");
      days.appendChild(offset);
    });

    // Add days of the month
    const dayCount = new Date(year, m + 1, 0).getDate();
    Array.from({ length: dayCount }).forEach((_, d) => {
      const day = document.createElement("div");
      const daySub1 = document.createElement("div");
      const daySub2 = document.createElement("div");
      day.classList.add("day");
      daySub1.innerHTML = d + 1;
      days.appendChild(day);
      day.appendChild(daySub1);
      day.appendChild(daySub2);
    });
  });
}

renderYear(2024);
