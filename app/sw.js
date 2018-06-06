importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    workbox.strategies.networkFirst()
  );

  workbox.routing.registerRoute(
    // Cache CSS files
    /.*\.css/,
    // Use cache but update in the background ASAP
    workbox.strategies.cacheFirst({
      // Use a custom cache name
      cacheName: 'css-cache',
    })
  );
  
  workbox.routing.registerRoute(
    // Cache image files
    /.*\.(?:png|jpg|jpeg|svg|gif)/,
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
      // Use a custom cache name
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Cache only 20 images
          maxEntries: 20,
          // Cache for a maximum of a week
          maxAgeSeconds: 7 * 24 * 60 * 60,
        })
      ],
    })
  );

  const articleHandler = workbox.strategies.networkFirst({
    cacheName: 'articles-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
      })
    ]
  });
  
  workbox.routing.registerRoute(/(.*)article(.*)\.html/, args => {
    return articleHandler.handle(args);
  });

  workbox.precaching.precacheAndRoute([
  {
    "url": "components/app-header/controller.js",
    "revision": "836c6b894890139b2ee908f6bb31f4fa"
  },
  {
    "url": "components/app-header/template.html",
    "revision": "f8c7d9034fd7846ce48a495bd5162f4d"
  },
  {
    "url": "components/form-view/controller.js",
    "revision": "9c2c0bb9a3ed97c9549ada0f82b70aa9"
  },
  {
    "url": "components/form-view/template.html",
    "revision": "57f9b314f716cf69872bdaf719266c6b"
  },
  {
    "url": "components/list-view/controller.js",
    "revision": "7a7262f5aca4d8f4cf23e8da5db2b94c"
  },
  {
    "url": "components/list-view/template.html",
    "revision": "90b6f52357d1afc33cd1e1bd048f474a"
  },
  {
    "url": "components/modal/controller.js",
    "revision": "986e9895018d48bb4f23760faf02dbb3"
  },
  {
    "url": "components/modal/template.html",
    "revision": "642473b3ba8a46dd4d8317e66907a5d8"
  },
  {
    "url": "components/navigation/controller.js",
    "revision": "4a721b2583c04028cbf1e0d08e3108a8"
  },
  {
    "url": "components/navigation/template.html",
    "revision": "5a30e241828190935c9ca8ebda64ec70"
  },
  {
    "url": "components/navigation/view-template.html",
    "revision": "e127f49f1d560b639a49d7387021fe35"
  },
  {
    "url": "components/sign-up/controller.js",
    "revision": "d3d697153f873be716900233c5ac0356"
  },
  {
    "url": "components/sign-up/regform.html",
    "revision": "6e894ea39cbb91345f095e105b6ca111"
  },
  {
    "url": "components/sign-up/template.html",
    "revision": "69e051208a6e4c30650889d997df4f7d"
  },
  {
    "url": "components/sign-up/verification.html",
    "revision": "70524c2be01c42399dfdb13e2b602d4b"
  },
  {
    "url": "components/tab-view/controller.js",
    "revision": "adbcfdbeb37abe2be8921ff70b155d12"
  },
  {
    "url": "components/tab-view/template.html",
    "revision": "52229ddf331eeb92e192fdcf273b3df9"
  },
  {
    "url": "components/view-header/controller.js",
    "revision": "94c010f31d5939899c76fc939b3f1352"
  },
  {
    "url": "components/view-header/template.html",
    "revision": "f64f42f4a28e97b9f8c9c250e6e8bd4b"
  },
  {
    "url": "config.js",
    "revision": "9c5fb7345ecf7625ccfe2d392230dc91"
  },
  {
    "url": "css/bootstrap.min.css",
    "revision": "0429ead66dc3af289d9bc8c276bea20d"
  },
  {
    "url": "css/styles.css",
    "revision": "d7415f5b1b877c82d753ba4b50e50dbf"
  },
  {
    "url": "fonts/Bold/OpenSans-Bold.eot",
    "revision": "7ae9b8ba7886341831bf7c85a0da40d0"
  },
  {
    "url": "fonts/Bold/OpenSans-Bold.svg",
    "revision": "d6291f88056601e360ce6cea4bf676f4"
  },
  {
    "url": "fonts/Bold/OpenSans-Bold.ttf",
    "revision": "f5331cb6372b6c0d8baf2dd7e200498c"
  },
  {
    "url": "fonts/Bold/OpenSans-Bold.woff",
    "revision": "8dd1fba73ff945cf492243e58a13877e"
  },
  {
    "url": "fonts/Bold/OpenSans-Bold.woff2",
    "revision": "96f3835aa784a280a0e1e7fa64b97b60"
  },
  {
    "url": "fonts/ExtraBold/OpenSans-ExtraBold.eot",
    "revision": "561e4b63e9119235465ec88c8c91f2c8"
  },
  {
    "url": "fonts/ExtraBold/OpenSans-ExtraBold.svg",
    "revision": "8c5c497a47304f276f99ad05e0c5a395"
  },
  {
    "url": "fonts/ExtraBold/OpenSans-ExtraBold.ttf",
    "revision": "49f89e34d03233b1f27788f75df7a40a"
  },
  {
    "url": "fonts/ExtraBold/OpenSans-ExtraBold.woff",
    "revision": "5aa0bd4242398e1ff9971c3cbc86ad08"
  },
  {
    "url": "fonts/ExtraBold/OpenSans-ExtraBold.woff2",
    "revision": "f12f942e33271945bc4689c8a40c53f0"
  },
  {
    "url": "fonts/icomoon.css",
    "revision": "16ac2a2d2b5f77db993ffa61b46331c2"
  },
  {
    "url": "fonts/icomoon/icomoon.eot",
    "revision": "87dc929916c1c6b3eead505939fdd962"
  },
  {
    "url": "fonts/icomoon/icomoon.svg",
    "revision": "eb6b8da86a85405bd983fe7eaf8e2374"
  },
  {
    "url": "fonts/icomoon/icomoon.ttf",
    "revision": "1fd9b98cde69e43d71f701496b114774"
  },
  {
    "url": "fonts/icomoon/icomoon.woff",
    "revision": "1b0278fa9b4b9a7ff73aa8a5806d4bed"
  },
  {
    "url": "fonts/Light/OpenSans-Light.eot",
    "revision": "804037562eabaa5dbefa4a435206d017"
  },
  {
    "url": "fonts/Light/OpenSans-Light.svg",
    "revision": "d79f021974b1f6bc5c21f31689cde94f"
  },
  {
    "url": "fonts/Light/OpenSans-Light.ttf",
    "revision": "9ff12f694e5951a6f51a9d63b05062e7"
  },
  {
    "url": "fonts/Light/OpenSans-Light.woff",
    "revision": "edab3663655deaddbc4baf33e83838dd"
  },
  {
    "url": "fonts/Light/OpenSans-Light.woff2",
    "revision": "691f774319fda1ccf9ea172ffaee815e"
  },
  {
    "url": "fonts/open-sans.css",
    "revision": "1b6d862467051d5ea09a8c5a02536b33"
  },
  {
    "url": "fonts/Regular/OpenSans-Regular.eot",
    "revision": "a35546eef3ea0de0d4735f23b0a0873b"
  },
  {
    "url": "fonts/Regular/OpenSans-Regular.svg",
    "revision": "f641a7d4e80fd6321135b1a2b4ce8bb1"
  },
  {
    "url": "fonts/Regular/OpenSans-Regular.ttf",
    "revision": "d7d5d4588a9f50c99264bc12e4892a7c"
  },
  {
    "url": "fonts/Regular/OpenSans-Regular.woff",
    "revision": "552ea4cf95b85269f5a3b5b1e2b2eedb"
  },
  {
    "url": "fonts/Regular/OpenSans-Regular.woff2",
    "revision": "e78dce533ecee30c5efd812bb23c248d"
  },
  {
    "url": "index.html",
    "revision": "fb7cb9bf40b448eff7152e56cf9e8ba7"
  },
  {
    "url": "main.js",
    "revision": "1ff638ff8de67f37e224e070205586d5"
  },
  {
    "url": "manifest.json",
    "revision": "7b4035bf63b8dfd0168f857d57476dc7"
  },
  {
    "url": "package-lock.json",
    "revision": "e4a5b47994be9f4e0f50ef84d30e70ac"
  },
  {
    "url": "package.json",
    "revision": "36e616478e770d0f702f9806a68dd753"
  },
  {
    "url": "workbox-sw.js",
    "revision": "ff77b9fe6184097ed0e610c571b35e86"
  }
]);

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}