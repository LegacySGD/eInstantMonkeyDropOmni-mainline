(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 960,
	height: 640,
	fps: 30,
	color: "#000000",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib._3Pupil = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ammoBall11 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ballsRemainPortBG = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bananaLight1 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bananaLight2 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bananaLight3 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.blossomTree = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.boardBananaBaseDisplay = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.boardBananaBaseDisplayLandscape = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.boardBananaBaseSingle = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.boardHorizLong = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.boardHorizShort = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.boardLogo = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bottomPost = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.columnBase = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.columnTopper = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00000 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00001 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00002 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00003 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00004 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00005 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00006 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00007 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00008 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00009 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00010 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00011 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00012 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00013 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00014 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00015 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00016 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00017 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00018 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00019 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00020 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00021 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00022 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00023 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00024 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00025 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00026 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00027 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00028 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.croppedLandBarrel_00029 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00000 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00001 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00002 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00003 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00004 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00005 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00006 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00007 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00008 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00009 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00010 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00011 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00012 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00013 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00014 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00015 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00016 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00017 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00018 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00019 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00020 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00021 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00022 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00023 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00024 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00025 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00026 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00027 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00028 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.croppedPortBarrel_00029 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.dropBoardBack = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.emptyHole = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.goldGong1 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.goldGong2 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.goldGong3 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.gong1Stand = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.gong2Stand = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.gong3Stand = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.landscapeBaseBoard1 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.landscapePlayBtnUp = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.landscapeScoreBoardSide = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.lanternGreen = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.lanternRed = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.lanternString = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00002 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00003 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00004 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00005 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00006 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00007 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00008 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00009 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00010 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00011 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00012 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00013 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00014 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00015 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00016 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00017 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00018 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00019 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00020 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00021 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00022 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00023 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00024 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00025 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00026 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00027 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00028 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.largeburst_00029 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.littleMonkeys = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.m1Mouth = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.m1AwakeBody = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.M1Body = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.M1EyesOpen = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.M1EyesShut = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.M1Feet = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.M1HeadandLegs = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.m1Pupil = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.M2EyesShut = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.m2OpenEyes = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.moneky3_0000_feet = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.moneky3_0001_RIGHTARM = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.moneky3_0002_rightHandAwake = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.moneky3_0003_Leftarm = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.moneky3_0004_asleepHand = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.moneky3_0005_otherawakehand = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.moneky3_0006_lefthand = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.moneky3_0007_closed = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.moneky3_0008_Asleep = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.moneky3_0009_Awakeface = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.moneky3_0010_NOSTRILS = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.moneky3_0011_righteyebrow = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.moneky3_0013_BIGBELLY = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.moneky3_0015_LEGS = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.moneky3_0016_faceShape = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.moneky3_0017_HEAD = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.moneky3_0018_LEFTEAR = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.moneky3_0020_body = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.Monkey1Head = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.monkey2AwakeHead = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.monkey2AwakeMouth = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.monkey2Body = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.monkey2Foot = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.monkey2HangingArm = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.monkey2head = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.monkey2LeftArm = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.monkey2LeftLeg = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.monkey2Pupil = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.monkey2RightArm = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.monkey2Rightleg = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.monkey2SleepBody = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.monkey3AwakeMouth = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00000 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00001 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00002 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00003 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00004 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00005 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00006 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00007 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00008 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00009 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00010 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00011 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00012 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00013 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00014 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00015 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00016 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00017 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00018 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00019 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00020 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00021 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00022 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00023 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00024 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00025 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00026 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00027 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00028 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.monkeyresize_00029 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.pagoda1 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.pagodaTrans = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.plaqueBananas = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00000 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00001 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00002 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00003 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00004 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00005 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00006 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00007 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00008 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00009 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00010 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00011 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00012 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00013 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00014 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00015 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00016 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00017 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00018 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(175);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00019 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(176);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00020 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(177);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00021 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(178);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00022 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(179);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00023 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(180);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00024 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(181);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00025 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(182);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00026 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(183);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00027 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(184);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00028 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(185);
}).prototype = p = new cjs.Sprite();



(lib.portraitBarrel_00029 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(186);
}).prototype = p = new cjs.Sprite();



(lib.post = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(187);
}).prototype = p = new cjs.Sprite();



(lib.postandShadow = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(188);
}).prototype = p = new cjs.Sprite();



(lib.redPost1 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(189);
}).prototype = p = new cjs.Sprite();



(lib.sideLattice = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(190);
}).prototype = p = new cjs.Sprite();



(lib.slabBlue = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(191);
}).prototype = p = new cjs.Sprite();



(lib.slabBlueLandscape = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(192);
}).prototype = p = new cjs.Sprite();



(lib.slabGreen = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(193);
}).prototype = p = new cjs.Sprite();



(lib.slabGreenLandscape = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(194);
}).prototype = p = new cjs.Sprite();



(lib.slabPink = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(195);
}).prototype = p = new cjs.Sprite();



(lib.slabPinkLandscape = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(196);
}).prototype = p = new cjs.Sprite();



(lib.slabPurple = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(197);
}).prototype = p = new cjs.Sprite();



(lib.slabPurpleLandscape = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(198);
}).prototype = p = new cjs.Sprite();



(lib.slabRed = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(199);
}).prototype = p = new cjs.Sprite();



(lib.slabRedLandscape = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(200);
}).prototype = p = new cjs.Sprite();



(lib.slabYellow = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(201);
}).prototype = p = new cjs.Sprite();



(lib.slabYellowLandscape = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(202);
}).prototype = p = new cjs.Sprite();



(lib.sleepylids = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(203);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00002 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00003 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00004 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00005 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00006 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00007 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00008 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00009 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00010 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00011 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00012 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00013 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00014 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00015 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00016 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00017 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00018 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00019 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00020 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00021 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00022 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00023 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00024 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00025 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00026 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00027 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.smallBurst_00028 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_2"];
	this.gotoAndStop(204);
}).prototype = p = new cjs.Sprite();



(lib.starburst11 = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.sun = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.tiledFloor = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.woodenPlaqueBg = function() {
	this.spriteSheet = ss["monkeyDropGameMaster_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.yellowRectangleSlab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slabYellow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,17);


(lib.vine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#005E20").setStrokeStyle(2.5,1,1).moveTo(0,79.3).lineTo(0,-79.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-80.5,2.5,161);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.monkey2RightArm();
	this.instance.setTransform(-58,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-41,116,82);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.monkey2LeftArm();
	this.instance.setTransform(-58.9,-42.3,1,1,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-42.3,124,84.7);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.monkey2SleepBody();
	this.instance.setTransform(-3.4,-41.8,1,1,54.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.4,-41.8,76.9,83.6);


(lib.tiledFloor_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tiledFloor();
	this.instance.setTransform(0,0,1.067,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,120);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#FFFFC4").setStrokeStyle(2.5,1,1).moveTo(58.9,59.4).lineTo(50.2,69.8).moveTo(-47,-69.7).lineTo(-58.9,-69.8);
	this.shape.setTransform(-124.1,82.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.2,11.6,120.3,142.2);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#FFFFC4").setStrokeStyle(2.5,1,1).moveTo(6.5,-98.6).lineTo(-3.6,-104.4).moveTo(-13.8,-76.8).lineTo(-26.8,-82.6).moveTo(-37,-16).lineTo(-55.8,-16).moveTo(55.8,87).lineTo(42.8,104.4);
	this.shape.setTransform(-97.9,29);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.9,-76.6,114.2,211.3);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#FFFFC4").setStrokeStyle(2.5,1,1).moveTo(55.1,-87).lineTo(42.1,-108.7).moveTo(26.1,-52.2).lineTo(-14.5,-72.5).moveTo(-2.9,-39.1).lineTo(-26.1,-47.8).moveTo(26.1,44.9).lineTo(2.9,60.9).moveTo(23.2,2.9).lineTo(-59.5,4.3).moveTo(59.5,58).lineTo(29,108.7);
	this.shape.setTransform(-66.7,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.4,-101.3,121.4,220);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#FFFFC4").setStrokeStyle(2.5,1,1).moveTo(31.2,20.3).lineTo(-54.4,21.7).moveTo(42.8,30.4).lineTo(-2.2,63.8).moveTo(45.7,36.2).lineTo(25.4,72.5).moveTo(42.8,7.3).lineTo(-39.9,-20.3).moveTo(54.4,-17.4).lineTo(15.2,-72.5).moveTo(42.8,-7.2).lineTo(-10.9,-34.8);
	this.shape.setTransform(-31.2,-10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.8,-83.9,111.3,147.5);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#FFFFC4").setStrokeStyle(2.5,1,1).moveTo(37,0).lineTo(13.8,-7.2).moveTo(39.9,-18.8).lineTo(25.4,-33.3).moveTo(34.1,13).lineTo(-39.9,13).moveTo(38.4,20.3).lineTo(25.4,33.3);
	this.shape.setTransform(-26.8,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.9,-36,82.3,69.2);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#FFFFC4").setStrokeStyle(1,1,1).moveTo(17.7,-33.1).lineTo(21.9,-49.4).lineTo(8.4,-34.5).closePath().moveTo(46.3,-0.8).lineTo(32,0.7).lineTo(29.9,-6.9).closePath().moveTo(23,40.2).lineTo(24.6,49.4).lineTo(17.2,40.3).closePath().moveTo(-24.7,-27.9).lineTo(-34.4,-30.6).lineTo(-27,-22.2).closePath().moveTo(-32.4,20.8).lineTo(-46.3,27.4).lineTo(-37.9,18).closePath();

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFF00").beginStroke().moveTo(17.2,40.3).lineTo(23,40.2).lineTo(24.6,49.4).closePath().moveTo(-37.9,18).lineTo(-32.4,20.8).lineTo(-46.3,27.4).closePath().moveTo(29.9,-6.9).lineTo(46.3,-0.8).lineTo(32,0.7).closePath().moveTo(-34.4,-30.6).lineTo(-24.7,-27.9).lineTo(-27,-22.2).closePath().moveTo(8.4,-34.5).lineTo(21.9,-49.4).lineTo(17.7,-33.1).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.2,-50.3,94.6,100.8);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slabRedLandscape();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,35);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boardBananaBaseDisplayLandscape();
	this.instance.setTransform(0,0,0.397,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boardBananaBaseDisplayLandscape();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126,50);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boardBananaBaseSingle();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,50);


(lib.sun_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sun();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,271,171);


(lib.starBurstLines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.starburst11();
	this.instance.setTransform(-225.5,-225.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.5,-225.5,451,451);


(lib.soundLines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("rgba(255,255,255,0)").setStrokeStyle(1,1,1).moveTo(40.3,0).curveTo(40.3,16.7,28.5,28.5).curveTo(16.7,40.3,0,40.3).curveTo(-16.7,40.3,-28.5,28.5).curveTo(-40.3,16.7,-40.3,0).curveTo(-40.3,-16.7,-28.5,-28.5).curveTo(-16.7,-40.3,0,-40.3).curveTo(16.7,-40.3,28.5,-28.5).curveTo(40.3,-16.7,40.3,0).closePath();

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("rgba(255,255,255,0.502)").setStrokeStyle(1,1,1).moveTo(-42,-0).curveTo(-42,-17.4,-29.7,-29.7).curveTo(-17.5,-42,-0.1,-42).curveTo(17.4,-42,29.7,-29.7).curveTo(42,-17.4,42,-0.1).curveTo(42,17.4,29.7,29.7).curveTo(27.7,31.7,25.7,33.3).curveTo(14.7,42,0.2,42).curveTo(-14.5,42,-25.4,33.5).curveTo(-27.6,31.8,-29.6,29.8).curveTo(-42,17.4,-42,-0).closePath();

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-43.8,0).curveTo(-43.8,-18.1,-30.9,-30.9).curveTo(-18.1,-43.8,0,-43.8).curveTo(18.1,-43.8,30.9,-30.9).curveTo(43.8,-18.1,43.8,0).curveTo(43.8,18.1,30.9,30.9).curveTo(28.9,33,26.6,34.8).curveTo(15.2,43.8,0,43.8).curveTo(-15.2,43.8,-26.6,34.8).curveTo(-28.9,33,-30.9,30.9).curveTo(-43.8,18.1,-43.8,0).closePath();

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-45.5,0).curveTo(-45.5,-18.8,-32.3,-32.1).curveTo(-18.9,-45.5,-0.1,-45.5).curveTo(18.8,-45.5,32,-32.4).curveTo(45.5,-18.9,45.5,-0.1).curveTo(45.5,18.7,32.5,31.9).curveTo(29.9,34.4,27.7,36.2).curveTo(15.9,45.5,0.1,45.5).curveTo(-15.8,45.5,-27.6,36.2).curveTo(-29.9,34.4,-32.1,32.3).curveTo(-45.5,18.9,-45.5,0).closePath();

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-47.2,0).curveTo(-47.2,-19.5,-33.5,-33.3).curveTo(-19.6,-47.1,-0.1,-47.2).curveTo(19.5,-47.2,33.3,-33.5).curveTo(47.1,-19.6,47.2,-0.1).curveTo(47.2,19.4,33.6,33.2).curveTo(31.1,35.7,28.7,37.5).curveTo(16.4,47.1,0.1,47.2).curveTo(-16.4,47.2,-28.7,37.5).curveTo(-31.1,35.7,-33.3,33.5).curveTo(-47.2,19.6,-47.2,0).closePath();

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-49,0).curveTo(-49,-20.3,-34.6,-34.5).curveTo(-20.3,-48.9,-0.1,-49).curveTo(20.3,-48.9,34.5,-34.8).curveTo(48.9,-20.3,49,-0.1).curveTo(48.9,20.2,34.8,34.5).curveTo(32.1,37,29.8,39).curveTo(17,48.9,0.1,49).curveTo(-17,48.9,-29.8,39).curveTo(-32.3,37,-34.5,34.6).curveTo(-49,20.3,-49,0).closePath();

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-50.6,0).curveTo(-50.6,-20.9,-35.9,-35.8).curveTo(-20.9,-50.6,-0.1,-50.6).curveTo(20.9,-50.6,35.8,-35.9).curveTo(50.6,-20.9,50.6,-0.1).curveTo(50.6,21,36,35.7).curveTo(33.3,38.4,30.8,40.4).curveTo(17.6,50.6,0.1,50.6).curveTo(-17.6,50.6,-30.8,40.3).curveTo(-33.4,38.3,-35.8,35.9).curveTo(-50.6,21,-50.6,0).closePath();

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-52.4,0).curveTo(-52.4,-21.7,-37.1,-37).curveTo(-21.6,-52.4,-0.1,-52.4).curveTo(21.7,-52.4,37,-37.1).curveTo(52.4,-21.6,52.4,-0.1).curveTo(52.3,21.8,37.1,37).curveTo(34.4,39.8,31.8,41.8).curveTo(18.1,52.4,0.1,52.4).curveTo(-18.2,52.4,-31.8,41.7).curveTo(-34.5,39.6,-37,37.1).curveTo(-52.4,21.7,-52.4,0).closePath();

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-54.1,0).curveTo(-54.1,-22.4,-38.3,-38.3).curveTo(-22.3,-54.1,0,-54.1).curveTo(22.4,-54.1,38.3,-38.3).curveTo(54.1,-22.3,54.1,-0.1).curveTo(54,22.5,38.3,38.3).curveTo(35.5,41,32.8,43.1).curveTo(18.7,54.1,0.1,54.1).curveTo(-18.8,54.1,-32.9,43).curveTo(-35.6,40.9,-38.3,38.3).curveTo(-54.1,22.4,-54.1,0).closePath();

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-55.9,0).curveTo(-55.9,-23.1,-39.5,-39.5).curveTo(-23.1,-55.9,0,-55.9).curveTo(23.1,-55.9,39.5,-39.5).curveTo(55.9,-23.1,55.9,0).curveTo(55.9,23.1,39.5,39.5).curveTo(23.1,55.9,0,55.9).curveTo(-23.1,55.9,-39.5,39.5).curveTo(-55.9,23.1,-55.9,0).closePath();

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill().beginStroke("rgba(255,255,255,0.8)").setStrokeStyle(1,1,1).moveTo(-57.6,0).curveTo(-57.6,-23.9,-40.7,-40.7).curveTo(-23.9,-57.6,0,-57.6).curveTo(23.9,-57.6,40.7,-40.7).curveTo(57.6,-23.9,57.6,0).curveTo(57.6,23.9,40.7,40.7).curveTo(23.9,57.6,0,57.6).curveTo(-23.9,57.6,-40.7,40.7).curveTo(-57.6,23.9,-57.6,0).closePath();

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill().beginStroke("rgba(255,255,255,0.6)").setStrokeStyle(1,1,1).moveTo(-59.3,0).curveTo(-59.3,-24.6,-42,-42).curveTo(-24.6,-59.3,0,-59.3).curveTo(24.6,-59.3,42,-42).curveTo(59.3,-24.6,59.3,0).curveTo(59.3,24.6,42,42).curveTo(24.6,59.3,0,59.3).curveTo(-24.6,59.3,-42,42).curveTo(-59.3,24.6,-59.3,0).closePath();

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill().beginStroke("rgba(255,255,255,0.4)").setStrokeStyle(1,1,1).moveTo(-61,0).curveTo(-61,-25.3,-43.1,-43.1).curveTo(-25.3,-61,0,-61).curveTo(25.3,-61,43.1,-43.1).curveTo(61,-25.3,61,0).curveTo(61,25.3,43.1,43.1).curveTo(25.3,61,0,61).curveTo(-25.3,61,-43.1,43.1).curveTo(-61,25.3,-61,0).closePath();

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill().beginStroke("rgba(255,255,255,0.2)").setStrokeStyle(1,1,1).moveTo(-62.8,0).curveTo(-62.8,-26,-44.4,-44.4).curveTo(-26,-62.8,0,-62.8).curveTo(26,-62.8,44.4,-44.4).curveTo(62.8,-26,62.8,0).curveTo(62.8,26,44.4,44.4).curveTo(26,62.8,0,62.8).curveTo(-26,62.8,-44.4,44.4).curveTo(-62.8,26,-62.8,0).closePath();

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill().beginStroke("rgba(255,255,255,0)").setStrokeStyle(1,1,1).moveTo(64.5,0).curveTo(64.5,26.7,45.6,45.6).curveTo(26.7,64.5,0,64.5).curveTo(-26.7,64.5,-45.6,45.6).curveTo(-64.5,26.7,-64.5,0).curveTo(-64.5,-26.7,-45.6,-45.6).curveTo(-26.7,-64.5,0,-64.5).curveTo(26.7,-64.5,45.6,-45.6).curveTo(64.5,-26.7,64.5,0).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},6).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

	// Layer 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill().beginStroke("rgba(255,255,255,0)").setStrokeStyle(1,1,1).moveTo(40.3,0).curveTo(40.3,16.7,28.5,28.5).curveTo(16.7,40.3,0,40.3).curveTo(-16.7,40.3,-28.5,28.5).curveTo(-40.3,16.7,-40.3,0).curveTo(-40.3,-16.7,-28.5,-28.5).curveTo(-16.7,-40.3,0,-40.3).curveTo(16.7,-40.3,28.5,-28.5).curveTo(40.3,-16.7,40.3,0).closePath();

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill().beginStroke("rgba(255,255,255,0.502)").setStrokeStyle(1,1,1).moveTo(-42,-0).curveTo(-42,-17.4,-29.7,-29.7).curveTo(-17.5,-42,-0.1,-42).curveTo(17.4,-42,29.7,-29.7).curveTo(42,-17.4,42,-0.1).curveTo(42,17.4,29.7,29.7).curveTo(27.7,31.7,25.7,33.3).curveTo(14.7,42,0.2,42).curveTo(-14.5,42,-25.4,33.5).curveTo(-27.6,31.8,-29.6,29.8).curveTo(-42,17.4,-42,-0).closePath();

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-43.8,0).curveTo(-43.8,-18.1,-30.9,-30.9).curveTo(-18.1,-43.8,0,-43.8).curveTo(18.1,-43.8,30.9,-30.9).curveTo(43.8,-18.1,43.8,0).curveTo(43.8,18.1,30.9,30.9).curveTo(28.9,33,26.6,34.8).curveTo(15.2,43.8,0,43.8).curveTo(-15.2,43.8,-26.6,34.8).curveTo(-28.9,33,-30.9,30.9).curveTo(-43.8,18.1,-43.8,0).closePath();

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-45.5,0).curveTo(-45.5,-18.8,-32.3,-32.1).curveTo(-18.9,-45.5,-0.1,-45.5).curveTo(18.8,-45.5,32,-32.4).curveTo(45.5,-18.9,45.5,-0.1).curveTo(45.5,18.7,32.5,31.9).curveTo(29.9,34.4,27.7,36.2).curveTo(15.9,45.5,0.1,45.5).curveTo(-15.8,45.5,-27.6,36.2).curveTo(-29.9,34.4,-32.1,32.3).curveTo(-45.5,18.9,-45.5,0).closePath();

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-47.2,0).curveTo(-47.2,-19.5,-33.5,-33.3).curveTo(-19.6,-47.1,-0.1,-47.2).curveTo(19.5,-47.2,33.3,-33.5).curveTo(47.1,-19.6,47.2,-0.1).curveTo(47.2,19.4,33.6,33.2).curveTo(31.1,35.7,28.7,37.5).curveTo(16.4,47.1,0.1,47.2).curveTo(-16.4,47.2,-28.7,37.5).curveTo(-31.1,35.7,-33.3,33.5).curveTo(-47.2,19.6,-47.2,0).closePath();

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-49,0).curveTo(-49,-20.3,-34.6,-34.5).curveTo(-20.3,-48.9,-0.1,-49).curveTo(20.3,-48.9,34.5,-34.8).curveTo(48.9,-20.3,49,-0.1).curveTo(48.9,20.2,34.8,34.5).curveTo(32.1,37,29.8,39).curveTo(17,48.9,0.1,49).curveTo(-17,48.9,-29.8,39).curveTo(-32.3,37,-34.5,34.6).curveTo(-49,20.3,-49,0).closePath();

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-50.6,0).curveTo(-50.6,-20.9,-35.9,-35.8).curveTo(-20.9,-50.6,-0.1,-50.6).curveTo(20.9,-50.6,35.8,-35.9).curveTo(50.6,-20.9,50.6,-0.1).curveTo(50.6,21,36,35.7).curveTo(33.3,38.4,30.8,40.4).curveTo(17.6,50.6,0.1,50.6).curveTo(-17.6,50.6,-30.8,40.3).curveTo(-33.4,38.3,-35.8,35.9).curveTo(-50.6,21,-50.6,0).closePath();

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-52.4,0).curveTo(-52.4,-21.7,-37.1,-37).curveTo(-21.6,-52.4,-0.1,-52.4).curveTo(21.7,-52.4,37,-37.1).curveTo(52.4,-21.6,52.4,-0.1).curveTo(52.3,21.8,37.1,37).curveTo(34.4,39.8,31.8,41.8).curveTo(18.1,52.4,0.1,52.4).curveTo(-18.2,52.4,-31.8,41.7).curveTo(-34.5,39.6,-37,37.1).curveTo(-52.4,21.7,-52.4,0).closePath();

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-54.1,0).curveTo(-54.1,-22.4,-38.3,-38.3).curveTo(-22.3,-54.1,0,-54.1).curveTo(22.4,-54.1,38.3,-38.3).curveTo(54.1,-22.3,54.1,-0.1).curveTo(54,22.5,38.3,38.3).curveTo(35.5,41,32.8,43.1).curveTo(18.7,54.1,0.1,54.1).curveTo(-18.8,54.1,-32.9,43).curveTo(-35.6,40.9,-38.3,38.3).curveTo(-54.1,22.4,-54.1,0).closePath();

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-55.9,0).curveTo(-55.9,-23.1,-39.5,-39.5).curveTo(-23.1,-55.9,0,-55.9).curveTo(23.1,-55.9,39.5,-39.5).curveTo(55.9,-23.1,55.9,0).curveTo(55.9,23.1,39.5,39.5).curveTo(23.1,55.9,0,55.9).curveTo(-23.1,55.9,-39.5,39.5).curveTo(-55.9,23.1,-55.9,0).closePath();

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill().beginStroke("rgba(255,255,255,0.8)").setStrokeStyle(1,1,1).moveTo(-57.6,0).curveTo(-57.6,-23.9,-40.7,-40.7).curveTo(-23.9,-57.6,0,-57.6).curveTo(23.9,-57.6,40.7,-40.7).curveTo(57.6,-23.9,57.6,0).curveTo(57.6,23.9,40.7,40.7).curveTo(23.9,57.6,0,57.6).curveTo(-23.9,57.6,-40.7,40.7).curveTo(-57.6,23.9,-57.6,0).closePath();

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill().beginStroke("rgba(255,255,255,0.6)").setStrokeStyle(1,1,1).moveTo(-59.3,0).curveTo(-59.3,-24.6,-42,-42).curveTo(-24.6,-59.3,0,-59.3).curveTo(24.6,-59.3,42,-42).curveTo(59.3,-24.6,59.3,0).curveTo(59.3,24.6,42,42).curveTo(24.6,59.3,0,59.3).curveTo(-24.6,59.3,-42,42).curveTo(-59.3,24.6,-59.3,0).closePath();

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill().beginStroke("rgba(255,255,255,0.4)").setStrokeStyle(1,1,1).moveTo(-61,0).curveTo(-61,-25.3,-43.1,-43.1).curveTo(-25.3,-61,0,-61).curveTo(25.3,-61,43.1,-43.1).curveTo(61,-25.3,61,0).curveTo(61,25.3,43.1,43.1).curveTo(25.3,61,0,61).curveTo(-25.3,61,-43.1,43.1).curveTo(-61,25.3,-61,0).closePath();

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill().beginStroke("rgba(255,255,255,0.2)").setStrokeStyle(1,1,1).moveTo(-62.8,0).curveTo(-62.8,-26,-44.4,-44.4).curveTo(-26,-62.8,0,-62.8).curveTo(26,-62.8,44.4,-44.4).curveTo(62.8,-26,62.8,0).curveTo(62.8,26,44.4,44.4).curveTo(26,62.8,0,62.8).curveTo(-26,62.8,-44.4,44.4).curveTo(-62.8,26,-62.8,0).closePath();

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill().beginStroke("rgba(255,255,255,0)").setStrokeStyle(1,1,1).moveTo(64.5,0).curveTo(64.5,26.7,45.6,45.6).curveTo(26.7,64.5,0,64.5).curveTo(-26.7,64.5,-45.6,45.6).curveTo(-64.5,26.7,-64.5,0).curveTo(-64.5,-26.7,-45.6,-45.6).curveTo(-26.7,-64.5,0,-64.5).curveTo(26.7,-64.5,45.6,-45.6).curveTo(64.5,-26.7,64.5,0).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15}]}).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.3,-41.3,82.6,82.6);


