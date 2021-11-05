const q = (selector) => document.querySelector(selector);


const render = (container, items) => {
    const elements = items.map((element) =>
        `<li>
        <h3>${element.name}</h3>
        <p><strong>Phone: </strong> <a href="tel:${element.phone}"> ${element.phone}</a></p> 
        <p><strong>Email: </strong> <a href= "mailto:${element.email}"> ${element.email}</a></p>
    </li>`
    );

    const content = elements.sort((a,b) => (a.toLowerCase() > b.toLowerCase()) ? 1 : -1).join('');
    
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

    // posso inserire il sort fuori dal render per evetare che tutto ciò che nserisco venga ordinato
    // const datasort = (items) => 
    //     {items.sort((a,b) => 
    //     (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((a.name.toLowerCase() < b.name.toLowerCase())? -1 : 0))}
   
    // datasort(data)

    render(list, data);

    input.addEventListener('keyup', () => {
        // event.preventDefault(); //mi permette di non ricaricare la pagina quando clicco submit
        const value = input.value.toLowerCase();
        const results = data.filter((element) =>
            element.name.toLowerCase().search(value) > -1 || element.email.toLowerCase().search(value) > -1
        )
        render(list, results);
    });



    const addContact = input => input.value

    const addNewContact = () => {
        let addCont = {
            name: addContact(contName),
            phone: addContact(contNum),
            email: addContact(contMail)
        }
        if (addCont.name === "" ){
            alert("add a name")

         } if (isNaN(addCont.phone) || addCont.phone === "" || addCont.phone.length < 6){
            alert("add a valid number (> 6 digits)")

         } if(addCont.email.indexOf('@') === -1 || addCont.email.indexOf('.') === -1 || addCont.email === ""  )  
         {alert("add a valid email address (mandatory @ and .)")}
          else{data.push(addCont)};
        // datasort(data)
        render(list, data)
    }


    addBtn.addEventListener("click", (event) => {
        event.preventDefault();
        addNewContact()
        form.reset();

    });

     

})



