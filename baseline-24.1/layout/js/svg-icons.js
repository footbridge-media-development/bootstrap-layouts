window.onload = function() {
  svg_iosRender();
}

function svg_iosRender() {
  const svIcons = document.querySelectorAll('.svicon');
  svIcons.forEach(svIcon => {
    const classes = Array.from(svIcon.classList);

    let pathElement = null;
    let matchingClass = null;

    for (const className of classes) {
      if (className !== 'svicon') {
        const pathVariable = getComputedStyle(svIcon).getPropertyValue(`--${className}-path`);
        if (pathVariable) {
          const cleanedPath = pathVariable.trim().replaceAll('"', ''); // Remove any leading/trailing whitespaces
          pathElement = svIcon.querySelector('path');
          pathElement.setAttribute('d', cleanedPath);
          matchingClass = className;
          break; // Stop searching once a match is found
        }
      }
    }

    if (matchingClass) {
      console.log(`iOS Icon Path Found: ${matchingClass}`);
    } else {
      console.log('No matching icon path found');
    }
  });
}
