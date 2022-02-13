const $keys = document.querySelectorAll('.keys')

const playNote = (e) => {
    const audioCode = e.type === 'keydown' ? e.keyCode : e.target.dataset.key;

    const $key = 
    document.querySelector(`.key[data-key="${audioCode}"]`)
    
    if(!$key) return
    
    const $audio = 
    document.querySelector(`audio[data-key="${audioCode}"]`)
        
    $key.classList.add('playing')
    $audio.currentTime = 0
    $audio.play()
}

const registerEvents = () => {
    $keys.forEach(key => {
        key.addEventListener('click', playNote)
        key.addEventListener('transitionend', (e) => {
            // event for when a transition ends
            e.target.classList.remove('playing')
        })
    })
    window.addEventListener('keydown', playNote)
}

registerEvents()