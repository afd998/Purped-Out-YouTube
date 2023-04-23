document.documentElement.style.setProperty('--yt-spec-static-brand-red', '#800080');
document.documentElement.style.setProperty('--yt-spec-static-overlay-background-brand', '#800080');


// Replace the current favicon with the new one
var faviconLinks = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
faviconLinks.forEach(function (link) {
  link.parentNode.removeChild(link);
});
var newFavicon = document.createElement('link');
newFavicon.rel = 'icon';
newFavicon.type = 'image/png';
let currentUrl = window.location.href;
if (currentUrl.startsWith("https://www.youtube.com")) {
  newFavicon.href = "https://i.ibb.co/pQ0K1mJ/32ytlogo.png"
}
if (currentUrl.startsWith("https://music.youtube.com")) {
  newFavicon.href = "https://i.ibb.co/VBgYGpx/Music-Logo32.png"
}
document.head.appendChild(newFavicon);

if (currentUrl.startsWith("https://music.youtube.com")) {
  let musicLogoElement = document.querySelector('.logo.style-scope');
  musicLogoElement.src = 'https://svgshare.com/i/riK.svg';
  let pictureElement = document.querySelector('.ytmusic-nav-bar picture');
  let sourceElements = pictureElement.querySelectorAll('source');
  // Loop through the source elements and set their srcset attributes
  sourceElements.forEach(function (sourceElement) {
    if (sourceElement.media == "(max-width: 615px)") {
      sourceElement.srcset = "https://svgshare.com/i/riK.svg";
    } else if (sourceElement.media == "(min-width: 616px)") {
      sourceElement.srcset = "https://svgshare.com/i/riK.svg";
    }
  });
}


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
const cssRule2 = `
 ytmusic-subscribe-button-renderer[is-subscribed] {
    --ytmusic-subscribe-button-color: rgba(255, 255, 255, 0.7);
    --ytmusic-subscribe-button-outline-color: rgba(255, 255, 255, 0.2);
  }
`;
const cssRule3 = `
 ytmusic-subscribe-button-renderer {
    --ytmusic-subscribe-button-color: #800080;
    --ytmusic-subscribe-button-outline-color: #800080;
  }
`;
// Add the CSS rule to the stylesheet
styleEl.sheet.insertRule(cssRule, styleEl.sheet.cssRules.length);
styleEl.sheet.insertRule(cssRule1, styleEl.sheet.cssRules.length);
styleEl.sheet.insertRule(cssRule2, styleEl.sheet.cssRules.length);
styleEl.sheet.insertRule(cssRule3, styleEl.sheet.cssRules.length);







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
          //could be an issue setting background on svgs
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
          //could be an issue setting background on svgs
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
    return true
  }
  return false
}


document.querySelector("#items > ytmusic-responsive-list-item-renderer:nth-child(5) > ytmusic-custom-index-column-renderer > div > div > yt-icon > svg")