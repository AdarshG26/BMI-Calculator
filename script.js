const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please enter valid height";
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please enter valid weight";
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2) 
        result.innerHTML = `[<span>${bmi}</span>]`

        const uw = document.querySelector('#uw');
        const nm = document.querySelector('#nm');
        const ow = document.querySelector('#ow');
        if(bmi >= 0 && bmi < 18.6){
            uw.style.backgroundColor = 'rgb(0, 211, 0)';
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            nm.style.backgroundColor = 'rgb(0, 211, 0)';
        }
        else if(bmi > 24.9){
            ow.style.backgroundColor = 'rgb(0, 211, 0)';
        }
    }
})
