function showList(){
    let tableName = "{{ page.table }}";
    fetch('https://aifuv2.eastus.azurecontainer.io/records?'+ new URLSearchParams({
      table_name: tableName}), {
      method: 'GET', // or 'PUT'
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      console.table(data["records"]);
      var obj = data["records"];
      document.getElementById("listdata").insertAdjacentHTML = obj
      .map(row => `<li class="table-row">
      <div class="col col-1" data-label="Headline">${row["Headline"]}</div>
      <div class="col col-2" data-label="Organization">${row["Media org"]}</div>
      <div class="col col-3" data-label="URL">${row["URL"]}</div>
      </li>`).join("")
      })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  