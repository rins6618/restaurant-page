import cakeImage from './image.jpg'
import './home.css'

class Home {
    static #mainContent = document.querySelector("#content");

    static displayContent() {
        const article = document.createElement('article');
        article.classList.add('flex', 'home');

        //  TItle heading
        const heading = document.createElement('h1');
        heading.textContent = 'Lorem, ipsum dolor sit amet';
        article.appendChild(heading);

        // p no.1
        const paragraph1 = document.createElement('p');
        paragraph1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  \
        Possimus molestiae recusandae saepe corrupti praesentium mollitia, fugiat eos, tempore repudiandae quis fugit, ea ducimus est qui ex totam ab. Ipsam, iste.\
        Lorem ipsum dolor sit amet consectetur adipisicing elit.  \
        Possimus molestiae recusandae saepe corrupti praesentium mollitia, fugiat eos, tempore repudiandae quis fugit, ea ducimus est qui ex totam ab. Ipsam, iste.';
        article.appendChild(paragraph1);

        // two-column container
        const twoCols = document.createElement('div');
        twoCols.classList.add('flex', 'two-column');
        article.appendChild(twoCols);

        // image with caption
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('flex', 'image');
        twoCols.appendChild(imageDiv);

        // Create the image
        const image = document.createElement('img');
        image.src = cakeImage;
        imageDiv.appendChild(image);

        // caption
        const captionDiv = document.createElement('div');
        captionDiv.innerHTML = 'Image by <a href="https://unsplash.com/pt-br/@eliiesh?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"> Ellie Eshaghi</a> on \
                        <a href="https://unsplash.com/pt-br/fotografias/um-pedaco-de-bolo-sentado-em-cima-de-uma-tabua-de-corte-de-madeira-AuRnHkk_UfA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">\
                            Unsplash\
                        </a>'
        imageDiv.appendChild(captionDiv);

        // Create the second paragraph
        const paragraph2 = document.createElement('p');
        paragraph2.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero adipisci eligendi officia. Iure alias veritatis odio iste, soluta laudantium labore veniam dicta iusto sint amet eum reiciendis natus nemo. Nulla? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint magnam quos reiciendis molestiae officia harum culpa placeat similique deserunt neque eum sit, ex dolor, eveniet odit, voluptas voluptatem hic natus.';
        twoCols.appendChild(paragraph2);

        // Append the article to the main content
        this.#mainContent.appendChild(article);
    }
}

export function home() { Home.displayContent() };