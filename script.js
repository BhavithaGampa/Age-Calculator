const birthday = document.getElementById('date')

function calculateage() {
    const birthdayValue = birthday.value
    if (birthdayValue === '') {
        document.getElementById('result').textContent = 'Enter Your Date of Birth!'
        document.getElementById('result').style.color = 'red'
        document.getElementById('result').style.backgroundColor = 'black'

    } else {
        const age = getage(birthdayValue)

    }
}

function getage(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    if (currentDate > birthdayDate) {
        let age = currentDate.getFullYear() - birthdayDate.getFullYear()
        document.getElementById('result').textContent = `You Are ${age} Years Old`
        document.getElementById('result').style.color = 'white'
        document.getElementById('result').style.backgroundColor = 'black'


    } else {
        document.getElementById('result').textContent = 'Enter a Valid Date'
        document.getElementById('result').style.color = 'red'
        document.getElementById('result').style.backgroundColor = 'black'
    }
}