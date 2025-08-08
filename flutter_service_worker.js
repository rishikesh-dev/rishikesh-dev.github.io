'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c73f57a771f98f41ea0cbfd364899fee",
".git/config": "904a968f9e7717a8f58d7d85bebfd416",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "42c5b5d6616839e943713d8d8a67b46c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "00ee0de4631dbc88060bf246deb49c3a",
".git/logs/refs/heads/main": "6d44e371415e0b98a460f1698b7b7a23",
".git/logs/refs/remotes/origin/main": "d947fde352a204de25f4982d4b919b54",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/03/e736613a750cdd8d4f54bca28844e2d13257cb": "bd840ac16c281d81f004822f55e1db62",
".git/objects/07/ae8f8229d4a67f4a104087a667f52ad43f8c38": "ad38d8caf0f2ff8e11c8f2fe4b3d0465",
".git/objects/0b/c73c485ae2dc8be49c7524eade68c7b50f633a": "9e8dd11f89ee7cd9e44586b0c519df68",
".git/objects/0d/df0d717b4c6796319b98f55d099aba9cc5f521": "331ba70dcf44c387d65a4082c159c915",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/14/d2b375dc0c2c4aec35b3d9d4bd89d7291c52dd": "ccfdd2e5d5fbb4633b77ee36ca291938",
".git/objects/18/99cbf2ce0ed636ea92ee395ba0d7df4ee518b9": "4decaa71de9bba9a15381736c67e30a6",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1e/9c0689e34630bf50619f90502f490ec18bd3ba": "c8f9d9ab98f88e6c02c16bc8d0b10229",
".git/objects/1f/8c5464414344480d1429ad2c51768ddf61d062": "f05def6b05be7ac4f6b7840cb86069e3",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/21/da2679920855f12d41540e08769743a14656f9": "40fd8d85384241b359ba0a39ba0bf307",
".git/objects/22/16d277786a57b4e3f816b8387c19b0486980f7": "0724b7de57463e1774fde22dc39cbc5d",
".git/objects/24/dee9190b5b4933ff39245b91641e7dc9c1fdd7": "9295ebbe29a39ada46749867c1b35e46",
".git/objects/28/b20cf8c413a976c836e90d6b6c5339b80eb121": "ea48a0d565d1bbfc2b69ac1295044bc0",
".git/objects/30/87930ab45e764cc1cb200020f5ace885347d02": "10bc38399829a8014241e78ce5861e35",
".git/objects/30/e0ee1ec1f5ba2a8f82f456531a1da687a30b25": "80daa9d23aac862a6ba96a3557b62955",
".git/objects/34/bbb475bf3edb610534eb3b3b559669ddd675df": "fe255ce549d2c0661289c2cc3f59ded6",
".git/objects/37/ee7c1bcaaa21c3471e5afd5e089431dec13885": "4039b10e9a65e247a9461f0213d190be",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/3a/6c7b72857c95f4af34eb9fb18e09f5c38240cd": "a908fe6adfee2ff95e061f8707d083f4",
".git/objects/3b/ca89ca88639bfa49166ca607339b23449cbf5d": "619b6a5197871565cae032b53976547b",
".git/objects/3c/b40b1a87e4c0697af47963c0a8a17689300876": "143a8e7f86d44579dd980276aae7c729",
".git/objects/3d/8e36a681e3bc107689297110621e57aa670df8": "7054a3b7ea261a2c807178c4bd1fb0e9",
".git/objects/3e/6c942233c69f6b30cb8e8cdb4eea44b350586f": "a2e21b1c29619d5ed2b41322316f4ed6",
".git/objects/3f/48087ba31dfa11f36836d53cd6225995daf43f": "5d6d6675364cfe7c6f146fefa9703f6e",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/44/e78c0fd25230e3902db1c3187ad371eb1e50ab": "81ec0152608ccb20a0e685e4c0aa2b64",
".git/objects/45/fda1420a9a6ebb054f692922e574c18c172996": "91158b59625f3de3f6878631ae84efde",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/1aa2a0751c49a84fc4c516246d56c2bb19ab0b": "0268408fbbc006ab6901098f05ed3af4",
".git/objects/5b/3e51dd0ab5440b743080e6a8d820f13378c60d": "01bb7fae7f6c0cbb02f002233da7e8a7",
".git/objects/5c/ce9457b683f7221b106dc22c17f62585897e71": "651894d82ad0e1e150d234fdde5966b0",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/60/abb4deb97f541c5ccdd5bbc01af9af4c040abd": "b49dc5b3fb760bc55a988dbbf377699b",
".git/objects/65/cbfe8c48a26bd5b500989238e7da02b18585d0": "2a27064db0f33d3c6a3c825ce48eb417",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6d/9c529b131b1ddebffa22d954e7eecb52c27dc2": "75bef82555265a85f75d60b241fcd3c3",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/615061ee8277ae9a3b24b58325388a8cc769d6": "12162ea99404cf10a9d739ab2287a5d7",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/77/7672bf92271e8d48ae85efc288f56cfe365c2d": "87d7e38c4b4ff81eab313c79bc83d559",
".git/objects/7a/eb58bd1b9436a814a50ee3539d38f7668908c8": "0b0114f1c99b0ed9088d544092449113",
".git/objects/7d/fadffa499cc6d2e2bc506bf51f8ec218e5315e": "c926512f42352018f824b7cf165c82d8",
".git/objects/83/280a4151e30af49623df6b6a404c67720b1ef8": "320d7a486d64040b2fbebc8712e1fca9",
".git/objects/83/7df7d274becc15086ed67c4227ef30aee85afd": "ff4baf9b66083d49d0dfd0736eebeb8f",
".git/objects/86/9bf139475bc9cba9558137bd87d4f066af35d0": "91772e68cc0250920edd883be5d0fd9e",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/87/35fc37eeeb7d52d5cf848c1ddb566e2bfaa26f": "ba441a4880f91abaa62507a371f4e64a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/513d94693ae8100315edbb982d7d243f5469f6": "1a977afa8c0dc3ca507a79160ba48a51",
".git/objects/8c/53daa4ed2b7b40c589d66bfae50dfc4bc000f2": "982c6f0d0cae876d8dd5b13760de1371",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/a9429533783323a412ccee584ba1b4ac0c1f9f": "9b5fa116c42fcb3da2a3bb8244a5ed0e",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/99/b5bea735c340572f29ccd61bfc9de3eb862377": "57c5cb2001fd868940d5dd95c13702b9",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/70be6a9ef052bd26e248428cb4db214663afca": "d5fbd6ae192ce2144bda4b1ab8f84862",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a5/fe6bb8ff01ae847cd009b01258d1df36cb3025": "297edb017f9e45cb70b35d59b9e994b0",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ad/ad146d0ef450a7a172227a113cc57b2ad12f99": "ac215d94ab6bf08a9fc37d05bbe01422",
".git/objects/af/7a0325cb46c7bf86f5d671c5e64046370aebc5": "156fb9b3a69a20a315d95a979566ed94",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/be/67410fd0a5aaf22e118ff0dd3be2dcd441f34c": "6b6267f4eaa77a2f3de6d0252bfef1c8",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/6cc0ec998a01a24a0aef74d56c770f032b202d": "321a43de7a1e5a6b3c29fd3f1ac93ea8",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/cf/dacc96fe07a50c44a9473db9f0431fa986b8a9": "03ad9c2b857228e4ddc2df1754c82b46",
".git/objects/d1/edacdfe37ac1385edc532dec66ee27df3e646d": "2ff45595e1f12fabf3cbdaf0952a43e6",
".git/objects/d2/c018fb938ba8d33679d923709bc6e550d49ce0": "15b95f1bd7f56efffb79c2ab111dde09",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c3749bb7444dc3b61821e0067eb6f338aaae6a": "e7920a27b393910e3d55c28c24faf73a",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/df/b686057696fe1d469d73f921f63bf5c1227421": "c11489bdec9a87217384b161c8fc4cf7",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e2/19e4653a7ca4a158003a306b9c0b80838f5c19": "5adfbc74bf025d12a809a74ff68f64c8",
".git/objects/e2/6db5dd3dbab6fcdb06f7fd9ab9347ead808f02": "2f6d76624a9dec9c6214eeab0f98202e",
".git/objects/e6/1e8e88bdc98d7edba0ba2a372dfd7b4e5c4b3f": "cdc5a17a6724bfcd899294f948824469",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/e9/34b6faddd96d0c1e783cf7a5b68fdf0b630728": "f729d3c04a75d6196dd27910a20e559c",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/b242b3415bfc708e0b1d189b540241c25f435b": "d42f443cd3bcb59c17d26f725addaeb6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/0dd6890d0d2015a7cf4bbcb72e206ffdc7e949": "dd96d65a0310432c9f674728f3b72095",
".git/objects/fd/06010aa9d189c1298e3c5160e849c4ec41fca1": "620b5b562d98f7522942a8fa4aed2036",
".git/refs/heads/main": "4c2687394ee8b23952fb3d74b7c000b6",
".git/refs/remotes/origin/main": "4c2687394ee8b23952fb3d74b7c000b6",
"assets/AssetManifest.bin": "d55d67ae3e00e4d6c08911474d3f9ac0",
"assets/AssetManifest.bin.json": "29ab12792e9922a28acf968e86d5dbcf",
"assets/AssetManifest.json": "ea10e58907d98da028216ff0e6debdbf",
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
"assets/assets/image/arrow.png": "429d2223cc6dfa216013c1ed03d76b12",
"assets/assets/image/flutter.png": "0cb1e3149d08426b1db1677edc51e337",
"assets/assets/image/head.png": "e0d2bf343bf37c03b74d56cbcfb0eeb1",
"assets/assets/image/profile.png": "94ad673569cddbaa197c465c28173197",
"assets/assets/resume/resume.pdf": "cc71d8d570b650be456db2af3d407919",
"assets/FontManifest.json": "177f024bc6995827f3160e78dbf36b71",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "1b9451eb17cd609c560b492c51e91452",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "e0d2bf343bf37c03b74d56cbcfb0eeb1",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "dbf8a2c142daef148b475854102e35e9",
"index.html": "48d0a5fce7ec5a14d821d8c3812e20a1",
"/": "48d0a5fce7ec5a14d821d8c3812e20a1",
"main.dart.js": "051583bb568e3bdf87714def7e84875f",
"manifest.json": "b2e4121448cd084e02d443dd372f614e",
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
