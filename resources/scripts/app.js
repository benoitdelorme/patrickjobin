import '../styles/styles.scss'
import 'virtual:svg-icons-register'
import Loader from './loader'
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css'

class App {
    constructor() {
        new Loader()

        this.DOM = {}
        this.DOM.books = document.querySelector('.c-books')
        this.DOM.author = document.querySelector('.c-books_title.-author')
        this.DOM.editions = document.querySelector('.-editions')
        this.DOM.markers = document.querySelector('[data-background="-marker"]')

        this.DOM.tome1 = document.querySelector('.c-panel.-tome1')
        this.DOM.tome2 = document.querySelector('.c-panel.-tome2')

        this.DOM.closePanel = document.querySelectorAll('.c-panel_close')

        this.DOM.markerContainer = document.querySelector('.c-marker')

        this.events()
        this.initGallery1()
        this.initGallery2()
    }

    events() {
        document.querySelectorAll('.link').forEach((item) =>  {

            item.addEventListener('mouseenter', () => {
                document.querySelectorAll('.link').forEach((item) =>  {
                    document.querySelector(`.${item.getAttribute('data-background')}`).classList.remove("-show")
                })

                document.querySelector(`.${item.getAttribute('data-background')}`).classList.add("-show")
            })

            item.addEventListener('click', (e) => {
                e.preventDefault()
                e.stopPropagation()

                this.DOM.books.classList.add("-open")
                this.DOM.books.classList.add("-animals")
                
                document.querySelectorAll('.c-panel').forEach((panel) => {
                    panel.classList.remove('-open')
                })

                document.querySelector(`[data-panel='${item.getAttribute('data-background')}']`).classList.add('-open')
            })
        })

        this.DOM.books.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            
            this.DOM.books.classList.remove('-open')
            this.DOM.books.classList.remove("-animals")

            document.querySelectorAll('.c-panel').forEach((panel) => {
                panel.classList.remove('-open')
            })

            document.querySelectorAll('.c-popup').forEach((popup) => {
                popup.classList.remove('-open')
            })
        })

        this.DOM.closePanel.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                e.stopPropagation()
                this.DOM.books.classList.remove('-open')
                this.DOM.books.classList.remove("-animals")

                document.querySelectorAll('.c-panel').forEach((panel) => {
                    panel.classList.remove('-open')
                })

                document.querySelectorAll('.c-popup').forEach((popup) => {
                    popup.classList.remove('-open')
                })
            })
        })

        this.DOM.author.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()

            this.DOM.books.classList.add("-open")
            this.DOM.books.classList.remove("-animals")
            
            document.querySelectorAll('.c-panel').forEach((panel) => {
                panel.classList.remove('-open')
            })

            document.querySelectorAll('.c-popup').forEach((popup) => {
                popup.classList.remove('-open')
            })

            document.querySelector(`[data-panel='${this.DOM.author.getAttribute('data-background')}']`).classList.add('-open')
        })

        this.DOM.editions.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()

            this.DOM.books.classList.add("-open")
            this.DOM.books.classList.remove("-animals")
            
            document.querySelectorAll('.c-panel').forEach((panel) => {
                panel.classList.remove('-open')
            })

            document.querySelectorAll('.c-popup').forEach((popup) => {
                popup.classList.remove('-open')
            })

            document.querySelector(`[data-panel='${this.DOM.editions.getAttribute('data-background')}']`).classList.add('-open')
        })

        this.DOM.markers.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()

            this.DOM.books.classList.add("-open")
            this.DOM.books.classList.remove("-animals")
            
            document.querySelectorAll('.c-panel').forEach((panel) => {
                panel.classList.remove('-open')
            })

            document.querySelectorAll('.c-popup').forEach((popup) => {
                popup.classList.remove('-open')
            })
            
            this.DOM.markerContainer.classList.add('-open')
            
        })

    }

    initGallery1() {
        this.datas1 = [...this.DOM.tome1.querySelectorAll('[data-gallery-image]')]
        this.json1 = [];
        
        for(let i = 0; i < this.datas1.length; i++ ) {
            const item = {}
            item.src = this.datas1[i].getAttribute('data-gallery-image')
            item.thumb = this.datas1[i].getAttribute('data-gallery-image')
            item.subHtml = `<p>${this.datas1[i].getAttribute('data-gallery-text')}</p>`
            this.json1.push(item)
        }
        
        this.gallery1 = lightGallery(this.DOM.books, {
            dynamic: true,
            dynamicEl: this.json1,
            licenseKey: "9999-9999-999-9999", //need to change it
            download: false
        })

        this.datas1.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                e.stopPropagation()
                this.gallery1.openGallery(index)
            })
        })
    }

    initGallery2() {
        this.datas2 = [...this.DOM.tome2.querySelectorAll('[data-gallery-image]')]

        this.json2 = [];

        for(let i = 0; i < this.datas2.length; i++ ) {
            const item = {}
            item.src = this.datas2[i].getAttribute('data-gallery-image')
            item.thumb = this.datas2[i].getAttribute('data-gallery-image')
            item.subHtml = `<p>${this.datas2[i].getAttribute('data-gallery-text')}</p>`
            this.json2.push(item)
        }
        
        this.gallery2 = lightGallery(this.DOM.books, {
            dynamic: true,
            dynamicEl: this.json2,
            licenseKey: "9999-9999-999-9999", //need to change it
            download: false
        })

        this.datas2.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                e.stopPropagation()
                this.gallery2.openGallery(index)
            })
        })
    }

    open(el, index) {
        this.gallery.openGallery(index)
    }
}

window.addEventListener("DOMContentLoaded", () => {
    new App()
})