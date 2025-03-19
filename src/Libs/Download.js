const Download = () => {
    const link = document.createElement("a");
    link.href = "https://www.dropbox.com/scl/fi/z5akqnezotc27beig73cf/BASHEER_EJIWUMI_-MY-CV-2.pdf?rlkey=kj2sfo9indwmusld3jyeh6i13&st=s0o0keh2&dl=1"; // Note the change from dl=0 to dl=1
    // link.href = "https://www.dropbox.com/scl/fi/dfwwp72657jr9p98nippm/OSENI-WASIU-ADEBAYO.docx?rlkey=jvxmz23q44nqbma0fmftjinjv&st=dno1k44a&dl=1"
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default Download;