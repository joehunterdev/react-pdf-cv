
//About block
const about = JSON.stringify($('#about .col-lg-8').find('p:first').html());
// console.log(JSON.stringify(about));

const contactDetails = [];

$('#about .col-lg-4').find('.row').each(function () {
    const text = $(this).text().trim();
    if (text.includes(':')) {
        const [key, value] = text.split(':');
        contactDetails.push({
            [key.trim()]: value.trim().replace("+", "")
        });
    }
});

//Experiences block
const experiences = [];
// const experiences['summary'] = [];

$('#experience .card-flex').each(function () {
    const experience = {};
    experience.dates = $(this).find('small').text().trim();
    experience.title = $(this).find('h2').text().trim();
    experience.company = $(this).find('h3').text().trim();
    experience.description = JSON.stringify($(this).find('p:nth-of-type(1)').html().trim());
    // experience.description.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    experience.summary = { design: [], solutions: [], management: [] }; // initialize as empty array

    $(this).find('.col-lg-4:nth-of-type(1) ul li').each(function (index) {
        experience.summary.design.push($(this).text());
    });
    $(this).find('.col-lg-4:nth-of-type(2) ul li').each(function (index) {
        experience.summary.solutions.push($(this).text());
    });
    $(this).find('.col-lg-4:nth-of-type(3) ul li').each(function (index) {
        experience.summary.management.push($(this).text());
    });

    experiences.push(experience);

});

//Education block
const educations = [];
$('#education .card-flex .col-lg-4').each(function () {
    const education = {};

    education.dates = $(this).find('p').text().trim();
    education.titled = $(this).find('h4').text().replace(':', "").trim();
    education.awarded = [];

    $(this).find('ul li').each(function (index) {
        education.awarded.push($(this).text());
    });

    educations.push(education);
});

//output
const output = {
    about,
    contactDetails,
    experiences,
    educations
};

console.log(JSON.stringify(output, null, 2))
