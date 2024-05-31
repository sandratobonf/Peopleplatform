document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profileForm');
    
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const employeeData = new FormData(profileForm);
            saveProfile(employeeData);
            alert('Profile created successfully!');
            profileForm.reset();
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
