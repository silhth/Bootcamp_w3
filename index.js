const q = (selector) => document.querySelector(selector);


const render = (container, items) => {
    const elements = items.map((element) =>
        `<li>
        <h3>${element.name}</h3>
        <p><strong>Phone: </strong> <a href="tel:${element.phone}"> ${element.phone}</a></p> 
        <p><strong>Email: </strong> <a href= "mailto:${element.email}"> ${element.email}</a></p>
    </li>`
    );

    const content = elements.join('');
    
    container.innerHTML = content;
}


document.addEventListener('DOMContentLoaded', () => {
    const form = q('.added-contact');
    const input = q('#search');
    const list = q('ul');
    const addBtn = q('.add-contact')
    const contName = q('#add-name')
    const contNum = q('#add-number')
    const contMail = q('#add-mail')
    const datasort = data.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((a.name.toLowerCase() < b.name.toLowerCase())? -1 : 0))
    
    render(list, datasort);

    input.addEventListener('keyup', () => {
        // event.preventDefault(); //mi permette di non ricaricare la pagina quando clicco submit
        const value = input.value.toLowerCase();
        const results = data.filter((element) =>
            element.name.toLowerCase().search(value) > -1 || element.email.toLowerCase().search(value) > -1
        )
        render(list, results);
    });



    const addContact = input => input.value
    // const emptyContact = form => form.value =""

    const addNewContact = () => {
        let addCont = {
            name: addContact(contName),
            phone: addContact(contNum),
            email: addContact(contMail)
        }
        // if (addCont.name !== "" ){
        //     data.push(addCont);
        // } else {alert("add a name")}

        // if (typeof (phone) === 'number' || ){
        //      data.push(addCont);
        // } else {alert= "add a number"}
        
        render(list, datasort)
    }


    addBtn.addEventListener("click", (event) => {
        event.preventDefault();
        addNewContact()
        // emptyContact()
        contName.value =""
        contNum.value =""
        contMail.value =""

    });

     

})



