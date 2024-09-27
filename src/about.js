import './about.css'

class About {
    static #mainContent = document.querySelector("#content");

    static displayContent() {
        const article = document.createElement('article');
        article.classList.add('flex', 'about');

        //  TItle heading
        const heading1 = document.createElement('h2');
        heading1.textContent = 'About us';
        article.appendChild(heading1);

        // p no.1
        const paragraph1 = document.createElement('p');
        paragraph1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  \
        Possimus molestiae recusandae saepe corrupti praesentium mollitia, fugiat eos, tempore repudiandae quis fugit, ea ducimus est qui ex totam ab. Ipsam, iste.';
        article.appendChild(paragraph1);

        const heading2 = document.createElement('h3');
        heading2.textContent = 'Contact';
        article.appendChild(heading2);

        // Create the second paragraph
        const spans = ["name@domain.com", "111 3322 567", "Addressy Rd. 1000"];

        spans.forEach( (spanContent) => {
            let span = document.createElement('span');
            span.textContent = spanContent;
            article.appendChild(span);
        })


        // Append the article to the main content
        this.#mainContent.appendChild(article);
    }
}

export function about() { About.displayContent(); } 