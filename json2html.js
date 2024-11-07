// json2html.js

export default function json2html(data) {
  const columns = ["Name", "Age", "Gender"];

  // Start the HTML table with the required data-user attribute
  let html = `<table data-user="gubbaakash18@gmail.com">`;

  // Create the header row
  html += `<thead><tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr></thead>`;

  // Create the table rows for each data entry
  html += `<tbody>`;
  data.forEach(row => {
    html += `<tr>${columns.map(col => `<td>${row[col] || ""}</td>`).join('')}</tr>`;
  });
  html += `</tbody></table>`;

  return html;
}
