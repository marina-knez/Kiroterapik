var dt = new Date();
        function renderDate() {
            dt.setDate(1);
            var day = dt.getDay();
            var today = new Date();
            var endDate = new Date(
                dt.getFullYear(),
                dt.getMonth() + 1,
                0
            ).getDate();

            var prevDate = new Date(
                dt.getFullYear(),
                dt.getMonth(),
                0
            ).getDate();
            var months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ]
            document.getElementById("month").innerHTML = months[dt.getMonth()];
            document.getElementById("date_str").innerHTML = dt.toDateString();
            var cells = "";
            
            for (x = day; x > 0; x--) {
                cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
            }
            console.log(day);
            for (i = 1; i <= endDate; i++) {
                if (i == today.getDate() && dt.getMonth() == today.getMonth()) cells += "<div class='today'>" + i + "</div>";
                else 
                cells += "<div class='day'>" + i + "</div>";  
            }

            document.getElementsByClassName("days")[0].innerHTML = cells;
            

        }

        function moveDate(para) {
            if(para == "prev") {
                dt.setMonth(dt.getMonth() - 1);
            } else if(para == "next") {
                dt.setMonth(dt.getMonth() + 1);
            }
            renderDate();
        }


// SHOW CALENDAR
document.addEventListener('click', showCalendar);

const calendar = document.querySelector('.wrapper');
const back = document.querySelector('.back');
const card = document.querySelector('.all-cards');

function showCalendar(e) {
   if(e.target.tagName === 'BUTTON') {
       calendar.style.display = 'block';
       back.style.display = 'block';
       card.style.display = 'none';
   };
}

// SHOW TIMETABLE
const timeTable = document.querySelector('.timeTable');

document.querySelectorAll('.days').forEach(function(day) {
    day.addEventListener('click', showTimeTable => {
        timeTable.style.display = 'block';        
    });
});


// SHOW DATA
const data = document.querySelector('.data');

document.querySelectorAll('.tableBody').forEach(function(time) {
    time.addEventListener('click', showForm => {
        data.style.display = 'block';
        calendar.style.display = 'none';
        timeTable.style.display = 'none';
    });
});


// OPEN FORM
const next = document.querySelector('.form-next');
const form = document.querySelector('.conf-form');

next.addEventListener('click', openForm);

function openForm() {
    form.style.display = 'block';
}


// SHOW CONFIRMATION MESSAGE
/*document.querySelector('.potvrdi').addEventListener('click', showMessage('Vaš je termin rezerviran! Vidimo se!'));

function showMessage (msg) {
    const div = document.createElement('div');
    div.className = 'msg';
    div.appendChild(document.createTextNode(msg));

    const stuff = document.querySelector('.stuff');
    const back = document.querySelector('.back');

    stuff.insertBefore(div, back);

    const card = document.querySelector('.all-cards');
    const calendar = document.querySelector('.wrapper');
    const timeTable = document.querySelector('.timeTable');
    const data = document.querySelector('.data');
    const form = document.querySelector('.conf-form');

    calendar.style.display = 'none';
    timeTable.style.display = 'none';
    data.style.display = 'none';
    form.style.display = 'none';
    card.style.display = 'block';

    setTimeout(function() {
        document.querySelector('.msg').remove();
    }, 3000);
}*/


// GET NAME OF SERVICE
document.addEventListener('click', showTitle);

function showTitle(e) {
    if(e.target.tagName === 'BUTTON') {
        const service = document.querySelector('.usluga');
        
        service.innerText = e.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
    };
};


// GET DURATION
document.addEventListener('click', showDuration);

function showDuration(e) {
    if(e.target.tagName === 'BUTTON') {
        const duration = document.querySelector('.trajanje');

        duration.innerText = e.target.previousElementSibling.previousElementSibling.innerText;

    };
};


// GET APPOINTMENT TIME
document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('td');

    cells.forEach(function(cell) {
        cell.addEventListener('click', function(e) {
            const appTime = document.querySelector('.vrijeme');

            if(e.target) {
                cell.style.border = '3px solid green';

                appTime.innerText = cell.innerText;
            } else {
                cell.style.border = 'none';

            };
        });
    });
});


// GET DATE, MONTH, YEAR
document.addEventListener('click', showDate);

function showDate(e) {
    if(e.target.classList.contains('day')) {
        const date = document.querySelector('.datum');

        date.innerText = e.target.innerText + '.' + (dt.getMonth() + 1) + '.' + dt.getFullYear() + '.';
    }
};


// SHOW MESSAGE
document.querySelector('.potvrdi').addEventListener('click', function(e) {
    const ime = document.querySelector('.ime').value;
    const prezime = document.querySelector('.prezime').value;
    const broj = document.querySelector('.broj').value;

    const calendar = document.querySelector('.wrapper');

    if(ime === '' || prezime === '' || broj === '') {
        showMessage('Molimo Vas, ispunite polja označena *.');

        calendar.style.display = 'none';
    } else {

        showMessage('Vaš je termin rezerviran. Vidimo se!');

        calendar.style.display = 'none';
    }

    clearFields();
    e.preventDefault();
});

function showMessage (msg) {
        
        const div = document.createElement('div');
        div.className = 'msg';
        div.appendChild(document.createTextNode(msg));

        const stuff = document.querySelector('.stuff');
        const back = document.querySelector('.back');

        stuff.insertBefore(div, back);

        setTimeout(function() {
            document.querySelector('.msg').remove();
        }, 3000);

    };

function clearFields() {
    document.querySelector('.ime').value = '';
    document.querySelector('.prezime').value = '';
    document.querySelector('.email').value = '';
    document.querySelector('.broj').value = '';
}