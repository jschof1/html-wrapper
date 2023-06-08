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

// function getActivityType(){
//   const activityType = ['Adapt Object']
//   for (const activityTypes of activityType) {
//     if (document.getElementById(panalClass))
//   }
// }

function generateHtml(title, content, panelClass) {
  if (document.getElementById('adapt-activity').checked) {
    return `
    <div class="odi-content">
    <div class="banner-img b-0">
        <img src="https://moodle.learndata.info/draftfile.php/1307/user/draft/639663771/ODI_DEP9.png" alt="lorem pixel" width="10834" height="1667" role="presentation" class="img-fluid ">
        <h2 class="top-left">
            <span>${title}</span>
        </h2>
    </div>
    <div class="panel info">
        <h3 class="odi-icon odi-icon-${panelClass}">${title}</h3>
        ${content}
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary my-3" data-toggle="modal" data-target="#exampleModal">
            Launch e-learning
        </button>
        <p>Say what the module does in the end</p>
        <p><em>If you are viewing this page using the Moodle app,&nbsp;<a href="https://moodle.learndata.info/mod/scorm/player.php?a=420¤torg=adapt_scorm&amp;scoid=840&amp;sesskey=34MKW0fs96&amp;display=popup&amp;mode=normal" target="_blank" title="click here">click here</a>&nbsp;to launch the e-learning</em></p>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" style="display: none;" aria-hidden="true">
            <div class="modal-dialog w-100 m-0 vh-100 vw-100 min-vw-100" style="" role="document">
                <div class="modal-content rounded-0">
                    <div class="modal-header p-0 sticky-top">
                        <button type="button" class="btn btn-primary btn-block btn-sm rounded-0" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">CLOSE AND RETURN TO COURSE</span>
                        </button>
                    </div>
                    <div class="modal-body p-0">
                        <iframe src="https://moodle.learndata.info/mod/scorm/player.php?a=420&amp;currentorg=adapt_scorm&amp;scoid=840&amp;sesskey=pHiZBBzEgL&amp;display=popup&amp;mode=normal" width="100%" class="border-0 w-100 vh-100" loading="lazy">Loading...</iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
  } else {
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
}
