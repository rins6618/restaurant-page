import './menu.css'

class Home {
    static #mainContent = document.querySelector("#content");

    static displayContent() {
        const article = document.createElement('article');
        article.classList.add('flex', 'menu');

        // Create the heading
        const heading = document.createElement('h1');
        heading.textContent = 'Our Menu';
        article.appendChild(heading);

        // Create the table
        const table = document.createElement('table');
        table.classList.add('dot-separated', 'flex');
        article.appendChild(table);

        const tbody = document.createElement('tbody');
        table.appendChild(tbody);

        // Create the table header row
        const headerRow = document.createElement('tr');
        tbody.appendChild(headerRow);

        // Create the table header cells
        const headerCells = ['NAME OF DISH', 'PRICE', 'TYPE'];
        headerCells.forEach(cellText => {
        const headerCell = document.createElement('td');
        headerCell.textContent = cellText;
        headerRow.appendChild(headerCell);
        });

        // Create the table data rows
        const menuItems = [
        ['Entry Dish #1', 23.99, 'Entry'],
        ['Entry Dish #2', 19.99, 'Entry'],
        ['Side Dish #1', 20.99, 'Side'],
        ['Side Dish #2', 39.99, 'Side'],
        ['Main Course #1', 59.99, 'Main'],
        ['Main Course #2', 109.99, 'Main'],
        ['Chocolate Cake', 29.99, 'Dessert']
        ];

        menuItems.forEach(menuItem => {
        const dataRow = document.createElement('tr');
        tbody.appendChild(dataRow);

        menuItem.forEach(item => {
            const dataCell = document.createElement('td');
            dataCell.textContent = item;
            dataRow.appendChild(dataCell);
        });
        });

        // Append the article to the main content
        this.#mainContent.appendChild(article);
    }
}

export function menu() { Home.displayContent(); };