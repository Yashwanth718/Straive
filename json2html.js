
export default function json2html(data) {
  const columns = ["Name", "Age", "Gender"];
  let html = `<table data-user="yashwanthkolli01@gmail.com">
                <thead>
                  <tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr>
                </thead>
                <tbody>`;
  
  data.forEach(row => {
    html += `<tr>${columns.map(col => `<td>${row[col]
