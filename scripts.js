function printResume() {
    window.print();
}

function downloadPDF() {
    const element = document.querySelector('.resume');
    html2pdf()
        .from(element)
        .save('resume.pdf');
}
