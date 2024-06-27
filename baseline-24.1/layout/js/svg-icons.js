window.addEventListener("load", () => {
  const svIcons = document.querySelectorAll(".svicon");
  for (const iconElement of svIcons){
    // Get all classes that are not svicon
    const unrelatedClassNames = Array.from(iconElement.classList).filter(className => className !== "svicon");
    for (const className of unrelatedClassNames){
      const pathVariable = window.getComputedStyle(iconElement).getPropertyValue(`--${className}-path`);
      if (pathVariable !== ""){
        // This class contains a CSS variable path
        const cleanedPath = pathVariable.trim()
          .replaceAll('"', "");
        const pathElement = iconElement.querySelector("path");
        pathElement.setAttribute("d", cleanedPath);
        break;
      }
    }
  }
});