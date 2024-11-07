export default function json2html(data) {
    let html = '<table data-user="gubbaakash18@gmail.com">\n';
    html += '  <thead>\n';
    html += '    <tr><th>Name</th><th>Age</th><th>Gender</th></tr>\n';
    html += '  </thead>\n';
    html += '  <tbody>\n';
  
    for (let item of data) {
      html += '    <tr>';
      html += `<td>${item.Name}</td><td>${item.Age}</td>`;
      if (item.Gender) {
        html += `<td>${item.Gender}</td>`;
      } else {
        html += '<td></td>';
      }
      html += '</tr>\n';
    }
  
    html += '  </tbody>\n';
    html += '</table>';
    return html;
  }