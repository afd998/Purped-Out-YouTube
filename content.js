document.documentElement.style.setProperty('--yt-spec-static-brand-red', '#800080');
document.documentElement.style.setProperty('--yt-spec-static-overlay-background-brand', '#800080');


// Replace the current favicon with the new one
var faviconLinks = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
// Remove each favicon link element
faviconLinks.forEach(function (link) {
  link.parentNode.removeChild(link);
});
var newFavicon = document.createElement('link');
newFavicon.rel = 'icon';
newFavicon.type = 'image/png';
newFavicon.href = "https://ibb.co/rGDrK8N"
document.head.appendChild(newFavicon);




// Get the <style> element or create a new one if it doesn't exist
let styleEl = document.querySelector('style#my-style');
if (!styleEl) {
  styleEl = document.createElement('style');
  styleEl.id = 'my-style';
  document.head.appendChild(styleEl);
}
// Define a CSS rule for the ::after pseudo-element
const cssRule = `
 .ytp-chrome-controls .ytp-button[aria-pressed]:after {
    background-color: purple !important;
  }
`;
const cssRule1 = `
 .ytp-settings-button.ytp-hd-quality-badge:after {
    background-color: purple !important;
  }
`;
// Add the CSS rule to the stylesheet
styleEl.sheet.insertRule(cssRule, styleEl.sheet.cssRules.length);
styleEl.sheet.insertRule(cssRule1, styleEl.sheet.cssRules.length);









// Select the element that you want to observe for changes
const targetNode = document.body;

// Create a new instance of the MutationObserver
const observer = new MutationObserver((mutationsList, observer) => {
  // Loop through each mutation that has occurred
  mutationsList.forEach(mutation => {
    // Loop through each added node in the mutation
    mutation.addedNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        // Check if the node has a red background
        if (isRed(node)) {
          node.style.background = 'purple';
          node.setAttribute('fill', '#800080');
        }
      }
    });
    mutation.target.querySelectorAll('*').forEach(node => {
      // Check if the mutated node is an element with a red background
      if (node.nodeType === Node.ELEMENT_NODE) {
        // Check if the node has a red background
        if (isRed(node)) {
          node.style.background = 'purple';
          node.setAttribute('fill', '#800080');
        }
      }
    });
  });
});

// Configure the MutationObserver to listen for changes to the targetNode and its descendants
const config = { childList: true, subtree: true };

// Start observing the targetNode for changes
observer.observe(targetNode, config);

//maybe i dont need background
function isRed(element) {
  let cs = window.getComputedStyle(element)
  let bgc = cs.getPropertyValue('background-color')
  let f = cs.getPropertyValue('fill')
  let reds = ['rgb(255, 0, 0)', 'rgba(255, 0, 0, 0)', 'red', '#F00', '#FF0000', '#ff0000', '#f00']
  if (reds.includes(f) || reds.includes(bgc)) {
    console.log("working")

    return true
  }

  return false

}