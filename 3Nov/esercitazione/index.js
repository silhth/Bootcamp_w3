const q = (selector) => document.querySelector(selector);

const render = (container, items) => {
    const elements = items.map((element) => {
        // if (element.completed) {
        //     return `<li>
        //         <label for="search"><input type="checkbox" checked= true/>
        //         <p>${element.title}</p> </label>
        //     </li>`}
        // else {
        //     return `<li>
        //         <label for="search"><input type="checkbox"/>
        //         <p>${element.title}</p> </label>
        //     </li>`
        // }
        return `<li>
                 <label for="search"><input type="checkbox" ${element.completed ? 'checked' : ''} />
                 <p>${element.title}</p> </label>
                </li>`


    });


    const content = elements.join('');
    container.innerHTML = content;


};

document.addEventListener('DOMContentLoaded', () => {
    const list = q('ul');
    render(list, data);
    const btn = q('button');

    btn.addEventListener("click", () => {
        data.pop('');
        render(list, data);
    });

});





