import { data } from './data.js'; 
import { q } from './querySel.js';
import { render } from './render.js';

document.addEventListener( 'DOMContentLoaded', () => {
    const form = q('.contact');
    const input = q('#search');
    const list = q('ul');

    // seconda form add contact
    const add = q('.add')


    // const elements =data.map((element, index)=>{
    //     // return element.name + ', ' + element.phone + ', ' + element.email; 
    //     return `<li>
    //     <h3>${element.name}</h3>
    //     <p><strong>Phone: </strong> <a href="tel:${element.phone}"> ${element.phone}</a></p> 
    //     <p><strong>Email: </strong> <a href= "mailto:${element.email}"> ${element.email}</a></p>
    //     </li>`;

    // })

    render(list, data);

    // form.addEventListener('submit', (event) => {
    //     // event.preventDefault(); //mi permette di non ricaricare la pagina quando clicco submit
    //     const value = input.value.toLowerCase();
    //     const results = data.filter ((element) => {
    //         return element.name.toLowerCase().search(value) > -1 || element.email.toLowerCase().search(value) > -1
            
    //     })
    //     render(list, results);
    // });

    input.addEventListener('keyup', () => {
            // event.preventDefault(); //mi permette di non ricaricare la pagina quando clicco submit
            const value = input.value.toLowerCase();
            const results = data.filter ((element) => 
               element.name.toLowerCase().search(value) > -1 || element.email.toLowerCase().search(value) > -1
                )
            render(list, results);
        });

    
    add.addEventListener('submit', (event)=> {
        event.preventDefault();
        const newContact = {
            name: event.target.name.value,
            phone: event.target.phone.value,
            email: event.target.email.value
        }
        data.push(newContact);
        render(list, data);
        add.reset();
    })

})



