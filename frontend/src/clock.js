class Clock {
    static updateDigitalClock(time) {
        document.getElementById('digital-clock').textContent = time;
    }

    static updateDateDisplay(date) {
        document.getElementById('date-display').textContent = date;
    }

    static updateAnalogueClock(hours, minutes, seconds) {
        const hourHand = document.querySelector('.hour');
        const minuteHand = document.querySelector('.minute');
        const secondHand = document.querySelector('.second');

        const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;
        const minuteDeg = minutes * 6;
        const secondDeg = seconds * 6;

        hourHand.style.transform = `rotate(${hourDeg}deg)`;
        minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
        secondHand.style.transform = `rotate(${secondDeg}deg)`;
    }
}
