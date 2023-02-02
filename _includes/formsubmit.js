function formSubmit(e){
    e.preventDefault(); //This will prevent the default click action
    let tableName = "{{ page.table }}";
    // var frm = $('#'+ $(this).data('name') +'');
    var frm = document.getElementById("formforserver");
    const formObj = new FormData(frm);
    formObj.table = tableName;
    const formData = JSON.stringify(Object.fromEntries(formObj.entries()))
    console.log(JSON.stringify(Object.fromEntries(formObj.entries())));
    // console.log(JSON.stringify(formData));


// const data = { username: 'example' };

fetch('https://aifuv2.eastus.azurecontainer.io/submit', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Origin': 'https://aifu.shantam.io'
  },
  body: formData,
//   body: frm.serialize(),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

    // $.ajax({
    //     type: frm.attr('method'),
    //     url: 'http://aifutestgroup.eastus.azurecontainer.io:8000/submit',
    //     data: frm.serialize(),
    //     success: function (data) {
    //         console.log('Submission was successful.');
    //         console.log(data);
    //     },
    //     error: function (data) {
    //         console.log('An error occurred.');
    //         console.log(data);
    //     }
    // });
}