const q =(selector) => document.querySelector(selector);
const btn = document.querySelector('button');
const render = (container, items) => {
    const elements =items.map((element)=>{
        if (element.completed === true) {    
            return `<li>
                <label for="search"><input type="checkbox" checked= true/>
                <p>${element.title}</p> </label>
            </li>`}
        else {
            return `<li>
                <label for="search"><input type="checkbox"/>
                <p>${element.title}</p> </label>
            </li>`
        }


        });
        
        

        btn.addEventListener("click", () => {
            elements.pop('');
            const content = elements.join('');
            container.innerHTML= content;
        });

        const content = elements.join('');
        container.innerHTML= content;
        
       
 };

document.addEventListener( 'DOMContentLoaded', () => {
    const list = q('ul');
    render(list, data);

});