(lib.smallStarBurst = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(27).call(this.frame_28).wait(1));

	// Layer 1
	this.instance = new lib.smallBurst_00002();
	this.instance.setTransform(-98.5,-86.5);

	this.instance_1 = new lib.smallBurst_00003();
	this.instance_1.setTransform(-98.5,-86.5);

	this.instance_2 = new lib.smallBurst_00004();
	this.instance_2.setTransform(-98.5,-86.5);

	this.instance_3 = new lib.smallBurst_00005();
	this.instance_3.setTransform(-98.5,-86.5);

	this.instance_4 = new lib.smallBurst_00006();
	this.instance_4.setTransform(-98.5,-86.5);

	this.instance_5 = new lib.smallBurst_00007();
	this.instance_5.setTransform(-98.5,-86.5);

	this.instance_6 = new lib.smallBurst_00008();
	this.instance_6.setTransform(-98.5,-86.5);

	this.instance_7 = new lib.smallBurst_00009();
	this.instance_7.setTransform(-98.5,-86.5);

	this.instance_8 = new lib.smallBurst_00010();
	this.instance_8.setTransform(-98.5,-86.5);

	this.instance_9 = new lib.smallBurst_00011();
	this.instance_9.setTransform(-98.5,-86.5);

	this.instance_10 = new lib.smallBurst_00012();
	this.instance_10.setTransform(-98.5,-86.5);

	this.instance_11 = new lib.smallBurst_00013();
	this.instance_11.setTransform(-98.5,-86.5);

	this.instance_12 = new lib.smallBurst_00014();
	this.instance_12.setTransform(-98.5,-86.5);

	this.instance_13 = new lib.smallBurst_00015();
	this.instance_13.setTransform(-98.5,-86.5);

	this.instance_14 = new lib.smallBurst_00016();
	this.instance_14.setTransform(-98.5,-86.5);

	this.instance_15 = new lib.smallBurst_00017();
	this.instance_15.setTransform(-98.5,-86.5);

	this.instance_16 = new lib.smallBurst_00018();
	this.instance_16.setTransform(-98.5,-86.5);

	this.instance_17 = new lib.smallBurst_00019();
	this.instance_17.setTransform(-98.5,-86.5);

	this.instance_18 = new lib.smallBurst_00020();
	this.instance_18.setTransform(-98.5,-86.5);

	this.instance_19 = new lib.smallBurst_00021();
	this.instance_19.setTransform(-98.5,-86.5);

	this.instance_20 = new lib.smallBurst_00022();
	this.instance_20.setTransform(-98.5,-86.5);

	this.instance_21 = new lib.smallBurst_00023();
	this.instance_21.setTransform(-98.5,-86.5);

	this.instance_22 = new lib.smallBurst_00024();
	this.instance_22.setTransform(-98.5,-86.5);

	this.instance_23 = new lib.smallBurst_00025();
	this.instance_23.setTransform(-98.5,-86.5);

	this.instance_24 = new lib.smallBurst_00026();
	this.instance_24.setTransform(-98.5,-86.5);

	this.instance_25 = new lib.smallBurst_00027();
	this.instance_25.setTransform(-98.5,-86.5);

	this.instance_26 = new lib.smallBurst_00028();
	this.instance_26.setTransform(-98.5,-86.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-86.5,197,173);


(lib.smallBonusStarBurst = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_27 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(27).call(this.frame_27).wait(1));

	// Layer 1
	this.instance = new lib.smallBurst_00002();
	this.instance.setTransform(-98.5,-86.5);

	this.instance_1 = new lib.smallBurst_00003();
	this.instance_1.setTransform(-98.5,-86.5);

	this.instance_2 = new lib.smallBurst_00004();
	this.instance_2.setTransform(-98.5,-86.5);

	this.instance_3 = new lib.smallBurst_00005();
	this.instance_3.setTransform(-98.5,-86.5);

	this.instance_4 = new lib.smallBurst_00006();
	this.instance_4.setTransform(-98.5,-86.5);

	this.instance_5 = new lib.smallBurst_00007();
	this.instance_5.setTransform(-98.5,-86.5);

	this.instance_6 = new lib.smallBurst_00008();
	this.instance_6.setTransform(-98.5,-86.5);

	this.instance_7 = new lib.smallBurst_00009();
	this.instance_7.setTransform(-98.5,-86.5);

	this.instance_8 = new lib.smallBurst_00010();
	this.instance_8.setTransform(-98.5,-86.5);

	this.instance_9 = new lib.smallBurst_00011();
	this.instance_9.setTransform(-98.5,-86.5);

	this.instance_10 = new lib.smallBurst_00012();
	this.instance_10.setTransform(-98.5,-86.5);

	this.instance_11 = new lib.smallBurst_00013();
	this.instance_11.setTransform(-98.5,-86.5);

	this.instance_12 = new lib.smallBurst_00014();
	this.instance_12.setTransform(-98.5,-86.5);

	this.instance_13 = new lib.smallBurst_00015();
	this.instance_13.setTransform(-98.5,-86.5);

	this.instance_14 = new lib.smallBurst_00016();
	this.instance_14.setTransform(-98.5,-86.5);

	this.instance_15 = new lib.smallBurst_00017();
	this.instance_15.setTransform(-98.5,-86.5);

	this.instance_16 = new lib.smallBurst_00018();
	this.instance_16.setTransform(-98.5,-86.5);

	this.instance_17 = new lib.smallBurst_00019();
	this.instance_17.setTransform(-98.5,-86.5);

	this.instance_18 = new lib.smallBurst_00020();
	this.instance_18.setTransform(-98.5,-86.5);

	this.instance_19 = new lib.smallBurst_00021();
	this.instance_19.setTransform(-98.5,-86.5);

	this.instance_20 = new lib.smallBurst_00022();
	this.instance_20.setTransform(-98.5,-86.5);

	this.instance_21 = new lib.smallBurst_00023();
	this.instance_21.setTransform(-98.5,-86.5);

	this.instance_22 = new lib.smallBurst_00024();
	this.instance_22.setTransform(-98.5,-86.5);

	this.instance_23 = new lib.smallBurst_00025();
	this.instance_23.setTransform(-98.5,-86.5);

	this.instance_24 = new lib.smallBurst_00026();
	this.instance_24.setTransform(-98.5,-86.5);

	this.instance_25 = new lib.smallBurst_00027();
	this.instance_25.setTransform(-98.5,-86.5);

	this.instance_26 = new lib.smallBurst_00028();
	this.instance_26.setTransform(-98.5,-86.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-86.5,197,173);


(lib.sleepyLids = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Monkey1Head();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,75);


(lib.slabYellowLandscape_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slabYellowLandscape();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,35);


(lib.slabPurpleLandscape_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slabPurpleLandscape();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,35);


(lib.slabPinkLandscape_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slabPinkLandscape();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,35);


(lib.sideLattice_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sideLattice();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81,81);


