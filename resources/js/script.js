const updateCopyright = () => {
    const thisYear = new Date().getFullYear();
    document.getElementById('copyright') = `Copyright &copy; ${thisYear} Sarah Gondela. All rights reserved.`
}

document.addEventListener('load', updateCopyright);