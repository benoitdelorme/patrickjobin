import { gsap } from 'gsap'

export default class Loader {
    constructor() {
        this.DOM = {}
        this.DOM.document = document
        this.DOM.root = this.DOM.document.querySelector('.c-loader')
        this.DOM.firstname = this.DOM.document.querySelector('.firstname')
        this.DOM.lastname = this.DOM.document.querySelector('.lastname')
        this.DOM.firstnameWrapper = this.DOM.document.querySelector('.firstname-wrapper')
        this.DOM.lastnameWrapper = this.DOM.document.querySelector('.lastname-wrapper')
        this.DOM.enter = this.DOM.document.querySelector('.enter')
        this.DOM.books = this.DOM.document.querySelector('.c-books')
        

        this.DOM.author = this.DOM.document.querySelector('.author')
        this.DOM.edition1 = this.DOM.document.querySelector('.c-edition-loader_text1')
        this.DOM.edition2 = this.DOM.document.querySelector('.c-edition-loader_text2')

        this.openSimple()

        this.events()
    }

    openSimple() {
        
        gsap.fromTo(this.DOM.edition1, { opacity: 0 }, {opacity: 1, duration: 2, ease: 'expo.inOut' })
        gsap.fromTo(this.DOM.edition2, { opacity: 0 }, {opacity: 1, duration: 2, ease: 'expo.inOut' })

        gsap.fromTo(this.DOM.firstname, { opacity: 0 }, {opacity: 1, duration: 2.1, delay:0.2,  ease: 'expo.inOut' })
        gsap.fromTo(this.DOM.lastname, { opacity: 0 }, {opacity: 1, duration: 2, delay: 0.3, ease: 'expo.inOut' })
        gsap.fromTo(this.DOM.author, { opacity: 0, autoAlpha: 0 }, { opacity: 1, autoAlpha: 1, duration: 1.6, delay: 1.8, ease: 'none' })
        
        gsap.fromTo(this.DOM.enter, { opacity: 0 }, { opacity: 1, delay: 2.6, duration: 1.2, ease: 'none'})
    }

    events() {
        this.DOM.enter.addEventListener('click', () => {
            this.DOM.root.classList.add('-hide')
            this.DOM.books.style.opacity = '1'
        })
    }
}