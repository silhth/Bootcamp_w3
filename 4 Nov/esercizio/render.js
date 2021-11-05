export const render = (container, items) => {
    items.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((a.name.toLowerCase() < b.name.toLowerCase())? -1 : 0))
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
