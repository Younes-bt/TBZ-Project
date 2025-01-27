document.addEventListener('DOMContentLoaded', function () { 
    const episode1 = document.getElementById('episod1');
    const episode1Video = document.getElementById('episode1-video');
    const episode2 = document.getElementById('episode2');
    const episode2Video = document.getElementById('episode2-video');
    const episode3 = document.getElementById('episode3');
    const episode3Video = document.getElementById('episode3-video');
    const episode4 = document.getElementById('episode4');
    const episode4Video = document.getElementById('episode4-video');
    const episode5 = document.getElementById('episode5');
    const episode5Video = document.getElementById('episode5-video');
    const episode6 = document.getElementById('episode6');
    const episode6Video = document.getElementById('episode6-video');

    episode1.addEventListener('click', function() { 
        episode1Video.style.display = 'flex';
        episode2Video.style.display = 'none'
        episode3Video.style.display = 'none'
        episode4Video.style.display = 'none'
        episode5Video.style.display = 'none'
        episode6Video.style.display = 'none'
    });

    episode2.addEventListener('click', function() { 
        episode1Video.style.display = 'none';
        episode2Video.style.display = 'flex'
        episode3Video.style.display = 'none'
        episode4Video.style.display = 'none'
        episode5Video.style.display = 'none'
        episode6Video.style.display = 'none'
    });
    episode3.addEventListener('click', function() { 
        episode1Video.style.display = 'none'
        episode2Video.style.display = 'none'
        episode3Video.style.display = 'flex'
        episode4Video.style.display = 'none'
        episode5Video.style.display = 'none'
        episode6Video.style.display = 'none'
    });
    episode4.addEventListener('click', function() { 
        episode1Video.style.display = 'none'
        episode2Video.style.display = 'none'
        episode3Video.style.display = 'none'
        episode4Video.style.display = 'flex'
        episode5Video.style.display = 'none'
        episode6Video.style.display = 'none'
    });
    episode5.addEventListener('click', function() { 
        episode1Video.style.display = 'none'
        episode2Video.style.display = 'none'
        episode3Video.style.display = 'none'
        episode4Video.style.display = 'none'
        episode5Video.style.display = 'flex'
        episode6Video.style.display = 'none'
    });
    episode6.addEventListener('click', function() { 
        episode1Video.style.display = 'none'
        episode2Video.style.display = 'none'
        episode3Video.style.display = 'none'
        episode4Video.style.display = 'none'
        episode5Video.style.display = 'none'
        episode6Video.style.display = 'flex'
    });
})