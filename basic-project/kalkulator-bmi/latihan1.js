
const tombolKalkulasiBMI = document.getElementById("kalkulasi-bmi");
const inputBeratBadan = document.getElementById('beratBadan')
const inputTinggiBadan = document.getElementById('tinggiBadan')
const elementHasil = document.getElementById("Hasil")

// rumus BMI = berat badan (kg) / (tinggi badan (m) * tinggi badan (m))

// kurang dari 18.5 = underweight
// 18.5 - 24.9 = ideal
// 25 - 29.9 = overweight
// 30++ = obesitas

function hitungHasilBMI (beratBadan, tinggiBadan) {
    const tinggiBadanDalamMeter = tinggiBadan / 100;

    const hasil = beratBadan / (tinggiBadanDalamMeter * tinggiBadanDalamMeter)


    if(hasil < 18.5) {
        return 'Berat Badan Anda Underweight'
    } else if(hasil >= 18.5 && hasil <= 24.9) {
        return "Berat Badan Anda Ideal"
    } else if(hasil >= 25 && hasil <= 29.9) {
        return 'Berat Badan Anda Overweight'
    } else {
        return 'Berat Badan Anda Obesitas'
    }

}

tombolKalkulasiBMI.addEventListener('click', () => {
    const inputanUserTinggiBadan = Number(inputTinggiBadan.value)
    const inputanUserBeratBadan = Number(inputBeratBadan.value)
    const hasil = hitungHasilBMI(inputanUserBeratBadan, inputanUserTinggiBadan)

    elementHasil.innerHTML = hasil;
})