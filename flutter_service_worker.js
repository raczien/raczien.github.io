'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "864df0c50a91fa5f886efe25a35e8e32",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "f9fe64fe6dc1cda1a9faf51c45200dc3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b877160a23641fa48341679542913c7e",
".git/logs/refs/heads/main": "45521100a0dd5d2fae77b6e6000300e1",
".git/logs/refs/remotes/origin/main": "479210f90254776b591ef1133ba0da6e",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/04/5600bdc10dc89e96148c1b69945914e8cf13d1": "bcdeef33c396390af6891d94188b7a55",
".git/objects/0d/002268bff9b80090770e2bd32b4c732f7dacf9": "60177dc006c3f3d5d3c52c13177bc410",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/6c99a1540eaa5d71d78146b734ca15e8da8503": "a8d7819414626e1a554cde1be9357940",
".git/objects/16/ff6b4140d2ae80449e531804d7a1e6da82a637": "3436ce2ea203b409f967593d95a3dcb9",
".git/objects/17/cbe94c50adfd47d9cbf7606321a5187109d973": "3a0f18d1db3e0b5cd2ccda31a161c30d",
".git/objects/1e/61b2399da26590f8eeda4eee45052fc94ec9dd": "42df7ba2e6772a2c068f1d1ca42801ac",
".git/objects/21/a23247338765c3fe7326a388608b95f9ef6191": "843ecd36ab554c674201bf2d2d7e1bdf",
".git/objects/23/7ba05a8d25e9a3b3df9d3e383f3355b513ec41": "463869268391ec5d7ababe2f237ab512",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/40661ca519c6fc3ec7ca5dd494ee7496673521": "47afe2fcbe767d831105e5cafb7b73cc",
".git/objects/32/65f04de863335b714d60ae41104d8d13a86c63": "feb0224e3d547023769cad930b7dbe94",
".git/objects/33/dcf146b0d61a25f02b9c4046dd2adf236ca559": "28e637083b92408f749fee8752552c23",
".git/objects/36/297ddaea8dd22d3a510b251e2046f1860314f2": "40966eca0dab9b7c038f854c59d528aa",
".git/objects/38/158f6e6700e1918d0717347e77ddf9f32d65cf": "24ded94c61c39e9f85edff2abe2a6b0a",
".git/objects/3a/6ca51e5d594d5e8dd9e3e74fc3eb0bfcf177dd": "e9cf7fce719477e80415cd79eef4f0c0",
".git/objects/3f/991b1866c59be4a7c9d6c4965af2126120f419": "b38924fb308877098d5cc2ad72a85f56",
".git/objects/44/144ef5ef7d8e4d3d09b98964df7ddd01cd4fd6": "0c686543cf7de71e85352b571f60ef88",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/e10cea8d342e213537fbbdf9c95095f0376e32": "d76bc0d3aa9293ae61a88e0bb2f6baa3",
".git/objects/54/a9f97790483fd7e2e6d4ecb154a8e2149143dd": "8c8a566d661132e6f00716ad3501398c",
".git/objects/5e/6bdda0447ffdce562657dce2ac6ae050a534a9": "bd2ba1a893a5d1ec328da43f6b18b777",
".git/objects/60/7278a5cf0e943a5b00da92803ebfc30be6ae82": "c1e0dd12dc445bc3067db2fbf0643f28",
".git/objects/64/a59c86cdf6057e9249e58488297b75ac9d3205": "2feeb4675972daaca0ffe12c2c493f1b",
".git/objects/6b/eb5fffa28271b2f2e635df92aefd680ef72897": "fa298b9edce5d3d3d1ad1109b0cc45ce",
".git/objects/6d/a394e396e8b5977c8b9b3a6e7a07d7e1d27c73": "534be491763bf9ac6861f129f6a59764",
".git/objects/6e/efc0007cc43a4723271bd4caa4b8fa83adabc8": "fa3cf2db2b7a31748509a4b384c38659",
".git/objects/70/29c90e82c0ed35cf28e12e85fda19443c8b35a": "0e5b56427b55a9a4561a26bddbbe5617",
".git/objects/70/3d59e8668402ee8b5c0cd283996be1e0a85f5b": "f3b73a34313425841409a15bea1f1418",
".git/objects/71/8971d68a5dab4886eb1d91337e5429221ae6cd": "0911928ed52a7c5d1dd8e037b0ff8955",
".git/objects/74/9ab0e87448c042c39c6d8dd36fac17867cf92a": "a95e72dc5e4d1d305b77de9f9e7a0228",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/8b36ba3436c3bd4b20dfcc46950180c9e3ce1c": "781ba80c94c3b2306565ee12e75f171e",
".git/objects/7c/b50de9b18b6933d3c18d6db2184f9523dc450f": "38bd302664b81c27135d229f23dc8854",
".git/objects/80/1d64d0018220d47bd162cf4a21c1c648cd8f77": "533d5c0608eec0870b62230aacaa3af6",
".git/objects/80/65d36d9d7f2f2b9df04bce4d93f5051f0bfadb": "1df08cb1a17d8f89f15953106ae04055",
".git/objects/86/18bde8c844dded5a998b7dac7b9e840725558b": "73e8e654ca104fb148fff405d5aac7d0",
".git/objects/86/f6fa3d4c72be3a4306b37370a821bec416fdfa": "a01e7407eebfa68829ff6ba5ef9f1c3a",
".git/objects/87/03101e7ff3af01f69eacd79054fcfb91c8a31e": "f21b41129cf3700fc92f9a29bb2c1d13",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/5bac40b785c66be419b58437231f6770b5a0dd": "8e89771e97c72caaa9649172f483c61f",
".git/objects/8f/b631404a41c3966e2e3761c6e5478ac56f5d38": "89938cbc5e52f1dc553767b7143cabf9",
".git/objects/91/f0cd2a02dcd22ff665077a1669b5939ef4abe2": "43cfb10cab7e2eedde88cb35d4fa1956",
".git/objects/96/152e154dec3d701aaed546d69e697aee368cfb": "0260ae02abf61fdbc0cb04e47bccd284",
".git/objects/96/c9afe387f64e40296a404839e2b5203c48992a": "d08155fd40acf3ffd32c14c438d98385",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/ebf63ea26055a7c007976196c2e19bf4f9114c": "72da3e65808ab265d23eedd862288d79",
".git/objects/a7/dcc3dbc3f6a780da3552d189050b8aade2519e": "de0b4acd1ed4537ab00dc12a73ab8341",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/e959fbf0b4030884c90ace10ca5e4915a6676b": "7920b12e7f50d9a8af034cb4c95e135a",
".git/objects/ac/8e689690527aaf440f2a6385ee1625172e2c82": "f67ff45f9dafa7d1f80c9b3a4fbc7cef",
".git/objects/b1/ffbaee2eb23770c911bd679103369b62ebbf9a": "d9e309fd4e1f138e0de57a34069bf222",
".git/objects/b4/cf329a2d4ddfd157b267249ae97f90a5ac97c5": "25d86f9cb4b1ebdacd0ca01992a4f5bb",
".git/objects/b5/ba65560ec54ec3e7bfbec91c9c04466b9b4c26": "57f1e87dde952f1ae7cfb57d4554ce27",
".git/objects/b6/ffaf1a94bef0360edff66bbcf7d6f7fb14b43f": "174672fe80298a74e2bd42e7fae279f7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e63c546cf9aa6f47652255e2b25bfe26c1e426": "8a196819f4380314ddfc1402bdeb1832",
".git/objects/c0/bc97ed4930998eceb8086e2b7329dbe8853133": "44f924282d6a8394514c2ec588f51428",
".git/objects/c7/645181a8ca41a4cdbbc8659e776cf5c330ec7a": "a810b13921f24484456b326ac11e4b65",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e1/8843c3278b7df073b97b60ef869acf46037b33": "a6b3f1386610d5ce952acbfb18a0ca3f",
".git/objects/e2/4bbae264a21082d827b6cc526d02eb84abd661": "a52c51191739a8275fa05d0a48339908",
".git/objects/e2/a5d284367cdd632c492b8a199c51a092359308": "0ec6bc1f8587f11eb45c425c9223102a",
".git/objects/e3/b3c263d89d45457409ab749768b4a084c760de": "4090ce99497c58e4fa389fb5183076d1",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/b22104552854e4ff1d11f6dec84adf822f9062": "112d0acd028b228f5cfca8bb421572bf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/f519bc4b7588ece35884d343af3d2b20ac9af9": "7ce81d57e649db4a7a2f9e6560d3761a",
".git/objects/f2/2ca129b6afc288a4b6180d041c135a9d1a884b": "84bfb66233e51803c32c6a9fdb43ae3d",
".git/objects/f2/694968f82c6a074e697c287bbfa5d5d9e29f00": "dbb7d64d2469e84fdbabe78de1f22aa0",
".git/objects/f2/d76054ab9b535694bb68543f66bf49987d44f4": "4084856ae1d4d9fee476564cf833bb42",
".git/objects/f3/dec05b33b429e139ee6da669990a9608b27b83": "17b317c7cd5d900b84ec1e09d6f04bc3",
".git/objects/f4/ec7adfc13ab960e4ea7d42ec76e5f33ee8b8f3": "44ea5d13aa1982dfe83188e48b85a39b",
".git/refs/heads/main": "c24012e46f176efe4bab249096856280",
".git/refs/remotes/origin/main": "c24012e46f176efe4bab249096856280",
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
"index.html": "b1d35c57e940a343b455532c7cf9a305",
"/": "b1d35c57e940a343b455532c7cf9a305",
"main.dart.js": "734725cdcd696896f4b80d3e81a8252b",
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
