const $sliderPrev = document.querySelector('.slider-prev'),
$sliderNext = document.querySelector('.slider-next'),
$sliderItem = document.querySelectorAll('.slider-item'),
$controllerBar = document.querySelectorAll('.controller-bar');
var sliderItemCount = $sliderItem.length - 1,
countSliderNow = 0,
countSlider = 0,
index = 0,
sliderAutoPlay = setInterval(showNextSlider, 5000);

$sliderNext.addEventListener('click', showNextSlider);
$sliderPrev.addEventListener('click', showPrevSlider);
for (let i of $controllerBar) {
	i.addEventListener('click', controllerSlider);
}

function showNextSlider(){
	if (!$sliderItem[countSliderNow].classList.contains('slider-marker')) {
		if (countSliderNow == sliderItemCount) {
			countSlider = 0;
		}else {
			countSlider = countSliderNow + 1;
		}
		$sliderItem[countSliderNow].classList.add('slider-marker');
		$sliderItem[countSlider].classList.add('slider-item-next');
		setTimeout(()=>{
			$sliderItem[countSliderNow].classList.add('slider-item-left');
			$sliderItem[countSlider].classList.add('slider-item-left');
			$controllerBar[countSliderNow].classList.remove('controller-active');
			$controllerBar[countSlider].classList.add('controller-active');
		}, 100);
		setTimeout(()=>{
			$sliderItem[countSlider].classList.add('slider-active');
			$sliderItem[countSlider].classList.remove('slider-item-next', 'slider-item-left');
			$sliderItem[countSliderNow].classList.remove('slider-active', 'slider-item-left', 'slider-marker');
			if(countSliderNow == sliderItemCount){
				countSliderNow = 0;
			}else {
				countSliderNow++;
			}
			clearInterval(sliderAutoPlay);
			sliderAutoPlay = setInterval(showNextSlider, 5000);
		}, 700);
	}
}

function showPrevSlider(){
	if (!$sliderItem[countSliderNow].classList.contains('slider-marker')) {
		if (countSliderNow == 0) {
			countSlider = sliderItemCount;
		}else {
			countSlider = countSliderNow - 1;
		}
		$sliderItem[countSliderNow].classList.add('slider-marker');
		$sliderItem[countSlider].classList.add('slider-item-prev');
		setTimeout(()=>{
			$sliderItem[countSliderNow].classList.add('slider-item-right');
			$sliderItem[countSlider].classList.add('slider-item-right');
			$controllerBar[countSliderNow].classList.remove('controller-active');
			$controllerBar[countSlider].classList.add('controller-active');
		}, 100);
		setTimeout(()=>{
			$sliderItem[countSlider].classList.add('slider-active');
			$sliderItem[countSlider].classList.remove('slider-item-prev', 'slider-item-right');
			$sliderItem[countSliderNow].classList.remove('slider-active', 'slider-item-right', 'slider-marker');
			if(countSliderNow == 0){
				countSliderNow = sliderItemCount;
			}else {
				countSliderNow--;
			}
			clearInterval(sliderAutoPlay);
			sliderAutoPlay = setInterval(showNextSlider, 5000);
		}, 700);
	}
}

function controllerSlider() {
	if (!$sliderItem[countSliderNow].classList.contains('slider-marker')) {
		index = parseInt(this.dataset.index);
		if (countSliderNow != index && countSliderNow  < index) {
			$sliderItem[countSliderNow].classList.add('slider-marker');
			$sliderItem[index].classList.add('slider-item-next');
			setTimeout(()=>{
				$sliderItem[countSliderNow].classList.add('slider-item-left');
				$sliderItem[index].classList.add('slider-item-left');
				$controllerBar[countSliderNow].classList.remove('controller-active');
				$controllerBar[index].classList.add('controller-active');
			}, 100);
			setTimeout(()=>{
				$sliderItem[index].classList.add('slider-active');
				$sliderItem[index].classList.remove('slider-item-next', 'slider-item-left');
				$sliderItem[countSliderNow].classList.remove('slider-active', 'slider-item-left', 'slider-marker');
				countSliderNow = index;
				clearInterval(sliderAutoPlay);
				sliderAutoPlay = setInterval(showNextSlider, 5000);
			}, 700);
		}else if(countSliderNow != index && countSliderNow  > index) {
			$sliderItem[countSliderNow].classList.add('slider-marker');
			$sliderItem[index].classList.add('slider-item-prev');
			setTimeout(()=>{
				$sliderItem[countSliderNow].classList.add('slider-item-right');
				$sliderItem[index].classList.add('slider-item-right');
				$controllerBar[countSliderNow].classList.remove('controller-active');
				$controllerBar[index].classList.add('controller-active');
			}, 100);
			setTimeout(()=>{
				$sliderItem[index].classList.add('slider-active');
				$sliderItem[index].classList.remove('slider-item-prev', 'slider-item-right');
				$sliderItem[countSliderNow].classList.remove('slider-active', 'slider-item-right', 'slider-marker');
				countSliderNow = index;
				clearInterval(sliderAutoPlay);
				sliderAutoPlay = setInterval(showNextSlider, 5000);
			}, 700);
		}
	}
}