(lib.scorboardSectionBgLandscape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.boardBananaBaseSingle();
	this.instance.setTransform(50,0);

	this.instance_1 = new lib.boardBananaBaseDisplayLandscape();
	this.instance_1.setTransform(0,0,0.397,1);

	this.instance_2 = new lib.boardBananaBaseDisplayLandscape();
	this.instance_2.setTransform(130,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256,50);


(lib.redRectangleSlab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slabRed();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,17);


(lib.redPost = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// redPost.png
	this.instance = new lib.redPost1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.instance_1 = new lib.columnBase();
	this.instance_1.setTransform(0,541.1,1.321,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// columnTopper.png
	this.instance_2 = new lib.columnTopper();
	this.instance_2.setTransform(-8,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-65,53,679.1);


(lib.purpleRectangleSlab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slabPurple();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,17);


(lib.prizeAmount = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// prizeAmount
	this.prizeAmount = new cjs.Text("xxxxxxxx", "bold 35px 'Arial'", "#FFFFFF");
	this.prizeAmount.name = "prizeAmount";
	this.prizeAmount.textAlign = "center";
	this.prizeAmount.lineHeight = 0;
	this.prizeAmount.lineWidth = 235;
	this.prizeAmount.setTransform(-0.5,-6.4,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.prizeAmount).to({scaleX:1,scaleY:1,x:-2,y:-25.4},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-6.4,59.8,12.7);


(lib.plaquegrad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-238.5,141.4).lineTo(-238.5,-141.4).lineTo(238.5,-141.4).lineTo(238.5,141.4).closePath();
	mask.setTransform(238.5,141.4);

	// woodenPlaqueBg.jpg
	this.instance = new lib.woodenPlaqueBg();
	this.instance.setTransform(0,-46);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,476,282.9);


(lib.plaqueBananas_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plaqueBananas();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,508,110);


(lib.pinkRectangleSlab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slabPink();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,17);


(lib.pagodaTrans_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pagodaTrans();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,186);


(lib.pagoda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pagoda1();
	this.instance.setTransform(4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,0,1003,687);


(lib.monkeyFrontRightLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.monkey2Rightleg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93,73);


(lib.monkeyfrontLeftLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.monkey2LeftLeg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,71);


(lib.monkeyfrontAwakeMouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.monkey2AwakeMouth();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6,8);


(lib.monkey3RightHandAwake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moneky3_0006_lefthand();
	this.instance.setTransform(-20.5,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-36,41,72);


(lib.monkey3Nostrils = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moneky3_0010_NOSTRILS();
	this.instance.setTransform(-7,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-4,14,8);


(lib.monkey3Legs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moneky3_0015_LEGS();
	this.instance.setTransform(-100.5,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.5,-37,201,74);


(lib.monkey3EyeBrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moneky3_0011_righteyebrow();
	this.instance.setTransform(-5.5,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-5,11,10);


(lib.monkey3Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moneky3_0020_body();
	this.instance.setTransform(-98,-76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,-76.5,196,153);


(lib.monkey3BlinkFace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moneky3_0007_closed();
	this.instance.setTransform(-19.5,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-9.5,39,19);


(lib.monkey3BigBelly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moneky3_0013_BIGBELLY();
	this.instance.setTransform(-80.5,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.5,-50.5,161,101);


(lib.monkey3AwakeRightHand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moneky3_0002_rightHandAwake();
	this.instance.setTransform(-31,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-23.5,62,47);


(lib.monkey3AwakeMouth_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.monkey3AwakeMouth();
	this.instance.setTransform(-9,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-6,18,12);


(lib.monkey3Awake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moneky3_0009_Awakeface();
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.monkey3AsleepFace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moneky3_0008_Asleep();
	this.instance.setTransform(-19,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-16,38,32);


(lib.monkey2Pupil_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.monkey2Pupil();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,7);


(lib.monkey2HangingArm_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.monkey2HangingArm();
	this.instance.setTransform(-20.5,-62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-62.5,41,125);


(lib.monkey2EyesOpen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.m2OpenEyes();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,49);


(lib.monkey2EyesClosed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.M2EyesShut();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,36);


(lib.monkey2AwakeHead_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.monkey2AwakeHead();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,100);


(lib.monkey2AwakeBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.monkey2Body();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,90);


(lib.monkey_3_Head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moneky3_0017_HEAD();
	this.instance.setTransform(-69,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-50.5,138,101);


(lib.moneky3Face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moneky3_0016_faceShape();
	this.instance.setTransform(-27.5,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-37,55,74);


(lib.moneky3AsleepRightHand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moneky3_0005_otherawakehand();
	this.instance.setTransform(-33.5,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-17,67,34);


(lib.moneky3AsleepLeftHand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moneky3_0004_asleepHand();
	this.instance.setTransform(-34,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-20,68,40);


(lib.M1Pupil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.m1Pupil();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3,5);


(lib.M1EyesOpen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.M1EyesOpen();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,24);


(lib.m1EyesBlink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.M1EyesShut();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,13);


(lib.M1BodyAwake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.m1AwakeBody();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,80);


(lib.m1Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.M1Body();
	this.instance.setTransform(-38,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-23.5,76,47);


(lib.m1AwakeMouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.m1Mouth();
	this.instance.setTransform(-1.5,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-2,3,4);


(lib.largeBurst = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(28).call(this.frame_29).wait(1));

	// Layer 1
	this.instance = new lib.largeburst_00002();
	this.instance.setTransform(-98.5,-86.5);

	this.instance_1 = new lib.largeburst_00003();
	this.instance_1.setTransform(-98.5,-86.5);

	this.instance_2 = new lib.largeburst_00004();
	this.instance_2.setTransform(-98.5,-86.5);

	this.instance_3 = new lib.largeburst_00005();
	this.instance_3.setTransform(-98.5,-86.5);

	this.instance_4 = new lib.largeburst_00006();
	this.instance_4.setTransform(-98.5,-86.5);

	this.instance_5 = new lib.largeburst_00007();
	this.instance_5.setTransform(-98.5,-86.5);

	this.instance_6 = new lib.largeburst_00008();
	this.instance_6.setTransform(-98.5,-86.5);

	this.instance_7 = new lib.largeburst_00009();
	this.instance_7.setTransform(-98.5,-86.5);

	this.instance_8 = new lib.largeburst_00010();
	this.instance_8.setTransform(-98.5,-86.5);

	this.instance_9 = new lib.largeburst_00011();
	this.instance_9.setTransform(-98.5,-86.5);

	this.instance_10 = new lib.largeburst_00012();
	this.instance_10.setTransform(-98.5,-86.5);

	this.instance_11 = new lib.largeburst_00013();
	this.instance_11.setTransform(-98.5,-86.5);

	this.instance_12 = new lib.largeburst_00014();
	this.instance_12.setTransform(-98.5,-86.5);

	this.instance_13 = new lib.largeburst_00015();
	this.instance_13.setTransform(-98.5,-86.5);

	this.instance_14 = new lib.largeburst_00016();
	this.instance_14.setTransform(-98.5,-86.5);

	this.instance_15 = new lib.largeburst_00017();
	this.instance_15.setTransform(-98.5,-86.5);

	this.instance_16 = new lib.largeburst_00018();
	this.instance_16.setTransform(-98.5,-86.5);

	this.instance_17 = new lib.largeburst_00019();
	this.instance_17.setTransform(-98.5,-86.5);

	this.instance_18 = new lib.largeburst_00020();
	this.instance_18.setTransform(-98.5,-86.5);

	this.instance_19 = new lib.largeburst_00021();
	this.instance_19.setTransform(-98.5,-86.5);

	this.instance_20 = new lib.largeburst_00022();
	this.instance_20.setTransform(-98.5,-86.5);

	this.instance_21 = new lib.largeburst_00023();
	this.instance_21.setTransform(-98.5,-86.5);

	this.instance_22 = new lib.largeburst_00024();
	this.instance_22.setTransform(-98.5,-86.5);

	this.instance_23 = new lib.largeburst_00025();
	this.instance_23.setTransform(-98.5,-86.5);

	this.instance_24 = new lib.largeburst_00026();
	this.instance_24.setTransform(-98.5,-86.5);

	this.instance_25 = new lib.largeburst_00027();
	this.instance_25.setTransform(-98.5,-86.5);

	this.instance_26 = new lib.largeburst_00028();
	this.instance_26.setTransform(-98.5,-86.5);

	this.instance_27 = new lib.largeburst_00029();
	this.instance_27.setTransform(-98.5,-86.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.largeBonusBurst = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// Layer 1
	this.instance = new lib.largeburst_00002();
	this.instance.setTransform(-98.5,-86.5);

	this.instance_1 = new lib.largeburst_00003();
	this.instance_1.setTransform(-98.5,-86.5);

	this.instance_2 = new lib.largeburst_00004();
	this.instance_2.setTransform(-98.5,-86.5);

	this.instance_3 = new lib.largeburst_00005();
	this.instance_3.setTransform(-98.5,-86.5);

	this.instance_4 = new lib.largeburst_00006();
	this.instance_4.setTransform(-98.5,-86.5);

	this.instance_5 = new lib.largeburst_00007();
	this.instance_5.setTransform(-98.5,-86.5);

	this.instance_6 = new lib.largeburst_00008();
	this.instance_6.setTransform(-98.5,-86.5);

	this.instance_7 = new lib.largeburst_00009();
	this.instance_7.setTransform(-98.5,-86.5);

	this.instance_8 = new lib.largeburst_00010();
	this.instance_8.setTransform(-98.5,-86.5);

	this.instance_9 = new lib.largeburst_00011();
	this.instance_9.setTransform(-98.5,-86.5);

	this.instance_10 = new lib.largeburst_00012();
	this.instance_10.setTransform(-98.5,-86.5);

	this.instance_11 = new lib.largeburst_00013();
	this.instance_11.setTransform(-98.5,-86.5);

	this.instance_12 = new lib.largeburst_00014();
	this.instance_12.setTransform(-98.5,-86.5);

	this.instance_13 = new lib.largeburst_00015();
	this.instance_13.setTransform(-98.5,-86.5);

	this.instance_14 = new lib.largeburst_00016();
	this.instance_14.setTransform(-98.5,-86.5);

	this.instance_15 = new lib.largeburst_00017();
	this.instance_15.setTransform(-98.5,-86.5);

	this.instance_16 = new lib.largeburst_00018();
	this.instance_16.setTransform(-98.5,-86.5);

	this.instance_17 = new lib.largeburst_00019();
	this.instance_17.setTransform(-98.5,-86.5);

	this.instance_18 = new lib.largeburst_00020();
	this.instance_18.setTransform(-98.5,-86.5);

	this.instance_19 = new lib.largeburst_00021();
	this.instance_19.setTransform(-98.5,-86.5);

	this.instance_20 = new lib.largeburst_00022();
	this.instance_20.setTransform(-98.5,-86.5);

	this.instance_21 = new lib.largeburst_00023();
	this.instance_21.setTransform(-98.5,-86.5);

	this.instance_22 = new lib.largeburst_00024();
	this.instance_22.setTransform(-98.5,-86.5);

	this.instance_23 = new lib.largeburst_00025();
	this.instance_23.setTransform(-98.5,-86.5);

	this.instance_24 = new lib.largeburst_00026();
	this.instance_24.setTransform(-98.5,-86.5);

	this.instance_25 = new lib.largeburst_00027();
	this.instance_25.setTransform(-98.5,-86.5);

	this.instance_26 = new lib.largeburst_00028();
	this.instance_26.setTransform(-98.5,-86.5);

	this.instance_27 = new lib.largeburst_00029();
	this.instance_27.setTransform(-98.5,-86.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-86.5,197,173);


(lib.lanternString_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lanternString();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1,61);


(lib.lanternRed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lanternRed();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,71);


(lib.lanternGreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lanternGreen();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,71);


(lib.landscapeScoreboardSide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.landscapeScoreBoardSide();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93,468);


(lib.greenSlab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slabGreenLandscape();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,35);


(lib.greenRectangleSlab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slabGreen();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,17);


(lib.gradBgLandscape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["#FF9966","#FBE0CE"],[0,1],4,-472,4,128).beginStroke().moveTo(-300,480).lineTo(-300,-480).lineTo(300,-480).lineTo(300,480).closePath();
	this.shape.setTransform(300,480);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,960);


(lib.golfGong3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.goldGong3();
	this.instance.setTransform(-41,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-41.5,82,83);


(lib.goldGong2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.goldGong2();
	this.instance.setTransform(-40.5,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-41,81,82);


(lib.goldGong1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.goldGong1();
	this.instance.setTransform(-41.5,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-42,83,84);


(lib.frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#480000").setStrokeStyle(3,1,1).moveTo(-300,-480).lineTo(300,-480).lineTo(300,480).lineTo(-300,480).closePath();
	this.shape.setTransform(300,480);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,603,963);


(lib.emptyHole_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.emptyHole();
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.dropBoardBack_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dropBoardBack();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,390,461);


(lib.dropBall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ammoBall11();
	this.instance.setTransform(-14,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-14,28,28);


(lib.portraitDarkener = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(0,0,0,0.647)").beginStroke().moveTo(-300,480).lineTo(-300,-480).lineTo(300,-480).lineTo(300,480).closePath();
	this.shape.setTransform(300,480);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,960);


(lib.leaveBtnPort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.exitBtnText = new cjs.Text("EXIT", "bold 20px 'Arial'", "#FFFFFF");
	this.exitBtnText.name = "exitBtnText";
	this.exitBtnText.textAlign = "center";
	this.exitBtnText.lineHeight = 0;
	this.exitBtnText.lineWidth = 188;
	this.exitBtnText.setTransform(103,18.9);

	this.timeline.addTween(cjs.Tween.get(this.exitBtnText).wait(1).to({color:NaN},0).wait(1).to({color:NaN},0).to({_off:true},1).wait(1));

	// BG
	this.instance = new lib.landscapePlayBtnUp();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209,62);


(lib.keepPlayingBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.keepPlayingBtnText = new cjs.Text("KEEP PLAYING", "bold 20px 'Arial'", "#FFFFFF");
	this.keepPlayingBtnText.name = "keepPlayingBtnText";
	this.keepPlayingBtnText.textAlign = "center";
	this.keepPlayingBtnText.lineHeight = 0;
	this.keepPlayingBtnText.lineWidth = 188;
	this.keepPlayingBtnText.setTransform(103,18.9);

	this.timeline.addTween(cjs.Tween.get(this.keepPlayingBtnText).wait(1).to({color:NaN},0).wait(1).to({y:19.9,color:NaN},0).to({_off:true},1).wait(1));

	// BG
	this.instance = new lib.landscapePlayBtnUp();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209,62);


(lib.bottomPost_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottomPost();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,43);


(lib.bottomBoardLand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.landscapeBaseBoard1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,74);


(lib.bonusTxt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.txt = new cjs.Text("Wake one of the \nsleeping monkeys \nto reveal a prize!", "bold 26px 'Arial'", "#FFFFCC");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 0;
	this.txt.lineWidth = 323;
	this.txt.setTransform(-2,-65.1);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.5,-65.1,327,130.3);


(lib.bonusPot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer 2
	this.instance = new lib.portraitBarrel_00000();

	this.instance_1 = new lib.portraitBarrel_00001();

	this.instance_2 = new lib.portraitBarrel_00002();

	this.instance_3 = new lib.portraitBarrel_00003();

	this.instance_4 = new lib.portraitBarrel_00004();

	this.instance_5 = new lib.portraitBarrel_00005();

	this.instance_6 = new lib.portraitBarrel_00006();

	this.instance_7 = new lib.portraitBarrel_00007();

	this.instance_8 = new lib.portraitBarrel_00008();

	this.instance_9 = new lib.portraitBarrel_00009();

	this.instance_10 = new lib.portraitBarrel_00010();

	this.instance_11 = new lib.portraitBarrel_00011();

	this.instance_12 = new lib.portraitBarrel_00012();

	this.instance_13 = new lib.portraitBarrel_00013();

	this.instance_14 = new lib.portraitBarrel_00014();

	this.instance_15 = new lib.portraitBarrel_00015();

	this.instance_16 = new lib.portraitBarrel_00016();

	this.instance_17 = new lib.portraitBarrel_00017();

	this.instance_18 = new lib.portraitBarrel_00018();

	this.instance_19 = new lib.portraitBarrel_00019();

	this.instance_20 = new lib.portraitBarrel_00020();

	this.instance_21 = new lib.portraitBarrel_00021();

	this.instance_22 = new lib.portraitBarrel_00022();

	this.instance_23 = new lib.portraitBarrel_00023();

	this.instance_24 = new lib.portraitBarrel_00024();

	this.instance_25 = new lib.portraitBarrel_00025();

	this.instance_26 = new lib.portraitBarrel_00026();

	this.instance_27 = new lib.portraitBarrel_00027();

	this.instance_28 = new lib.portraitBarrel_00028();

	this.instance_29 = new lib.portraitBarrel_00029();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,110);


(lib.boardLogo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boardLogo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,349,237);


(lib.boardHorizShort_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boardHorizShort();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,479,20);


(lib.boardHorizLong_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boardHorizLong();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,21);


(lib.blueSquareSlab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slabBlueLandscape();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,35);


(lib.blueRectangleSlab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slabBlue();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,17);


(lib.blossomTree_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blossomTree();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,382,384);


(lib.bigMonkeyFoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moneky3_0000_feet();
	this.instance.setTransform(-31,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-37.5,62,75);


(lib.bananaSegment3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bananaLight3();
	this.instance.setTransform(-11,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-16,22,32);


(lib.bananaSegment2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bananaLight2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,22);


(lib.bananaSegment1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bananaLight1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,25);


(lib.bananaScoreSectionLandscape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// boardBananaBaseSingle.png
	this.instance = new lib.boardBananaBaseSingle();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// boardBananaBaseDisplay.png
	this.instance_1 = new lib.boardBananaBaseDisplay();
	this.instance_1.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,100);


(lib.banana3Segment = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bananaLight3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,32);


(lib.ammoBall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ammoBall11();
	this.instance.setTransform(-14,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-14.5,28,28);


(lib._3Pupil_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3Pupil();
	this.instance.setTransform(-2.5,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,5,5);


(lib._3_EyesOpen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// monkey3Awake
	this.instance = new lib.moneky3_0009_Awakeface();
	this.instance.setTransform(-16.7,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.7,-29.5,40,40);


(lib._3_EyesClosed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// monkey3BlinkFace
	this.instance = new lib.moneky3_0007_closed();
	this.instance.setTransform(-16.6,-24.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.6,-24.7,39,19);


(lib.yellowSquareSlab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.slabGreenLandscape = new lib.slabYellowLandscape_1();
	this.slabGreenLandscape.setTransform(17.5,17.5,1,1,0,0,0,17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.slabGreenLandscape).to({alpha:0.301},4).to({alpha:1},5).to({alpha:0.301},5).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,35);


(lib.yellowMarker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.yellowRectangleSlab();
	this.instance.setTransform(40,8.5,1,1,0,0,0,40,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},4).to({alpha:1},5).to({alpha:0.301},5).to({alpha:1},5).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(0,0,0,0.973)").beginStroke().moveTo(-40,8.5).lineTo(-40,-8.5).lineTo(40,-8.5).lineTo(40,8.5).closePath();
	this.shape.setTransform(40,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,17);


(lib.Startled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Layer 1
	this.instance = new lib.Symbol30("synched",0);
	this.instance.setTransform(-4.7,58.7,1.267,1.267,0,-21.8,158.2);

	this.instance_1 = new lib.Symbol30("synched",0);
	this.instance_1.setTransform(-56.5,84.6,0.852,0.852,0,156.9,-23.1);

	this.instance_2 = new lib.Symbol32("synched",0);
	this.instance_2.setTransform(-4.7,58.7,1.267,1.267,0,-21.8,158.2);

	this.instance_3 = new lib.Symbol32("synched",0);
	this.instance_3.setTransform(-56.5,84.6,0.852,0.852,0,156.9,-23.1);

	this.instance_4 = new lib.Symbol34("synched",0);
	this.instance_4.setTransform(-4.7,58.7,1.267,1.267,0,-21.8,158.2);

	this.instance_5 = new lib.Symbol34("synched",0);
	this.instance_5.setTransform(-56.5,84.6,0.852,0.852,0,156.9,-23.1);

	this.instance_6 = new lib.Symbol24("synched",0);
	this.instance_6.setTransform(186.4,105.4,0.522,0.522,0,-176,4);

	this.instance_7 = new lib.Symbol36("synched",0);
	this.instance_7.setTransform(-4.7,58.7,1.267,1.267,0,-21.8,158.2);

	this.instance_8 = new lib.Symbol24("synched",0);
	this.instance_8.setTransform(-185.8,56.1,0.351,0.351,0,2.7,-177.3);

	this.instance_9 = new lib.Symbol36("synched",0);
	this.instance_9.setTransform(-56.5,84.6,0.852,0.852,0,156.9,-23.1);

	this.instance_10 = new lib.Symbol38("synched",0);
	this.instance_10.setTransform(-4.7,58.7,1.267,1.267,0,-21.8,158.2);

	this.instance_11 = new lib.Symbol38("synched",0);
	this.instance_11.setTransform(-56.5,84.6,0.852,0.852,0,156.9,-23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},2).to({state:[{t:this.instance_5},{t:this.instance_4}]},2).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6,p:{scaleX:0.522,scaleY:0.522,skewX:-176,skewY:4,x:186.4,y:105.4}}]},2).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_6,p:{scaleX:0.351,scaleY:0.351,skewX:2.7,skewY:-177.3,x:-57.6,y:-63.2}}]},2).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.7,15.5,194.4,97.9);


(lib.starBurst = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.starBurstLines();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:12.4},0).wait(1).to({rotation:24.8},0).wait(1).to({rotation:37.2},0).wait(1).to({rotation:49.7},0).wait(1).to({rotation:62.1},0).wait(1).to({rotation:74.5},0).wait(1).to({rotation:86.9},0).wait(1).to({rotation:99.3},0).wait(1).to({rotation:111.7},0).wait(1).to({rotation:124.1},0).wait(1).to({rotation:136.6},0).wait(1).to({rotation:149},0).wait(1).to({rotation:161.4},0).wait(1).to({rotation:173.8},0).wait(1).to({rotation:186.2},0).wait(1).to({rotation:198.6},0).wait(1).to({rotation:211},0).wait(1).to({rotation:223.4},0).wait(1).to({rotation:235.9},0).wait(1).to({rotation:248.3},0).wait(1).to({rotation:260.7},0).wait(1).to({rotation:273.1},0).wait(1).to({rotation:285.5},0).wait(1).to({rotation:297.9},0).wait(1).to({rotation:310.3},0).wait(1).to({rotation:322.8},0).wait(1).to({rotation:335.2},0).wait(1).to({rotation:347.6},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.5,-225.5,451,451);


(lib.sleepingMonkey3Asleep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// monkey3EyeBrow
	this.instance = new lib.monkey3EyeBrow();
	this.instance.setTransform(45.1,41,1,1,0,37.2,-142.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:43.5},59).to({scaleX:1,scaleY:1,skewX:37.1,skewY:-142.9,y:41},60).wait(1));

	// monkey3EyeBrow
	this.instance_1 = new lib.monkey3EyeBrow();
	this.instance_1.setTransform(71.1,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:48},59).to({y:45.5},60).wait(1));

	// monkey2head.png
	this.instance_2 = new lib.monkey2head();
	this.instance_2.setTransform(-2.5,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

	// monkey2Body.png
	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(134,48,1.05,1.05,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,rotation:-48.6},59).to({scaleX:1.05,scaleY:1.05,rotation:-48.5},60).wait(1));

	// monkey2HangingArm.png
	this.instance_4 = new lib.monkey2HangingArm_1();
	this.instance_4.setTransform(103,92,1,1,7,0,0,-11.5,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-54.1,rotation:0},59).to({rotation:6.8,x:103.1},60).wait(1));

	// monkey2Foot.png
	this.instance_5 = new lib.monkey2Foot();
	this.instance_5.setTransform(145.5,53);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-1,188,212.6);


(lib.slabRedLandscape_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_19 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(17.5,17.5,1,1,0,0,0,17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},4).to({alpha:1},5).to({alpha:0.301},5).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,35);


(lib.slabGreenLandscape_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.greenSlab();
	this.instance.setTransform(17.5,17.5,1,1,0,0,0,17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},4).to({alpha:1},5).to({alpha:0.301},5).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,35);


(lib.slabBlueLandscape_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.blueSquareSlab();
	this.instance.setTransform(17.5,17.5,1,1,0,0,0,17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},4).to({alpha:1},5).to({alpha:0.301},5).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,35);


(lib.sideLattices = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sideLattice_1();
	this.instance.setTransform(40.5,430.8,1,1,0,0,0,40.5,40.5);

	this.instance_1 = new lib.sideLattice_1();
	this.instance_1.setTransform(40.5,352.7,1,1,0,0,0,40.5,40.5);

	this.instance_2 = new lib.sideLattice_1();
	this.instance_2.setTransform(40.5,274.7,1,1,0,0,0,40.5,40.5);

	this.instance_3 = new lib.sideLattice_1();
	this.instance_3.setTransform(40.5,196.6,1,1,0,0,0,40.5,40.5);

	this.instance_4 = new lib.sideLattice_1();
	this.instance_4.setTransform(40.5,118.6,1,1,0,0,0,40.5,40.5);

	this.instance_5 = new lib.sideLattice_1();
	this.instance_5.setTransform(40.5,40.5,1,1,0,0,0,40.5,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81,471.3);


(lib.redMarker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.redRectangleSlab();
	this.instance.setTransform(40,8.5,1,1,0,0,0,40,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},4).to({alpha:1},5).to({alpha:0.301},5).to({alpha:1},5).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(0,0,0,0.973)").beginStroke().moveTo(-40,8.5).lineTo(-40,-8.5).lineTo(40,-8.5).lineTo(40,8.5).closePath();
	this.shape.setTransform(40,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,17);


(lib.purpleSquareSlab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.slabPurpleLandscape_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},4).to({alpha:1},5).to({alpha:0.301},5).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,35);


(lib.purpleMarker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.purpleRectangleSlab();
	this.instance.setTransform(40,8.5,1,1,0,0,0,40,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},4).to({alpha:1},5).to({alpha:0.301},5).to({alpha:1},5).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(0,0,0,0.973)").beginStroke().moveTo(-40,8.5).lineTo(-40,-8.5).lineTo(40,-8.5).lineTo(40,8.5).closePath();
	this.shape.setTransform(40,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,17);


(lib.plaquesmall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// plaqueBananas
	this.instance = new lib.plaqueBananas_1();
	this.instance.setTransform(254,307,1,1,180,0,0,254,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// plaqueBananas
	this.instance_1 = new lib.plaqueBananas_1();
	this.instance_1.setTransform(254,55,1,1,0,0,0,254,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// plaquegrad
	this.instance_2 = new lib.plaquegrad();
	this.instance_2.setTransform(16.6,38,0.996,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8.1,508,440);


(lib.plaqueLarge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// plaqueBananas
	this.instance = new lib.plaqueBananas_1();
	this.instance.setTransform(508,490.9,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// plaqueBananas
	this.instance_1 = new lib.plaqueBananas_1();
	this.instance_1.setTransform(254,55,1,1,0,0,0,254,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// plaquegrad
	this.instance_2 = new lib.plaquegrad();
	this.instance_2.setTransform(254.1,38,0.996,1.46,0,0,0,238.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-29.3,508,642.4);


(lib.pinkSquareSlab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.slabGreenLandscape = new lib.slabPinkLandscape_1();
	this.slabGreenLandscape.setTransform(17.5,17.5,1,1,0,0,0,17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.slabGreenLandscape).to({alpha:0.301},4).to({alpha:1},5).to({alpha:0.301},5).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,35);


(lib.pinkMarker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.pinkRectangleSlab();
	this.instance.setTransform(40,8.5,1,1,0,0,0,40,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},4).to({alpha:1},5).to({alpha:0.301},5).to({alpha:1},5).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(0,0,0,0.973)").beginStroke().moveTo(-40,8.5).lineTo(-40,-8.5).lineTo(40,-8.5).lineTo(40,8.5).closePath();
	this.shape.setTransform(40,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,17);


(lib.monkeySwinger = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{dropsBall:0,drop:1,"return":30,endFrames:31});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_43 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(13).call(this.frame_43).wait(1));

	// Layer 3
	this.instance = new lib.monkeyresize_00029();
	this.instance.setTransform(3.5,350.5);

	this.instance_1 = new lib.monkeyresize_00000();
	this.instance_1.setTransform(3.5,350.5);

	this.instance_2 = new lib.monkeyresize_00001();
	this.instance_2.setTransform(3.5,350.5);

	this.instance_3 = new lib.monkeyresize_00002();
	this.instance_3.setTransform(3.5,350.5);

	this.instance_4 = new lib.monkeyresize_00003();
	this.instance_4.setTransform(3.5,350.5);

	this.instance_5 = new lib.monkeyresize_00004();
	this.instance_5.setTransform(3.5,350.5);

	this.instance_6 = new lib.monkeyresize_00005();
	this.instance_6.setTransform(3.5,350.5);

	this.instance_7 = new lib.monkeyresize_00006();
	this.instance_7.setTransform(3.5,350.5);

	this.instance_8 = new lib.monkeyresize_00007();
	this.instance_8.setTransform(3.5,350.5);

	this.instance_9 = new lib.monkeyresize_00008();
	this.instance_9.setTransform(3.5,350.5);

	this.instance_10 = new lib.monkeyresize_00009();
	this.instance_10.setTransform(3.5,350.5);

	this.instance_11 = new lib.monkeyresize_00010();
	this.instance_11.setTransform(3.5,350.5);

	this.instance_12 = new lib.monkeyresize_00011();
	this.instance_12.setTransform(3.5,350.5);

	this.instance_13 = new lib.monkeyresize_00012();
	this.instance_13.setTransform(3.5,350.5);

	this.instance_14 = new lib.monkeyresize_00013();
	this.instance_14.setTransform(3.5,350.5);

	this.instance_15 = new lib.monkeyresize_00014();
	this.instance_15.setTransform(3.5,350.5);

	this.instance_16 = new lib.monkeyresize_00015();
	this.instance_16.setTransform(3.5,350.5);

	this.instance_17 = new lib.monkeyresize_00016();
	this.instance_17.setTransform(3.5,350.5);

	this.instance_18 = new lib.monkeyresize_00017();
	this.instance_18.setTransform(3.5,350.5);

	this.instance_19 = new lib.monkeyresize_00018();
	this.instance_19.setTransform(3.5,350.5);

	this.instance_20 = new lib.monkeyresize_00019();
	this.instance_20.setTransform(3.5,350.5);

	this.instance_21 = new lib.monkeyresize_00020();
	this.instance_21.setTransform(3.5,350.5);

	this.instance_22 = new lib.monkeyresize_00021();
	this.instance_22.setTransform(3.5,350.5);

	this.instance_23 = new lib.monkeyresize_00022();
	this.instance_23.setTransform(3.5,350.5);

	this.instance_24 = new lib.monkeyresize_00023();
	this.instance_24.setTransform(3.5,350.5);

	this.instance_25 = new lib.monkeyresize_00024();
	this.instance_25.setTransform(3.5,350.5);

	this.instance_26 = new lib.monkeyresize_00025();
	this.instance_26.setTransform(3.5,350.5);

	this.instance_27 = new lib.monkeyresize_00026();
	this.instance_27.setTransform(3.5,350.5);

	this.instance_28 = new lib.monkeyresize_00027();
	this.instance_28.setTransform(3.5,350.5);

	this.instance_29 = new lib.monkeyresize_00028();
	this.instance_29.setTransform(3.5,350.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).wait(1));

	// Layer 6
	this.instance_30 = new lib.vine();
	this.instance_30.setTransform(65,320.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,239.8,132,297.7);


(lib.monkey3LeftArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// moneky3_0003_Left-arm.png
	this.instance = new lib.moneky3_0003_Leftarm();
	this.instance.setTransform(-46.5,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-30,x:-75.9,y:-19.7},0).wait(1));

	// moneky3AsleepLeftHand
	this.instance_1 = new lib.moneky3AsleepLeftHand();
	this.instance_1.setTransform(56,-21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	// monkey3RightHandAwake
	this.instance_2 = new lib.monkey3RightHandAwake();
	this.instance_2.setTransform(4,-67.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-44,136.5,88);


(lib.monkey3Faces = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 5
	this.instance = new lib.monkey3EyeBrow();
	this.instance.setTransform(-4.1,-26.4,1,1,0,27,-153);

	this.instance_1 = new lib.monkey3EyeBrow();
	this.instance_1.setTransform(12.4,-24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:-24.9}},{t:this.instance,p:{skewX:27,skewY:-153,y:-26.4}}]}).to({state:[{t:this.instance_1,p:{y:-30.4}},{t:this.instance,p:{skewX:1.7,skewY:-178.3,y:-32.4}}]},1).wait(2));

	// monkey3BlinkFace
	this.instance_2 = new lib.monkey3BlinkFace();
	this.instance_2.setTransform(2.9,-15.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1));

	// monkey3Awake
	this.instance_3 = new lib.monkey3Awake();
	this.instance_3.setTransform(3.3,-9.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// monkey3AsleepFace
	this.instance_4 = new lib.monkey3AsleepFace();
	this.instance_4.setTransform(2,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-33.3,38,39.9);


(lib.monekyfrontAwake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.monkey3EyeBrow();
	this.instance.setTransform(-37.8,-206.1,1,1,0,1.7,-178.3);

	this.instance_1 = new lib.monkey3EyeBrow();
	this.instance_1.setTransform(-2.9,-216.4,1,1,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(42));

	// Layer 12
	this.instance_2 = new lib.monkey3Nostrils();
	this.instance_2.setTransform(-10,-186.2,1,1,-23.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(42));

	// M2EyesShut.png
	this.instance_3 = new lib.monkey2EyesClosed();
	this.instance_3.setTransform(-15.5,-193.5,1,1,0,0,0,32.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},2).wait(7).to({_off:false},0).wait(2).to({_off:true},1).wait(2).to({_off:false},0).wait(2).to({_off:true},1).wait(12).to({_off:false},0).wait(4).to({_off:true},1).wait(8));

	// monkeyfrontAwakeMouth
	this.instance_4 = new lib.monkeyfrontAwakeMouth();
	this.instance_4.setTransform(-3,-167,1,1,0,0,0,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42));

	// monkey2Pupil.png copy
	this.instance_5 = new lib.monkey2Pupil_1();
	this.instance_5.setTransform(-19.9,-192.5,1,1,0,0,0,3.5,3.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).wait(6).to({_off:true},1).wait(3).to({_off:false,x:-34.4},0).to({_off:true},2).wait(3).to({_off:false,x:-27.4,y:-191.5},0).wait(8).to({x:-30.4,y:-198},0).to({_off:true},4).wait(5).to({_off:false,x:-19.9,y:-192.5},0).wait(8));

	// monkey2Pupil.png
	this.instance_6 = new lib.monkey2Pupil_1();
	this.instance_6.setTransform(6.5,-201.5,1,1,0,0,0,3.5,3.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).wait(6).to({_off:true},1).wait(3).to({_off:false,x:-8},0).to({_off:true},2).wait(3).to({_off:false,x:-1,y:-200.5},0).wait(8).to({x:-4,y:-207},0).to({_off:true},4).wait(5).to({_off:false,x:6.5,y:-201.5},0).wait(8));

	// m2OpenEyes.png
	this.instance_7 = new lib.monkey2EyesOpen();
	this.instance_7.setTransform(-15.5,-195.5,1,1,0,0,0,34,24.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).wait(6).to({_off:true},1).wait(3).to({_off:false},0).wait(1).to({_off:true},1).wait(3).to({_off:false},0).wait(8).to({_off:true},4).wait(5).to({_off:false},0).wait(8));

	// monkey2AwakeHead.png
	this.instance_8 = new lib.monkey2AwakeHead_1();
	this.instance_8.setTransform(-17,-194,1,1,0,0,0,77.5,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(42));

	// monkey2Body.png
	this.instance_9 = new lib.monkey2AwakeBody();
	this.instance_9.setTransform(8.5,-118,1,1,0,0,0,34,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(42));

	// Layer 13
	this.instance_10 = new lib.Tween18("synched",0);
	this.instance_10.setTransform(3,-147,1,1,0,0,0,-48,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:3.5},19).to({regY:-25.1,rotation:0,y:-147.1},22).wait(1));

	// monkey2LeftLeg.png
	this.instance_11 = new lib.monkeyfrontLeftLeg();
	this.instance_11.setTransform(-37,-55,1,1,0,0,0,41.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(42));

	// monkey2Rightleg.png
	this.instance_12 = new lib.monkeyFrontRightLeg();
	this.instance_12.setTransform(67.5,-56,1,1,0,0,0,46.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(42));

	// monkey2LeftArm.png
	this.instance_13 = new lib.Tween11("synched",0);
	this.instance_13.setTransform(-0.3,-147.1,1,1,0,0,0,35,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({rotation:-5},19).to({rotation:0},22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.3,-244,211.4,224.5);


(lib.moneky3RightArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// moneky3_0001_RIGHT-ARM.png
	this.instance = new lib.moneky3_0001_RIGHTARM();
	this.instance.setTransform(-58,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// moneky3AsleepRightHand
	this.instance_1 = new lib.moneky3AsleepRightHand();
	this.instance_1.setTransform(-52.9,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	// monkey3AwakeRightHand
	this.instance_2 = new lib.monkey3AwakeRightHand();
	this.instance_2.setTransform(-39.3,-30.9,1,1,14.5,0,0,10.9,11.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.4,-49,144.4,98);


(lib.moneky3Feet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bigMonkeyFoot();
	this.instance.setTransform(77.5,6,1,1,0,0,180);

	this.instance_1 = new lib.bigMonkeyFoot();
	this.instance_1.setTransform(-83.5,-7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.5,-44.5,223,88);


(lib.M1HeadAwake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sleepyLids();
	this.instance.setTransform(60,37.5,1,1,0,0,0,60,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,75);


(lib.m1AwakeHead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.M1HeadAwake();
	this.instance.setTransform(0,0,1,1,0,0,0,60,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-37.5,120,75);


(lib.m1Awake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.monkey3EyeBrow();
	this.instance.setTransform(29.6,29.1,0.673,0.673,0,22.2,-157.8);

	this.instance_1 = new lib.monkey3EyeBrow();
	this.instance_1.setTransform(49.1,29.4,0.72,0.72,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(60));

	// Layer 8
	this.instance_2 = new lib.m1AwakeMouth();
	this.instance_2.setTransform(29,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	// monkey3Nostrils
	this.instance_3 = new lib.monkey3Nostrils();
	this.instance_3.setTransform(31.6,44.4,0.729,0.729,0,8.5,-171.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	// m1EyesBlink
	this.instance_4 = new lib.m1EyesBlink();
	this.instance_4.setTransform(35.8,40.3,1,1,0,0,0,17,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(3).to({_off:true},1).wait(16).to({_off:false},0).wait(4).to({_off:true},1).wait(5).to({_off:false},0).wait(4).to({_off:true},1).wait(5).to({_off:false},0).wait(4).to({_off:true},1).wait(6).to({_off:false},0).wait(3));

	// sleepylids.png
	this.instance_5 = new lib.sleepylids();
	this.instance_5.setTransform(22.8,31);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).wait(3).to({_off:true},1).wait(54));

	// M1Pupil copy
	this.instance_6 = new lib.M1Pupil();
	this.instance_6.setTransform(40.7,37.4,1,1,0,0,0,1.5,2.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).wait(1).to({regX:0,regY:0,x:39.2,y:34.9},0).wait(1).to({regX:1.5,regY:2.5,x:40.7,y:37.4},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(15).to({_off:true},1).wait(5).to({_off:false},0).wait(4).to({_off:true},1).wait(5).to({_off:false,x:44.4,y:45.7},0).to({_off:true},5).wait(5).to({_off:false,x:38.3,y:41.5},0).to({_off:true},6).wait(3));

	// M1Pupil
	this.instance_7 = new lib.M1Pupil();
	this.instance_7.setTransform(27,36.2,1,1,0,0,0,1.5,2.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).wait(3).to({_off:true},1).wait(4).to({_off:false},0).wait(15).to({_off:true},1).wait(5).to({_off:false},0).wait(4).to({_off:true},1).wait(5).to({_off:false,x:28.5,y:41.7},0).to({_off:true},5).wait(5).to({_off:false,x:24.6,y:40.3},0).to({_off:true},6).wait(3));

	// M1EyesOpen
	this.instance_8 = new lib.M1EyesOpen_1();
	this.instance_8.setTransform(36,40,1,1,0,0,0,17,12);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).wait(3).to({_off:true},1).wait(4).to({_off:false},0).wait(15).to({_off:true},1).wait(5).to({_off:false},0).wait(4).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).wait(5).to({_off:true},1).wait(3));

	// M1HeadAwake
	this.instance_9 = new lib.M1HeadAwake();
	this.instance_9.setTransform(60,37.5,1,1,0,0,0,60,37.5);

	this.instance_10 = new lib.m1AwakeHead();
	this.instance_10.setTransform(60,37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},59).wait(1));

	// M1BodyAwake
	this.instance_11 = new lib.M1BodyAwake();
	this.instance_11.setTransform(71.5,99,1,1,0,0,0,41.5,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,139);


(lib.m1Asleep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// monkey3EyeBrow
	this.instance = new lib.monkey3EyeBrow();
	this.instance.setTransform(119.9,45.3,0.673,0.673,0,97.4,-82.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:122.4},44).to({x:119.9},45).wait(1));

	// monkey3EyeBrow
	this.instance_1 = new lib.monkey3EyeBrow();
	this.instance_1.setTransform(127.7,62.2,0.72,0.72,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:130.2},44).to({x:127.7},45).wait(1));

	// M1HeadandLegs.png
	this.instance_2 = new lib.M1HeadandLegs();
	this.instance_2.setTransform(0,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// M1Body.png
	this.instance_3 = new lib.m1Body();
	this.instance_3.setTransform(55,86.9,1,1,0,0,0,0,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1.09},44).to({scaleY:1},45).wait(1));

	// M1Feet.png
	this.instance_4 = new lib.M1Feet();
	this.instance_4.setTransform(17,78);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4.2,162,104.2);


