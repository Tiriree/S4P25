
//link to spreadsheet:
// https://docs.google.com/spreadsheets/d/1XsF_SFongEqACoIJha3hijCFmLdijyfJPAZdPn5roD8/edit?usp=sharing
// let url="https://docs.google.com/spreadsheets/d/e/2PACX-1vRDPJmwmnOI18TLWS1XU5Zp1kWhruL4HcLyTsjVU1PpjgSf7id0Apirre5RsFoRTk7tyS1gXcNRfnxw/pub?output=csv"
let url="https://docs.google.com/spreadsheets/d/e/2PACX-1vRcbLkwohWygIkGtgN8bSFiFSvQ9cEgotSlxFM7cth79qGonkJP8vlG0qsLsNWMcp5RA8lN14C812ly/pub?gid=1237870800&single=true&output=tsv"
// let url="https://docs.google.com/spreadsheets/d/e/2PACX-1vRDPJmwmnOI18TLWS1XU5Zp1kWhruL4HcLyTsjVU1PpjgSf7id0Apirre5RsFoRTk7tyS1gXcNRfnxw/pub?gid=0&single=true&output=tsv"
let data;
let originalAboutText = document.getElementById('about-text').innerHTML;

// Load the CSV file
fetch(url)
    .then(response => response.text())
    .then(csvText => {
        // Split CSV text into lines (rows)
        const rows = csvText.split('\n');

        // Process each row
        data = rows.map(row => {
        // Split each row by comma (you might need a more robust parser if your CSV has commas inside quotes)
        return row.split('\t');//tab separated
        // return row.split(',');//comma separated
    });

    // Now `data` is an array of arrays, where each sub-array is a row of CSV data.
    console.log(data);
    updateText();
})
.catch(error => {
    console.error('Error loading CSV:', error);
});

function updateText(){
    let projectList = document.getElementById('project-list');
    // Clear existing list items
    projectList.innerHTML = '';
    for (let i=1;i<data.length;i++){
    // for (let i=0;i<data.length;i++){
        const li = document.createElement('li');
        let projectName = data[i][0];
        let projectDescription = data[i][1];
        let projectLink = data[i][2];

        li.textContent = projectName;
        // Navigate to project link on click
        li.addEventListener('click', () =>  handleClick(projectLink));
        li.addEventListener('mouseover', () => handleMouseOver(projectDescription));
        li.addEventListener('mouseout', handleMouseOut);
        projectList.appendChild(li);
    }
}
// Function to update the about text on hover
function handleMouseOver(projectDescription) {
    document.getElementById('about-text').textContent = projectDescription;
}

// Function to restore the original about text
function handleMouseOut() {
    document.getElementById('about-text').innerHTML = originalAboutText;
}

function handleClick(projectUrl) {
    window.location.href = projectUrl;
  }