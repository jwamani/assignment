const nameDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

const daysContainer = document.querySelector(".days");
const monthYear = document.getElementById("monthYear");
const previousMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");
const closeBtn = document.getElementById("close");

const dateModal = document.getElementById("dateModal");
const dateText = document.getElementById("dateText");

function generateCalendar(year, month) {
    const firstday = new Date(year, month, 1).getDay();
    const totalNoOfDays = new Date(year, month + 1, 0).getDate();

    monthYear.innerText = new Date(year, month).toLocaleString("default", {
        month: "long",
        year: "numeric",
    });
    const first = nameDays.length;

    for (let i = 0; i < first; i++) {
        const dayNameBox = document.createElement("div");
        dayNameBox.classList.add("dayName");
        dayNameBox.innerText = nameDays[i];
        daysContainer.appendChild(dayNameBox);
    }

    for (let i = 0; i < firstday; i++) {
        const emptybox = document.createElement("div");
        daysContainer.appendChild(emptybox);
    }

    for (let day = 1; day <= totalNoOfDays; day++) {
        const dateformat = `${year}-${(month + 1).toString().padStart(2, "0")}-${day
            .toString()
            .padStart(2, "0")}`;
        const dayBox = document.createElement("div");
        dayBox.classList.add("day");

        const eventDate = events.find((event) => event.date === dateformat);
        if (eventDate) {
            dayBox.innerText = day.toString();
            dayBox.style.backgroundColor = "hsl(185, 62.70%, 43.10%)";
        } else {
            dayBox.innerText = day.toString();
        }

        dayBox.onclick = () => {
            dateText.innerText = dateformat;
            showModal();

            const eventForDate = events.find((event) => event.date === dateformat);
            const eventText = document.getElementById("event");

            if (eventForDate) {
                eventText.textContent = eventForDate.event;
            } else {
                eventText.textContent = "No events for this date";
            }

            dayBox.classList.add("clicked");
            setTimeout(() => {
                dayBox.classList.remove("clicked");
            }, 1500);
        };

        const now = new Date();
        let monthString = dateformat.split("-")[1];
        let monthDigit = parseInt(monthString);

        if (now.getDate() === day && now.getMonth() === monthDigit - 1) {
            dayBox.classList.add("today");
        }

        daysContainer.appendChild(dayBox);
    }
}

generateCalendar(new Date().getFullYear(), new Date().getMonth());

let mthIndex = new Date().getMonth();
let yearIndex = new Date().getFullYear();

previousMonthBtn.addEventListener("click", () => {
    daysContainer.textContent = "";
    mthIndex--;
    generateCalendar(yearIndex, mthIndex);
});

nextMonthBtn.addEventListener("click", () => {
    daysContainer.textContent = "";
    mthIndex++;
    generateCalendar(yearIndex, mthIndex);
});

closeBtn.addEventListener("click", hideModal);

document.getElementById('modalOverlay').onclick = hideModal;

function showModal() {
    dateModal.style.display = "block";
    document.getElementById('modalOverlay').style.display = "block";
}

function hideModal() {
    dateModal.style.display = "none";
    document.getElementById('modalOverlay').style.display = "none";
}
