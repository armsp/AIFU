// ---
// ---
function showTable(){
let tableName = "gbr";
    fetch('http://aifutestgroup.eastus.azurecontainer.io:8000/records?'+ new URLSearchParams({
    table_name: tableName}), {
  method: 'GET', // or 'PUT'
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  // body: formData,
//   body: frm.serialize(),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    console.table(data["records"]);
    var obj = data["records"];
    document.getElementById("tablecontent").innerHTML = obj
  .map(row => `<tr><td class="title">${row["Headline"]}</td><td class="media">${row["Media org"]}</td><td class="url">${row["URL"]}</td>`).join("")
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}