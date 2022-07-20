'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2cca873168416734d6a8a7d8f609b0de",
"assets/assets/argonian/female.jpg": "58c85e65f8e08bdfe0b71b00ee29f782",
"assets/assets/argonian/male.jpg": "3115abc5673ac38580a9c12c0f9ab0e2",
"assets/assets/bg2.jpg": "5b2aeac68200875c5c449841edd703b3",
"assets/assets/charactersheet.pdf": "4322e66ae0b0519d2803ee101ab6249b",
"assets/assets/classes/barbar.jpeg": "2d01afd425b559caff2fb87a2cd5603c",
"assets/assets/classes/barde.jpeg": "0c80e62228a081a74bccf0dc275398b2",
"assets/assets/classes/druide.jpeg": "e750f9ec8b5e3055afec1db96fa71e98",
"assets/assets/classes/gladiator.jpeg": "a3607e11d18e2843f5c12d1fb252db00",
"assets/assets/classes/hexenmeister.jpeg": "ad2e5ac605b4d6c443b8ded1d7e9c956",
"assets/assets/classes/J%25C3%25A4ger.jpeg": "5e85c0513182dae498a7dfa0ea8a9878",
"assets/assets/classes/kleriker.jpeg": "61ff576aed2a4e4a4dfd5a212d53d498",
"assets/assets/classes/m%25C3%25B6nch.jpeg": "3282b698e1cc39da6de2607ca0b28dd1",
"assets/assets/classes/magier.jpeg": "ec57249f09261d706c4f93035520300e",
"assets/assets/classes/paladin.jpeg": "c53acacca8126f176808c74b3afaa03a",
"assets/assets/classes/schurke.jpeg": "c65ba70357fb8fb23a616d3e204b3e08",
"assets/assets/classes/zauberer.jpeg": "c976567c067c2e35ecab89fa874cb61d",
"assets/assets/dwarfs/dark_female.jpg": "ed362a4deb7bc0e589dd038fb3651ccc",
"assets/assets/dwarfs/dark_male.jpg": "3c4692e7458b04dbfc83d700eed14d8c",
"assets/assets/dwarfs/female.jpg": "c2f9126a9d3f864f6562a172b8d35ae9",
"assets/assets/dwarfs/male.jpg": "1569e3cda0ca5a7013aa12d6ad6abad6",
"assets/assets/dwarfs/mountain_female.jpg": "483de6d537c64960039f7cc5287e3616",
"assets/assets/dwarfs/mountain_male.jpg": "b2b6cc1081d24d347e66cc996580730d",
"assets/assets/elves/dark_female.jpg": "135634b626dc310374996646a60fc677",
"assets/assets/elves/dark_male.jpg": "14c6c1fca75f3dd4d80738845cbd81e0",
"assets/assets/elves/female.jpg": "ed85b48521e0b2b601229ce4147661b4",
"assets/assets/elves/male.jpg": "9000a103eefa52ca2364dfa5b2c3ba72",
"assets/assets/githyanki/female.jpg": "5342c1801974bb79db9e00019ceee1c7",
"assets/assets/githyanki/male.jpg": "dbc23dd4f011e37ed1bc94488a846432",
"assets/assets/gnome/female.jpg": "817e903d46c4fb9305c842df8a22ba4e",
"assets/assets/gnome/male.jpg": "fcaa407a1064b13747d445a17c1027fb",
"assets/assets/humans/female.jpg": "2875d4011992be5b81011e86e164dc8b",
"assets/assets/humans/male.jpg": "dc9bbb3a06a01e234c9d541d1bfd3b78",
"assets/assets/humans/outlaw_female.jpg": "3f4ccb662c0fcdbbe94649e5f0a2447e",
"assets/assets/humans/outlaw_male.jpg": "88b94c8e454302210106992ffff73458",
"assets/assets/orc/female.jpg": "d348dbee5dd7e6ffdbe957e3f7a37f5b",
"assets/assets/orc/male.jpg": "7b786af748c10c94dde4872f54d95b45",
"assets/assets/tiefling/female.jpg": "99677655f449ecb31a0e87ba217b6bb9",
"assets/assets/tiefling/male.jpg": "1b80f304cbbffdf862d71dc47b4c46b6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "cb9f56b8f9e88cef797fc0c7765add3b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "258d06bea0b63509464c49cc370cebd4",
"favicon_old.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/favicon.png": "a77cc37a810071a2eedbbb024473cd6c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bfbf569c214ef0efc77eb52ed3d548ca",
"/": "bfbf569c214ef0efc77eb52ed3d548ca",
"main.dart.js": "c40b98ffd2aab6270814afebe6798e57",
"manifest.json": "6a8af2b07d54fdfe93a13226a3e088f2",
"version.json": "f520c10fac334bb211d3630a46670393"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
