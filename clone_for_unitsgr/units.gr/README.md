# units.gr — static clone

Full-fidelity mirror of https://units.gr: same markup, CSS, fonts, images and
JS, so colours, the GSAP/ScrollTrigger scroll animations, the Lenis smooth
scroll, the home intro and the Barba page transitions all behave as on the
live site.

## Run

    ./serve.sh          # http://127.0.0.1:8899
    ./serve.sh 3000     # other port

Must be served over HTTP. `file://` will not work.

## Contents

`site/units.gr/` — 39 pages (EL + EN), ~103 MB.

Theme `units`: Aeonik Pro / Bunch / Alfabet webfonts, one 282 KB stylesheet,
one 1 MB `main.js` (Barba + Lenis + Swiper + Fancybox + Plyr + Lottie).

## What still hits the network

Left as absolute URLs on purpose — mirroring them would change behaviour:

- GSAP 3.13 + plugins (cdnjs), Swiper, Fancybox, Plyr, Lottie (jsDelivr)
- CookieYes banner, Google Tag Manager, Meta Pixel
- Matterport 360 tours, Instagram/TikTok/Facebook links

## Known gaps

WordPress endpoints have no static equivalent, so anything driven by them is
inert: `wp-admin/admin-ajax.php` (form submits), `wp-json/*` (Instagram feed
refresh — the feed's server-rendered images are mirrored and do display).
