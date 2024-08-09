// To include the footer and nav bar in each web page automatically

function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');

    elements.forEach(async (element) => {
        const file = element.getAttribute('data-include');

        if (file) {
            try {
                const response = await fetch(file);

                if (response.ok) {
                    element.innerHTML = await response.text();
                }

                else {
                    element.innerHTML = "Page not found." ;
                }
            }

            catch (error) {
                element.innerHTML =" Error loading content.";
                console.error('Error fetching the file:', error);
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', includeHTML);