document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profileForm');
    const personalInfoForm = document.getElementById('personalInfoForm');
    const performanceForm = document.getElementById('performanceForm');
    const travelForm = document.getElementById('travelForm');
    const emergencyContactForm = document.getElementById('emergencyContactForm');

    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const employeeData = new FormData(profileForm);
            saveProfile(employeeData);
            alert('Profile created successfully!');
            profileForm.reset();
        });
    }

    if (personalInfoForm) {
        personalInfoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const personalData = new FormData(personalInfoForm);
            savePersonalInfo(personalData);
            alert('Personal information saved successfully!');
            personalInfoForm.reset();
        });
    }

    if (performanceForm) {
        performanceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const performanceData = new FormData(performanceForm);
            savePerformance(performanceData);
            alert('Performance data saved successfully!');
            performanceForm.reset();
        });
    }

    if (travelForm) {
        travelForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const travelData = new FormData(travelForm);
            saveTravel(travelData);
            alert('Travel data saved successfully!');
            travelForm.reset();
        });
    }

    if (emergencyContactForm) {
        emergencyContactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emergencyContactData = new FormData(emergencyContactForm);
            saveEmergencyContact(emergencyContactData);
            alert('Emergency contact saved successfully!');
            emergencyContactForm.reset();
        });
    }

    if (document.getElementById('employeeList')) {
        displayEmployees('employees', document.getElementById('employeeList'));
    }

    if (document.getElementById('payrollList')) {
        displayData('payroll', document.getElementById('payrollList'));
    }

    if (document.getElementById('personalInfoList')) {
        displayData('personalInfo', document.getElementById('personalInfoList'));
    }

    if (document.getElementById('emergencyContactsList')) {
        displayData('emergencyContacts', document.getElementById('emergencyContactsList'));
    }

    if (document.getElementById('performanceList')) {
        displayData('performance', document.getElementById('performanceList'));
    }

    if (document.getElementById('travelList')) {
        displayData('travel', document.getElementById('travelList'));
    }

    if (document.getElementById('search')) {
        document.getElementById('search').addEventListener('input', function(e) {
            searchEmployees(e.target.value);
        });
    }
});

function saveProfile(data) {
    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    let employee = {
        id: Date.now(),
        name: data.get('name'),
        lastName: data.get('lastName'),
        location: data.get('location'),
        projectTitle: data.get('projectTitle'),
        startDate: data.get('startDate'),
        vessel: data.get('vessel'),
        photo: data.get('photo')
    };
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
}

function savePersonalInfo(data) {
    let personalInfo = JSON.parse(localStorage.getItem('personalInfo')) || [];
    let info = {
        id: data.get('id'), // assuming there's an employee ID to link this data to a profile
        address: data.get('address'),
        city: data.get('city'),
        country: data.get('country'),
        email: data.get('email'),
        idCopy: data.get('idCopy'),
        vaccineRecords: data.get('vaccineRecords')
    };
    personalInfo.push(info);
    localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
}

function savePerformance(data) {
    let performance = JSON.parse(localStorage.getItem('performance')) || [];
    let record = {
        id: data.get('id'), // assuming there's an employee ID to link this data to a profile
        notes: data.get('notes'),
        date: data.get('date'),
        evaluationDate: data.get('evaluationDate'),
        evaluationForm: data.get('evaluationForm')
    };
    performance.push(record);
    localStorage.setItem('performance', JSON.stringify(performance));
}

function saveTravel(data) {
    let travel = JSON.parse(localStorage.getItem('travel')) || [];
    let record = {
        id: data.get('id'), // assuming there's an employee ID to link this data to a profile
        origin: data.get('origin'),
        destination: data.get('destination'),
        travelDate: data.get('travelDate')
    };
    travel.push(record);
    localStorage.setItem('travel', JSON.stringify(travel));
}

function saveEmergencyContact(data) {
    let emergencyContacts = JSON.parse(localStorage.getItem('emergencyContacts')) || [];
    let contact = {
        id: data.get('id'), // assuming there's an
