var sections = document.querySelectorAll('.section');
var buttons = document.querySelectorAll('nav button');
buttons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        sections.forEach(function (section, sectionIndex) {
            var sectionElement = section; // Typecasting to HTMLElement
            if (index === sectionIndex) {
                sectionElement.style.display = 'block';
            }
            else {
                sectionElement.style.display = 'none';
            }
        });
    });
});
