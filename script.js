// Populate selects on page load
window.onload = function() {
    const weeksSelect = document.getElementById('weeks');
    const daysSelect = document.getElementById('days');

    for (let i = 24; i <= 41; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.text = i;
        weeksSelect.add(option);
    }

    for (let i = 0; i <= 6; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.text = i;
        daysSelect.add(option);
    }
};

function calculateRisk() {
    const weeks = parseInt(document.getElementById('weeks').value);
    const days = parseInt(document.getElementById('days').value);

    if (isNaN(weeks) || isNaN(days) || weeks < 23 || weeks > 41 || days < 0 || days > 6) {
        alert("Por favor, seleccione valores válidos para semanas y días.");
        return;
    }

    const gestationalAge = weeks + days / 7;

    const distressRisk = calculateDistressRisk(gestationalAge);
    const enterocolitisRisk = calculateEnterocolitisRisk(gestationalAge);
    const hemorrhageRisk = calculateHemorrhageRisk(gestationalAge);
    const sepsisRisk = calculateSepsisRisk(gestationalAge);

    document.getElementById('distress').textContent = distressRisk.toFixed(2) + '%';
    document.getElementById('enterocolitis').textContent = enterocolitisRisk.toFixed(2) + '%';
    document.getElementById('hemorrhage').textContent = hemorrhageRisk.toFixed(2) + '%';
    document.getElementById('sepsis').textContent = sepsisRisk.toFixed(2) + '%';
}

function calculateDistressRisk(gestationalAge) {
    if (gestationalAge >= 38.14286) return 0; // 38+1 weeks and beyond
    if (gestationalAge >= 38) return 2.44;
    if (gestationalAge >= 37) return 6.40;
    if (gestationalAge >= 36) return 15.74;
    if (gestationalAge >= 35) return 22.95;
    if (gestationalAge >= 34) return 29.34;
    if (gestationalAge >= 33) return 37.04;
    if (gestationalAge >= 32) return 46.45;
    if (gestationalAge >= 31) return 55.68;
    if (gestationalAge >= 30) return 64.15;
    if (gestationalAge >= 29) return 71.05;
    if (gestationalAge >= 28) return 77.36;
    if (gestationalAge >= 27) return 83.87;
    if (gestationalAge >= 26) return 87.96;
    if (gestationalAge >= 25) return 92.55;
    return 96.69;
}

function calculateEnterocolitisRisk(gestationalAge) {
    if (gestationalAge >= 34.57143) return 0; // 34+4 weeks and beyond
    if (gestationalAge >= 34.42857) return 0.64; // 34+3 weeks
    if (gestationalAge >= 27) return 15.78 - ((gestationalAge - 27) * (15.78 - 0.64) / (34.42857 - 27));
    if (gestationalAge >= 24) return 10.02 + ((gestationalAge - 24) * (15.78 - 10.02) / 3);
    return 10.02;
}

function calculateHemorrhageRisk(gestationalAge) {
    if (gestationalAge >= 30.57143) return 0; // 30+4 weeks and beyond
    if (gestationalAge >= 24) return 46.3 - ((gestationalAge - 24) * 46.3 / (30.57143 - 24));
    return 46.3;
}

function calculateSepsisRisk(gestationalAge) {
    if (gestationalAge >= 36.14286) return 0; // 36+1 weeks and beyond
    if (gestationalAge >= 36) return 2;
    if (gestationalAge >= 35) return 1.32;
    if (gestationalAge >= 34) return 2.84;
    if (gestationalAge >= 33) return 4.25;
    if (gestationalAge >= 32) return 6.67;
    if (gestationalAge >= 31) return 7.35;
    if (gestationalAge >= 30) return 11.41;
    if (gestationalAge >= 29) return 15.63;
    if (gestationalAge >= 28) return 20.31;
    if (gestationalAge >= 27) return 25.00;
    if (gestationalAge >= 26) return 27.27;
    if (gestationalAge >= 25) return 8.22;
    if (gestationalAge >= 24.857) return 0.81; // 24+6 weeks
    return 0;
}