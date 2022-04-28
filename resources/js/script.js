const p01 = {
    year: 2022, 
    title:'Git Practice', 
    description: 'Learn basics of git and set up first remote repository in Github',
    builtWith: ['Git'],
    link: 'https://github.com/sgondela/git_practice'
};

const p02 = {
    year: 2022, 
    title:'Mixed Messages', 
    description: 'JavaScript-based message generator program that produces a randomized Batman joke',
    builtWith: ['JavaScript', 'Node.js', 'Git'],
    link: 'https://github.com/sgondela/git_practice'
};

const p03 = {
    year: 2022, 
    title:'Dasmoto\'s Arts and Crafts', 
    description: 'Static webpage for a fictitious arts and crafts store based on design spec',
    builtWith: ['HTML', 'CSS', 'Git'],
    link: 'https://github.com/sgondela/dasmotos-arts-and-crafts'
};

const p04 = {
    year: 2022, 
    title:'Excursion', 
    description: 'Static landing page for a fictitious mobile app based on design spec',
    builtWith: ['HTML', 'CSS', 'Git'],
    link: 'https://github.com/sgondela/excursion'
};

const p05 = {
    year: 2022, 
    title:'Fotomatic', 
    description: 'Debugged responsive webpage for a ficticious product based on design spec',
    builtWith: ['HTML', 'CSS', 'Git'],
    link: 'https://github.com/sgondela/fotomatic'
};

const p06 = {
    year: 2022, 
    title:'Tea Cozy', 
    description: 'Basic responsive webpage for ficticious local shop based on design spec',
    builtWith: ['HTML', 'CSS', 'Git'],
    link: 'https://github.com/sgondela/tea-cozy'
};

const p07 = {
    year: 2022, 
    title:'Website Design System', 
    description: 'Webpage presenting a demo style guide using relative measurements in CSS',
    builtWith: ['HTML', 'CSS', 'Git'],
    link: 'https://github.com/sgondela/tea-cozy'
};

const p08 = {
    year: 2022, 
    title:'CTC Aero Homepage Demo', 
    description: 'Homepage redesign prototype using CSS Flexbox and CSS Grid',
    builtWith: ['HTML', 'CSS', 'Javascript', 'Git'],
    link: 'https://github.com/sgondela/ctcaero-homepage-demo'
};

const p09 = {
    year: 2022, 
    title:'Personal Portfolio Website', 
    description: 'Website to showcase coding projects, leveraging JavaScript and achieving WCAG compliance',
    builtWith: ['HTML', 'CSS', 'Javascript', 'Git'],
    link: 'https://sgondela.github.io'
};

// Add new projects above, then add to array below //

const projects = [p01, p02, p03, p04, p05, p06, p07, p08, p09];

const svgContent = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img" class="icon external" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M 18 13 v 6 a 2 2 0 0 1 -2 2 H 5 a 2 2 0 0 1 -2 -2 V 8 a 2 2 0 0 1 2 -2 h 6" /><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg';

function addProjectData() {
    for (const project of projects) {
     /*   document.querySelector('tbody').append(`<tr><td>${project.year}</td><td>${project.title}</td><td>${project.description}</td><td>${project.builtWith}</td><td><a href="${project.link}" ${svgContent}</a></td>`); */
     //return '<tr><td>' + project.year + '</td><td>' + project.title + '</td><td>' + project.description + '</td><td>' + project.builtWith + '</td><td><a href="' + project.link + '" ' + svgContent + '</a></td>';
    return project.year;
    };
};

//document.addEventListener('load', addProjectData);

console.log(addProjectData);