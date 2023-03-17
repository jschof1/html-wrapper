document
  .getElementById('textForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const panelClass = getPanelClass();

    const generatedHtml = generateHtml(title, content, panelClass);
    document.getElementById('generatedHtml').value += generatedHtml;

    // Clear the input fields
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
  });

document.getElementById('reset').addEventListener('click', function () {
  document.getElementById('generatedHtml').value = '';
});

function getPanelClass() {
  const panelClasses = ['info', 'blue', 'reflect', 'discuss'];
  for (const panelClass of panelClasses) {
    if (document.getElementById(panelClass).checked) {
      return panelClass;
    }
  }
  return 'info'; // Default panel class if no checkbox is selected
}

function generateHtml(title, content, panelClass) {
  return `
  <section class="odi-content">
    <div class="banner-img b-0">
        <img src="https://moodle.learndata.info/draftfile.php/1307/user/draft/218970011/ODI_DEP8.png" alt="banner image" width="10834" height="1667" role="presentation" class="img-fluid ">
        <h2 class="top-left">
            <span>Course Schedule</span>
        </h2>
    </div>
<div class="panel ${panelClass}">
<h2 class="odi-icon odi-icon-reading">${title}</h2>
${content}
</div>
  `;
}
