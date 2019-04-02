const $sliderPrev = document.querySelector('.slider-prev'),
$sliderNext = document.querySelector('.slider-next'),
$sliderItem = document.querySelectorAll('.slider-item'),
$controller = document.querySelector('.controller');
// Slider Vars
var sliderItemCount = $sliderItem.length - 1,
SliderNow = 0,
SliderNP = 0,
SliderIndex = 0,
// Create Controller bar
controllerIndex = 0,
controllerBar,
sliderAutoPlay = setInterval(showNextSlider, 5000);

for(let i of $sliderItem) {
	if (controllerIndex == 0) {
		controllerBar = "<a href='javascript:void(0)' class='controller-bar controller-active' data-index='" + controllerIndex + "'><span class='controller-icon'></span></a>";
	}else {
		controllerBar = "<a href='javascript:void(0)' class='controller-bar' data-index='" + controllerIndex + "'><span class='controller-icon'></span></a>";
	}
	$controller.innerHTML += controllerBar;
	controllerIndex++;
}

const $controllerBar = document.querySelectorAll('.controller-bar');

$sliderNext.addEventListener('click', showNextSlider);
$sliderPrev.addEventListener('click', showPrevSlider);
for (let i of $controllerBar) {
	i.addEventListener('click', controllerSlider);
}

function showNextSlider(){
	if (!$sliderItem[SliderNow].classList.contains('slider-marker')) {
		if (SliderNow == sliderItemCount) {
			SliderNP = 0;
		}else {
			SliderNP = SliderNow + 1;
		}
		$sliderItem[SliderNow].classList.add('slider-marker');
		$sliderItem[SliderNP].classList.add('slider-item-next');
		setTimeout(()=>{
			$sliderItem[SliderNow].classList.add('slider-item-left');
			$sliderItem[SliderNP].classList.add('slider-item-left');
			$controllerBar[SliderNow].classList.remove('controller-active');
			$controllerBar[SliderNP].classList.add('controller-active');
		}, 100);
		setTimeout(()=>{
			$sliderItem[SliderNP].classList.add('slider-active');
			$sliderItem[SliderNP].classList.remove('slider-item-next', 'slider-item-left');
			$sliderItem[SliderNow].classList.remove('slider-active', 'slider-item-left', 'slider-marker');
			if(SliderNow == sliderItemCount){
				SliderNow = 0;
			}else {
				SliderNow++;
			}
			clearInterval(sliderAutoPlay);
			sliderAutoPlay = setInterval(showNextSlider, 5000);
		}, 700);
	}
}

function showPrevSlider(){
	if (!$sliderItem[SliderNow].classList.contains('slider-marker')) {
		if (SliderNow == 0) {
			SliderNP = sliderItemCount;
		}else {
			SliderNP = SliderNow - 1;
		}
		$sliderItem[SliderNow].classList.add('slider-marker');
		$sliderItem[SliderNP].classList.add('slider-item-prev');
		setTimeout(()=>{
			$sliderItem[SliderNow].classList.add('slider-item-right');
			$sliderItem[SliderNP].classList.add('slider-item-right');
			$controllerBar[SliderNow].classList.remove('controller-active');
			$controllerBar[SliderNP].classList.add('controller-active');
		}, 100);
		setTimeout(()=>{
			$sliderItem[SliderNP].classList.add('slider-active');
			$sliderItem[SliderNP].classList.remove('slider-item-prev', 'slider-item-right');
			$sliderItem[SliderNow].classList.remove('slider-active', 'slider-item-right', 'slider-marker');
			if(SliderNow == 0){
				SliderNow = sliderItemCount;
			}else {
				SliderNow--;
			}
			clearInterval(sliderAutoPlay);
			sliderAutoPlay = setInterval(showNextSlider, 5000);
		}, 700);
	}
}

function controllerSlider() {
	if (!$sliderItem[SliderNow].classList.contains('slider-marker')) {
		SliderIndex = parseInt(this.dataset.index);
		if (SliderNow != SliderIndex && SliderNow  < SliderIndex) {
			$sliderItem[SliderNow].classList.add('slider-marker');
			$sliderItem[SliderIndex].classList.add('slider-item-next');
			setTimeout(()=>{
				$sliderItem[SliderNow].classList.add('slider-item-left');
				$sliderItem[SliderIndex].classList.add('slider-item-left');
				$controllerBar[SliderNow].classList.remove('controller-active');
				$controllerBar[SliderIndex].classList.add('controller-active');
			}, 100);
			setTimeout(()=>{
				$sliderItem[SliderIndex].classList.add('slider-active');
				$sliderItem[SliderIndex].classList.remove('slider-item-next', 'slider-item-left');
				$sliderItem[SliderNow].classList.remove('slider-active', 'slider-item-left', 'slider-marker');
				SliderNow = SliderIndex;
				clearInterval(sliderAutoPlay);
				sliderAutoPlay = setInterval(showNextSlider, 5000);
			}, 700);
		}else if(SliderNow != SliderIndex && SliderNow  > SliderIndex) {
			$sliderItem[SliderNow].classList.add('slider-marker');
			$sliderItem[SliderIndex].classList.add('slider-item-prev');
			setTimeout(()=>{
				$sliderItem[SliderNow].classList.add('slider-item-right');
				$sliderItem[SliderIndex].classList.add('slider-item-right');
				$controllerBar[SliderNow].classList.remove('controller-active');
				$controllerBar[SliderIndex].classList.add('controller-active');
			}, 100);
			setTimeout(()=>{
				$sliderItem[SliderIndex].classList.add('slider-active');
				$sliderItem[SliderIndex].classList.remove('slider-item-prev', 'slider-item-right');
				$sliderItem[SliderNow].classList.remove('slider-active', 'slider-item-right', 'slider-marker');
				SliderNow = SliderIndex;
				clearInterval(sliderAutoPlay);
				sliderAutoPlay = setInterval(showNextSlider, 5000);
			}, 700);
		}
	}
}