(lib.greenMarker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.greenRectangleSlab();
	this.instance.setTransform(40,8.5,1,1,0,0,0,40,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},4).to({alpha:1},5).to({alpha:0.301},5).to({alpha:1},5).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(0,0,0,0.973)").beginStroke().moveTo(-40,8.5).lineTo(-40,-8.5).lineTo(40,-8.5).lineTo(40,8.5).closePath();
	this.shape.setTransform(40,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,17);


(lib.gong3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 2
	this.instance = new lib.golfGong3();
	this.instance.setTransform(97,108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// soundwaves
	this.soundwaves = new lib.soundLines();
	this.soundwaves.setTransform(96.8,107.8,1,1.049);

	this.timeline.addTween(cjs.Tween.get(this.soundwaves).wait(10));

	// burst
	this.starBurst = new lib.starBurst();
	this.starBurst.setTransform(98,110.5,0.499,0.499,0,0,0,2,7.9);

	this.timeline.addTween(cjs.Tween.get(this.starBurst).wait(10));

	// STAND
	this.instance_1 = new lib.gong3Stand();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-6,225,225);


(lib.gong2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 2
	this.instance = new lib.goldGong2_1();
	this.instance.setTransform(97,116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// soundwaves
	this.soundwaves = new lib.soundLines();
	this.soundwaves.setTransform(97.3,116.8,0.935,0.982);

	this.timeline.addTween(cjs.Tween.get(this.soundwaves).wait(10));

	// burst
	this.starBurst = new lib.starBurst();
	this.starBurst.setTransform(97,116.5,0.499,0.499,0,0,0,2,7.9);

	this.timeline.addTween(cjs.Tween.get(this.starBurst).wait(10));

	// stand
	this.instance_1 = new lib.gong2Stand();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,0,225,225);


(lib.gong1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 2
	this.instance = new lib.goldGong1_1();
	this.instance.setTransform(87,102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// soundwaves
	this.soundwaves = new lib.soundLines();
	this.soundwaves.setTransform(85.8,100.8,1,1.049);

	this.timeline.addTween(cjs.Tween.get(this.soundwaves).wait(10));

	// burst
	this.starBurst = new lib.starBurst();
	this.starBurst.setTransform(87,103.5,0.499,0.499,0,0,0,2,7.9);

	this.timeline.addTween(cjs.Tween.get(this.starBurst).wait(10));

	// Layer 1
	this.instance_1 = new lib.gong1Stand();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-13,225,225);


(lib.bonusBarrelPortrait = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(39).call(this.frame_40).wait(1));

	// Layer 2
	this.instance = new lib.croppedPortBarrel_00000();

	this.instance_1 = new lib.croppedPortBarrel_00001();

	this.instance_2 = new lib.croppedPortBarrel_00002();

	this.instance_3 = new lib.croppedPortBarrel_00003();

	this.instance_4 = new lib.croppedPortBarrel_00004();

	this.instance_5 = new lib.croppedPortBarrel_00005();

	this.instance_6 = new lib.croppedPortBarrel_00006();

	this.instance_7 = new lib.croppedPortBarrel_00007();

	this.instance_8 = new lib.croppedPortBarrel_00008();

	this.instance_9 = new lib.croppedPortBarrel_00009();

	this.instance_10 = new lib.croppedPortBarrel_00010();

	this.instance_11 = new lib.croppedPortBarrel_00011();

	this.instance_12 = new lib.croppedPortBarrel_00012();

	this.instance_13 = new lib.croppedPortBarrel_00013();

	this.instance_14 = new lib.croppedPortBarrel_00014();

	this.instance_15 = new lib.croppedPortBarrel_00015();

	this.instance_16 = new lib.croppedPortBarrel_00016();

	this.instance_17 = new lib.croppedPortBarrel_00017();

	this.instance_18 = new lib.croppedPortBarrel_00018();

	this.instance_19 = new lib.croppedPortBarrel_00019();

	this.instance_20 = new lib.croppedPortBarrel_00020();

	this.instance_21 = new lib.croppedPortBarrel_00021();

	this.instance_22 = new lib.croppedPortBarrel_00022();

	this.instance_23 = new lib.croppedPortBarrel_00023();

	this.instance_24 = new lib.croppedPortBarrel_00024();

	this.instance_25 = new lib.croppedPortBarrel_00025();

	this.instance_26 = new lib.croppedPortBarrel_00026();

	this.instance_27 = new lib.croppedPortBarrel_00027();

	this.instance_28 = new lib.croppedPortBarrel_00028();

	this.instance_29 = new lib.croppedPortBarrel_00029();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).wait(11));

	// Layer 5
	this.instance_30 = new lib.smallBonusStarBurst();
	this.instance_30.setTransform(33,23.5);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(12).to({_off:false},0).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,134);


(lib.bonusBarrelLandscapeAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(48).call(this.frame_49).wait(1));

	// Layer 2
	this.instance = new lib.croppedLandBarrel_00000();

	this.instance_1 = new lib.croppedLandBarrel_00001();

	this.instance_2 = new lib.croppedLandBarrel_00002();

	this.instance_3 = new lib.croppedLandBarrel_00003();

	this.instance_4 = new lib.croppedLandBarrel_00004();

	this.instance_5 = new lib.croppedLandBarrel_00005();

	this.instance_6 = new lib.croppedLandBarrel_00006();

	this.instance_7 = new lib.croppedLandBarrel_00007();

	this.instance_8 = new lib.croppedLandBarrel_00008();

	this.instance_9 = new lib.croppedLandBarrel_00009();

	this.instance_10 = new lib.croppedLandBarrel_00010();

	this.instance_11 = new lib.croppedLandBarrel_00011();

	this.instance_12 = new lib.croppedLandBarrel_00012();

	this.instance_13 = new lib.croppedLandBarrel_00013();

	this.instance_14 = new lib.croppedLandBarrel_00014();

	this.instance_15 = new lib.croppedLandBarrel_00015();

	this.instance_16 = new lib.croppedLandBarrel_00016();

	this.instance_17 = new lib.croppedLandBarrel_00017();

	this.instance_18 = new lib.croppedLandBarrel_00018();

	this.instance_19 = new lib.croppedLandBarrel_00019();

	this.instance_20 = new lib.croppedLandBarrel_00020();

	this.instance_21 = new lib.croppedLandBarrel_00021();

	this.instance_22 = new lib.croppedLandBarrel_00022();

	this.instance_23 = new lib.croppedLandBarrel_00023();

	this.instance_24 = new lib.croppedLandBarrel_00024();

	this.instance_25 = new lib.croppedLandBarrel_00025();

	this.instance_26 = new lib.croppedLandBarrel_00026();

	this.instance_27 = new lib.croppedLandBarrel_00027();

	this.instance_28 = new lib.croppedLandBarrel_00028();

	this.instance_29 = new lib.croppedLandBarrel_00029();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).wait(20));

	// Layer 5
	this.instance_30 = new lib.largeBonusBurst();
	this.instance_30.setTransform(122,21.6);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(19).to({_off:false},0).to({_off:true},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252,42);


(lib.board = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.redPost();
	this.instance.setTransform(614.5,343.9,1,1,0,0,180,18.5,271);

	this.instance_1 = new lib.redPost();
	this.instance_1.setTransform(29.6,343.9,1,1,0,0,0,18.5,271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// row1
	this.instance_2 = new lib.post();
	this.instance_2.setTransform(56.5,81.2);

	this.instance_3 = new lib.post();
	this.instance_3.setTransform(573.6,81.2);

	this.instance_4 = new lib.postandShadow();
	this.instance_4.setTransform(142.3,81.2);

	this.instance_5 = new lib.postandShadow();
	this.instance_5.setTransform(228.5,81.2);

	this.instance_6 = new lib.postandShadow();
	this.instance_6.setTransform(314.8,81.2);

	this.instance_7 = new lib.postandShadow();
	this.instance_7.setTransform(487.3,81.2);

	this.instance_8 = new lib.postandShadow();
	this.instance_8.setTransform(401,81.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// row2
	this.instance_9 = new lib.post();
	this.instance_9.setTransform(99.3,148.6);

	this.instance_10 = new lib.postandShadow();
	this.instance_10.setTransform(185.3,148.6);

	this.instance_11 = new lib.postandShadow();
	this.instance_11.setTransform(271.5,148.6);

	this.instance_12 = new lib.postandShadow();
	this.instance_12.setTransform(357.8,148.6);

	this.instance_13 = new lib.post();
	this.instance_13.setTransform(530.3,148.6);

	this.instance_14 = new lib.postandShadow();
	this.instance_14.setTransform(444,148.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// row3
	this.instance_15 = new lib.post();
	this.instance_15.setTransform(56.5,215.7);

	this.instance_16 = new lib.post();
	this.instance_16.setTransform(573.6,215.7);

	this.instance_17 = new lib.postandShadow();
	this.instance_17.setTransform(142.3,215.7);

	this.instance_18 = new lib.postandShadow();
	this.instance_18.setTransform(228.5,215.7);

	this.instance_19 = new lib.postandShadow();
	this.instance_19.setTransform(314.8,215.7);

	this.instance_20 = new lib.postandShadow();
	this.instance_20.setTransform(487.3,215.7);

	this.instance_21 = new lib.postandShadow();
	this.instance_21.setTransform(401,215.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(1));

	// row4
	this.instance_22 = new lib.post();
	this.instance_22.setTransform(99.3,282.7);

	this.instance_23 = new lib.postandShadow();
	this.instance_23.setTransform(185.3,282.7);

	this.instance_24 = new lib.postandShadow();
	this.instance_24.setTransform(271.5,282.7);

	this.instance_25 = new lib.postandShadow();
	this.instance_25.setTransform(357.8,282.7);

	this.instance_26 = new lib.post();
	this.instance_26.setTransform(530.3,282.7);

	this.instance_27 = new lib.postandShadow();
	this.instance_27.setTransform(444,282.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22}]}).wait(1));

	// row5
	this.instance_28 = new lib.post();
	this.instance_28.setTransform(56.5,350.2);

	this.instance_29 = new lib.post();
	this.instance_29.setTransform(573.6,350.2);

	this.instance_30 = new lib.postandShadow();
	this.instance_30.setTransform(142.3,350.2);

	this.instance_31 = new lib.postandShadow();
	this.instance_31.setTransform(228.5,350.2);

	this.instance_32 = new lib.postandShadow();
	this.instance_32.setTransform(314.8,350.2);

	this.instance_33 = new lib.postandShadow();
	this.instance_33.setTransform(487.3,350.2);

	this.instance_34 = new lib.postandShadow();
	this.instance_34.setTransform(401,350.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28}]}).wait(1));

	// row6
	this.instance_35 = new lib.post();
	this.instance_35.setTransform(99.3,417.4);

	this.instance_36 = new lib.postandShadow();
	this.instance_36.setTransform(185.3,417.4);

	this.instance_37 = new lib.postandShadow();
	this.instance_37.setTransform(271.5,417.4);

	this.instance_38 = new lib.postandShadow();
	this.instance_38.setTransform(357.8,417.4);

	this.instance_39 = new lib.post();
	this.instance_39.setTransform(530.3,417.4);

	this.instance_40 = new lib.postandShadow();
	this.instance_40.setTransform(444,417.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35}]}).wait(1));

	// bottomRow
	this.instance_41 = new lib.bottomPost_1();
	this.instance_41.setTransform(517.8,515.2,1,1,0,0,0,12.5,21.5);

	this.instance_42 = new lib.bottomPost_1();
	this.instance_42.setTransform(440.1,515.2,1,1,0,0,0,12.5,21.5);

	this.instance_43 = new lib.bottomPost_1();
	this.instance_43.setTransform(360.4,515.2,1,1,0,0,0,12.5,21.5);

	this.instance_44 = new lib.bottomPost_1();
	this.instance_44.setTransform(289.7,515.2,1,1,0,0,0,12.5,21.5);

	this.instance_45 = new lib.bottomPost_1();
	this.instance_45.setTransform(207,515.2,1,1,0,0,0,12.5,21.5);

	this.instance_46 = new lib.bottomPost_1();
	this.instance_46.setTransform(129.3,515.2,1,1,0,0,0,12.5,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41}]}).wait(1));

	// boardLogo
	this.instance_47 = new lib.boardLogo_1();
	this.instance_47.setTransform(321.5,307.5,1,1,0,0,0,174.5,118.5);
	this.instance_47.alpha = 0.68;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(1));

	// boardHorizLong
	this.instance_48 = new lib.boardHorizLong_1();
	this.instance_48.setTransform(319.5,361.6,1,1,0,0,0,300,10.5);

	this.instance_49 = new lib.boardHorizLong_1();
	this.instance_49.setTransform(319.5,227.5,1,1,0,0,0,300,10.5);

	this.instance_50 = new lib.boardHorizLong_1();
	this.instance_50.setTransform(319.5,93.4,1,1,0,0,0,300,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_50},{t:this.instance_49},{t:this.instance_48}]}).wait(1));

	// boardHorizShort
	this.instance_51 = new lib.boardHorizShort_1();
	this.instance_51.setTransform(322,425.7,1,1,0,0,0,239.5,10);

	this.instance_52 = new lib.boardHorizShort_1();
	this.instance_52.setTransform(322,291.6,1,1,0,0,0,239.5,10);

	this.instance_53 = new lib.boardHorizShort_1();
	this.instance_53.setTransform(322,156.5,1,1,0,0,0,239.5,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_53},{t:this.instance_52},{t:this.instance_51}]}).wait(1));

	// dropBoardBack.jpg
	this.instance_54 = new lib.dropBoardBack_1();
	this.instance_54.setTransform(321.5,324.5,1,1,0,0,0,195,230.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(1));

	// lattices
	this.instance_55 = new lib.sideLattices();
	this.instance_55.setTransform(556,328.3,1,1,0,0,0,40.5,235.6);

	this.instance_56 = new lib.sideLattices();
	this.instance_56.setTransform(87,328.3,1,1,0,0,0,40.5,235.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_56},{t:this.instance_55}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,7.9,638,679.1);


(lib.blueMarker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.blueRectangleSlab();
	this.instance.setTransform(40,8.5,1,1,0,0,0,40,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},4).to({alpha:1},5).to({alpha:0.301},5).to({alpha:1},5).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(0,0,0,0.973)").beginStroke().moveTo(-40,8.5).lineTo(-40,-8.5).lineTo(40,-8.5).lineTo(40,8.5).closePath();
	this.shape.setTransform(40,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,17);


(lib.bigMonkeyBlinks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyebrows
	this.instance = new lib.monkey3EyeBrow();
	this.instance.setTransform(290.1,378.1,1,1,0,1.7,-178.3);

	this.instance_1 = new lib.monkey3EyeBrow();
	this.instance_1.setTransform(306.6,380.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(51));

	// L Pupil
	this.instance_2 = new lib._3Pupil_1();
	this.instance_2.setTransform(301.8,390.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},8).wait(6).to({_off:false,x:307.3,y:395.1},0).to({_off:true},3).wait(7).to({_off:false,x:302.5,y:390.6},0).to({_off:true},8).wait(3).to({_off:false,x:304.7,y:392.3},0).to({_off:true},6).wait(5).to({_off:false},0).wait(4));

	// R Pupil
	this.instance_3 = new lib._3Pupil_1();
	this.instance_3.setTransform(287.3,388.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},8).wait(6).to({_off:false,x:292.3,y:392.6},0).to({_off:true},3).wait(7).to({_off:false,x:287.8,y:388.9},0).to({_off:true},8).wait(3).to({_off:false,x:290.4,y:389.8},0).to({_off:true},6).wait(5).to({_off:false},0).wait(4));

	// eyes closed
	this.instance_4 = new lib._3_EyesClosed();
	this.instance_4.setTransform(294.5,405.5,1,1,0,0,0,0,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},6).wait(3).to({_off:false},0).to({_off:true},7).wait(8).to({_off:false},0).to({_off:true},3).wait(6).to({_off:false},0).to({_off:true},3).wait(6));

	// eyes open
	this.instance_5 = new lib._3_EyesOpen();
	this.instance_5.setTransform(294.5,405.5,1,1,0,0,0,0,-4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({_off:true},8).wait(6).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},8).wait(3).to({_off:false},0).to({_off:true},6).wait(5).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(277.9,372.9,39,30.8);


(lib.bgPortrait = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gradBgPortrait
	this.instance = new lib.gradBgLandscape();
	this.instance.setTransform(300,480,1,1,0,0,0,300,480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,960);


(lib.bananaLight3Flash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bananaSegment3();
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0.52},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-16,22,32);


(lib.bananaLight2Pulse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bananaSegment2();
	this.instance.setTransform(11,11,1,1,0,0,0,11,11);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19).to({alpha:0.52},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,22);


(lib.bananaLight2Flash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bananaSegment2();
	this.instance.setTransform(11,11,1,1,0,0,0,11,11);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0.52},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,22);


(lib.bananaLight1Pulse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bananaSegment1();
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19).to({alpha:0.52},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,25);


(lib.bananaLight1Flash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bananaSegment1();
	this.instance.setTransform(11.5,12.5,1,1,0,0,0,11.5,12.5);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0.52},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,25);


(lib.bananaLight1Pulse_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bananaSegment1();
	this.instance.setTransform(11.5,12.5,1,1,0,0,0,11.5,12.5);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19).to({alpha:0.52},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,25);


(lib.bananaLight1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer 1
	this.instance = new lib.bananaSegment1();
	this.instance.setTransform(11.5,12.5,1,1,0,0,0,11.5,12.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,25);


(lib.banana3Flash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.banana3Segment();
	this.instance.setTransform(11,16,1,1,0,0,0,11,16);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0.52},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,32);


(lib.ballsRemainingLandscape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loaded:18,empty:25});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(7).call(this.frame_25).wait(1));

	// value
	this.value = new cjs.Text("1", "bold 30px 'Arial'", "#FFFF00");
	this.value.name = "value";
	this.value.textAlign = "center";
	this.value.lineHeight = 0;
	this.value.lineWidth = 18;
	this.value.setTransform(13.1,2.6);
	this.value._off = true;

	this.timeline.addTween(cjs.Tween.get(this.value).wait(6).to({_off:false},0).wait(2).to({text:"2"},0).wait(2).to({text:"3"},0).wait(2).to({text:"4"},0).wait(2).to({text:"5"},0).wait(2).to({text:"6"},0).wait(2).to({text:"7"},0).wait(1).to({text:"6"},0).wait(1).to({text:"5"},0).wait(1).to({text:"4"},0).wait(1).to({text:"3"},0).wait(1).to({text:"2"},0).wait(1).to({text:"1"},0).wait(1).to({text:"0"},0).wait(1));

	// ballRemains7
	this.ballRemains7 = new lib.ammoBall();
	this.ballRemains7.setTransform(234.2,20,0.94,0.94,0,0,0,0,-0.5);
	this.ballRemains7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ballRemains7).wait(14).to({_off:false},0).to({scaleX:0.86,scaleY:0.86,y:19.9},3).wait(1).to({_off:true},1).wait(7));

	// ballRemains6
	this.ballRemains6 = new lib.ammoBall();
	this.ballRemains6.setTransform(201.4,20,0.94,0.94,0,0,0,0,-0.5);
	this.ballRemains6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ballRemains6).wait(12).to({_off:false},0).to({scaleX:0.86,scaleY:0.86,y:19.9},3).wait(1).to({_off:true},4).wait(6));

	// ballRemains5
	this.ballRemains5 = new lib.ammoBall();
	this.ballRemains5.setTransform(169.9,19.9,0.855,0.855,0,0,0,0,-0.5);
	this.ballRemains5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ballRemains5).wait(10).to({_off:false},0).to({scaleX:0.94,scaleY:0.94,y:20},3).to({scaleX:0.86,scaleY:0.86,y:19.9},1).to({_off:true},7).wait(5));

	// ballRemains4
	this.ballRemains4 = new lib.ammoBall();
	this.ballRemains4.setTransform(138.3,19.9,0.855,0.855,0,0,0,0,-0.5);
	this.ballRemains4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ballRemains4).wait(8).to({_off:false},0).to({scaleX:0.94,scaleY:0.94,y:20},3).to({scaleX:0.86,scaleY:0.86,y:19.9},1).to({_off:true},10).wait(4));

	// ballRemains3
	this.ballRemains3 = new lib.ammoBall();
	this.ballRemains3.setTransform(106.8,19.9,0.855,0.855,0,0,0,0,-0.5);
	this.ballRemains3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ballRemains3).wait(6).to({_off:false},0).to({scaleX:0.94,scaleY:0.94,y:20},3).to({scaleX:0.86,scaleY:0.86,y:19.9},1).to({_off:true},13).wait(3));

	// ballRemains2
	this.ballRemains2 = new lib.ammoBall();
	this.ballRemains2.setTransform(75.3,19.9,0.855,0.855,0,0,0,0,-0.5);
	this.ballRemains2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ballRemains2).wait(4).to({_off:false},0).to({scaleX:0.94,scaleY:0.94,y:20},3).to({scaleX:0.86,scaleY:0.86,y:19.9},1).to({_off:true},16).wait(2));

	// ballRemains1
	this.ballRemains1 = new lib.ammoBall();
	this.ballRemains1.setTransform(43.7,20,0.256,0.256,0,0,0,0,-0.6);
	this.ballRemains1.alpha = 0.301;
	this.ballRemains1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ballRemains1).wait(2).to({_off:false},0).to({regY:-0.5,scaleX:0.94,scaleY:0.94,alpha:1},3).to({scaleX:0.86,scaleY:0.86,y:19.9},1).to({_off:true},19).wait(1));

	// Layer 3
	this.instance = new lib.emptyHole_1();
	this.instance.setTransform(234.3,19.6,0.85,0.85);

	this.instance_1 = new lib.emptyHole_1();
	this.instance_1.setTransform(201.5,19.6,0.85,0.85);

	this.instance_2 = new lib.emptyHole_1();
	this.instance_2.setTransform(170,19.6,0.85,0.85);

	this.instance_3 = new lib.emptyHole_1();
	this.instance_3.setTransform(138.4,19.6,0.85,0.85);

	this.instance_4 = new lib.emptyHole_1();
	this.instance_4.setTransform(106.9,19.6,0.85,0.85);

	this.instance_5 = new lib.emptyHole_1();
	this.instance_5.setTransform(75.4,19.6,0.85,0.85);

	this.instance_6 = new lib.emptyHole_1();
	this.instance_6.setTransform(43.6,19.6,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(26));

	// bottomBoardLand
	this.instance_7 = new lib.bottomBoardLand();
	this.instance_7.setTransform(0,0,0.267,0.541);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256,40);


(lib.ballsremainBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.emptyHole_1();
	this.instance.setTransform(171.5,20,0.66,0.66);

	this.instance_1 = new lib.emptyHole_1();
	this.instance_1.setTransform(149.1,20,0.66,0.66);

	this.instance_2 = new lib.emptyHole_1();
	this.instance_2.setTransform(126.7,20,0.66,0.66);

	this.instance_3 = new lib.emptyHole_1();
	this.instance_3.setTransform(104.3,20,0.66,0.66);

	this.instance_4 = new lib.emptyHole_1();
	this.instance_4.setTransform(81.9,20,0.66,0.66);

	this.instance_5 = new lib.emptyHole_1();
	this.instance_5.setTransform(37.1,20,0.66,0.66);

	this.instance_6 = new lib.emptyHole_1();
	this.instance_6.setTransform(59.5,20,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_7 = new lib.ballsRemainPortBG();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187,37);


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dropBall();
	this.instance.setTransform(0,-0.5,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-11.7,22.4,22.4);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plaquesmall();
	this.instance.setTransform(-181.1,-143.7,0.712,0.712);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.1,-149.5,361.8,313.3);


(lib.sleepingMonkey3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{asleep:0,awake:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(1));

	// prize
	this.prize = new lib.prizeAmount();
	this.prize.setTransform(-21.4,-2.9);
	this.prize.shadow = new cjs.Shadow("#000000",0,0,6);
	this.prize._off = true;

	this.timeline.addTween(cjs.Tween.get(this.prize).wait(3).to({_off:false},0).wait(1));

	// awake
	this.instance = new lib.monekyfrontAwake();
	this.instance.setTransform(97,109.9,1,1,0,0,0,10.3,-16.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// aleep
	this.monkey3Asleep = new lib.sleepingMonkey3Asleep();
	this.monkey3Asleep.setTransform(98.5,109.2,1,1,0,0,0,91.5,104.5);

	this.timeline.addTween(cjs.Tween.get(this.monkey3Asleep).to({_off:true},1).wait(3));

	// inbetween
	this.instance_1 = new lib.monekyfrontAwake();
	this.instance_1.setTransform(97,99.9,0.777,1.154,0,0,0,10.3,-16.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// startled
	this.instance_2 = new lib.Startled();
	this.instance_2.setTransform(85.1,-127,0.712,0.712,0,0,0,0.1,42);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.5,-6.6,196.2,222.9);


(lib.sleepingMonkey1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"asleep":0,"awake":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(1));

	// prize
	this.prize = new lib.prizeAmount();
	this.prize.setTransform(-7.8,11.6);
	this.prize.shadow = new cjs.Shadow("#000000",0,0,6);
	this.prize._off = true;

	this.timeline.addTween(cjs.Tween.get(this.prize).wait(3).to({_off:false},0).wait(1));

	// Layer 3
	this.instance = new lib.m1Asleep();
	this.instance.setTransform(75,50.5,1,1,0,0,0,81,50);

	this.instance_1 = new lib.m1Awake();
	this.instance_1.setTransform(68.1,90.6,0.787,1.142,0,0,180,58.1,140.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{regX:58.1,regY:140.8,scaleX:0.787,scaleY:1.142,x:68.1,y:90.6}}]},1).to({state:[{t:this.instance_1,p:{regX:60,regY:69.5,scaleX:1,scaleY:1,x:70,y:23.1}}]},2).wait(1));

	// startled
	this.instance_2 = new lib.Startled();
	this.instance_2.setTransform(40.4,-45.3,0.712,0.712,0,0,180,0.1,42);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-3.7,162,104.2);


