'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "12d3e19f28169e9550051fef6c76801d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c658cc5dbf1dc29cfd799d72fe5bbd6e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f57029805bf614e6de255e46148f516c",
".git/logs/refs/heads/main": "2a00a501fd7bd0c355f2cc468af7edff",
".git/logs/refs/remotes/origin/main": "dcb34950d1ee1db675bceca2cd84e08b",
".git/objects/02/4e2c3bf40de3c3cd90a965c1f86ab729858bcd": "14473d8d20dec1c2fe1261cb03587938",
".git/objects/17/e24614ebf49e005e06a491c82ce4644bfa82d5": "a23776ad2ab88143a17fb629669df749",
".git/objects/19/ebd0fbce600bd494429e611ecf440034c1076e": "14b070586b7ac1663e2a95b961a2559b",
".git/objects/1e/e7dce8b623b624c52cd1a73776ba28d1d639de": "854fa87dcb3c7e0e7542e9ebabd72feb",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/699c089f343bf82c3a1607dd35bf447b147cc6": "02e7e49da34a92b653df4be0207d3069",
".git/objects/22/964c41b0bdae01e86fad3cda14a39722149373": "92a2c7377300c43bb13339911318736d",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/c529f8d8c865877137b80360d4a3bff232fa97": "a4cd056356665a005740a2eb654912dc",
".git/objects/2e/0cfc0bdb8709484d8c23f86fc6246b6627c803": "e7f7e763825c35c244e1b5ea42b1c704",
".git/objects/2f/b3f86a75e7dcbbe6e0fd499b11a8149e9df9ce": "e1f3dbedcfb8663a066a34a76420f544",
".git/objects/32/77756a72810e19f3b6f6ada2882b3bf29c6d35": "916bac8d71fefce6a99f31d2a5e48dc0",
".git/objects/3a/957ef1d32d9d5fdfb5787ce1a5ed32cd594e3f": "547f2804e8782f42759676224cf9a64a",
".git/objects/42/b4ea7f53e07fac8995d511693b8c64e7ef965d": "7e78a5b4bdb8d83b3feb2627aae9bfdd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/50/c91c315ea6d0e904d9e0fdc6d241589ac4e874": "f65a9e20817c8021af09e5f1fb501cd5",
".git/objects/51/36335b47694b7735a013ff3647ad66c2f5a572": "af5b76081177f3596b1986a228dc71d4",
".git/objects/52/e808f55104a4be78e2b58c47ff6cce8d3fb23a": "ae10aa8809d000d88f91af2c763e555e",
".git/objects/5d/c63abb55ce56a227678c6e9c158427b7371b4f": "904eb237158396604e0bc7bd98fd8bc9",
".git/objects/6a/770f47c80f9f691dabc40a83beaf0e2e6aca71": "3db21c36a705a802bbc216e4a6a79114",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/75/b71d68d2c628989d3e3ff84dd831d53a39bc63": "73a2560c6c9d7789f89c756bdf5f210b",
".git/objects/75/b833370b60945436cd12691596ce832ec59633": "5860baaab22ceb7784cef3e499c84759",
".git/objects/77/e1c1b5b838b7955c66c55457820abb4a58e6b9": "ce2b395a5c4cd3244525e2d47b3ccb20",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7d/92efe2aeb9ef3cf04684154b468f3c2ce66074": "652fb676ac943763f8ef1821aac77430",
".git/objects/80/c6094e5e9601001c26f853ab5e68f49d53d846": "ccc22a49e97fc262eaf24426be1bbd18",
".git/objects/80/e7d123c7c7b9a816852c310d0ff757b17a4f68": "64cf0a827e7e114b55d47d0fdf56927f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/3ab11b5d6366f77ad4c3c6a39393a168d88998": "2b9a04aaef49dd5eef767533ddb24d15",
".git/objects/9a/aff4ccd7a80ee5a6b0f161000adfebfc43cd36": "6f34e07e4f9dc19b00d54f9470189d0e",
".git/objects/ae/34cbefbda6642c9785a515bec005fbe6997215": "adb0ae157405e166421aee0938fdbcd2",
".git/objects/b0/2b27c2876decfc257e9fccf964506763e8052d": "72bfad0a59d24e73e88fa544855e626b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/97488a3429ae88f96cabb07377540129f6d457": "5b6841fc387efbfbf7a50ac13cbab382",
".git/objects/bf/190adf03658364a902d0ca26ff53172c4e0a17": "5ec953cc1bbee094f09674b77758de13",
".git/objects/c0/9a4f3edd86bf49324a861132224e171f103615": "3256fca6a7be00ffb41d372a81d3536a",
".git/objects/c1/f698d557fa8f90993990a6ab0e52686364db83": "85228eb0083de0baec943aa16975a543",
".git/objects/c5/7c9adcda06630414a9593dfe675166323cbe8e": "316e68fab37d848d89150a19a034ef35",
".git/objects/c5/8056a0a08f245f17c2bcaefc040c630dc6af09": "eb370d0579efec8899c9be78b2e9cc76",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e4/14831df781e34bcf6ae1a2c39cd99d36186364": "9cd529297a1591deb083aea3eddbe6da",
".git/objects/e4/e1a0ebe4efc65b5c9c6c376cddf077ee692d3f": "56979815ea79547a4a52a0b94979faba",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/main": "8296f993380ebeb190b67b0d0446171f",
".git/refs/remotes/origin/main": "8296f993380ebeb190b67b0d0446171f",
"assets/AssetManifest.bin": "434a280d439c4016f7b83071e2779bc4",
"assets/AssetManifest.bin.json": "5f2d89b57ba6553fdae0c6b5ed2aa0c2",
"assets/AssetManifest.json": "808b1014d44833854e07f70a64a73585",
"assets/assets/card.jpg": "084e058e7bb6453c8bd14c1b0fadac59",
"assets/assets/cloud.png": "a84494aee88080bbcb7f37e62fa7cbfb",
"assets/assets/docker.png": "1fb474f71fd3c6e521ee2153f1997ca1",
"assets/assets/facebook.png": "f9ffe7a2f9b99179d795c5713ea35956",
"assets/assets/flutter.png": "7d20eb59c88c8749a07e9e319e273c39",
"assets/assets/instagram.png": "52b760457b2be89842588f066a0164bd",
"assets/assets/python.png": "de172ce4f8c7caa1826b4bef7e9050e0",
"assets/assets/telegram.png": "dfe1f9882158a7e9a652464fd50ab521",
"assets/assets/twitter.png": "a8f692e1d74ae65793b6d212794bc0c2",
"assets/assets/whatsapp.png": "a59e768eebc730446e35f676487b8815",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "66bec8779a8c5487d8295ebce8d29b0c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "8b59bb301fc2b1136f25606382f2ed6c",
"canvaskit/canvaskit.wasm": "512a44e3eb35bc8387b01f20b18279ed",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "5573e55905729e79f52db673cb8da1ce",
"canvaskit/chromium/canvaskit.wasm": "afa879dffce647cb0898a63b6c271cda",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "f6aac18483aaa2289ef773832f018a64",
"canvaskit/skwasm.wasm": "c85d17cf519cb9bde54991d5959333c9",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e8548eaf0f21567353e85b06771e9012",
"/": "e8548eaf0f21567353e85b06771e9012",
"main.dart.js": "acaeb3488cb62e7d4354741af52881cc",
"manifest.json": "65b0cd5bb8343f043d67e18690f97f41",
"version.json": "faf6a2b3b34de06ea1c7a20fef3a3cd2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
