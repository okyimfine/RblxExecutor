const SHEET_URL = "https://opensheet.elk.sh/14KLeiR9uq2Gg08QdsxMSmx1jdeoHbseLIbRX8QWL0HM/Sheet1";

fetch(SHEET_URL)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('executors');
    
    // Pastikan data adalah array
    if (!Array.isArray(data)) {
      console.error("Data bukan array:", data);
      return;
    }

    data.forEach(row => {
      const box = document.createElement('div');
      box.className = 'executor';

      let html = `<h3>${row["Executor Name"] || "Unknown"}</h3>`;
      html += `<button onclick="window.open('${row["Download Link"]}', '_blank')">Download</button>`;

      if (row["Report Link"]) {
        html += `<button onclick="window.open('${row["Report Link"]}', '_blank')">Report</button>`;
      }

      box.innerHTML = html;
      container.appendChild(box);
    });
  })
  .catch(error => {
    console.error("Gagal fetch data:", error);
  });