(lib.portraitWinResultPlaque = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_5 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// text
	this.value = new cjs.Text("XXXXXXXX", "bold 70px 'Arial'", "#FFFF00");
	this.value.name = "value";
	this.value.textAlign = "center";
	this.value.lineHeight = 0;
	this.value.lineWidth = 441;
	this.value.setTransform(253.5,179.2);
	this.value.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.label = new cjs.Text("CONGRATULATIONS!\nYOU HAVE WON", "bold 30px 'Arial'", "#FFFFCC");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 0;
	this.label.lineWidth = 441;
	this.label.setTransform(253.5,102);
	this.label.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.label},{t:this.value}]},5).wait(1));

	// Layer 2
	this.instance = new lib.plaquesmall();
	this.instance.setTransform(256.5,245,0.9,0.9,0,0,0,254,245);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},3).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.9,17.2,457.2,396);


(lib.portraitTicketCostPlaque = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// text
	this.txt = new cjs.Text("Please choose your\nticket cost and press \"BUY\"", "bold 23px 'Arial'", "#FFFF00");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 28;
	this.txt.lineWidth = 398;
	this.txt.setTransform(254.5,62.7);
	this.txt.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.txt3 = new cjs.Text("If the ball finishes in the middle box you are taken to the  bonus game. ", "bold 23px 'Arial'", "#FFFFCC");
	this.txt3.name = "txt3";
	this.txt3.textAlign = "center";
	this.txt3.lineHeight = 28;
	this.txt3.lineWidth = 442;
	this.txt3.setTransform(252.8,337.9);
	this.txt3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.txt2 = new cjs.Text("Light up 3 banana segments to\nwin that prize.", "bold 23px 'Arial'", "#FFFFCC");
	this.txt2.name = "txt2";
	this.txt2.textAlign = "center";
	this.txt2.lineHeight = 28;
	this.txt2.lineWidth = 441;
	this.txt2.setTransform(252.5,272.5);
	this.txt2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.txt_1 = new cjs.Text("Press the monkey to get him to \nrelease the ball into the board.\nYou have 7 balls to drop.", "bold 23px 'Arial'", "#FFFFCC");
	this.txt_1.name = "txt_1";
	this.txt_1.textAlign = "center";
	this.txt_1.lineHeight = 28;
	this.txt_1.lineWidth = 441;
	this.txt_1.setTransform(252.5,176.1);
	this.txt_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.header = new cjs.Text("HOW TO PLAY", "bold 33px 'Arial'", "#FFFFCC");
	this.header.name = "header";
	this.header.textAlign = "center";
	this.header.lineHeight = 39;
	this.header.lineWidth = 233;
	this.header.setTransform(254.5,131.6);
	this.header.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.header},{t:this.txt_1},{t:this.txt2},{t:this.txt3},{t:this.txt}]},5).wait(1));

	// plaqueLarge
	this.instance = new lib.plaqueLarge();
	this.instance.setTransform(256.5,245,0.925,0.925,0,0,0,254,244.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:245,scaleX:1,scaleY:1,alpha:1},3).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.6,-8.7,469.9,594.3);


(lib.portraitLoseResultPlaque = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_5 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// text
	this.header = new cjs.Text("SORRY!\nYOU HAVEN'T WON.\nBETTER LUCK NEXT TIME.", "bold 28px 'Arial'", "#FFFFCC");
	this.header.name = "header";
	this.header.textAlign = "center";
	this.header.lineHeight = 0;
	this.header.lineWidth = 335;
	this.header.setTransform(254.5,107.5);
	this.header.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.header._off = true;

	this.timeline.addTween(cjs.Tween.get(this.header).wait(5).to({_off:false},0).wait(1));

	// Layer 2
	this.instance = new lib.plaquesmall();
	this.instance.setTransform(256.5,245,0.9,0.9,0,0,0,254,245);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},3).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.9,17.2,457.2,396);


(lib.portraitHelpPlaque = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// text
	this.txt3 = new cjs.Text("If the ball finishes in the middle \nbox you are taken to the  bonus game. ", "bold 23px 'Arial'", "#FFFFCC");
	this.txt3.name = "txt3";
	this.txt3.textAlign = "center";
	this.txt3.lineHeight = 28;
	this.txt3.lineWidth = 441;
	this.txt3.setTransform(251.5,328);
	this.txt3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.txt2 = new cjs.Text("Light up 3 banana segments to\nwin that prize.", "bold 23px 'Arial'", "#FFFFCC");
	this.txt2.name = "txt2";
	this.txt2.textAlign = "center";
	this.txt2.lineHeight = 28;
	this.txt2.lineWidth = 440;
	this.txt2.setTransform(251,239.3);
	this.txt2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.txt = new cjs.Text("Press the monkey to get him to release the ball to the board.\nYou have 7 balls to drop.", "bold 23px 'Arial'", "#FFFFCC");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 28;
	this.txt.lineWidth = 439;
	this.txt.setTransform(251.5,129.6,1.005,1.004);
	this.txt.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.header = new cjs.Text("HOW TO PLAY", "bold 33px 'Arial'", "#FFFFCC");
	this.header.name = "header";
	this.header.textAlign = "center";
	this.header.lineHeight = 39;
	this.header.lineWidth = 233;
	this.header.setTransform(250.5,74);
	this.header.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.header},{t:this.txt},{t:this.txt2},{t:this.txt3}]},5).wait(1));

	// plaqueLarge
	this.instance = new lib.plaqueLarge();
	this.instance.setTransform(256.5,245,0.925,0.925,0,0,0,254,244.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:245,scaleX:1,scaleY:1,alpha:1},3).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.6,-8.7,469.9,594.3);


(lib.portraitBonusInstructPlaque = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(5).call(this.frame_10).wait(1));

	// text
	this.bonustxt = new lib.bonusTxt();
	this.bonustxt.setTransform(200.5,138.9);
	this.bonustxt.shadow = new cjs.Shadow("#000000",0,0,4);
	this.bonustxt._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bonustxt).wait(5).to({_off:false},0).wait(1).to({alpha:0},4).wait(1));

	// Layer 2
	this.instance = new lib.plaquesmall();
	this.instance.setTransform(201,143.5,0.551,0.551,0,0,0,253.9,201.5);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(201.3,143.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:254,scaleX:0.71,scaleY:0.71,alpha:1},3).wait(1).to({regX:243,regY:189.6,scaleX:0.74,scaleY:0.74,x:193.2,y:135},0).wait(1).to({regX:254,regY:201.5,scaleX:0.71,scaleY:0.71,x:201,y:143.5},0).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.2,28.1,279.8,242.3);


(lib.monkey3Awakes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_41 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(41).call(this.frame_41).wait(1));

	// bigMonkeyBlinks
	this.instance = new lib.bigMonkeyBlinks();
	this.instance.setTransform(299.3,394.9,1,1,0,0,0,297.8,396.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42));

	// monkey3Nostrils
	this.instance_1 = new lib.monkey3Nostrils();
	this.instance_1.setTransform(295.5,396.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(42));

	// mouth
	this.instance_2 = new lib.monkey3AwakeMouth_1();
	this.instance_2.setTransform(294.5,410.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(42));

	// moneky3Feet
	this.instance_3 = new lib.moneky3Feet();
	this.instance_3.setTransform(265.5,538.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42));

	// rightArm
	this.instance_4 = new lib.monkey3LeftArm("single",1);
	this.instance_4.setTransform(189.9,520.1,1,1,23.2,0,0,-46.6,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:43.1,rotation:-1,x:189.8,y:520.2},4).wait(5).to({startPosition:1},0).wait(33));

	// leftArm
	this.instance_5 = new lib.moneky3RightArm("single",1);
	this.instance_5.setTransform(379.5,539.4,1,1,-8.6,0,0,53.5,48.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:4.4},4).wait(5).to({startPosition:1},0).wait(33));

	// 3SleepingBelly
	this.instance_6 = new lib.monkey3BigBelly("synched",0);
	this.instance_6.setTransform(288.4,508.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(33));

	// monkey3Legs
	this.instance_7 = new lib.monkey3Legs();
	this.instance_7.setTransform(262.5,540.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(42));

	// moneky3Face
	this.instance_8 = new lib.moneky3Face();
	this.instance_8.setTransform(300.7,406.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(42));

	// monkey_3_Head
	this.instance_9 = new lib.monkey_3_Head();
	this.instance_9.setTransform(299,408.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(42));

	// moneky3_0018_LEFT-EAR.png
	this.instance_10 = new lib.moneky3_0018_LEFTEAR();
	this.instance_10.setTransform(363.3,379.1,1,1,0,3.8,-176.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(42));

	// moneky3_0018_LEFT-EAR.png
	this.instance_11 = new lib.moneky3_0018_LEFTEAR();
	this.instance_11.setTransform(255.6,374.6,1,1,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(42));

	// monkey3Body
	this.instance_12 = new lib.monkey3Body();
	this.instance_12.setTransform(303,486.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(151,358,250,224.5);


(lib.monkey3Asleep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 25
	this.instance = new lib.monkey3Faces();
	this.instance.setTransform(294.5,405.5,1,1,0,0,0,0,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// monkey3Nostrils
	this.instance_1 = new lib.monkey3Nostrils();
	this.instance_1.setTransform(295.5,396.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

	// bigMonkeyFoot
	this.instance_2 = new lib.bigMonkeyFoot();
	this.instance_2.setTransform(335,562.4,1,1,0,3.7,-176.3,8,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:17.5,skewX:0,skewY:-180},59).to({regX:8.1,skewX:3.5,skewY:-176.5,x:334.9},60).wait(1));

	// bigMonkeyFoot
	this.instance_3 = new lib.bigMonkeyFoot();
	this.instance_3.setTransform(191,555.8,1,1,-2.7,0,0,9,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:24,rotation:0,y:555.9},59).to({regX:9.1,rotation:-2.5,x:191.1},60).wait(1));

	// monkey3LeftArm
	this.instance_4 = new lib.monkey3LeftArm("single",0);
	this.instance_4.setTransform(188.3,527.8,1,1,-1,0,0,-46.6,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-46.5,x:188.5,y:530.8},59).to({x:188.4,y:527.8},60).wait(1));

	// moneky3RightArm
	this.instance_5 = new lib.moneky3RightArm("single",0);
	this.instance_5.setTransform(378,547.1,1,1,4.4,0,0,53.5,48.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:53.6,rotation:4.3,y:550.1},59).to({y:547.1},60).wait(1));

	// bellt
	this.instance_6 = new lib.monkey3BigBelly();
	this.instance_6.setTransform(288.4,558,1,1,0,0,0,0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.94,scaleY:0.94},59).to({scaleX:1,scaleY:1},60).wait(1));

	// monkey3Legs
	this.instance_7 = new lib.monkey3Legs();
	this.instance_7.setTransform(262.5,540.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// moneky3Face
	this.instance_8 = new lib.moneky3Face();
	this.instance_8.setTransform(300.7,406.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	// monkey_3_Head
	this.instance_9 = new lib.monkey_3_Head();
	this.instance_9.setTransform(299,408.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

	// moneky3_0018_LEFT-EAR.png
	this.instance_10 = new lib.moneky3_0018_LEFTEAR();
	this.instance_10.setTransform(374,392,1,1,0,35.5,-144.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

	// moneky3_0018_LEFT-EAR.png
	this.instance_11 = new lib.moneky3_0018_LEFTEAR();
	this.instance_11.setTransform(242.3,387.7,1,1,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(120));

	// monkey3Body
	this.instance_12 = new lib.monkey3Body();
	this.instance_12.setTransform(303,486.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(148.1,358,252.9,227);


(lib.bananaScoreYellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// bananaLight1
	this.instance = new lib.bananaLight1_1();
	this.instance.setTransform(5.5,29.5);

	this.instance_1 = new lib.bananaLight1Pulse();
	this.instance_1.setTransform(5.5,29.5);

	this.instance_2 = new lib.bananaLight1Flash();
	this.instance_2.setTransform(5.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bananaLight2
	this.instance_3 = new lib.bananaLight2Pulse();
	this.instance_3.setTransform(28.8,35.6);

	this.instance_4 = new lib.bananaLight2Flash();
	this.instance_4.setTransform(28.8,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},1).wait(1));

	// bananaLight3
	this.instance_5 = new lib.bananaLight3Flash();
	this.instance_5.setTransform(63,40.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(1));

	// yellowMarker
	this.yellowLight = new lib.yellowMarker();
	this.yellowLight.setTransform(40,8.5,1,1,0,0,0,40,8.5);

	this.timeline.addTween(cjs.Tween.get(this.yellowLight).wait(5));

	// value
	this.value = new cjs.Text("00000000", "bold 14px 'Arial'", "#FFFF00");
	this.value.name = "value";
	this.value.textAlign = "center";
	this.value.lineHeight = 18;
	this.value.lineWidth = 64;
	this.value.setTransform(37.5,79.8);

	this.timeline.addTween(cjs.Tween.get(this.value).wait(5));

	// bananaScoreSection
	this.bananaScoreSection = new lib.bananaScoreSectionLandscape();
	this.bananaScoreSection.setTransform(40,65.8,1,1,0,0,0,40,50);

	this.timeline.addTween(cjs.Tween.get(this.bananaScoreSection).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,115.8);


(lib.bananaScoreRed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// bananaLight1
	this.instance = new lib.bananaLight1_1();
	this.instance.setTransform(5.5,29.5);

	this.instance_1 = new lib.bananaLight1Pulse();
	this.instance_1.setTransform(5.5,29.5);

	this.instance_2 = new lib.bananaLight1Flash();
	this.instance_2.setTransform(5.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bananaLight2
	this.instance_3 = new lib.bananaLight2Pulse();
	this.instance_3.setTransform(28.8,35.6);

	this.instance_4 = new lib.bananaLight2Flash();
	this.instance_4.setTransform(28.8,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},1).wait(1));

	// bananaLight3
	this.instance_5 = new lib.bananaLight3Flash();
	this.instance_5.setTransform(63,40.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(1));

	// redMarker
	this.redLight = new lib.redMarker();
	this.redLight.setTransform(40,8.5,1,1,0,0,0,40,8.5);

	this.timeline.addTween(cjs.Tween.get(this.redLight).wait(5));

	// value
	this.value = new cjs.Text("00000000", "bold 14px 'Arial'", "#FFFF00");
	this.value.name = "value";
	this.value.textAlign = "center";
	this.value.lineHeight = 18;
	this.value.lineWidth = 64;
	this.value.setTransform(37.5,79.8);

	this.timeline.addTween(cjs.Tween.get(this.value).wait(5));

	// bananaScoreSection
	this.bananaScoreSection = new lib.bananaScoreSectionLandscape();
	this.bananaScoreSection.setTransform(40,65.8,1,1,0,0,0,40,50);

	this.timeline.addTween(cjs.Tween.get(this.bananaScoreSection).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,115.8);


(lib.bananaScorePurplePortrait = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// bananaLight1
	this.instance = new lib.bananaLight1_1();
	this.instance.setTransform(5.5,29.5);

	this.instance_1 = new lib.bananaLight1Pulse();
	this.instance_1.setTransform(5.5,29.5);

	this.instance_2 = new lib.bananaLight1Flash();
	this.instance_2.setTransform(5.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bananaLight2
	this.instance_3 = new lib.bananaLight2Pulse();
	this.instance_3.setTransform(28.8,35.6);

	this.instance_4 = new lib.bananaLight2Flash();
	this.instance_4.setTransform(28.8,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},1).wait(1));

	// bananaLight3
	this.instance_5 = new lib.bananaLight3Flash();
	this.instance_5.setTransform(63,40.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(1));

	// purpleMarker
	this.purpleLight = new lib.purpleMarker();
	this.purpleLight.setTransform(40,8.5,1,1,0,0,0,40,8.5);

	this.timeline.addTween(cjs.Tween.get(this.purpleLight).wait(5));

	// value
	this.value = new cjs.Text("00000000", "bold 14px 'Arial'", "#FFFF00");
	this.value.name = "value";
	this.value.textAlign = "center";
	this.value.lineHeight = 18;
	this.value.lineWidth = 64;
	this.value.setTransform(37.5,79.8);

	this.timeline.addTween(cjs.Tween.get(this.value).wait(5));

	// bananaScoreSection
	this.bananaScoreSection = new lib.bananaScoreSectionLandscape();
	this.bananaScoreSection.setTransform(40,65.8,1,1,0,0,0,40,50);

	this.timeline.addTween(cjs.Tween.get(this.bananaScoreSection).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,115.8);


(lib.bananaScorePink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// bananaLight1
	this.instance = new lib.bananaLight1_1();
	this.instance.setTransform(5.5,29.5);

	this.instance_1 = new lib.bananaLight1Pulse();
	this.instance_1.setTransform(5.5,29.5);

	this.instance_2 = new lib.bananaLight1Flash();
	this.instance_2.setTransform(5.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bananaLight2
	this.instance_3 = new lib.bananaLight2Pulse();
	this.instance_3.setTransform(28.8,35.6);

	this.instance_4 = new lib.bananaLight2Flash();
	this.instance_4.setTransform(28.8,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},1).wait(1));

	// bananaLight3
	this.instance_5 = new lib.bananaLight3Flash();
	this.instance_5.setTransform(63,40.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(1));

	// pinkMarker
	this.pinkLight = new lib.pinkMarker();
	this.pinkLight.setTransform(40,8.5,1,1,0,0,0,40,8.5);

	this.timeline.addTween(cjs.Tween.get(this.pinkLight).wait(5));

	// value
	this.value = new cjs.Text("00000000", "bold 14px 'Arial'", "#FFFF00");
	this.value.name = "value";
	this.value.textAlign = "center";
	this.value.lineHeight = 18;
	this.value.lineWidth = 64;
	this.value.setTransform(37.5,79.8);

	this.timeline.addTween(cjs.Tween.get(this.value).wait(5));

	// bananaScoreSection
	this.bananaScoreSection = new lib.bananaScoreSectionLandscape();
	this.bananaScoreSection.setTransform(40,65.8,1,1,0,0,0,40,50);

	this.timeline.addTween(cjs.Tween.get(this.bananaScoreSection).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,115.8);


(lib.bananaScoreLandscapeYellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// bananaLight1
	this.instance = new lib.bananaLight1_1();
	this.instance.setTransform(67,26,1,1,0,0,0,11.5,12.5);

	this.instance_1 = new lib.bananaLight1Pulse_1();
	this.instance_1.setTransform(67,26,1,1,0,0,0,11.5,12.5);

	this.instance_2 = new lib.bananaLight1Flash();
	this.instance_2.setTransform(67,26,1,1,0,0,0,11.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bananaLight2
	this.instance_3 = new lib.bananaLight2Pulse();
	this.instance_3.setTransform(89.8,30.7,1,1,0,0,0,11,11);

	this.instance_4 = new lib.bananaLight2Flash();
	this.instance_4.setTransform(89.8,30.7,1,1,0,0,0,11,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},1).wait(1));

	// bananaLight3
	this.instance_5 = new lib.banana3Flash();
	this.instance_5.setTransform(113,24.9,1,1,0,0,0,11,16);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(1));

	// slabGreenLandscape
	this.yellowSquareLight = new lib.yellowSquareSlab();
	this.yellowSquareLight.setTransform(6.8,4.9);

	this.timeline.addTween(cjs.Tween.get(this.yellowSquareLight).wait(5));

	// value
	this.value = new cjs.Text("00000000", "bold 24px 'Arial'", "#FFFF00");
	this.value.name = "value";
	this.value.textAlign = "center";
	this.value.lineHeight = 29;
	this.value.lineWidth = 112;
	this.value.setTransform(191,7.6);

	this.timeline.addTween(cjs.Tween.get(this.value).wait(5));

	// boardBananaBaseSingle.png
	this.bananaScoreSection = new lib.scorboardSectionBgLandscape();
	this.bananaScoreSection.setTransform(128,25,1,1,0,0,0,128,25);

	this.timeline.addTween(cjs.Tween.get(this.bananaScoreSection).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256,50);


(lib.bananaScoreLandscapeRed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// bananaLight1
	this.instance = new lib.bananaLight1_1();
	this.instance.setTransform(67,26,1,1,0,0,0,11.5,12.5);

	this.instance_1 = new lib.bananaLight1Pulse_1();
	this.instance_1.setTransform(67,26,1,1,0,0,0,11.5,12.5);

	this.instance_2 = new lib.bananaLight1Flash();
	this.instance_2.setTransform(67,26,1,1,0,0,0,11.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bananaLight2
	this.instance_3 = new lib.bananaLight2Pulse();
	this.instance_3.setTransform(89.8,30.7,1,1,0,0,0,11,11);

	this.instance_4 = new lib.bananaLight2Flash();
	this.instance_4.setTransform(89.8,30.7,1,1,0,0,0,11,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},1).wait(1));

	// bananaLight3
	this.instance_5 = new lib.banana3Flash();
	this.instance_5.setTransform(113,24.9,1,1,0,0,0,11,16);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(1));

	// slabRedLandscape
	this.redSquareLight = new lib.slabRedLandscape_1();
	this.redSquareLight.setTransform(25,25,1,1,0,0,0,17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.redSquareLight).wait(5));

	// value
	this.value = new cjs.Text("00000000", "bold 24px 'Arial'", "#FFFF00");
	this.value.name = "value";
	this.value.textAlign = "center";
	this.value.lineHeight = 0;
	this.value.lineWidth = 124;
	this.value.setTransform(189,9.7);

	this.timeline.addTween(cjs.Tween.get(this.value).wait(5));

	// Symbol 4
	this.instance_6 = new lib.Symbol4();
	this.instance_6.setTransform(25,25,1,1,0,0,0,25,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5));

	// Symbol 3
	this.instance_7 = new lib.Symbol3();
	this.instance_7.setTransform(193,25,1,1,0,0,0,63,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5));

	// Symbol 2
	this.instance_8 = new lib.Symbol2();
	this.instance_8.setTransform(90,25,1,1,0,0,0,40,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256,50);


