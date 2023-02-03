function showTable(){
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
    document.getElementById("tablecontent").innerHTML = obj
    .map(row => `<tr><td class="title">${row["Headline"]}</td><td class="media">${row["Media org"]}</td><td class="url"><a href=${row["URL"]}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"/></svg></a></td>`).join("")
    })
  .catch((error) => {
    console.error('Error:', error);
  });
}