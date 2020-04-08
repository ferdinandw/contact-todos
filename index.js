let data = [];
const URL = ('http://localhost:3000/contacts')
axios.get(URL)
    .then((response) =>{
        console.log(response);
        const listHTML = document.querySelector("#contacts")
        data = response.data;
        data.forEach(item => {
            const {id, name, address, email , phone, company} = item
            const itemHTML = `<div class="card">
            <img src="./assets/img/test.webp">
            Name : ${name}
            <br>
            Address : ${address}
            <br>
            Email : ${email}
            <br>
            Phone : ${phone}
            <br>
            Company : ${company}
            <br>
            <button class="btn" onclick="ubah(${id})">Edit</button>
            <br>
            <button class="btn" onclick="hapus(${id})">Hapus</button>
            </div>`;
            listHTML.innerHTML += itemHTML;
        })
    })

document.getElementById('saveContact').addEventListener('submit', function(event){
    event.preventDefault();
    const id = [0].value;
    const name = document.getElementsByName('name')[0].value;
    const address = document.getElementsByName('address')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const phone = document.getElementsByName('phone')[0].value;
    const company = document.getElementsByName('company')[0].value;

    axios.post(URL, {
            id,
            name,
            address,
            email,
            phone,
            company
        
    })
    .then(response => {
        console.log(response);
    })

})

const hapus = id =>{
    axios.delete(`${URL}/${id}`)
}

const ubah = id => {
    const contact = data.find(item =>{
        return item.id === id
    })

    if (contact){
        const name = window.prompt('Name', contact.name);
        const address = window.prompt('Address', contact.address);
        const email = window.prompt('Email', contact.email);
        const phone = window.prompt('Phone Number', contact.phone);
        const company = window.prompt('Company Name', contact.company);
        axios.put(`${URL}/${id}`, {
            name,
            address,
            email,
            phone,
            company
        })
    }
}