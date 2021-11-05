import { data } from './data.js'; 
import { q } from './querySel.js';
import { render } from './render.js';
import {deleteClass, addConts} from './showHideClass.js'



document.addEventListener('DOMContentLoaded', () => {
    const form = q('.add-contact');
    console.log(form)
    const input = q('#search');
    const list = q('ul');
    const addBtn = q('.btn-add')
    const contName = q('#add-name')
    const contNum = q('#add-number')
    const contMail = q('#add-mail')
    const addContBtn= q('.contact-add')
    const hide = q('.hide')
    const hideCont =q ('.hide-cont')


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

    



    addContBtn.addEventListener("click", (event) => {
        addConts(form, "adding-contact");
        addConts(hide, "add-contact");
        addConts(hideCont, "add-contact");
    })

    

    const addContact = input => input.value

    const addNewContact = () => {
        let addCont = {
            name: addContact(contName),
            phone: addContact(contNum),
            email: addContact(contMail)
        }
        // if (addCont.name === "" ){
        //     alert("add a name")

        //  } if (isNaN(addCont.phone) || addCont.phone === "" || addCont.phone.length < 6){
        //     alert("add a valid number (> 6 digits)")

        //  } if(addCont.email.indexOf('@') === -1 || addCont.email.indexOf('.') === -1 || addCont.email === ""  )  
        //  {alert("add a valid email address (mandatory @ and .)")}
        //   else{data.push(addCont)};
        // datasort(data)
        data.push(addCont)
        render(list, data)
    }


    addBtn.addEventListener("click", (event) => {
        event.preventDefault();
        addNewContact()
        form.reset();
        deleteClass(form, "add-contact");
        deleteClass(hide,  "hide");
        deleteClass(hideCont, "hide-cont");

    });

     

})



