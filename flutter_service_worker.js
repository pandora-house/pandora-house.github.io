'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "f480b812952f4713b50e124e69f54850",
"/": "f480b812952f4713b50e124e69f54850",
"main.dart.js": "a106a15cb7def44cf2a5c6ac8f481451",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
".git/config": "901b2e3b4777460fb5200556e84a8e4f",
".git/objects/95/35cf87ece63bc1037951c7117613d6807b8368": "cfc61ca74c79fd51044daa8f06375ca5",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/ad/17209f93b1837f6704ff8737d4b267b0b3c5fc": "6660470736e88baa0a09262455ca1f83",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/828d8234cec9954924fdc342df7c66f7bb03f0": "ada7a126d974f282df5ac55dc24d50ad",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a2/6a6419cf551648307e20416f3d0077731ec55d": "3db619de460045a9803ff650be900c2b",
".git/objects/a5/6f116aaf575dfee4a3b09a04500251685b082f": "4f390be84dc841ff78f800f56f4881a1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/116f610c3548a9e0b7a7cad495bfab1e6f0aca": "513bc273914cc66f1dd61fed22889ad7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/c4f625d7adf450baa81313c7950bcd60f00a8c": "e86a4caa9a4d1808f6b3c1757e567b85",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c119b147a7259876ccfe5bfc43786f2d1ef11e": "feee1554f905137a7838cea9fd92dbc8",
".git/objects/ca/2c9f1437ca7a8c33dcb6e91a32fc2ae5258c1b": "8cae5e5748bc3e007f3197eea1e6f957",
".git/objects/e4/85712485edc6844e5be140122eb9a96080b8eb": "30388479a153b76cfb9d246181bfea47",
".git/objects/c6/12ae28028b81c6346a90f7153a7a00a198724d": "219dea0cc2bfb43f640b8364c2db4bcb",
".git/objects/4e/80e62ee8b471c2d7dd9c8d37fdecc40d16e4b6": "904676987efe93f458550acd2cd420da",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/25827ec728e29b2f73b5c028d1ca6c6abde92b": "4c45b4486152a6b636c6efd273a4e611",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/6d6ab52aaeaa99c2e66dad79a31e27905f8498": "39709cf26aacf4c21b0dfe7a4ea10634",
".git/objects/4d/bfa1c2acb16207ee19b539c309bb8a91bac28d": "5b804b0eda6f5d084bb1c0d25a9ab981",
".git/objects/43/7220873a622d8888865e1fb3ed66160daec268": "f763c01e34f39189b18f8d0d647f20b4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/5c/116c8164a9bbc684230d3b0aab5a55f1fe87dd": "97444da8e22395ed02f056d4c4c78840",
".git/objects/3a/a69c7ae3bad76dad88b74977ee7b04da910aec": "194a715541b92c7d536c8de2294bb8e8",
".git/objects/54/667714baa5f72ac296785dbd8727ebf2251245": "284e5c6c68abe3ce36fc17c77f987088",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/6d/3549b761bf882ab14fcfb194ab7f3e1d9b45e0": "6e69f241b8bb5954dd39154d5701995d",
".git/objects/39/303119feaa1d5ae6421b13f906635fc3756272": "021703c9af803904c0ef8da7c55d18a1",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/97/700d2634462789de6e046c81f9cf24c8c21bd6": "7136c8914af0980ec083c0f4d34e0590",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/22493db1d5f6038ab735a7c67bb187c6a776bd": "4f94ba04232fd78e1c791abf13f8480f",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/ea/a2c015d500eb2d788f1f5e466f48c59c1b48e0": "d6d875ba7d9318f6d9ad265989cfc08f",
".git/objects/e1/6eb8f4b8fbc4d6fe01b793f02ca56fac0282cb": "2ddef9aec3f663052fb4b5a6de034509",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cc/44534aa75c9d6826bfd38ef3c6e873e9c23ccd": "924cd7d70ed2808cba150a522ac30089",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/caa2dc79d17f304196424f2c1566bd89bf3a39": "7c5910468f63baa3900abb8912de5ad8",
".git/objects/f9/75849220b4e0318cd8e2b17ade2e73efd8e16a": "d23c623cc8d78e9ac98263347227ee23",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/e9/0fa6fd277e87c05830d9d7b892149f2ff27158": "f678acb17702031ae10dd2b5e66ff0e9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/f1fcaf3d63d7b226868421bab68bfcca403c9f": "e63f208dc8309c6e5e518a3fb289b88e",
".git/objects/41/e261aedfbb15b7132991c6fef91710b4894295": "68021e0b1f302b0355f8494c4f462daf",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/23/7363951cdd84daa9d70a53429e049f43e23e86": "c1ec6cc12d05b7f6a345469c74efa98e",
".git/objects/85/280082f031f02e0ab8d7533ea7266382cd0a52": "79433d9dd462e4ac0a55134a78b838be",
".git/objects/1d/a1027199dc0a5de7b4435380b1e6868e5977a4": "7c5621ac15acd4ff84179bf282259b2e",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/82/8244694d35f0d64017aca4ce35781a74f521c6": "dda117fb1e447215dec2cf3ad75abf91",
".git/objects/22/db878e4f1058c3d18de02a81f1e0c01dcaa62f": "2fa5abc167612185650f752699bfa6d5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "44dec6a04a00175702e286f40bc5810a",
".git/logs/refs/heads/master": "2011621b3fcad95e2d552e9a8140e633",
".git/logs/refs/heads/main": "186926e1904f869428cc8996e29f6fef",
".git/logs/refs/remotes/main/main": "78869bf9af2dd6af9ea07dcba6cca150",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "d7c2d4b62cc46aa8c10970c8304ffc5e",
".git/refs/heads/main": "d7c2d4b62cc46aa8c10970c8304ffc5e",
".git/refs/remotes/main/main": "d7c2d4b62cc46aa8c10970c8304ffc5e",
".git/index": "acf1252bffe9c83ec532b96b8ada57b4",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "d15fb3f976e6e0cfb44682821da894ed",
".git/FETCH_HEAD": "b954e5c8b548838a870333f285f33e1a",
"assets/AssetManifest.json": "6cd4f42b62c1eb271ac42f567f9868ca",
"assets/NOTICES": "61457165e7c24744627eaf9d133e47d9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "4adc5e4d9fb9aefcb5aeea0c7aaec90b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4d8395d74958a1d624a683af99e7c056",
"assets/fonts/MaterialIcons-Regular.otf": "6d1d978329c984a96cab8dcc5c8424da",
"assets/assets/images/me.png": "67e9ed74d7e897d00236cd7f75ad405b",
"assets/assets/images/app-store-icon.png": "69c1763513d94dfb600b228b8aba5dcf",
"assets/assets/images/google-play-store-icon.png": "48378a3148086825674df12459b1b527",
"assets/assets/images/youtube_icon.png": "fa46b647cbf7e9f085b1b9509757a186",
"assets/assets/images/github_icon.png": "8d619ebe2a9bcb129145f57d65289860",
"assets/assets/projects/alanya-go-1.png": "ee5d6da60ad1941292c88ff1eb7e797c",
"assets/assets/projects/alanya-go-2.png": "aabaaf1d1c4d3c946429c704ff5b94be",
"assets/assets/projects/alanya-go-3.png": "99235e768c6ba1cc45106f22f4731a91",
"assets/assets/projects/alanya-go-6.png": "805145c6cd79ca4663dfcd800d5459d1",
"assets/assets/projects/alanya-go-4.png": "0bcc8bb512a2e0b5a6ee932df6139a36",
"assets/assets/projects/alanya-go-5.png": "0c025cf61c09d1ec88bf8e7f7cc68e18",
"assets/assets/projects/boss-assistant-2.png": "1be2df9c30ad3d15ab2261b2550adbcf",
"assets/assets/projects/boss-assistant-3.png": "b3289a1c3fb1650d7d4f3b47ea20fe10",
"assets/assets/projects/boss-assistant-1.png": "c2df8c22d0a6d174927c1a2901d934ff",
"assets/assets/projects/boss-assistant-4.png": "58f8020a4288ecca867f6dc420f3d020",
"assets/assets/projects/wow-2.png": "ab42b9e91535bc5269b40f3955cddc33",
"assets/assets/projects/wow-3.png": "8955a4125b935d3b213c179901a085f2",
"assets/assets/projects/wow-1.png": "da720b248303af775c2e8fd5f830d0bc",
"assets/assets/projects/wow-4.png": "90619a9cd5e06a1bcf500267bb0fb2ad",
"assets/assets/projects/wow-5.png": "57644ba82726bcfd96e42c5d242798bf",
"assets/assets/projects/wow-6.png": "d6e6b842e140f175223ad73568dc11f9",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "46186ebc3dbc7ce008a6cf6888341121",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "e6b023077aa4876dbe12734108325458"};
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
