


let tipCalculator = () =>{
	
	let splitValue = parseInt(document.querySelector('.customers .value').innerHTML);
	let amountInput = document.querySelector('#bill');
	let sliderValueNd = document.querySelector('input[type=range]').value;
	amountInput.onblur = ()=>{
		calcTip(sliderValueNd)
	}

	let tipAmount;

	
	function calcTip(sliderValue) {
		let fee = document.querySelector('#bill').value;
		let tipAmount = ((fee/splitValue) * (sliderValue/100))
		tipAmount = tipAmount.toPrecision(4)
		let tipFee;
		tipFee = `$${tipAmount}`;
		document.querySelector('.tip-fee').innerHTML = tipFee;
	}

	let cal = (n)=>{
		
		if(n > 0){
			splitValue ++
		}
		else
		{
			splitValue --
		}
		
		document.querySelector('.customers .value').innerHTML = splitValue;
	}

	let addBtn = document.querySelector('.increase');
	addBtn.addEventListener('click', ()=>{
		cal(1);
		calcTip(sliderValueNd)
	})
	let subBtn = document.querySelector('.decrease');
	subBtn.addEventListener('click', ()=>{
		cal(0)
		calcTip(sliderValueNd)
	})

	let updateTipValue = ()=>{
		let tipValue = '%';
		document.querySelector('input[type=range]').addEventListener('change', ()=>{
		let sliderValue = document.querySelector('input[type=range]').value;
		sliderValueNd = sliderValue;
		document.querySelector('.tip-percent').innerHTML = `${sliderValue}${tipValue}`;
		calcTip(sliderValue);
		})
	}

	updateTipValue()

	
}

tipCalculator();