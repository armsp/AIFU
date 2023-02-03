function formSubmit(e){
    e.preventDefault(); //This will prevent the default click action
    let tableName = "{{ page.table }}";
    // var frm = $('#'+ $(this).data('name') +'');
    var frm = document.getElementById("formforserver");
    const formObj = new FormData(frm);
    const formData = Object.fromEntries(formObj.entries());
    formData.table = tableName;
    // console.log(JSON.stringify(Object.fromEntries(formObj.entries())));
    console.log(formData);
    var notyf = new Notyf({
      duration: 2000,
      position: {
        x: 'center',
        y: 'center',
      },
      types: [
        {
          type: 'info',
          background: '#A7C7E7',
          icon: false
          // icon: {
          //   className: 'material-icons',
          //   tagName: 'i',
          //   text: 'warning'
          // }
        },
        {
          type: 'error',
          background: 'indianred',
          duration: 2000,
          dismissible: true
        }
      ]
    });


// const data = { username: 'example' };

fetch('https://aifuv2.eastus.azurecontainer.io/submit', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Origin': 'https://aifu.shantam.io'
  },
  body: JSON.stringify(formData),
//   body: frm.serialize(),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    notyf.success('Your data has been sent for validation!');

  })
  .catch((error) => {
    console.error('Error:', error);
    notyf.error('Something is wrong with the server. Please try again after a few days.');

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