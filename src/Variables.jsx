
export const weekDay = ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."]
export const today = new Date()
export const currentHour = today.getHours()
export const weekdayToday = weekDay[today.getDay()]

export const formatTime = milliseconds => {
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);

    return [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
    ].join(":");
}