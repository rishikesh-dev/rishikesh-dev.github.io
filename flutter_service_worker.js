'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3498ac123029a569fb6aa9ba1fc6f48f",
".git/config": "8674c0c6e93e237b7c345ba4a3349bfd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9ad374cb4e51215354543f0fc0af43de",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "acf94d0b5679a6ebba4ca785dd209c78",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3378c09916a0cf34e036fdd7298c32f7",
".git/logs/refs/heads/master": "3378c09916a0cf34e036fdd7298c32f7",
".git/logs/refs/remotes/main/HEAD": "e7e732d91a219bafeda2701da9b020a4",
".git/logs/refs/remotes/main/main": "658019223dda1564af7aefd8c78fa51e",
".git/logs/refs/remotes/main/master": "b73d01acfb29e658fb450b9e815ef3b0",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/03/e736613a750cdd8d4f54bca28844e2d13257cb": "bd840ac16c281d81f004822f55e1db62",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/11/1ccf2d43c7f09daae77ece2ef962ab62f27cfe": "a8ecdbe97d1b2e52ed442571da58c431",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/14/d2b375dc0c2c4aec35b3d9d4bd89d7291c52dd": "ccfdd2e5d5fbb4633b77ee36ca291938",
".git/objects/19/c6b2555edca659be3095a14e962e14574502dc": "a1f4d6226dfbd53726d3ab25d81f708e",
".git/objects/1f/856eb4476eb385df0004f51ec480a74fe7dbb6": "026460d10bfe3a538639e4da26f73cd6",
".git/objects/21/da2679920855f12d41540e08769743a14656f9": "40fd8d85384241b359ba0a39ba0bf307",
".git/objects/27/859810dd5a5d4958157f4315cdfed5d784e984": "9ac4da2b77af72f8c2af48c2ba314697",
".git/objects/28/b20cf8c413a976c836e90d6b6c5339b80eb121": "ea48a0d565d1bbfc2b69ac1295044bc0",
".git/objects/36/dd3cb6088e9589e505ef6b23428a5a01423e99": "2f5c307ce7e8781957ea65ed9e19afa0",
".git/objects/38/ef94033b18d2338f333a02cd9ffade1c92d2f7": "e3837c0f6b6786d832516a81f85602fd",
".git/objects/39/0f72b1940f2b940a7f9162204644323d1f6f57": "84c64120b2a3b478e565f42619daad6d",
".git/objects/3a/5279252e3b0bf13bf47b1de7292e328df5f865": "99123f9ffab0b27608e75cacf06aa233",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3e/6c942233c69f6b30cb8e8cdb4eea44b350586f": "a2e21b1c29619d5ed2b41322316f4ed6",
".git/objects/41/86d6055f70840622d6ec82c2c1dfe8e97682a3": "3e3afc325ade861902f89a21e7345497",
".git/objects/49/3efe9ab63ebd361d78fb4d3287b680addb50ad": "58b2f058fb2d4c6f748c7753e45d8c8a",
".git/objects/4f/40dabe4430b4d7288c6ae92d8fc3e17cf8e410": "7c1843130f2c3787540ded5445c7793a",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/6cd94735eb0970aeb65ed2f728b8ca43e554b7": "767cdfa1cd0a47fc73adddcfecbab67e",
".git/objects/5f/4d4d238e65d1512e63602a1aacc3b0ce53d4b6": "f82e1f0a7a55b0a4745a3eda49ffefd5",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/a90cbaa08cea9c719bfaffc5e99c5a6290ce4d": "fcebec85817d589b4e34fce79ae77b70",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6b/d06091bb5660a6fef094856b6f967c9bd51383": "66ba44883c54b6c4b3dca9b936e4ed97",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/73/bacd130e00a256e7a8681f5d5b70af0c4c6e13": "f8e7e064dbcb56f6d80c82818cc387b2",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/77/abcfdd123ccd7a11313c6b93b1298cab97cbe2": "aa166665c4c11bf38df2536694a37eb2",
".git/objects/79/bf49a548b779b0c703a4d24ed35b08d51acfef": "cc4faba51ba413fb942a94f33342bd49",
".git/objects/7a/eb58bd1b9436a814a50ee3539d38f7668908c8": "0b0114f1c99b0ed9088d544092449113",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/89/513d94693ae8100315edbb982d7d243f5469f6": "1a977afa8c0dc3ca507a79160ba48a51",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/42cbbf2b410b9fbccb8559b86a03eafd639be1": "4a8b6bbc5f8ae16c1d1a4920a58db430",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/99/b5bea735c340572f29ccd61bfc9de3eb862377": "57c5cb2001fd868940d5dd95c13702b9",
".git/objects/9e/70be6a9ef052bd26e248428cb4db214663afca": "d5fbd6ae192ce2144bda4b1ab8f84862",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/ad146d0ef450a7a172227a113cc57b2ad12f99": "ac215d94ab6bf08a9fc37d05bbe01422",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/af/7a0325cb46c7bf86f5d671c5e64046370aebc5": "156fb9b3a69a20a315d95a979566ed94",
".git/objects/b2/bb3f1ebe4533b05e1bb7df970027cc73678ace": "bfb8e0d52da3e8f6bb7d8ffeb2564206",
".git/objects/b4/46f3f5faa5b9d6ac1da1fae1fd45c25e76e425": "523a21af13d94864147e27b6b47f44b5",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bb/ff0a2b0a087a04e72db337eb8e6026704222d9": "0ce245261c330be66fc43ad7ac179233",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/be/67410fd0a5aaf22e118ff0dd3be2dcd441f34c": "6b6267f4eaa77a2f3de6d0252bfef1c8",
".git/objects/c7/d3c9bb0071e18010ebc19d9d674b04d37c0357": "31c0bc45252f31483ffc8d58fe8d0138",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/6cc0ec998a01a24a0aef74d56c770f032b202d": "321a43de7a1e5a6b3c29fd3f1ac93ea8",
".git/objects/ce/41b6edba36a29ff7b748d5ee077d1480bba804": "684ca67d57b17e4761855f7fb58df816",
".git/objects/d1/edacdfe37ac1385edc532dec66ee27df3e646d": "2ff45595e1f12fabf3cbdaf0952a43e6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/df/b686057696fe1d469d73f921f63bf5c1227421": "c11489bdec9a87217384b161c8fc4cf7",
".git/objects/e2/6db5dd3dbab6fcdb06f7fd9ab9347ead808f02": "2f6d76624a9dec9c6214eeab0f98202e",
".git/objects/e6/1e8e88bdc98d7edba0ba2a372dfd7b4e5c4b3f": "cdc5a17a6724bfcd899294f948824469",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/e9/34b6faddd96d0c1e783cf7a5b68fdf0b630728": "f729d3c04a75d6196dd27910a20e559c",
".git/objects/e9/74211c6a4e9d82c874604f56ec1c75ee33a31a": "52fc853d566a1d3a712c04ca9b830b0b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/f91f6a97370898e1bcb19485089bd3dbd7860e": "fd3ba5538c14e326d0d423a70843c24b",
".git/objects/ec/b242b3415bfc708e0b1d189b540241c25f435b": "d42f443cd3bcb59c17d26f725addaeb6",
".git/objects/ee/94fb0ab5ee4d05073ffd06f8e2e373805f6615": "68c32f8a1c393fe25a4fef8e80accb78",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/7a385e46a10f4603f2f52a89c4ec9c3c236834": "9e8489dcc7536fde4afe1ec8474a13a1",
".git/objects/pack/pack-142495c81a8cc21ef302506b26c4e0bcd64ce6fb.idx": "8938e03404d11c0dca84a989bbfe4811",
".git/objects/pack/pack-142495c81a8cc21ef302506b26c4e0bcd64ce6fb.pack": "d3314661f99a3fbf218dad3ea9a0b972",
".git/objects/pack/pack-142495c81a8cc21ef302506b26c4e0bcd64ce6fb.rev": "b5064143ef03efc54327a3c23f93bc8c",
".git/refs/heads/master": "cd290faceb059d13732dada123bfcd44",
".git/refs/remotes/main/HEAD": "61b6fdadb4094283cc79aa6a8eea908d",
".git/refs/remotes/main/main": "30e67e91d0b41a9c663b690219b1dc5b",
".git/refs/remotes/main/master": "cd290faceb059d13732dada123bfcd44",
"app-ads.txt": "09b71b7609afb5b2b1f919623e820e02",
"assets/AssetManifest.bin": "033943af8c077b8684205ddeb20a92d4",
"assets/AssetManifest.bin.json": "74ad130f6f6ab7dca7e3076ffaad0b21",
"assets/assets/fonts/poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/fonts/silkscreen/Silkscreen-Bold.ttf": "aa595a6499f28048bc58b8c6d0157d56",
"assets/assets/fonts/silkscreen/Silkscreen-Regular.ttf": "fcd900f12e2344da17896f8e5fe55456",
"assets/assets/image/arrow.webp": "974cb0837acf05e259e50e0eb9f06f4f",
"assets/assets/image/flutter.webp": "7446302bf46ea6ac3690a6100eda9936",
"assets/assets/image/head.webp": "8f4c7d8ad053dfea636e85f1b4c6004d",
"assets/assets/image/profile.webp": "a776ca0046a62dac40cca2eee33795ac",
"assets/assets/resume/resume.pdf": "cc71d8d570b650be456db2af3d407919",
"assets/FontManifest.json": "d35c9d1b0ec5823e4fd8873b4776d150",
"assets/fonts/MaterialIcons-Regular.otf": "064e3d8bbd6345d611d2442235bd429f",
"assets/NOTICES": "205ca0084afabea4af484ba34bc9c9dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "6b558b477e786e45f76a14631c624328",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "8d0acfbf774979914d3c0d736f4be13e",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "e0d2bf343bf37c03b74d56cbcfb0eeb1",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "5f99f22bc184dc0b06e1088795451f6a",
"index.html": "b9507e9c61c44d8a1648cd3ef8a6f880",
"/": "b9507e9c61c44d8a1648cd3ef8a6f880",
"main.dart.js": "2006c8f2b2d4c08dce6491f72ac678a4",
"manifest.json": "6b50bbead5668a863d7e8979cc4691a6",
"version.json": "536dc42524442522d15a255b5eeebed3",
"_redirects": "f292bd018a713b4c495c06448dff370e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