(lib.bananaScoreLandscapePurple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// bananaLight1
	this.instance = new lib.bananaLight1_1();
	this.instance.setTransform(67,26,1,1,0,0,0,11.5,12.5);

	this.instance_1 = new lib.bananaLight1Pulse_1();
	this.instance_1.setTransform(67,26,1,1,0,0,0,11.5,12.5);

	this.instance_2 = new lib.bananaLight1Flash();
	this.instance_2.setTransform(67,26,1,1,0,0,0,11.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bananaLight2
	this.instance_3 = new lib.bananaLight2Pulse();
	this.instance_3.setTransform(89.8,30.7,1,1,0,0,0,11,11);

	this.instance_4 = new lib.bananaLight2Flash();
	this.instance_4.setTransform(89.8,30.7,1,1,0,0,0,11,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},1).wait(1));

	// bananaLight3
	this.instance_5 = new lib.banana3Flash();
	this.instance_5.setTransform(113,24.9,1,1,0,0,0,11,16);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(1));

	// value
	this.value = new cjs.Text("00000000", "bold 24px 'Arial'", "#FFFF00");
	this.value.name = "value";
	this.value.textAlign = "center";
	this.value.lineHeight = 29;
	this.value.lineWidth = 112;
	this.value.setTransform(191,7.6);

	this.timeline.addTween(cjs.Tween.get(this.value).wait(5));

	// slabGreenLandscape
	this.purpleSquareLight = new lib.purpleSquareSlab();
	this.purpleSquareLight.setTransform(24.3,22.9,1,1,0,0,0,17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.purpleSquareLight).wait(5));

	// boardBananaBaseSingle.png
	this.bananaScoreSection = new lib.scorboardSectionBgLandscape();
	this.bananaScoreSection.setTransform(128,25,1,1,0,0,0,128,25);

	this.timeline.addTween(cjs.Tween.get(this.bananaScoreSection).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256,50);


(lib.bananaScoreLandscapePink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// bananaLight1
	this.instance = new lib.bananaLight1_1();
	this.instance.setTransform(67,26,1,1,0,0,0,11.5,12.5);

	this.instance_1 = new lib.bananaLight1Pulse_1();
	this.instance_1.setTransform(67,26,1,1,0,0,0,11.5,12.5);

	this.instance_2 = new lib.bananaLight1Flash();
	this.instance_2.setTransform(67,26,1,1,0,0,0,11.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bananaLight2
	this.instance_3 = new lib.bananaLight2Pulse();
	this.instance_3.setTransform(89.8,30.7,1,1,0,0,0,11,11);

	this.instance_4 = new lib.bananaLight2Flash();
	this.instance_4.setTransform(89.8,30.7,1,1,0,0,0,11,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},1).wait(1));

	// bananaLight3
	this.instance_5 = new lib.banana3Flash();
	this.instance_5.setTransform(113,24.9,1,1,0,0,0,11,16);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(1));

	// slabGreenLandscape
	this.pinkSquareLight = new lib.pinkSquareSlab();
	this.pinkSquareLight.setTransform(24.3,21.9,1,1,0,0,0,17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.pinkSquareLight).wait(5));

	// value
	this.value = new cjs.Text("00000000", "bold 24px 'Arial'", "#FFFF00");
	this.value.name = "value";
	this.value.textAlign = "center";
	this.value.lineHeight = 29;
	this.value.lineWidth = 112;
	this.value.setTransform(191,7.6);

	this.timeline.addTween(cjs.Tween.get(this.value).wait(5));

	// boardBananaBaseSingle.png
	this.bananaScoreSection = new lib.scorboardSectionBgLandscape();
	this.bananaScoreSection.setTransform(128,25,1,1,0,0,0,128,25);

	this.timeline.addTween(cjs.Tween.get(this.bananaScoreSection).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256,50);


(lib.bananaScoreLandscapeGreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// bananaLight1
	this.instance = new lib.bananaLight1_1();
	this.instance.setTransform(67,26,1,1,0,0,0,11.5,12.5);

	this.instance_1 = new lib.bananaLight1Pulse_1();
	this.instance_1.setTransform(67,26,1,1,0,0,0,11.5,12.5);

	this.instance_2 = new lib.bananaLight1Flash();
	this.instance_2.setTransform(67,26,1,1,0,0,0,11.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bananaLight2
	this.instance_3 = new lib.bananaLight2Pulse();
	this.instance_3.setTransform(89.8,30.7,1,1,0,0,0,11,11);

	this.instance_4 = new lib.bananaLight2Flash();
	this.instance_4.setTransform(89.8,30.7,1,1,0,0,0,11,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},1).wait(1));

	// bananaLight3
	this.instance_5 = new lib.banana3Flash();
	this.instance_5.setTransform(113,24.9,1,1,0,0,0,11,16);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(1));

	// slabGreenLandscape
	this.greenSquareLight = new lib.slabGreenLandscape_1();
	this.greenSquareLight.setTransform(24.3,22.9,1,1,0,0,0,17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.greenSquareLight).wait(5));

	// value
	this.value = new cjs.Text("00000000", "bold 24px 'Arial'", "#FFFF00");
	this.value.name = "value";
	this.value.textAlign = "center";
	this.value.lineHeight = 29;
	this.value.lineWidth = 112;
	this.value.setTransform(191,7.6);

	this.timeline.addTween(cjs.Tween.get(this.value).wait(5));

	// boardBananaBaseSingle.png
	this.bananaScoreSection = new lib.scorboardSectionBgLandscape();
	this.bananaScoreSection.setTransform(128,25,1,1,0,0,0,128,25);

	this.timeline.addTween(cjs.Tween.get(this.bananaScoreSection).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256,50);


(lib.bananaScoreLandscapeBlue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// bananaLight1
	this.instance = new lib.bananaLight1_1();
	this.instance.setTransform(67,26,1,1,0,0,0,11.5,12.5);

	this.instance_1 = new lib.bananaLight1Pulse_1();
	this.instance_1.setTransform(67,26,1,1,0,0,0,11.5,12.5);

	this.instance_2 = new lib.bananaLight1Flash();
	this.instance_2.setTransform(67,26,1,1,0,0,0,11.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bananaLight2
	this.instance_3 = new lib.bananaLight2Pulse();
	this.instance_3.setTransform(89.8,30.7,1,1,0,0,0,11,11);

	this.instance_4 = new lib.bananaLight2Flash();
	this.instance_4.setTransform(89.8,30.7,1,1,0,0,0,11,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},1).wait(1));

	// bananaLight3
	this.instance_5 = new lib.banana3Flash();
	this.instance_5.setTransform(113,24.9,1,1,0,0,0,11,16);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(1));

	// slabGreenLandscape
	this.blueSquareLight = new lib.slabBlueLandscape_1();
	this.blueSquareLight.setTransform(24.3,21.9,1,1,0,0,0,17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.blueSquareLight).wait(5));

	// value
	this.value = new cjs.Text("00000000", "bold 24px 'Arial'", "#FFFF00");
	this.value.name = "value";
	this.value.textAlign = "center";
	this.value.lineHeight = 29;
	this.value.lineWidth = 112;
	this.value.setTransform(191,7.6);

	this.timeline.addTween(cjs.Tween.get(this.value).wait(5));

	// boardBananaBaseSingle.png
	this.bananaScoreSection = new lib.scorboardSectionBgLandscape();
	this.bananaScoreSection.setTransform(128,25,1,1,0,0,0,128,25);

	this.timeline.addTween(cjs.Tween.get(this.bananaScoreSection).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256,50);


(lib.bananaScoreGreenPortrait = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// bananaLight1
	this.instance = new lib.bananaLight1_1();
	this.instance.setTransform(5.5,29.5);

	this.instance_1 = new lib.bananaLight1Pulse();
	this.instance_1.setTransform(5.5,29.5);

	this.instance_2 = new lib.bananaLight1Flash();
	this.instance_2.setTransform(5.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bananaLight2
	this.instance_3 = new lib.bananaLight2Pulse();
	this.instance_3.setTransform(28.8,35.6);

	this.instance_4 = new lib.bananaLight2Flash();
	this.instance_4.setTransform(28.8,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},1).wait(1));

	// bananaLight3
	this.instance_5 = new lib.bananaLight3Flash();
	this.instance_5.setTransform(63,40.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(1));

	// greenMarker
	this.greenLight = new lib.greenMarker();
	this.greenLight.setTransform(40,8.5,1,1,0,0,0,40,8.5);

	this.timeline.addTween(cjs.Tween.get(this.greenLight).wait(5));

	// value
	this.value = new cjs.Text("00000000", "bold 14px 'Arial'", "#FFFF00");
	this.value.name = "value";
	this.value.textAlign = "center";
	this.value.lineHeight = 18;
	this.value.lineWidth = 64;
	this.value.setTransform(37.5,79.8);

	this.timeline.addTween(cjs.Tween.get(this.value).wait(5));

	// bananaScoreSection
	this.bananaScoreSection = new lib.bananaScoreSectionLandscape();
	this.bananaScoreSection.setTransform(40,65.8,1,1,0,0,0,40,50);

	this.timeline.addTween(cjs.Tween.get(this.bananaScoreSection).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,115.8);


(lib.bananaScoreBlue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// bananaLight1
	this.instance = new lib.bananaLight1_1();
	this.instance.setTransform(5.5,29.5);

	this.instance_1 = new lib.bananaLight1Pulse();
	this.instance_1.setTransform(5.5,29.5);

	this.instance_2 = new lib.bananaLight1Flash();
	this.instance_2.setTransform(5.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bananaLight2
	this.instance_3 = new lib.bananaLight2Pulse();
	this.instance_3.setTransform(28.8,35.6);

	this.instance_4 = new lib.bananaLight2Flash();
	this.instance_4.setTransform(28.8,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},1).wait(1));

	// bananaLight3
	this.instance_5 = new lib.bananaLight3Flash();
	this.instance_5.setTransform(63,40.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(1));

	// blueMarker
	this.blueLight = new lib.blueMarker();
	this.blueLight.setTransform(40,8.5,1,1,0,0,0,40,8.5);

	this.timeline.addTween(cjs.Tween.get(this.blueLight).wait(5));

	// value
	this.value = new cjs.Text("00000000", "bold 14px 'Arial'", "#FFFF00");
	this.value.name = "value";
	this.value.textAlign = "center";
	this.value.lineHeight = 18;
	this.value.lineWidth = 64;
	this.value.setTransform(37.5,79.8);

	this.timeline.addTween(cjs.Tween.get(this.value).wait(5));

	// bananaScoreSection
	this.bananaScoreSection = new lib.bananaScoreSectionLandscape();
	this.bananaScoreSection.setTransform(40,65.8,1,1,0,0,0,40,50);

	this.timeline.addTween(cjs.Tween.get(this.bananaScoreSection).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,115.8);


(lib.ballsRemainingPortrait = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loaded":31,"empty":38});

	// timeline functions:
	this.frame_31 = function() {
		this.stop();
	}
	this.frame_38 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(7).call(this.frame_38).wait(1));

	// value
	this.text = new cjs.Text("1", "bold 25px 'Arial'", "#FFFF00");
	this.text.textAlign = "center";
	this.text.lineHeight = 0;
	this.text.lineWidth = 17;
	this.text.setTransform(12.4,5.5);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(19).to({_off:false},0).wait(2).to({text:"2"},0).wait(2).to({text:"3"},0).wait(2).to({text:"4"},0).wait(2).to({text:"5"},0).wait(2).to({text:"6"},0).wait(2).to({text:"7"},0).wait(1).to({text:"6"},0).wait(1).to({text:"5"},0).wait(1).to({text:"4"},0).wait(1).to({text:"3"},0).wait(1).to({text:"2"},0).wait(1).to({text:"1"},0).wait(1).to({text:"0"},0).wait(1));

	// ballRemains1
	this.ballRemains6 = new lib.ammoBall();
	this.ballRemains6.setTransform(37.1,20,0.223,0.223,0,0,0,0,-0.2);
	this.ballRemains6.alpha = 0.301;
	this.ballRemains6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ballRemains6).wait(15).to({_off:false},0).to({regY:-0.4,scaleX:0.72,scaleY:0.72,alpha:1},3).to({regY:-0.5,scaleX:0.67,scaleY:0.67},1).wait(13).to({_off:true},6).wait(1));

	// ballRemains2
	this.ballRemains5 = new lib.ammoBall();
	this.ballRemains5.setTransform(59.6,20,0.223,0.223,0,0,0,0,-0.2);
	this.ballRemains5.alpha = 0.301;
	this.ballRemains5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ballRemains5).wait(17).to({_off:false},0).to({regY:-0.4,scaleX:0.72,scaleY:0.72,alpha:1},3).to({regY:-0.5,scaleX:0.67,scaleY:0.67},1).wait(11).to({_off:true},5).wait(2));

	// ballRemains3
	this.ballRemains4 = new lib.ammoBall();
	this.ballRemains4.setTransform(82.2,20,0.223,0.223,0,0,0,0,-0.2);
	this.ballRemains4.alpha = 0.301;
	this.ballRemains4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ballRemains4).wait(19).to({_off:false},0).to({regY:-0.4,scaleX:0.72,scaleY:0.72,alpha:1},3).to({regY:-0.5,scaleX:0.67,scaleY:0.67},1).wait(9).to({_off:true},4).wait(3));

	// ballRemains4
	this.ballRemains3 = new lib.ammoBall();
	this.ballRemains3.setTransform(104.7,20,0.223,0.223,0,0,0,0,-0.2);
	this.ballRemains3.alpha = 0.301;
	this.ballRemains3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ballRemains3).wait(21).to({_off:false},0).to({regY:-0.4,scaleX:0.72,scaleY:0.72,alpha:1},3).to({regY:-0.5,scaleX:0.67,scaleY:0.67},1).wait(7).to({_off:true},3).wait(4));

	// ballRemains5
	this.ballRemains2 = new lib.ammoBall();
	this.ballRemains2.setTransform(127.2,20,0.223,0.223,0,0,0,0,-0.2);
	this.ballRemains2.alpha = 0.301;
	this.ballRemains2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ballRemains2).wait(23).to({_off:false},0).to({regY:-0.4,scaleX:0.72,scaleY:0.72,alpha:1},3).to({regY:-0.5,scaleX:0.67,scaleY:0.67},1).wait(5).to({_off:true},2).wait(5));

	// ballRemains6
	this.ballRemains1 = new lib.ammoBall();
	this.ballRemains1.setTransform(149.7,20,0.223,0.223,0,0,0,0,-0.2);
	this.ballRemains1.alpha = 0.301;
	this.ballRemains1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ballRemains1).wait(25).to({_off:false},0).to({regY:-0.4,scaleX:0.72,scaleY:0.72,alpha:1},3).to({regY:-0.5,scaleX:0.67,scaleY:0.67},1).wait(3).to({_off:true},1).wait(6));

	// ballRemains7
	this.ballRemains1_1 = new lib.ammoBall();
	this.ballRemains1_1.setTransform(172.2,20,0.223,0.223,0,0,0,0,-0.2);
	this.ballRemains1_1.alpha = 0.301;
	this.ballRemains1_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ballRemains1_1).wait(27).to({_off:false},0).to({regY:-0.4,scaleX:0.72,scaleY:0.72,alpha:1},3).to({regY:-0.5,scaleX:0.67,scaleY:0.67},1).to({_off:true},1).wait(7));

	// ballsremainBg
	this.instance = new lib.ballsremainBg();
	this.instance.setTransform(93.5,-13.5,1,1,0,0,0,93.5,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:20.5},11,cjs.Ease.get(-1)).wait(1).to({y:18.5},0).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-32,187,37);


(lib.sleepingMonkey2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"asleep":0,"awake":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(1));

	// prize
	this.prize = new lib.prizeAmount();
	this.prize.setTransform(9,109.3);
	this.prize.shadow = new cjs.Shadow("#000000",0,0,6);
	this.prize._off = true;

	this.timeline.addTween(cjs.Tween.get(this.prize).wait(3).to({_off:false},0).wait(1));

	// monkey3Asleep
	this.monkey2Asleep = new lib.monkey3Asleep();
	this.monkey2Asleep.setTransform(-151,-355.4);

	this.timeline.addTween(cjs.Tween.get(this.monkey2Asleep).to({_off:true},1).wait(3));

	// monkey3Awakes
	this.monkey2Awakes = new lib.monkey3Awakes();
	this.monkey2Awakes.setTransform(-151,-355.4);
	this.monkey2Awakes._off = true;

	this.timeline.addTween(cjs.Tween.get(this.monkey2Awakes).wait(3).to({_off:false},0).wait(1));

	// monkey3Awakes
	this.monkey2Awakes_1 = new lib.monkey3Awakes();
	this.monkey2Awakes_1.setTransform(-94.2,-479.9,0.803,1.179);
	this.monkey2Awakes_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.monkey2Awakes_1).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// startled
	this.instance = new lib.Startled();
	this.instance.setTransform(165.9,4.1,0.712,0.712,0,0,0,0.1,42);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,2.6,252.9,227);


(lib.md_Portrait_Bonus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame();
	this.instance.setTransform(300,480,1,1,0,0,0,300,480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// portraitBonusInstructPlaque
	this.bonusPlaque = new lib.portraitBonusInstructPlaque();
	this.bonusPlaque.setTransform(469.1,748.4,1,1,0,0,0,256.5,216.3);

	this.timeline.addTween(cjs.Tween.get(this.bonusPlaque).wait(1));

	// darkener
	this.darkener = new lib.portraitDarkener();
	this.darkener.setTransform(290.5,373.5,1,1,0,0,0,290.5,373.5);

	this.timeline.addTween(cjs.Tween.get(this.darkener).wait(1));

	// Layer 2
	this.instance_1 = new lib.blossomTree_1();
	this.instance_1.setTransform(19.1,256.7,0.814,0.814,-106.1,0,0,191,191.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// sleepingMonkey1
	this.instance_2 = new lib._3Pupil_1();
	this.instance_2.setTransform(480,447);

	this.sleepingMonkey1 = new lib.sleepingMonkey1();
	this.sleepingMonkey1.setTransform(255,156,1,1,0,0,0,75,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sleepingMonkey1},{t:this.instance_2}]}).wait(1));

	// sleepingMonkey2
	this.sleepingMonkey2 = new lib.sleepingMonkey2();
	this.sleepingMonkey2.setTransform(338.5,279.2);

	this.timeline.addTween(cjs.Tween.get(this.sleepingMonkey2).wait(1));

	// sleepingMonkey3
	this.sleepingMonkey3 = new lib.sleepingMonkey3();
	this.sleepingMonkey3.setTransform(143.9,451.1);

	this.timeline.addTween(cjs.Tween.get(this.sleepingMonkey3).wait(1));

	// gong1
	this.gong1 = new lib.gong1();
	this.gong1.setTransform(173,153.5,1,1,0,0,0,88,89.5);

	this.timeline.addTween(cjs.Tween.get(this.gong1).wait(1));

	// gong2
	this.gong2 = new lib.gong2();
	this.gong2.setTransform(338,369.5,1,1,0,0,0,92,100);

	this.timeline.addTween(cjs.Tween.get(this.gong2).wait(1));

	// gong3
	this.gong3 = new lib.gong3();
	this.gong3.setTransform(122,426.4,1,1,0,0,0,97,93);

	this.timeline.addTween(cjs.Tween.get(this.gong3).wait(1));

	// pagoda
	this.instance_3 = new lib.blossomTree_1();
	this.instance_3.setTransform(13,3.4,0.665,0.665,-106.1,0,0,191,191.9);

	this.instance_4 = new lib.blossomTree_1();
	this.instance_4.setTransform(601,16,1,1,0,0,0,191,192);

	this.instance_5 = new lib.pagoda();
	this.instance_5.setTransform(288.5,449,1,1,0,0,0,503.5,294.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// sun
	this.instance_6 = new lib.sun_1();
	this.instance_6.setTransform(480,17.5,1,1,0,0,0,135.5,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// bg
	this.instance_7 = new lib.bgPortrait();
	this.instance_7.setTransform(300,480,1,1,0,0,0,300,480);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211,-176,1003,1137.5);


(lib.md_Portrait = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame();
	this.instance.setTransform(300,480,1,1,0,0,0,300,480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// portraitHelpPlaque
	this.HelpPlaque = new lib.portraitHelpPlaque();
	this.HelpPlaque.setTransform(297.5,432.1,1,1,0,0,0,254,197.5);

	this.timeline.addTween(cjs.Tween.get(this.HelpPlaque).wait(1));

	// portraitWinResultPlaque
	this.WinResultPlaque = new lib.portraitWinResultPlaque();
	this.WinResultPlaque.setTransform(297.5,490.2,1,1,0,0,0,254,197.5);

	this.timeline.addTween(cjs.Tween.get(this.WinResultPlaque).wait(1));

	// portraitLoseResultPlaque
	this.LoseResultPlaque = new lib.portraitLoseResultPlaque();
	this.LoseResultPlaque.setTransform(297.5,490.2,1,1,0,0,0,254,197.5);

	this.timeline.addTween(cjs.Tween.get(this.LoseResultPlaque).wait(1));

	// portraitTicketCostPlaque
	this.TicketCostPlaque = new lib.portraitTicketCostPlaque();
	this.TicketCostPlaque.setTransform(297.5,432.1,1,1,0,0,0,254,197.5);

	this.timeline.addTween(cjs.Tween.get(this.TicketCostPlaque).wait(1));

	// darkener
	this.darkener = new lib.portraitDarkener();
	this.darkener.setTransform(290.5,373.5,1,1,0,0,0,290.5,373.5);

	this.timeline.addTween(cjs.Tween.get(this.darkener).wait(1));

	// starBursts
	this.starburst6 = new lib.smallStarBurst();
	this.starburst6.setTransform(531.9,814.8);

	this.starburst5 = new lib.smallStarBurst();
	this.starburst5.setTransform(450.9,814.8);

	this.starburst4 = new lib.smallStarBurst();
	this.starburst4.setTransform(370.9,814.8);

	this.starburst3 = new lib.smallStarBurst();
	this.starburst3.setTransform(220.9,814.8);

	this.starburst2 = new lib.smallStarBurst();
	this.starburst2.setTransform(141.9,814.8);

	this.starburst1 = new lib.smallStarBurst();
	this.starburst1.setTransform(60.9,814.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.starburst1},{t:this.starburst2},{t:this.starburst3},{t:this.starburst4},{t:this.starburst5},{t:this.starburst6}]}).wait(1));

	// winBoxes
	this.blueBox = new lib.bananaScoreBlue();
	this.blueBox.setTransform(144.9,776.7,1,1,0,0,0,40,50);

	this.redBox = new lib.bananaScoreRed();
	this.redBox.setTransform(65,784.6,1,1,0,0,0,40,57.9);

	this.greenBox = new lib.bananaScoreGreenPortrait();
	this.greenBox.setTransform(535,776.7,1,1,0,0,0,40,50);

	this.purpleBox = new lib.bananaScorePurplePortrait();
	this.purpleBox.setTransform(455,776.7,1,1,0,0,0,40,50);

	this.yellowBox = new lib.bananaScoreYellow();
	this.yellowBox.setTransform(375,776.7,1,1,0,0,0,40,50);

	this.pinkBox = new lib.bananaScorePink();
	this.pinkBox.setTransform(224.9,776.7,1,1,0,0,0,40,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pinkBox},{t:this.yellowBox},{t:this.purpleBox},{t:this.greenBox},{t:this.redBox},{t:this.blueBox}]}).wait(1));

	// ballsRemaining
	this.ballsRemaining = new lib.ballsRemainingPortrait();
	this.ballsRemaining.setTransform(206.5,35.6,1,1,0,0,0,0,-32);

	this.timeline.addTween(cjs.Tween.get(this.ballsRemaining).wait(1));

	// monkeySwinger
	this.monkeySwinger = new lib.monkeySwinger();
	this.monkeySwinger.setTransform(307,8,1,1,0,0,0,70,267);

	this.timeline.addTween(cjs.Tween.get(this.monkeySwinger).wait(1));

	// tiledFloor
	this.instance_1 = new lib.tiledFloor_1();
	this.instance_1.setTransform(-20.5,842.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bonusBarrel
	this.bonusBarrel = new lib.bonusBarrelPortrait();
	this.bonusBarrel.setTransform(299.8,724,0.951,1.041,0,0,0,37,0);

	this.timeline.addTween(cjs.Tween.get(this.bonusBarrel).wait(1));

	// ball
	this.ball = new lib.ball();
	this.ball.setTransform(321,263,1,1,0,0,0,0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

	// board
	this.dropBoard = new lib.board();
	this.dropBoard.setTransform(300,551.8,1,1,0,0,0,322,343.3);

	this.timeline.addTween(cjs.Tween.get(this.dropBoard).wait(1));

	// blossomTree
	this.instance_2 = new lib.blossomTree_1();
	this.instance_2.setTransform(703.1,-35,0.487,0.487,19.2,0,0,381.2,-1.1);
	this.instance_2.alpha = 0.75;

	this.instance_3 = new lib.blossomTree_1();
	this.instance_3.setTransform(-77,-27.1,0.487,0.487,-114.1,0,0,381.2,-1.1);
	this.instance_3.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// pagodas
	this.instance_4 = new lib.littleMonkeys();
	this.instance_4.setTransform(447.5,117);

	this.instance_5 = new lib.pagodaTrans_1();
	this.instance_5.setTransform(157,252,0.538,0.538,0,0,0,125,93);

	this.instance_6 = new lib.pagodaTrans_1();
	this.instance_6.setTransform(495,200,1,1,0,0,0,125,93);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// sun
	this.instance_7 = new lib.sun_1();
	this.instance_7.setTransform(305.4,85.5,1,1,0,0,0,135.5,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Layer 2
	this.instance_8 = new lib.Bitmap1();
	this.instance_8.setTransform(239,727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// bg
	this.instance_9 = new lib.bgPortrait();
	this.instance_9.setTransform(300,480,1,1,0,0,0,300,480);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.7,-103.8,780,1066.4);


(lib.md_Landscape_Bonus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame();
	this.instance.setTransform(480,300,1,1,-90,0,0,300,480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// portraitBonusInstructPlaque
	this.bonusPlaque = new lib.portraitBonusInstructPlaque();
	this.bonusPlaque.setTransform(574.5,100);

	this.timeline.addTween(cjs.Tween.get(this.bonusPlaque).wait(1));

	// darkener
	this.darkener = new lib.portraitDarkener();
	this.darkener.setTransform(464.7,233.5,1.6,0.625,0,0,0,290.4,373.5);

	this.timeline.addTween(cjs.Tween.get(this.darkener).wait(1));

	// blossomTree
	this.instance_1 = new lib.blossomTree_1();
	this.instance_1.setTransform(89,-50.6,0.665,0.665,-106.1,0,0,191,191.9);

	this.instance_2 = new lib.blossomTree_1();
	this.instance_2.setTransform(677,-38,1,1,0,0,0,191,192);

	this.instance_3 = new lib.blossomTree_1();
	this.instance_3.setTransform(69.1,196.8,0.814,0.814,-106.1,0,0,191,191.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// sleepingMonkey1
	this.sleepingMonkey1 = new lib.sleepingMonkey1();
	this.sleepingMonkey1.setTransform(310,100,1,1,0,0,0,75,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.sleepingMonkey1).wait(1));

	// sleepingMonkey2
	this.sleepingMonkey2 = new lib.sleepingMonkey2();
	this.sleepingMonkey2.setTransform(371.5,220.2);

	this.timeline.addTween(cjs.Tween.get(this.sleepingMonkey2).wait(1));

	// sleepingMonkey3
	this.sleepingMonkey3 = new lib.sleepingMonkey3();
	this.sleepingMonkey3.setTransform(185.6,390);

	this.timeline.addTween(cjs.Tween.get(this.sleepingMonkey3).wait(1));

	// gong1
	this.gong1 = new lib.gong1();
	this.gong1.setTransform(228,97.5,1,1,0,0,0,88,89.5);

	this.timeline.addTween(cjs.Tween.get(this.gong1).wait(1));

	// gong2
	this.gong2 = new lib.gong2();
	this.gong2.setTransform(373,310.5,1,1,0,0,0,92,100);

	this.timeline.addTween(cjs.Tween.get(this.gong2).wait(1));

	// gong3
	this.gong3 = new lib.gong3();
	this.gong3.setTransform(163,368.4,1,1,0,0,0,97,93);

	this.timeline.addTween(cjs.Tween.get(this.gong3).wait(1));

	// pagoda
	this.instance_4 = new lib.pagoda();
	this.instance_4.setTransform(364.5,395,1,1,0,0,0,503.5,294.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// sun
	this.instance_5 = new lib.sun_1();
	this.instance_5.setTransform(480,17.5,1,1,0,0,0,135.5,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// bg
	this.bg = new lib.bgPortrait();
	this.bg.setTransform(480,300,1.6,0.625,0,0,0,300,480);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135,-230,1096.6,1017.5);


(lib.md_Landscape = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame();
	this.instance.setTransform(480,300,1,1,-90,0,0,300,480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// portraitHelpPlaque
	this.HelpPlaque = new lib.portraitHelpPlaque();
	this.HelpPlaque.setTransform(478.7,254.5,1,1,0,0,0,254,197.5);

	this.timeline.addTween(cjs.Tween.get(this.HelpPlaque).wait(1));

	// portraitWinResultPlaque
	this.WinResultPlaque = new lib.portraitWinResultPlaque();
	this.WinResultPlaque.setTransform(477.5,334.5,1,1,0,0,0,254,197.5);

	this.timeline.addTween(cjs.Tween.get(this.WinResultPlaque).wait(1));

	// portraitLoseResultPlaque
	this.LoseResultPlaque = new lib.portraitLoseResultPlaque();
	this.LoseResultPlaque.setTransform(477.6,334.5,1,1,0,0,0,254,197.5);

	this.timeline.addTween(cjs.Tween.get(this.LoseResultPlaque).wait(1));

	// portraitTicketCostPlaque
	this.TicketCostPlaque = new lib.portraitTicketCostPlaque();
	this.TicketCostPlaque.setTransform(477.5,254.5,1,1,0,0,0,254,197.5);

	this.timeline.addTween(cjs.Tween.get(this.TicketCostPlaque).wait(1));

	// darkener
	this.darkener = new lib.portraitDarkener();
	this.darkener.setTransform(480,300,1,1,-90,0,0,300,480);

	this.timeline.addTween(cjs.Tween.get(this.darkener).wait(1));

	// starbursts
	this.starburst6 = new lib.largeBurst();
	this.starburst6.setTransform(802.8,498.7);

	this.starburst5 = new lib.largeBurst();
	this.starburst5.setTransform(802.8,447.7);

	this.starburst4 = new lib.largeBurst();
	this.starburst4.setTransform(802.8,398.7);

	this.starburst3 = new lib.largeBurst();
	this.starburst3.setTransform(802.8,298.5);

	this.starburst2 = new lib.largeBurst();
	this.starburst2.setTransform(802.8,248.2);

	this.starburst1 = new lib.largeBurst();
	this.starburst1.setTransform(802.8,198);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.starburst1},{t:this.starburst2},{t:this.starburst3},{t:this.starburst4},{t:this.starburst5},{t:this.starburst6}]}).wait(1));

	// bottomBoardLand
	this.instance_1 = new lib.bottomBoardLand();
	this.instance_1.setTransform(0,526,1,1.514);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// ballsRemaining
	this.ballsRemaining = new lib.ballsRemainingLandscape();
	this.ballsRemaining.setTransform(743,161.5,1,1,0,0,0,128,22.5);

	this.timeline.addTween(cjs.Tween.get(this.ballsRemaining).wait(1));

	// bonusBarrel
	this.bonusBarrel = new lib.bonusBarrelLandscapeAnim();
	this.bonusBarrel.setTransform(615.2,329.7,1.016,1.036);

	this.timeline.addTween(cjs.Tween.get(this.bonusBarrel).wait(1));

	// winBoxes
	this.instance_2 = new lib.bonusPot();
	this.instance_2.setTransform(259.1,562.2,0.862,0.862,0,0,0,37,59);

	this.redBox = new lib.bananaScoreRed();
	this.redBox.setTransform(57.5,561.5,0.862,0.862,0,0,0,40.1,57.9);

	this.greenBox = new lib.bananaScoreGreenPortrait();
	this.greenBox.setTransform(462.5,554.7,0.862,0.862,0,0,0,40.1,50);

	this.purpleBox = new lib.bananaScorePurplePortrait();
	this.purpleBox.setTransform(393.5,554.7,0.862,0.862,0,0,0,40,50);

	this.yellowBox = new lib.bananaScoreYellow();
	this.yellowBox.setTransform(324.6,554.7,0.862,0.862,0,0,0,40,50);

	this.pinkBox = new lib.bananaScorePink();
	this.pinkBox.setTransform(195.2,554.7,0.862,0.862,0,0,0,40,50);

	this.blueBox = new lib.bananaScoreBlue();
	this.blueBox.setTransform(126.4,554.7,0.862,0.862,0,0,0,40.1,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blueBox},{t:this.pinkBox},{t:this.yellowBox},{t:this.purpleBox},{t:this.greenBox},{t:this.redBox},{t:this.instance_2}]}).wait(1));

	// ball
	this.ball = new lib.ball();
	this.ball.setTransform(303,112,1,1,0,0,0,0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

	// monkeySwinger
	this.monkeySwinger = new lib.monkeySwinger();
	this.monkeySwinger.setTransform(288,-141,1,1,0,0,0,70,267);

	this.timeline.addTween(cjs.Tween.get(this.monkeySwinger).wait(1));

	// bananaScoreLandscapeGreen
	this.bananaScoreLandscapeGreen = new lib.bananaScoreLandscapeGreen();
	this.bananaScoreLandscapeGreen.setTransform(615,476);

	this.timeline.addTween(cjs.Tween.get(this.bananaScoreLandscapeGreen).wait(1));

	// bananaScoreLandscapePurple
	this.bananaScoreLandscapePurple = new lib.bananaScoreLandscapePurple();
	this.bananaScoreLandscapePurple.setTransform(615,426);

	this.timeline.addTween(cjs.Tween.get(this.bananaScoreLandscapePurple).wait(1));

	// bananaScoreLandscapeYellow
	this.bananaScoreLandscapeYellow = new lib.bananaScoreLandscapeYellow();
	this.bananaScoreLandscapeYellow.setTransform(615,376);

	this.timeline.addTween(cjs.Tween.get(this.bananaScoreLandscapeYellow).wait(1));

	// bananaScoreLandscapePink
	this.bananaScoreLandscapePink = new lib.bananaScoreLandscapePink();
	this.bananaScoreLandscapePink.setTransform(615,276);

	this.timeline.addTween(cjs.Tween.get(this.bananaScoreLandscapePink).wait(1));

	// bananaScoreLandscapeBlue
	this.bananaScoreLandscapeBlue = new lib.bananaScoreLandscapeBlue();
	this.bananaScoreLandscapeBlue.setTransform(615,226);

	this.timeline.addTween(cjs.Tween.get(this.bananaScoreLandscapeBlue).wait(1));

	// bananaScoreLandscapeRed
	this.bananaScoreLandscapeRed = new lib.bananaScoreLandscapeRed();
	this.bananaScoreLandscapeRed.setTransform(742.7,202,1,1,0,0,0,128,25);

	this.timeline.addTween(cjs.Tween.get(this.bananaScoreLandscapeRed).wait(1));

	// blossomTree.png
	this.instance_3 = new lib.blossomTree_1();
	this.instance_3.setTransform(0.8,-4,0.677,0.677,0,0,180,191.1,192);

	this.instance_4 = new lib.blossomTree_1();
	this.instance_4.setTransform(922.8,41,0.5,0.5,0,0,0,191,192);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// lanterns
	this.instance_5 = new lib.lanternRed_1();
	this.instance_5.setTransform(922.3,225.2,1,1,0,0,0,38,35.5);

	this.instance_6 = new lib.lanternString_1();
	this.instance_6.setTransform(918.4,189.7,1,0.656,0,0,0,-3.6,30.5);

	this.instance_7 = new lib.lanternString_1();
	this.instance_7.setTransform(899.9,206.8,1,0.492,0,0,0,-3.6,30.5);

	this.instance_8 = new lib.lanternString_1();
	this.instance_8.setTransform(570,215.5,1,1,0,0,0,0.5,30.5);

	this.instance_9 = new lib.lanternRed_1();
	this.instance_9.setTransform(570,265.5,1,1,0,0,0,38,35.5);

	this.instance_10 = new lib.lanternGreen_1();
	this.instance_10.setTransform(904,247.5,1,1,0,0,0,38,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// dropBoard
	this.dropBoard = new lib.board();
	this.dropBoard.setTransform(-16.5,64.4,0.862,0.862);

	this.timeline.addTween(cjs.Tween.get(this.dropBoard).wait(1));

	// landscapeScoreboardSide
	this.instance_11 = new lib.landscapeScoreboardSide();
	this.instance_11.setTransform(964,137,1,1,0,0,180);

	this.instance_12 = new lib.landscapeScoreboardSide();
	this.instance_12.setTransform(522,137);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).wait(1));

	// sun
	this.instance_13 = new lib.sun_1();
	this.instance_13.setTransform(480,17.5,1,1,0,0,0,135.5,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#0C0602").beginStroke().moveTo(-130.5,27.2).lineTo(-130.5,-27.2).lineTo(130.5,-27.2).lineTo(130.5,27.2).closePath();
	this.shape.setTransform(743.2,351.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// pagodas
	this.instance_14 = new lib.littleMonkeys();
	this.instance_14.setTransform(715.3,5);

	this.instance_15 = new lib.pagodaTrans_1();
	this.instance_15.setTransform(587.7,143,0.538,0.538,0,0,0,125,93);

	this.instance_16 = new lib.pagodaTrans_1();
	this.instance_16.setTransform(766.7,107,1,1,0,0,0,125,93);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// bg
	this.bg = new lib.bgPortrait();
	this.bg.setTransform(480,300,1.6,0.625,0,0,0,300,480);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.4,-168.3,1146.7,824.7);


// stage content:
(lib.monkeyDropGameMasterNEWFLASH = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(269,90,1229.3,1192.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;