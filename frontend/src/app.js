const timezones = [
    'UTC', 'America/New_York', 'America/Los_Angeles', 'America/Chicago',
    'America/Toronto', 'America/Mexico_City', 'America/Sao_Paulo',
    'Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Europe/Moscow',
    'Asia/Tokyo', 'Asia/Shanghai', 'Asia/Dubai', 'Asia/Kolkata',
    'Australia/Sydney', 'Pacific/Auckland', 'Asia/Seoul', 'Asia/Singapore',
    'Africa/Johannesburg', 'Africa/Cairo', 'Africa/Lagos', 'Asia/Bangkok',
    'Asia/Jakarta', 'Asia/Manila', 'Europe/Rome', 'Europe/Madrid',
    'Europe/Stockholm', 'America/Buenos_Aires', 'Asia/Istanbul',
    'Asia/Riyadh', 'Asia/Tehran', 'America/Bogota', 'America/Lima',
    'America/Santiago', 'Asia/Karachi', 'Asia/Dhaka', 'Asia/Hong_Kong',
    'Europe/Amsterdam', 'Europe/Brussels', 'Europe/Warsaw', 'Africa/Nairobi',
    'Africa/Algiers', 'Asia/Kuala_Lumpur', 'Asia/Colombo', 'Pacific/Fiji',
    'America/Caracas', 'America/Montevideo', 'Asia/Beirut', 'Asia/Baghdad'
];

// Placeholder to be replaced at build time
const backendUrl = 'BACKEND_URL_PLACEHOLDER';
console.log("App.js loaded, using backend URL:", backendUrl);

function populateTimezones() {
    const select = document.getElementById('timezone-select');
    timezones.forEach(tz => {
        const option = document.createElement('option');
        option.value = tz;
        option.textContent = tz.replace('_', ' ');
        select.appendChild(option);
    });
}

async function fetchTime(timezone = 'UTC') {
    console.log(`Fetching time for ${timezone}`);
    try {
        const response = await fetch(`${backendUrl}/api/time?timezone=${timezone}`);
        const data = await response.json();
        
        if (data.status === 'success') {
            Clock.updateDigitalClock(data.time);
            
            const date = new Date(data.timestamp);
            const dateString = date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            Clock.updateDateDisplay(dateString);
            
            const [hours, minutes, seconds] = data.time.split(':').map(Number);
            Clock.updateAnalogueClock(hours, minutes, seconds);
        } else {
            console.error('Backend error:', data.message);
        }
    } catch (error) {
        console.error('Error fetching time:', error);
    }
}

document.getElementById('timezone-select').addEventListener('change', (e) => {
    fetchTime(e.target.value);
});

populateTimezones();
setInterval(() => fetchTime(document.getElementById('timezone-select').value), 1000);
fetchTime();
