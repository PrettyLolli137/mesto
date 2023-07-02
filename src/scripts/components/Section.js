export default class Section {
    constructor(renderer, containerSelector) {
        this._container = document.querySelector(containerSelector);
    // this._initialCards = items;
        this._renderer = renderer;
    }

    renderItems(dataCards) {
        dataCards.forEach(element => {
            this._renderer(element);
        })
      }

      addItem(domElement) {
        this._container.append(domElement);
    }
    addNewItem(domElement) {
        this._container.prepend(domElement);
    }
}


/*
renderItems() {
        this._initialCards.forEach(element => {
            this._addItem(this.renderer(element));
        })
    }
 renderItems(dataCards) {
        dataCards.forEach(element => {   
            this._renderer(element);
          })
        }
*/