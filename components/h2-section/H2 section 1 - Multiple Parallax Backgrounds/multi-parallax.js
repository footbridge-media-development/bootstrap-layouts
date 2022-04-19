let backgroundCovers = document.querySelectorAll('.bg-parallax')
for (let i = 0; i < backgroundCovers.length; i++) {
  let img = backgroundCovers[i].querySelectorAll('picture > img')[0];
  backgroundCovers[i].setAttribute('style', 'background: url(' + img.getAttribute('src') + ') 50% 50% / cover fixed')
  img.setAttribute('style', 'display: none;')
}
