$(document).ready(() => {

    const mString = "The Matrix has you...."
    const rString = "Follow the White Rabbit...."
    const uString = "www.whatisthematrix.com"
    let mCounter = 0;
    let rCounter = 0;
    let dotCounter = 0;
    let uCounter = 0;

    $('#rButton').hide();

    function typeSelector() {
        if (mCounter < mString.length) {
            typeWriter1();
        }
        else {
            typeWriter2();
        }
    }

    function typeWriter1() {

        if (mCounter < mString.length) {
            document.getElementById("matrix").innerHTML += mString.charAt(mCounter);
            mCounter++;
            setTimeout(typeWriter1, 80);
            console.log(`code ran ${mCounter} times`);
        }
    }

    function typeWriter2() {

        if (rCounter < rString.length) {
            document.getElementById("rabbit").innerHTML += rString.charAt(rCounter);
            rCounter++;
            setTimeout(typeWriter2, 80);
            console.log(`code ran ${rCounter} times`);
        }
    }

    function typeWriter3() {
        console.log('url incoming');
        if (uCounter < uString.length) {
            document.getElementById("matrixURL").innerHTML += uString.charAt(uCounter);
            uCounter++;
            setTimeout(typeWriter3, 90);
            console.log(`code ran ${uCounter} times`);
        }
    }
    
    function buttonElipses() {
        if (dotCounter < 4) {
            document.getElementById("qButton").innerHTML += ".";
            dotCounter++;
            setTimeout(buttonElipses, 800);
        }
    }

    function buttonConjure() {
        $('#rButton').fadeIn(3000);
    }

    function vanishingAct() {
        $('.div1').fadeOut(2000);
        $('.div2').delay(2000).fadeOut(2000);
        $('.div3').delay(4000).fadeOut(2000);
        $('.div4').delay(6000).fadeOut(2000);
        setTimeout(typeWriter3, 8000);
    }

    $('#matrix').on('mouseleave', buttonElipses);
    $('#qButton').on('click', typeSelector);
    $('#rabbit').on('mouseleave', buttonConjure);
    $('#rButton').on('click', vanishingAct);
});