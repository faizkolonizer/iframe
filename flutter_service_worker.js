'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1e397a433f75491042fa5d00cedee0fc",
"version.json": "cedafb21a287abcebdb73e1f30f4ddf0",
"index.html": "72c8d2a9cc333c5f61614d6ccaeac9d1",
"/": "72c8d2a9cc333c5f61614d6ccaeac9d1",
"main.dart.js": "33071d245297f4a84ca23a931bd775d0",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "18e5e55ad54a12353e90595fc8ddf3b4",
"icons/Icon-192.png": "80112d764b4af8e1d1886c6dfdadcc55",
"icons/Icon-maskable-192.png": "80112d764b4af8e1d1886c6dfdadcc55",
"icons/Icon-maskable-512.png": "33cb9698813ae377b658778d01629231",
"icons/Icon-512.png": "33cb9698813ae377b658778d01629231",
"manifest.json": "c8205fedd5b416fc7b505d0318fd9ebf",
"assets/shorebird.yaml": "6df6ba2ab323b40429abd4142a8f2c7b",
"assets/AssetManifest.json": "4beed7c6dc0278599e94d402026678b2",
"assets/NOTICES": "8c82d595d46fe906f5ae3db42eb0d746",
"assets/FontManifest.json": "8c1172477779a94940964d0a01bebd22",
"assets/AssetManifest.bin.json": "c3a28cc85c50fbcfe5ff168381356d81",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c9ff35237f9df997192a9a204083fca6",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/info.png": "e59db1d3402e65f32ac6269b97412932",
"assets/assets/images/follow%2520Up%2520Time.jpg": "df7d7ca347dfbfb4357da8c49900231d",
"assets/assets/images/transection-icon.jpg": "9d7c871ec7922695615e82f66453bf1a",
"assets/assets/images/uparraw.svg": "ce3d7eddd38e8d2acc3fe7c370d22e88",
"assets/assets/images/double_farward_arrow.svg": "81b296d0f9a3c775442ceedac1e25f53",
"assets/assets/images/customer%2520profile.png": "c2f3fa555df2d0655ee257a5e885b131",
"assets/assets/images/hand_money.svg": "546e610e7b472ad01ea5146bd3da963c",
"assets/assets/images/Frame%25201.png": "8f158af38cd828ead21589520d13ba33",
"assets/assets/images/androidFrame1.png": "b3e2ebf97e88eb24a5f8f4db9b031c01",
"assets/assets/images/salesCard.svg": "9ab35ccfc1b6a6c2bf72cd54104672f9",
"assets/assets/images/Color_change.png": "8692905290eeef2c4ca6aa5c1a1b8760",
"assets/assets/images/specialOffer.png": "7c2b7a67d33ed9f48293d0087ae03e0f",
"assets/assets/images/inflowicon.svg": "6d389fd01a7fc18152c3560600fe7405",
"assets/assets/images/Layer_1.jpg": "3eb867f19db7f1193023eacc02d1e5f0",
"assets/assets/images/totalExpense.svg": "a5f1fcc30ee7aa545270717bd0adf19a",
"assets/assets/images/click.gif": "55d02494885f85d9439beeb4bf57a171",
"assets/assets/images/funnel.png": "0170e102e130cee603cccf90cdb49571",
"assets/assets/images/Frame%25202.png": "ac3f3ec498eecd084e6eb9d918866aff",
"assets/assets/images/androidFrame2.png": "7972598bc3a39e9d80ea4acd62916178",
"assets/assets/images/privacyPolicy.jpg": "2c02386e1867fa8e24ce6d2f2aeb8a76",
"assets/assets/images/offer.png": "a7e01e6c70404d566d6079c121e7c105",
"assets/assets/images/sales.png": "d00d8fb1e48b97e88d883ca9fabd456e",
"assets/assets/images/deleteRecycle.svg": "71fa99f5a52627de0ad668057025f0a6",
"assets/assets/images/uparrow.gif": "8221366ba1a5226cf41ceab350b7c263",
"assets/assets/images/avatardemo.jpg": "aadc07cdf8b02766dbba6a56d4783d95",
"assets/assets/images/Daco_5049572.png": "1500d0c2c515e723c03d2377e26c4b5f",
"assets/assets/images/cancel.svg": "195b67d51e2d653482d3a7e56767a25b",
"assets/assets/images/pre.png": "9a4b6c7c1cbb50ac96f69d842c605956",
"assets/assets/images/lets-icons_out.svg": "5a591b46a3decb5e389db3964a939760",
"assets/assets/images/hidashboard.svg": "f6cc50932d8dbedde80acaceb5057fa0",
"assets/assets/images/gg_profile.svg": "a0adc650f0566163d4988d77dc8c79c2",
"assets/assets/images/leadRecycle.svg": "5d5574a5e02538b4db71600d41c1fdeb",
"assets/assets/images/issues%252003%2520nov.txt": "792894a1168ee5f7607629bd5a8f2ab6",
"assets/assets/images/Vector.svg": "db026b181ba910e0020ac090a7b107b0",
"assets/assets/images/cashBlnc.svg": "3ea33e3e2f27dfec7a1ed3b3c2b5d15f",
"assets/assets/images/TPayable.svg": "349d48a313ee83aea6bb5d201f28ac05",
"assets/assets/images/TReceivble.svg": "2fc254cb8cde06b3e080892b18abadf3",
"assets/assets/images/expenses_icon_set.png": "e032427bc4b76cf827229aea45609586",
"assets/assets/images/instagram.png": "875597c968ee64e7cf5afbdec5f95278",
"assets/assets/images/rupeeCard.svg": "906371710a2ebd31eefcb905bc3e41b3",
"assets/assets/images/outnetflow.svg": "00ad1c3493dee33971d6e34cf60ba5ac",
"assets/assets/images/greenCircle.png": "100478cb223828e45870f964f4ba34cc",
"assets/assets/images/onboardlast.svg": "b2417d3e24a20fc6ccf7c21205f20f96",
"assets/assets/images/chequeSt.jpg": "d9e0cb89e1ad66432185faac419f0b90",
"assets/assets/images/horizontal_loader.gif": "9be0d46331f5d0bc010fb4aff9736639",
"assets/assets/images/downward.svg": "96f1840816e23ae3f0f88a0e22cefb88",
"assets/assets/images/iosFrame2.png": "5144a176b99b20cd998a65c1617d6470",
"assets/assets/images/bankBlnc.svg": "88b77b77abb008455e24237c5b6fa3d8",
"assets/assets/images/delete2page.png": "81050e3656bcd4da4a62c45dfa05885a",
"assets/assets/images/blackCircle.png": "3bd2c1a8a1212f12e18b7a5d07c135c8",
"assets/assets/images/Group.svg": "f9955a640d89245277e2a8665f84d225",
"assets/assets/images/TCash.svg": "1ecad592f345bf7b0698716d0238a4bc",
"assets/assets/images/cancel.jpg": "6a2356d5a136161dff5c1fd1208f72e1",
"assets/assets/images/mdi_recycle.jpg": "56a10cdd842a5626a02ed448c7caad26",
"assets/assets/images/logout.png": "3a9312fa7737ebf3dbabe747ae588647",
"assets/assets/images/logout.jpg": "f690b690ee305319553fca9a9b4676b5",
"assets/assets/images/TIncome.svg": "43600487c5c6210a041391506f8e0adf",
"assets/assets/images/itemRecycle.svg": "9d91bfdf8f2eefb313ef0793c08022cd",
"assets/assets/images/deactiveLeads.png": "5f300e7ec4c5f37a21b0a7428e509da9",
"assets/assets/images/downarrows.gif": "2dd5b779258fdfd8e4ed272658f81ed3",
"assets/assets/images/importImageRelease.png": "84c920f8333a7e90cab2c4a39199a383",
"assets/assets/images/defaultImage.jpg": "6d1798290585169accaabceaa40c2a0d",
"assets/assets/images/consumption.jpg": "7b5666e42b634755ec018669a571f8ec",
"assets/assets/images/Oval.png": "951530504772b0d89fd4fcca48221930",
"assets/assets/images/TAssets.svg": "03187abfd7cdfa601a4c9ecbea7322d5",
"assets/assets/images/trending_down.svg": "9f813fc29b9ae6c8114e0b1529ff176c",
"assets/assets/images/onboardhomes.svg": "e451304e7c605b74c2852b5713877efd",
"assets/assets/images/downarrow.gif": "774b489aa7dc32405589c6c175ee7ba2",
"assets/assets/images/bellIcon.svg": "90c6144229136ec01c72b2dea3a902bd",
"assets/assets/images/colllectionRecycle.svg": "9fa21405dc40f108818773d5a8121eb9",
"assets/assets/images/bankOpBlnc.svg": "b4022e41e1252024c6128ee2439adaf9",
"assets/assets/images/cashOpBlnc.svg": "da68f67617a3b9182478609b9d4370f0",
"assets/assets/images/Simplification.svg": "155c56c3ceb75749ae2fc115cb46fabd",
"assets/assets/images/Ribbon.png": "c72589f4072303053f63c17f25c5d9b2",
"assets/assets/images/loader.gif": "5750497f830265ab77c0f1697084dedb",
"assets/assets/images/iosFrame13.png": "3e431a504d953527de959a2d75c2375a",
"assets/assets/images/data_not_found.jpg": "5edd86b9566b8c5525c47e4c15af22f8",
"assets/assets/images/assignLead.png": "a24bf259de7e404fa9d9c25bf0f4af52",
"assets/assets/images/downarrow.svg": "7379347bdb9dfb5dfb10e9797d12f202",
"assets/assets/images/customIcon.svg": "8cc2a59c12d7ed95af184883525b8a79",
"assets/assets/images/illustration_dashboard_.jpg": "efdd43447a4d5015300ed083814bbfc0",
"assets/assets/images/icon%2520_trending_down.svg": "9f813fc29b9ae6c8114e0b1529ff176c",
"assets/assets/images/emoji_money_bag.jpg": "17a3783e40a319d0bbb0f8e5d3a58043",
"assets/assets/images/liability_icon_set.png": "d86df152d9fada2fb77b4d7c6ef1179c",
"assets/assets/images/innetFlow.svg": "05a0ed0f0ce7d9411588fc8215b9d82a",
"assets/assets/images/Logo.png": "456addca13825e2e9f815c28c97e9d4b",
"assets/assets/images/splash_screen.jpg": "30874f936562207261a6e76ae7b26385",
"assets/assets/images/App-Icon.png": "ad50a3333f1d8ed96f3bb7cc1ad4ab71",
"assets/assets/images/uparrows.gif": "346cb13b7e64083bdfbbdbf18883a94b",
"assets/assets/images/twitter.png": "f2e574ea8637689c39577f7cb7dfaaa6",
"assets/assets/images/barLines.png": "311ee3ba3f07ad31e09ce6cf996d930a",
"assets/assets/images/icons/journalButtonIcon.svg": "a29bd43aa07ad7249878b65c2436fd49",
"assets/assets/images/icons/Property%2520no..png": "b381fdc13c4a0096de79a26497a1c99f",
"assets/assets/images/icons/producttype.svg": "d3577c18e30ce2620f445b46b09e5d12",
"assets/assets/images/icons/swap_arrow.svg": "3d0f4abc3a9e14f9bb25618eaffce498",
"assets/assets/images/icons/property%2520type.png": "a3954c122e61d093657951d7e96f8276",
"assets/assets/images/icons/contra_icon.svg": "2ff6266495912bf20a6304554b30926c",
"assets/assets/images/icons/project%2520name.png": "dbc663b8dc71a255b29f1d0755796c1c",
"assets/assets/images/icons/breadth.png": "c480bbaa8a03f2fcbaeb0dc4c580bbd3",
"assets/assets/images/icons/searchIconBlack.png": "e4733b9376916620fdaf0431e5a65656",
"assets/assets/images/icons/cell-phone-icon.png": "6cd61fab0ba76d7df3b8ed5f3ba5080d",
"assets/assets/images/icons/lets-icons_out.svg": "772de805dcdac3cd806fde95d024c4b6",
"assets/assets/images/icons/properties.svg": "f885c28350c5364532a2ea1d1574ca5b",
"assets/assets/images/icons/deactivelead.svg": "45f0ab54de67f75984a9ace8d3e1d908",
"assets/assets/images/icons/edit_icon.svg": "6b2dc9f0a4634e65b10965f1c8098bed",
"assets/assets/images/icons/propertyMatIcon.svg": "6393426fc716e96fb24174bd761b9b71",
"assets/assets/images/icons/projectblock.svg": "388d00e43cf435d67f289d4688c983eb",
"assets/assets/images/icons/privacypolicy.svg": "f4c84afb96b265d6badb2de6db9e55e8",
"assets/assets/images/icons/vouchers.svg": "20bf552c757966f00645d095ccd5420e",
"assets/assets/images/icons/newWhatapp.png": "d2df4bd009a6f1df6e26d593a753f467",
"assets/assets/images/icons/storage-upload.png": "e679f787a1545c8e589d222224900cac",
"assets/assets/images/icons/centerIcon.svg": "d8ff49f3b61be53701b8ff82eae2ec5f",
"assets/assets/images/icons/clickHand.svg": "de571ad6416df937d5cc9cdffed3cc8f",
"assets/assets/images/icons/inhand.svg": "34cd71a6ff98363fac2f8ac43221ea8f",
"assets/assets/images/icons/grouphirerchy.svg": "89452d80145cb2fafb38a4d9aa4fedf0",
"assets/assets/images/icons/bookedPropertyIcon.svg": "d9c79f10e79420c2e787a782c51f20d9",
"assets/assets/images/icons/cashhealthreport.svg": "c5763ef1ac3ae945243523703a4d702b",
"assets/assets/images/icons/ledgers.svg": "653903aba7ca9a15f879ef3fd24752fe",
"assets/assets/images/icons/transferButtonIcon.svg": "29fd3e443f1f8a90d41b10fc2bafea7f",
"assets/assets/images/icons/clickhand1.svg": "d64865a7acfe39a747b9bc0edad9df6c",
"assets/assets/images/icons/whatsappImg.png": "a2569ddc9a5a895d46bb230fb9efe03d",
"assets/assets/images/icons/price.png": "0b6a56718d2c83fb86872e2bffc8823c",
"assets/assets/images/icons/expense_icon.svg": "212966528d1a66fe1ac2aa73ed22e4e0",
"assets/assets/images/icons/bar1.png": "1b9b3d128c1c614a960cfd6d0d4fabea",
"assets/assets/images/icons/viewcustomer.svg": "77f54978538d80a10e07cf384a1b611f",
"assets/assets/images/icons/clickhand.gif": "3f5d8e1c50535294ed5ef5dabea7364a",
"assets/assets/images/icons/chequestatement.svg": "0228d747ae8d5fd58a011266b038f1d1",
"assets/assets/images/icons/property%2520price.png": "cabf7c2ab8e470e4d6dd657ea4255061",
"assets/assets/images/icons/commitment.png": "69295dbc3aff28529cc8ec083e4f1f2a",
"assets/assets/images/icons/bar2.png": "5a87b20c31e644a235b85062b2e0b146",
"assets/assets/images/icons/searchnormal.png": "1635931ef6a1ad5cf5efdffe9e303819",
"assets/assets/images/icons/fluent-mdl2_total.svg": "93180451aa3882d7d36bfd7ea43adeb4",
"assets/assets/images/icons/payment%2520type.png": "81b8aee85b0c3dd4d65e5d61fd93f102",
"assets/assets/images/icons/rate.png": "be89e33c2658c182b6c9f10e9730462c",
"assets/assets/images/icons/propertyfeature.svg": "390aa408bb3335ba65935d1d51b6c505",
"assets/assets/images/icons/trans.png": "8f42b8e8ad0a7939b3bcb12373831e4d",
"assets/assets/images/icons/materialIcon.svg": "8d398cfb70bd82b8fa6d473d22bb6b45",
"assets/assets/images/icons/description.png": "926990c35341fe811943ec5f18596126",
"assets/assets/images/icons/calendar.png": "87cf342a74b50cbe1577dc9c30461a4c",
"assets/assets/images/icons/cunsuptionButtonicon.svg": "0cef941188b2549967441f40020727ed",
"assets/assets/images/icons/measurement.png": "11c25b2418c45fab5d1b2ee6eb592e69",
"assets/assets/images/icons/stockPropertyIcon.svg": "6c38afed07986e4729af71be960ea5e8",
"assets/assets/images/icons/purchased.svg": "c3c03dc1808b615f0e4ca0d5100cee62",
"assets/assets/images/icons/homeinventory.svg": "a2d5772280512951ec453def1e8ccc46",
"assets/assets/images/icons/cash.svg": "c85260b344d640e9ee1e83a4fa679078",
"assets/assets/images/icons/pdf_icon.png": "96191edc683e9464e6a916219a418f1f",
"assets/assets/images/icons/searchIconBlock.svg": "047cd5a8c9b74ea69108abf609d4dc7b",
"assets/assets/images/icons/solar_calendar-bold.svg": "e03866ba279c1d5c406e9b717300b779",
"assets/assets/images/icons/materials.svg": "1b247c3827a2712d28f7028466d85c92",
"assets/assets/images/icons/bank.svg": "532e39d18f82747281d6127c766db581",
"assets/assets/images/icons/total%2520area.png": "8ef35538a086fddd47cf3976228ed99a",
"assets/assets/images/icons/length.png": "700fc31b56a59a71cd0a12da71153b79",
"assets/assets/images/icons/offer%2520applied.png": "14e9727103d2827fdca08d45fafdc48d",
"assets/assets/images/icons/lets-icons_in.svg": "6f6961b77bac9bc9006941060b5e21cb",
"assets/assets/images/icons/basil_sort-outline.svg": "c8f53834e3d8bf93bee960fc1c721754",
"assets/assets/images/icons/purchaseButtonIcon.svg": "d119cfc99cb6dcad65a69360a79f3bab",
"assets/assets/images/icons/chat%2520icon.png": "b7f60f8e263e8ed63c6ac4187cb79d2c",
"assets/assets/images/icons/soldPropertyIcon.svg": "7bc8d26bf49534ed208d9f09dfe5f7f6",
"assets/assets/images/icons/settingHome.svg": "dc191db6f4d4550f046e712c9db9d0ed",
"assets/assets/images/icons/opening.svg": "1278d2061cb23a7bc54476ded2a84510",
"assets/assets/images/icons/totalProperty.svg": "767462ae14894af013c8b37ae5fac58f",
"assets/assets/images/icons/image.png": "deb192752cb605f5b071f78fba400fce",
"assets/assets/images/icons/comsumed.svg": "12af3aaec9f7e2db011c4461eca3f05a",
"assets/assets/images/TExpense.svg": "a5f1fcc30ee7aa545270717bd0adf19a",
"assets/assets/images/bottomgreen.svg": "8714785e028b43bf71aecdd93c9a7aba",
"assets/assets/images/linkedin.png": "8c54498de170f54d31a75a7bb0e6c998",
"assets/assets/images/icon_trending_up.svg": "464177bf0fcd0a76fd0b7beffe22cb3d",
"assets/assets/images/topsemicircle.svg": "02375a2f5d4f4857b26584a82776d270",
"assets/assets/images/customerRecycle.svg": "1322604014645b55dd2cef1bd0f0b7f8",
"assets/assets/images/new.png": "565ffcde8c99d3dabc257e3f98d1bb33",
"assets/assets/images/resize%2520icon.png": "2edf0cb69412252e4662cc9168d15c8b",
"assets/assets/images/downwardTrend.jpg": "551ccea0675663e88c36e80e3f186224",
"assets/assets/images/Capa_1.svg": "8857a6a755c68c93017756963678891a",
"assets/assets/images/onboardimage2.svg": "b6b9b2ebafccbc6280516e23e26eeb70",
"assets/assets/images/sortIcon.svg": "75ce2dab4109716fe23c1c5b665a1f33",
"assets/assets/images/GetStart.png": "d205d0f5e9a0435a77ae841f3d1145da",
"assets/assets/images/Logo4.png": "47bbde378271d0c208dc2944ac8dc83e",
"assets/assets/images/bank.png": "b03121aa6325a23b35002d1dcdc746e5",
"assets/assets/images/blue%2520circle.png": "d6ce8a0ce633a825e164d165260c5fde",
"assets/assets/images/viewSales.png": "18a94d59bf6137d3ce8cd9a7f18ede63",
"assets/assets/images/buildingloader.gif": "83a34dfc27bc2f818d247e7f683a0e5c",
"assets/assets/images/cash.png": "5f12ddebb3676238fe9e969b8223add3",
"assets/assets/images/youtube.png": "ca52040004058032766383ad85952220",
"assets/assets/images/Blur_Ellipse.png": "6dcd33e8da0006ca95827f5da743bb57",
"assets/assets/images/hideEntries.jpg": "dee1e6738b2031ef4a0b060282a16727",
"assets/assets/images/treeview%2520asset.png": "0863677ebcac246bd07e031f9039861d",
"assets/assets/images/lets-icons_in.svg": "83d688c8a68f9e0984ac45be2437a456",
"assets/assets/images/property%2520details.png": "00722ae01eda2761821178b93aafeb3d",
"assets/assets/images/income_icon_set.png": "c3af070f54f6a6ad444b076d9547d3c8",
"assets/assets/images/inventoryCard.svg": "62eef5e896778fcb81aaf68682c9d182",
"assets/assets/images/google.png": "937c87b4439809d5b17b82728df09639",
"assets/assets/images/facebook.png": "ceda85dc6354796fd08c69a2032d2b29",
"assets/assets/images/outflowicon.svg": "45d374ee01c85cfd71b9254c28f77b0a",
"assets/assets/images/onboardhome.svg": "30e407f953538e7662409d1c0f190bd3",
"assets/assets/images/logo.svg": "46affd923b3b9abe177d4baf7c58c958",
"assets/assets/images/green.svg": "9a19f353b02867386b88a70f0af98025",
"assets/assets/images/upwardTrend.jpg": "92a54b39be785765344215e24f00588d",
"assets/assets/images/bottomsemicircle.svg": "bd17ea9da2f02e1cd56e1c08933765f2",
"assets/assets/images/consumedd.svg": "3d183522520ac3462655c6c5594a5395",
"assets/assets/images/unconsumed.svg": "363e0014008b3851be59c2b04e5dd6b1",
"assets/assets/images/Filled.jpg": "e9a55e6d76339da8e1dbcee951791d34",
"assets/assets/images/upArrowNetflow.svg": "1d82092e5d6843ac4e9f658864d37aa2",
"assets/assets/images/customars.png": "05cb8439ae56cbffb8cf77d8968cca98",
"assets/assets/images/setting.png": "4421af49e7f68e75741e2d9da73ec581",
"assets/assets/images/dashboard_customize.svg": "ab6968673c69ff11945040410a6b634a",
"assets/assets/images/redCircle.png": "9ecb055d05e23aea2fd11c2d8fc455ad",
"assets/assets/images/measurementIcon.jpg": "ec8215c7b86d22724da0ea74be0efe34",
"assets/assets/images/click%2520here.png": "dc101d024b563d23750733fdf0c5acc0",
"assets/assets/images/assign.svg": "98efe58463bbeb7d002039ed27e0674f",
"assets/assets/images/Wavinghand.svg": "0bf584b3631279501563347a1e16c64a",
"assets/assets/images/navigation.jpg": "91fe98cd9fe9e430ba8f6a772a13ced0",
"assets/assets/images/viewCustomer.png": "9206f5b2f4d678b57f3a1e798aab7a57",
"assets/assets/images/realtyLogo.png": "8f58c4748d804a68d32262e958058cea",
"assets/assets/images/Image.png": "81ed700a45741fe5662cdaf1b7c1f6e3",
"assets/assets/images/expenseConsumed.jpg": "02916312d283197b9239a81a83c83ac2",
"assets/assets/images/financialRecycle.svg": "906081f8b01e95feef07cd59a5b13874",
"assets/assets/images/upward.svg": "98580e90f42d96f6c5f8766830ae1608",
"assets/assets/json/config_hd.json": "0ca2b7ceaec8fd0e01e360af277b36de",
"assets/assets/json/config.json": "cba17f1e4f29e283a7cdd19ce49c2149",
"assets/assets/json/temp.json": "7b8d2079e6828dd7365c35dddfa35867",
"assets/assets/fonts/ibm/IBMPlexSans-Medium.ttf": "361336a2ed1908c5cd8dec2e10aa71a2",
"assets/assets/fonts/ibm/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/ibm/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/ibm/IBMPlexSans-SemiBold.ttf": "3ea7eea66304ac5e02a95265505300fd",
"assets/assets/fonts/ibm/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/ibm/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/ibm/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/ibm/IBMPlexSans-Regular.ttf": "1286abb632c5a409a0a997d11c994e34",
"assets/assets/fonts/ibm/IBMPlexSans-Bold.ttf": "1ae7d0a8e83337da66631aeca59fbb02",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
