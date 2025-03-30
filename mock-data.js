const fetchMockData = async () => {
  try {
    const response = await fetch('./employees_mock.json');
    const employeesMock = await response.json();

    localStorage.setItem('employees', JSON.stringify(employeesMock));

    console.log("Mock data loaded successfully.");
  } catch (error) {
    console.error('Error loading employees:', error);
  }
};

fetchMockData();
