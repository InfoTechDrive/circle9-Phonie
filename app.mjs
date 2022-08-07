function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!

  const input = document.querySelector('#input-field');
  const check = document.querySelector('#check-btn');
  const image = document.createElement('img');
  const para = document.querySelector('#alert-message');
  const submit = document.querySelector('#submit');

check.addEventListener('click', checkNetwork);
submit.addEventListener('click', function() {
    if (input.value === '') {
        input.placeholder = 'Kindly input your number';
    } else if (input.value.length < 11) {
        para.textContent = 'Your number is less than 11 digits...a valid number should be 11 digits if it starts with 0 and 14 digits if it starts with +';
    } else if (input.value.length === 12 || input.value.length === 13) {
        para.textContent = 'Your number is more than 11 digits...a valid number should be 11 digits if it starts with 0 and 14 digits if it starts with +';
    } else if (input.value.length === 11 || input.value.length === 14) {
        return;
    } else {
        para.textContent = 'Your number is more than 14 digits...a valid number should be 11 digits if it starts with 0 and 14 digits if it starts with +';
    }
 });

function checkNetwork() {
    if (input.value.length === 11 || input.value.length === 14) {

        if (input.value.startsWith('0803') || 
            input.value.startsWith('0806') || 
            input.value.startsWith('0703') || 
            input.value.startsWith('0706') || 
            input.value.startsWith('0810') ||
            input.value.startsWith('0813') ||
            input.value.startsWith('0814') ||
            input.value.startsWith('0816') ||
            input.value.startsWith('0903') ||
            input.value.startsWith('0906') ||
            input.value.startsWith('+234803') || 
            input.value.startsWith('+234806') || 
            input.value.startsWith('+234703') || 
            input.value.startsWith('+234706') || 
            input.value.startsWith('+234810') ||
            input.value.startsWith('+234813') ||
            input.value.startsWith('+234814') ||
            input.value.startsWith('+234816') ||
            input.value.startsWith('+234903') ||
            input.value.startsWith('+234906')) {

                image.src = './images/mtn-logo.png';
                image.setAttribute('style', 'width: 100px; height: 100px; margin-top: 20px; border-radius: 10px');
                para.textContent = 'Your number belongs to : ';
                para.appendChild(image);

        } else if (input.value.startsWith('0805') ||
            input.value.startsWith('0807') ||
            input.value.startsWith('0811') ||
            input.value.startsWith('0705') ||
            input.value.startsWith('0815') ||
            input.value.startsWith('0905') ||
            input.value.startsWith('+234805') ||
            input.value.startsWith('+234807') ||
            input.value.startsWith('+234811') ||
            input.value.startsWith('+234705') ||
            input.value.startsWith('+234815') ||
            input.value.startsWith('+234905')) {

                image.src = './images/glo-logo.jpg';
                image.setAttribute('style', 'width: 100px; height: 100px; margin-top: 20px; border-radius: 10px');
                para.textContent = 'Your number belongs to : ';
                para.appendChild(image);

        } else if (input.value.startsWith('0802') ||
            input.value.startsWith('0808') ||
            input.value.startsWith('0812') ||
            input.value.startsWith('0701') ||
            input.value.startsWith('0708') ||
            input.value.startsWith('0902') ||
            input.value.startsWith('0907') ||
            input.value.startsWith('0901') ||
            input.value.startsWith('+234802') ||
            input.value.startsWith('+234808') ||
            input.value.startsWith('+234812') ||
            input.value.startsWith('+234701') ||
            input.value.startsWith('+234708') ||
            input.value.startsWith('+234902') ||
            input.value.startsWith('+234907') ||
            input.value.startsWith('+234901')) {

                image.src = './images/airtel-logo.png';
                image.setAttribute('style', 'width: 100px; height: 100px; margin-top: 20px; border-radius: 10px');
                para.textContent = 'Your number belongs to : ';
                para.appendChild(image);

        } else if (input.value.startsWith('0809') ||
            input.value.startsWith('0818') ||
            input.value.startsWith('0817') ||
            input.value.startsWith('0908') ||
            input.value.startsWith('0909') ||
            input.value.startsWith('+234809') ||
            input.value.startsWith('+234818') ||
            input.value.startsWith('+234817') ||
            input.value.startsWith('+234908') ||
            input.value.startsWith('+234909')) {

                image.src = './images/9mobile-logo.jpg';
                image.setAttribute('style', 'width: 100px; height: 100px; margin-top: 20px; border-radius: 10px');
                para.textContent = 'Your number belongs to : ';
                para.appendChild(image);

        } else if (input.value.startsWith('0804') ||
            input.value.startsWith('+234804')) {

                image.src = './images/ntel-logo.png';
                image.setAttribute('style', 'width: 100px; height: 100px; margin-top: 20px; border-radius: 10px');
                para.textContent = 'Your number belongs to : ';
                para.appendChild(image);

        } else if (input.value.startsWith('0702') ||
            input.value.startsWith('+234702')) {

                image.src = './images/smile-logo.jpg';
                image.setAttribute('style', 'width: 100px; height: 100px; margin-top: 20px; border-radius: 10px');
                para.textContent = 'Your number belong to : ';
                para.appendChild(image);

        } else {
            para.textContent = 'Your number does not belong to any network provider in Nigeria';
        }

    } else if (input.value === '') {
        input.placeholder = `What's your number`
    } else if (input.value.length < 11) {
        para.textContent = 'Your number is less than 11 digits...a valid number should be 11 digits if it starts with 0 and 14 digits if it starts with +';
    } else if (input.value.length === 12 || input.value.length === 13) {
        para.textContent = 'Your number is more than 11 digits...a number should be 11 digits if it starts with 0 and 14 digits if it starts with +';
    }  else  {
        para.textContent = 'Your number is more than 14 digits...a valid number should be 11 digits if it starts with 0 and 14 digits if it starts with +';
    }

};
};

  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //