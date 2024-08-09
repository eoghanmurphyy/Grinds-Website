document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('h2 span, .about, .information, .studentreviews a, .team, .separator, .videos, .articles, .hear, .comments, .courses, .img1, .img2, .items, .about__achievements-right h2, .achievement__card1, .achievement__card2, .achievement__card3');

    const isVisible = (elem) => {
        const rect = elem.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && rect.bottom > 0
        );
    };

    const handleScroll = () => {
        elements.forEach((element) => {
            if (isVisible(element)) {
                element.classList.add('visible');
            }
        });
    };

    //Run on scroll
    window.addEventListener('scroll', handleScroll);
    //Run on page load
    handleScroll();
});