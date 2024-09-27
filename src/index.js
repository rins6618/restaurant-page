import './style.css'
import './header.css'
import { home } from './home'
import { menu } from './menu'
import { about } from './about'

class Page {
    
    static erasePage() {
        let mainContent = document.querySelector("#content");
        mainContent.replaceChildren();
    }


    constructor() {
        this.home = () => {
            Page.erasePage();
            home();
        };
        this.menu = () => {
            Page.erasePage();
            menu();
        };
        this.about = () => {
            Page.erasePage();
            about();
        };
        let buttons = [...document.querySelectorAll("nav button").values()];
        for (let button of buttons) {
            console.log(button.id.slice(0, -4)); 
            let str = `${button.id.slice(0, -4)}`

            button.addEventListener('click', () => {
                this[str]();
            })
        }
    }

}

const p = new Page;

