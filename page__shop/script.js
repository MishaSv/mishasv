/*accordeon feedback*/

const accordeonBox     = document.querySelector('.feedback__title_box');
const accordeonContent = document.querySelector('.accordeon');
const accordeonArrow   = document.querySelector('.feedback__arrow');

accordeonBox.addEventListener("click", function(){
	accordeonContent.classList.toggle('accordeon--active');
	accordeonArrow.classList.toggle('accordeon__Arrow--active');

});

/*accordeon feedback*/


// mobile__menu

const menuClose = document.querySelector('.mobile__menu__img');
const menuPanel = document.querySelector('.menu__dots');
const menuBody  = document.querySelector('.header__mobile');


menuPanel.addEventListener('click', function(){
	menuBody.style.display = 'block';
})

menuClose.addEventListener('click', function(){
	menuBody.style.display = 'none';
})
// mobile__menu


// SHowMoreComment
const btnSHowMoreComment  = document.querySelector('.comment__btn_showMore');
const commentHiddenItems  = document.querySelectorAll('.comment__hidden');

btnSHowMoreComment.addEventListener('click', function(){
	commentHiddenItems.forEach(function(item){
		item.style.display = 'block';
	})
});
// SHowMoreComment




// stars__raiting
document.addEventListener("click", (event) => {
  if (event.target.dataset.itemValue) {
    const { itemValue } = event.target.dataset;
    event.target.parentNode.dataset.totalValue = itemValue;
  }
});
// stars__raiting

const input  = document.querySelector('.feedback__textarea');

input.addEventListener('click', function(){
	input.value = '';
})