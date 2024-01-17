// Inputs:
const repoUser = document.querySelector('input#repo-user').value;
const repoName = document.querySelector('input#repo-name').value;
// URL's:
const apiURL = `https://api.github.com/repos/${repoUser}/${repoName}/tarball/master`;
const legacyURL = `https://github.com/${repoUser}/${repoName}/tarball/master`;
// Button event:
const button = document.querySelector('button');
button.onclick = function() {
    window.open(legacyURL);
}
// About anchor:
document.querySelector('footer')
.children[1]
.onclick = function() { 
    alert("Em construção... 🏗️"); 
}