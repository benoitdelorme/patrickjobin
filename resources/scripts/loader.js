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
        
        this.DOM.sun = this.DOM.document.querySelector('.sun-wrapper')
        this.DOM.moon = this.DOM.document.querySelector('.moon-wrapper')
        this.DOM.author = this.DOM.document.querySelector('.author')

        /* this.open() */
        /* this.openCircle() */
        /* this.openSun() */
        /* this.openCirclev2() */

        this.openSimple()

        this.events()
    }

    openCircle() {
        gsap.set(this.DOM.author, {'display': 'none'})
        
        gsap.fromTo(this.DOM.firstname, { yPercent: 105 }, {yPercent: 0, duration: 1.4, ease: 'expo.inOut' })
        gsap.fromTo(this.DOM.lastname, { yPercent: -120 }, { yPercent: 0, duration: 1.4, ease: 'expo.inOut' })
        
        gsap.fromTo(this.DOM.sun, { rotate: -5 }, { rotate: 183, duration: 2.3, delay: 0.7, ease: 'cubic.out' })
        gsap.fromTo(this.DOM.moon, { rotate: -180 }, { rotate: 0, duration: 2.3, delay: 0.7, ease: 'cubic.out' })

        gsap.fromTo(this.DOM.firstnameWrapper, { yPercent: 0 }, { yPercent: 400, duration: 2.3, delay: 1.1, ease: 'cubic.inOut' })
        gsap.fromTo(this.DOM.firstname, { yPercent: 0 }, { yPercent: -400, duration: 2.3, delay: 1.1, ease: 'cubic.inOut' })

        gsap.fromTo(this.DOM.lastnameWrapper, { yPercent: 0 }, { yPercent: -400, duration: 2.5, delay: 1.1, ease: 'cubic.inOut' })
        gsap.fromTo(this.DOM.lastname, { yPercent: 0 }, { yPercent: 400, duration: 2.5, delay: 1.1, ease: 'cubic.inOut' })
    }

    openSimple() {
        gsap.set([this.DOM.sun, this.DOM.moon], {'display': 'none'})
        
        gsap.fromTo(this.DOM.firstname, { opacity: 0 }, {opacity: 1, duration: 2.1, ease: 'expo.inOut' })
        gsap.fromTo(this.DOM.lastname, { opacity: 0 }, {opacity: 1, duration: 2, delay: 0.1, ease: 'expo.inOut' })
        gsap.fromTo(this.DOM.author, { opacity: 0, autoAlpha: 0 }, { opacity: 1, autoAlpha: 1, duration: 1.5, delay: 1.7, ease: 'none' })

        gsap.fromTo(this.DOM.enter, { opacity: 0 }, { opacity: 1, delay: 2.5, duration: 1.1, ease: 'none'})
    }

    openCirclev2() {
        gsap.fromTo(this.DOM.firstname, { yPercent: 105 }, {yPercent: 0, duration: 1.4, ease: 'expo.inOut' })
        gsap.fromTo(this.DOM.lastname, { yPercent: -120 }, { yPercent: 0, duration: 1.4, ease: 'expo.inOut' })
        
        gsap.fromTo(this.DOM.sun, { rotate: -5 }, { rotate: 183, duration: 2.3, delay: 0.7, ease: 'cubic.out' })
        gsap.fromTo(this.DOM.moon, { rotate: -180 }, { rotate: 0, duration: 2.3, delay: 0.7, ease: 'cubic.out' })

        gsap.fromTo(this.DOM.author, { opacity: 0, autoAlpha: 0 }, { opacity: 1, autoAlpha: 1, duration: 1.5, delay: 2.9, ease: 'none' })

        gsap.fromTo(this.DOM.enter, { opacity: 0 }, { opacity: 1, delay: 3.5, duration: 1.1, ease: 'none'})
    }

    openSun() {
        gsap.fromTo(this.DOM.firstname, { yPercent: 105 }, {yPercent: 0, duration: 1.4, ease: 'expo.inOut' })
        gsap.fromTo(this.DOM.sun, { rotate: -5 }, { rotate: 183, duration: 2.3, delay: 0.7, ease: 'cubic.out' })
        
        gsap.fromTo(this.DOM.lastname, { yPercent: -120 }, { yPercent: 0, duration: 3.1, ease: 'expo.inOut', delay: 0.9 })

        gsap.fromTo(this.DOM.author, { opacity: 0, autoAlpha: 0 }, { opacity: 1, autoAlpha: 1, duration: 1.5, delay: 2.9, ease: 'none' })
    }

    open() {
        gsap.fromTo(this.DOM.firstname, { yPercent: 105 }, {yPercent: 0, duration: 1.9, ease: 'expo.inOut' })
        gsap.fromTo(this.DOM.sun, { rotate: -5 }, { rotate: 183, duration: 3.5, delay: 1, ease: 'cubic.out' })
        
        gsap.fromTo(this.DOM.lastname, { yPercent: -120 }, { yPercent: 0, duration: 3.1, ease: 'expo.inOut', delay: 1.7 })

        gsap.fromTo(this.DOM.author, { opacity: 0, autoAlpha: 0 }, { opacity: 1, autoAlpha: 1, duration: 1.5, delay: 4, ease: 'none' })
    }

    events() {
        this.DOM.enter.addEventListener('click', () => {
            this.DOM.root.classList.add('-hide')
            this.DOM.books.style.opacity = '1'
        })
    }
}