(()=>{"use strict";var e={898:(e,t,n)=>{e.exports=n.p+"images/arkhyz.156d07d84524cc942d68.jpg"},0:(e,t,n)=>{e.exports=n.p+"images/baikal.99b6e21b94798ec54759.jpg"},805:(e,t,n)=>{e.exports=n.p+"images/chelyabinsk-oblast.167b0005add1694393db.jpg"},380:(e,t,n)=>{e.exports=n.p+"images/ivanovo.50bb648b47735ffba9eb.jpg"},243:(e,t,n)=>{e.exports=n.p+"images/kamchatka.e2daa86be296ebffd99c.jpg"},637:(e,t,n)=>{e.exports=n.p+"images/kholmogorsky-rayon.d75cf55cc6dcd72e4e9a.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",n.b=document.baseURI||self.location.href,(()=>{function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=function(){function n(e){var r=this,o=e.item,i=e.myInfo,a=e.cardSelector,u=e.handleCardClick,c=e.handleDeleteCard,s=e.handleLikeCard,l=e.handleDeleteLikeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_foundElements",(function(){r._cardImage=r._photoElement.querySelector(".photos__card-image"),r._cardLike=r._photoElement.querySelector(".photos__card-like"),r._removeButton=r._photoElement.querySelector(".photos__remove-button"),r._likesCounter=r._photoElement.querySelector(".photos__card-like-counter"),r._cardName=r._photoElement.querySelector(".photos__card-name")})),t(this,"removeCard",(function(){r._photoElement.remove()})),t(this,"createCard",(function(){r._photoElement=r._getTemplate(),r._foundElements();var e=r._cardName,t=r._cardImage,n=r._likesCounter,o=r._removeButton;return r._userId==r._myId&&o.classList.add("photos__remove-button_active"),r._checkMyLike()&&r._cardLike.classList.add("photos__card-like_active"),e.textContent=r._name,t.src=r._link,t.alt=r._name,n.textContent=r._likes.length,r._setEventListeners(),r._photoElement})),this._name=o.name,this._link=o.link,this._likes=o.likes,this._data=o,this._userId=o.owner._id,this._myId=i._id,this._handleCardClick=u,this._cardSelector=a,this._handleDeleteCard=c,this._handleLikeCard=s,this._handleDeleteLikeCard=l}var r,o;return r=n,(o=[{key:"getCard",value:function(){return this._data}},{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".photos__card").cloneNode(!0)}},{key:"handleCardLike",value:function(e){this._likes=e.likes,this._getLikesCounter(e),this._checkMyLike()?this._cardLike.classList.add("photos__card-like_active"):this._cardLike.classList.remove("photos__card-like_active")}},{key:"_getLikesCounter",value:function(e){this._photoElement.querySelector(".photos__card-like-counter").textContent=e.likes.length}},{key:"_checkMyLike",value:function(){var e=this;return Boolean(this._likes.find((function(t){return t._id==e._myId})))}},{key:"_setEventListeners",value:function(){var e=this;this._cardLike.addEventListener("click",(function(){e._checkMyLike()?e._handleDeleteLikeCard():e._handleLikeCard()})),this._removeButton.addEventListener("click",(function(){e._handleDeleteCard(e._data._id)})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._data)}))}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}(),o=(new URL(n(898),n.b),new URL(n(380),n.b),new URL(n(637),n.b),new URL(n(243),n.b),new URL(n(805),n.b),new URL(n(0),n.b),document.querySelector(".photos__cards"),{formSelector:".popup__form",inputSelector:".popup__form-input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_inactive",inputErrorClass:"popup__form-input_type_error",errorClass:"popup__form-input-error_active"}),i=document.querySelector(".popup__form-input_input_name"),a=document.querySelector(".popup__form-input_input_job"),u=(document.querySelector(".popup__form-input_input_place"),document.querySelector(".popup__form-input_input_image"),document.querySelector(".profile__name"),document.querySelector(".profile__about-me"),document.querySelector(".popup__image"),document.querySelector(".popup__image-name"),document.querySelector(".popup__close_img"),{open:document.querySelector(".profile__redact"),close:document.querySelector(".popup__close_edit")}),c=(document.querySelector("#formEdit"),{open:document.querySelector(".profile__avatar-overlay"),close:document.querySelector(".popup__close_avatar")}),s={open:document.querySelector(".profile__add-button"),close:document.querySelector(".popup__close_add")};function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}document.querySelector("#formAdd");var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._buttonElement,this._targetFormElement=n}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._targetFormElement.popup.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._targetFormElement.popup.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=" "}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this._targetFormElement.popup.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList=Array.from(this._targetFormElement.popup.querySelectorAll(this._inputSelector)),this._buttonElement=this._targetFormElement.popup.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"deactiveButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,"_openedClass","popup_opened"),d(this,"_handlePopupOverlayClick",(function(e){e.target===n.popup&&n.close()})),d(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),this.popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this.popup.classList.add(this._openedClass),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this.popup.classList.remove(this._openedClass),document.removeEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this.popup.querySelector(".popup__close").addEventListener("click",(function(){return e.close()})),this.popup.addEventListener("click",(function(t){return e._handlePopupOverlayClick(t)}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function k(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&b(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t.popup.querySelector(".popup__image"),t._popupName=t.popup.querySelector(".popup__image-name"),t}return t=a,(n=[{key:"open",value:function(e){this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupName.textContent=e.name,m(g(a.prototype),"open",this).call(this)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(h);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItemsPrepend",value:function(e){this._container.prepend(e)}},{key:"addItemsAppend",value:function(e){this._container.append(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.nameUser=document.querySelector(t),this.jobUser=document.querySelector(n),this.avatarUser=document.querySelector(r)}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){this.nameUser.textContent=e.name,this.jobUser.textContent=e.about,this.avatarUser.src=e.avatar,this.avatarUser.alt=e.name}},{key:"getUserInfo",value:function(){return{name:this.nameUser.textContent,about:this.jobUser.textContent}}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function R(e,t){return R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},R(e,t)}function q(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&R(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function a(e){var t,n=e.modalId,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._form=t.popup.querySelector(".popup__form"),t._button=t._form.querySelector(".popup__submit-button"),t._buttonText=t._button.textContent,t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this.popup.querySelectorAll(".popup__form-input"),this._inputValues={},this._inputList.forEach((function(t){return e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;P(x(a.prototype),"setEventListeners",this).call(this),this.popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){P(x(a.prototype),"close",this).call(this),this._form.reset()}},{key:"loadingAlert",value:function(e){this._button.textContent=e?"Сохранение...":this._buttonText}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(h);function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t){var n=t.address,r=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=n,this._token=r}var t,n;return t=e,(n=[{key:"_resultResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserProfile",value:function(){return fetch("".concat(this._address,"/users/me"),{method:"GET",headers:{authorization:this._token}}).then(this._resultResponse)}},{key:"getUserCards",value:function(){return fetch("".concat(this._address,"/cards"),{method:"GET",headers:{authorization:this._token}}).then(this._resultResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._resultResponse)}},{key:"setUserProfile",value:function(e){return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._resultResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._resultResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._resultResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then(this._resultResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._resultResponse)}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=V(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},F.apply(this,arguments)}function V(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}function z(e,t){return z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},z(e,t)}function N(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&z(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(r);if(o){var n=M(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmitAction=e}},{key:"setEventListeners",value:function(){var e=this;F(M(a.prototype),"setEventListeners",this).call(this),this.popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitAction()}))}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(h);function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var H,$=new U({address:"https://mesto.nomoreparties.co/v1/cohort-32",token:"d9996a98-2868-4f20-beed-902261c5825b"}),K=new L(".profile__name",".profile__about-me",".profile__main-avatar");Promise.all([$.getUserProfile(),$.getUserCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];H=o,K.setUserInfo(o),W.renderItems(i),console.log(o),console.log(i)})).catch((function(e){console.log(e)}));var Q=function(e){var t=new r({item:e,myInfo:H,cardSelector:".template-photos",handleCardClick:function(e){Y.open(e)},handleDeleteCard:function(e){X.setSubmitAction((function(){$.removeCard(e).then((function(){t.removeCard(),X.close()})).catch((function(){console.log("Ошибка удаления")}))})),X.open()},handleLikeCard:function(){$.addLike(t.getCard()._id).then((function(e){t.handleCardLike(e)})).catch((function(){return console.log("Ошибка работы лайка")}))},handleDeleteLikeCard:function(){$.removeLike(t.getCard()._id).then((function(e){t.handleCardLike(e)})).catch((function(){return console.log("Ошибка работы дизлайка")}))}});return t.createCard()},W=new w({renderer:function(e){Q(e),W.addItemsAppend(Q(e))}},".photos__cards"),X=new J("#popup__delete");X.setEventListeners();var Y=new E("#popup__image");Y.setEventListeners();var Z=new T({modalId:"#popup__edit",handleFormSubmit:function(e){Z.loadingAlert(!0),$.setUserProfile(e).then((function(e){K.setUserInfo(e),Z.close()})).catch((function(e){return console.log(e)})).finally((function(){return Z.loadingAlert(!1)}))}});Z.setEventListeners(),u.open.addEventListener("click",(function(){var e=K.getUserInfo();i.value=e.name,a.value=e.about,Z.open(),re.deactiveButton()}));var ee=new T({modalId:"#popup__add",handleFormSubmit:function(e){ee.loadingAlert(!0),$.addCard(e).then((function(e){var t=Q(e);W.addItemsPrepend(t),ee.close()})).catch((function(e){return console.log(e)})).finally((function(){return ee.loadingAlert(!1)}))}});ee.setEventListeners(),s.open.addEventListener("click",(function(){ee.open(),ne.deactiveButton()}));var te=new T({modalId:"#popup__avatar",handleFormSubmit:function(e){te.loadingAlert(!0),$.editAvatar(e).then((function(e){K.setUserInfo(e),te.close()})).catch((function(e){return console.log(e)})).finally((function(){return te.loadingAlert(!1)}))}});te.setEventListeners(),c.open.addEventListener("click",(function(){te.open(),oe.deactiveButton()}));var ne=new p(o,ee);ne.enableValidation();var re=new p(o,Z);re.enableValidation();var oe=new p(o,te);oe.enableValidation()})()})();