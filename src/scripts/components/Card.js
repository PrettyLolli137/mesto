// НЕ ПОНИМАЮ ПОЧЕМУ popupDeleteCard НЕ АКТИВЕН, ВСЕ УЖЕ ПРОВЕРИЛ, НЕ ПОНИМАЮ, ЕСЛИ РАБОТУ НЕ ПРИНИМАЮТ, ТО ХОТЯ БЫ ДАЙТЕ НАВОДКУ, ЧТО НЕ ТАК)


export default class Card {
  constructor(cardsData, handleCardClick, openDeletePopup, handleCardLike) {
      this._cardsData = cardsData;
      this._handleCardClick = handleCardClick;
      this._openDeletePopup = openDeletePopup;
      this._myId = cardsData.myId;
      this._ownerId = cardsData.owner._id;
      this._cardId = cardsData._id;
      this._likes = cardsData.likes;
      this._numberOfLikes = cardsData.likes.length;
      this._handleCardLike = handleCardLike;

      this._cardsElement =
          document
              .getElementById('card-template')
              .content
              .querySelector('.groups__group')
              .cloneNode(true);
  }

  _handleDelete = () => {
      this._openDeletePopup({ card: this, cardId: this._cardId });
      };

      _cardLike    = () => {
      this._handleCardLike(this._cardsLikeBtn, this._cardId);
  };

  _openImage = () => {
      this._handleCardClick(this._cardsData);
  }

  _countLikes = () => {
    this._likes.forEach((like) => {
      if (like._id === this._myId) {
        this._cardsLikeBtn.classList.add('groups__like_active');
        return
      }
    });
      this._counter.textContent = this._numberOfLikes;

    }

  _setEventListener = () => {
      this._cardsDeleteBtn.addEventListener('click', this._handleDelete);
      this._cardsLikeBtn.addEventListener('click', this._cardLike )
      this._cardsImage.addEventListener('click', this._openImage)

  }


  removeCard = () => {
      this._cardsElement.remove();
      this._cardsElement = null;
    }
  
    toggleLike = (dataLikes) => {
      this._cardsLikeBtn.classList.toggle('groups__like_active');
      this._counter.textContent = dataLikes.length;
    }
  

 

  createCardElement = () => {

    this._cardsImage = this._cardsElement.querySelector(".groups__image");
    this._cardsTitle = this._cardsElement.querySelector(".groups__text");
    this._cardsDeleteBtn = this._cardsElement.querySelector(".groups__deletebtn");
    this._cardsLikeBtn = this._cardsElement.querySelector(".groups__like");
    this._counter = this._cardsElement.querySelector('.groups__like-counter');
      this._cardsTitle.textContent = this._cardsData.name;
      this._cardsImage.src = this._cardsData.link;
      this._cardsImage.alt = this._cardsData.name; 

      this._countLikes();
  
      if (this._myId !== this._ownerId) {
        this._cardsDeleteBtn.remove();
      }


      this._setEventListener();
      return this._cardsElement;
  }
}



/*

 if (this._myId !== this._ownerId) {
          this._cardDeleteBtn.remove();
        }

 if (this._myId !== this._ownerId) {
          this._cardsDeleteBtn.remove();
        }
            _cardLike    = () => {
        this._handleCardLike(this._cardsLikeBtn, this._cardId);
    };


*/