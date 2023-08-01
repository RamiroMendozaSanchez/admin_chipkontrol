// script.js

// URL de la API que devuelve los datos en formato JSON (ejemplo)
const apiUrl = 'http://127.0.0.1:3000/unit';

// Función para obtener los datos desde la API
async function getDataFromApi() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return [];
  }
}

// Función para crear la tabla
async function createTable() {
  const data = await getDataFromApi();
  const tableBody = document.querySelector('#data-table tbody');

  // Limpiar tabla antes de agregar datos
  tableBody.innerHTML = '';

  // Recorrer los datos y agregar filas a la tabla
  data.forEach((item) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.imei}</td>
      <td>${item.lat}</td>
      <td>${item.log}</td>
      <td>${item.speed}</td>
      <td>${item.sat}</td>
      <td>${item.ang}</td>
      <td>${item.battery_voltage}</td>
      <td>${item.gps_validity}</td>
      <td>${item.time}</td>

    `;
    tableBody.appendChild(row);
  });
}

// Llamar a la función para crear la tabla cuando la página esté lista
document.addEventListener('DOMContentLoaded', createTable);