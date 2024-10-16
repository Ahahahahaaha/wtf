class Week {
  constructor() {
    this.schedule = {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: [],
    };
  }

  addSchedule(weeklySchedule) {
    for (const [day, tasks] of Object.entries(weeklySchedule)) {
      if (this.schedule[day] !== undefined) {
        this.schedule[day] = tasks;
      } else {
        console.log(`Неверный день недели: ${day}`);
      }
    }
  }

  displayFullSchedule() {
    const formattedSchedule = Object.entries(this.schedule).map(
      ([day, tasks]) =>
        `${day}: ${tasks.length > 0 ? tasks.join(", ") : "Нет задач"}`
    );

    console.log(formattedSchedule.join("\n"));
  }

  displayDaySchedule(day) {
    if (this.schedule[day] !== undefined) {
      console.log(
        `${day}: ${
          this.schedule[day].length > 0
            ? this.schedule[day].join(", ")
            : "Нет задач"
        }`
      );
    } else {
      console.log("Неверный день недели");
    }
  }

  [Symbol.iterator]() {
    let days = Object.keys(this.schedule);
    let currentIndex = 0;

    return {
      next: () => {
        if (currentIndex < days.length) {
          const day = days[currentIndex];
          const tasks = this.schedule[day];
          currentIndex++;
          return { value: { day, tasks }, done: false };
        }
        return { done: true };
      },
    };
  }
}

const week = new Week();

week.addSchedule({
  Monday: [
    "Математика 09:10-10:40",
    "Физика 10:50-12:20",
    "Спортивное программирование 13:00-17:50",
  ],
  Tuesday: [
    "Математика 09:10-10:40",
    "Математика 10:50-12:20",
    "Обществознание 12:30-14:00",
    "Английский 14:40-16:10",
  ],
  Wednesday: ["Русский 09:10-10:40", "Информатика 10:50-12:20"],
  Thursday: [
    "Химия 10:50-12:20",
    "Биология 12:30-14:00",
    "Английский 14:40-16:10",
    "Математика 16:20-17:50",
  ],
  Friday: [
    "Литература 09:10-10:40",
    "История 10:50-12:20",
    "Практикум по математике 12:30-14:00",
  ],
});

const days = Object.keys(week.schedule);
for (let i = 0; i < days.length; i++) {
  const day = days[i];
  const tasks = week.schedule[day];
  console.log(`${day}: ${tasks.length > 0 ? tasks.join(", ") : "Нет задач"}`);
}
