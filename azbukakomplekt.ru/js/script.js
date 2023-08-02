const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('menu__body')) {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		}
	})

	menu.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}

/*===========================================*/

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
      spaceBetween: 30,
	  speed: 1000,
      loop: true,
	// centeredSlides: true,
	autoplay: {
	  delay: 4000
	}
  });

  /*===================Форма========================*/

  let inputs = document.querySelectorAll('.input__file');
    Array.prototype.forEach.call(inputs, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.input__file-button-text').innerText;
  
      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
  
        if (countFiles)
          label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
        else
          label.querySelector('.input__file-button-text').innerText = labelVal;
      });
    });


  $(function() {
	document.getElementById('ajax-contact-form').addEventListener('submit', function(evt){
	  var http = new XMLHttpRequest(), f = this;
	  var th = $(this);
	  evt.preventDefault();
	  http.open("POST", "contact.php", true);
	  http.onreadystatechange = function() {
		if (http.readyState == 4 && http.status == 200) {
		  alert(http.responseText);
		  if (http.responseText.indexOf(f.nameFF.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
			th.trigger("reset");
		  }
		}
	  }
	  http.onerror = function() {
		alert('Ошибка, попробуйте еще раз');
	  }
	  http.send(new FormData(f));
	}, false);
   
  });

