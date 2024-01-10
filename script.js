let scoreA = document.getElementById('score-a');
let scoreB = document.getElementById('score-b');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');

let teamA = document.getElementById('teamA');
let teamNameA = document.getElementById('team-nameA');

let teamB = document.getElementById('teamB');
let teamNameB = document.getElementById('team-nameB');
let resetButton = document.getElementById('reset');

let angkaA = 0;
let angkaB = 0;

// Fungsi untuk memperbarui skor dan nama tim A ke localStorage
function updateLocalStorageA() {
    localStorage.setItem('teamNameA', teamNameA.innerHTML);
    localStorage.setItem('angkaA', angkaA);
}

// Fungsi untuk memperbarui skor dan nama tim B ke localStorage
function updateLocalStorageB() {
    localStorage.setItem('teamNameB', teamNameB.innerHTML);
    localStorage.setItem('angkaB', angkaB);
}

// Fungsi untuk memuat data dari localStorage saat halaman dimuat
function loadLocalStorage() {
    teamNameA.innerHTML = localStorage.getItem('teamNameA') || 'TEAM A';
    teamNameB.innerHTML = localStorage.getItem('teamNameB') || 'TEAM B';
    angkaA = parseInt(localStorage.getItem('angkaA')) || 0;
    angkaB = parseInt(localStorage.getItem('angkaB')) || 0;
    scoreA.innerHTML = angkaA;
    scoreB.innerHTML = angkaB;
}

// Memuat data dari localStorage saat halaman dimuat
loadLocalStorage();

function scorePlus() {
    scoreA.innerHTML = ++angkaA;
    updateLocalStorageA();
}

function scoreMin() {
    scoreA.innerHTML = --angkaA;
    updateLocalStorageA();
}

function scorePlusB() {
    scoreB.innerHTML = ++angkaB;
    updateLocalStorageB();
}

function scoreMinB() {
    scoreB.innerHTML = --angkaB;
    updateLocalStorageB();
}

teamA.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        teamNameA.innerHTML = teamA.value;
        updateLocalStorageA();
    }
});

teamB.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        teamNameB.innerHTML = teamB.value;
        updateLocalStorageB();
    }
});

resetButton.addEventListener('click', function () {
    angkaA = 0;
    angkaB = 0;
    scoreA.innerHTML = angkaA;
    scoreB.innerHTML = angkaB;

    teamNameA.innerHTML = "Team A";
    teamNameB.innerHTML = "Team B";
    updateLocalStorageA();
    updateLocalStorageB();
});