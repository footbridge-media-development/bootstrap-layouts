The script looks for container elements with .bg-parallax. The script then picks the first picture element and applies the most suitable source or img element. The script is re-run on window resize.

NOTE:
- The img element can have 'd-none' on it permanently.
- The script checks max sizes on source elements by the 'data-max-width' attribute, not media attributes, as this makes it easier to read accurately in JS.
- The 'data-max-width' attribute should ONLY have numbers. no 'px' suffix or similar.
