const observer = new IntersectionObserver((entries) => {
    //this callback function runs whenever the observed element enters or exits the viewport
    entries.forEach(entry => {
        const video = document.getElementById('scroll-video');
        if (entry.isIntersecting) {
            video.play(); //plays video when in view
        }
        else {
            video.pause(); //pause the video when out of view
        }
    });
});

observer.observe(document.getElementById('scroll-video'));
//observes the video element