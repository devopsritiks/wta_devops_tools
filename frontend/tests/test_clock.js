describe('Clock', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="digital-clock"></div>
            <div id="date-display"></div>
            <div class="hand hour"></div>
            <div class="hand minute"></div>
            <div class="hand second"></div>
        `;
    });

    test('updateDigitalClock sets correct time', () => {
        Clock.updateDigitalClock('12:34:56');
        expect(document.getElementById('digital-clock').textContent).toBe('12:34:56');
    });

    test('updateDateDisplay sets correct date', () => {
        Clock.updateDateDisplay('Monday, January 1, 2024');
        expect(document.getElementById('date-display').textContent).toBe('Monday, January 1, 2024');
    });

    test('updateAnalogueClock sets correct rotations', () => {
        Clock.updateAnalogueClock(12, 0, 0);
        expect(document.querySelector('.hour').style.transform).toBe('rotate(0deg)');
    });
});
