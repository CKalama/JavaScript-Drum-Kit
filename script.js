//Trying to listen on a window.event.
    //keydown is used to signify when a user clicks a button on keyboard 
    window.addEventListener('keydown', function(e) {
        //console.log(e.keyCode);
        //We need an audio element that has a data-key
        //querySelector will grab an HTML element on the HTML, rememember to use `` when $ is there
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
        //console.log(audio);
        if(!audio) return; //Stops the function all together
        audio.currentTime = 0; //rewinds to the start;
        //We can use JS to play the Element. Note how without above code, the sound has to finish before you can hit it again
        audio.play();
        //console.log(key);
        key.classList.add('playing');
    });

    //Creating function to remove the transition
    function removeTransition(e) {
        if(e.propertyName !== 'transform') return; //Skip it if its not a transform
        console.log(e.propertyName);

        this.classList.remove('playing');
    }

    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));