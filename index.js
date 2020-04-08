let data = [];
const URL = ('http://localhost:3000/contacts')
axios.get(URL)
    .then((response) =>{
        console.log(response);
        const listHTML = document.querySelector("#contacts>ol")
        data = response.data;})
    //     data.forEach(item => {
    //         const {id, name, address, email , phone, company} = item
    //         const itemHTML = `
    //         Name : ${name}
    //         <br>
    //         Address : ${address}
    //         <br>
    //         Email : ${email}
    //         <br>
    //         Phone : ${phone}
    //         <br>
    //         Company : ${company}
    //         `;
    //         listHTML.innerHTML += itemHTML;
    //     })
    // })

// document.getElementById('saveContact').addEventListener('submit', function(event){
//     event.preventDefault();
//     const name = document.getElementsByName('name')[0].value;
//     const address = document.getElementsByName('address')[0].value;
//     const email = document.getElementsByName('email')[0].value;
//     const phone = document.getElementsByName('phone')[0].value;
//     const company = document.getElementsByName('company')[0].value;

//     axios.post(URL, {
//         data:{
//             name,
//             address,
//             email,
//             phone,
//             company
//         }
//     })

// })