const SHEET_URL = "https://opensheet.elk.sh/14KLeiR9uq2Gg08QdsxMSmx1jdeoHbseLIbRX8QWL0HM/Sheet1";
fetch(SHEET_URL)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('executors');
    data.forEach(row => {
      const box = document.createElement('div');
      box.className = 'executor';
      let html = `<h3>${row["Executor Name"]}</h3>`;
      html += `<button onclick="window.open('${row["Download Link"]}', '_blank')">Download</button>`;
      if (row["Report Link"]) {
        html += `<button onclick="window.open('${row["Report Link"]}', '_blank')">Report</button>`;
      }
      box.innerHTML = html;
      container.appendChild(box);
    });
  });