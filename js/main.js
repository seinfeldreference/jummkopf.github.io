var femaleTitles = [
	"Madam ",
	"Lady ",
	"Queen ",
	"Princess ",
	"Archduchess ",
	"Duchess ",
	"Marquess ",
	"Empress ",
	"Countess ",
	"God-Empress ",
	"Tsarina "
];

var maleTitles = [
	"Master ",
	"Lord ",
	"King ",
	"Prince ",
	"Archduke ",
	"Duke ",
	"Earl ",
	"Marquis ",
	"Count ",
	"Viscount ",
	"Baron ",
	"Emperor ",
	"Pope ",
	"Sir ",
	"Father ",
	"Lord Protector ",
	"Doge ",
	"Duce ",
	"God-Emperor ",
	"Tsar "
];

var neutralTitles = [
	"Senator ",
	"Superintendent ",
	"Ambassador ",
	"Emissary ",
	"President ",
	"Chief ",
	"Warchief ",
	"Saint ",
	"Prophet ",
	"Professor ",
	"Acolyte ",
	"Elder ",
	"Minister ",
	"Mayor ",
	"High Priest ",
	"Admiral ",
	"Captain ",
	"General ",
	"Commander ",
	"Corporal ",
	"Major ",
	"Lieutenant ",
	"Ranger ",
	"Ranger-General ",
	"Comrade ",
	"Apprentice ",
	"Grand Bard ",
	"Inquisitor ",
	"Grand Inquisitor ",
	"Revolver ",
	"Big Boss "
];

var femaleNames = [
	"Nara",
	"Nire",
	"Mavis",
	"Astrid",
	"Ray",
	"Flora",
	"Ada",
	"Collette",
	"Lilianne",
	"Jaqueline",
	"Erikka",
	"Anastasia",
	"Hanna",
	"Evelyn",
	"Lorelei",
	"Aria",
	"Clementine",
	"Ursula",
	"Grata",
	"Fosha",
	"Forna",
	"Ona",
	"Aura",
	"Gale",
	"Willow",
	"Helaine",
	"Storia",
	"Avery",
	"Valerie",
	"Louanna",
	"Leslie",
	"Abigail",
	"Topaz",
	"Harper",
	"Sontal",
	"Verona",
	"Anna",
	"Lissa",
	"Corrin",
	"Maribelle",
	"Molay"
];

var maleNames = [
	"Edgar",
	"Clyde",
	"Edmund",
	"Ashton",
	"Martin",
	"Zacharias",
	"Nathaniel",
	"Raynard",
	"Louis",
	"Braulio",
	"Cromslor",
	"Gozi",
	"Morne",
	"Crogma",
	"Bokk",
	"Giovanni",
	"Bartholomew",
	"Ggregg",
	"Xander",
	"Barchibold",
	"Jundus",
	"Garrick",
	"Vernon",
	"Leonard",
	"Barnabus",
	"Barnaby",
	"Samuel",
	"Hugbert",
	"Gunter",
	"Amadeus",
	"Vincent",
	"Victor",
	"Ignacio",
	"Egg",
	"Eggnacio",
	"Octavian",
	"Thresorn",
	"Crokmost",
	"Giornio",
	"Seymour",
	"Chalmers",
	"Tardif",
	"William",
	"Baldwin",
	"Ike",
	"Gwakka"
];

var lastNames = [
	"Nightshade",
	"Frostrend",
	"Deathwish",
	"Truesight",
	"Stormgate",
	"Frozenfield",
	"Mistbloom",
	"Mendenhall",
	"Brent",
	"Holt",
	"Michaelis",
	"Umber",
	"Seabrook",
	"Chillwind",
	"Sterntide",
	"Shadowwhisper",
	"Summerbrooke",
	"Hydravale",
	"Holyvalor",
	"Richheart",
	"Dawnwood",
	"Cloudcaller",
	"Deathsurge",
	"Noblepeak",
	"Hammerhelm",
	"Covenspire",
	"Lightwalker",

	
	"Archer", 
	"Baker", 
	"Brewer", 
	"Butcher", 
	"Carter", 
	"Clark", 
	"Cooper",  
	"Dyer", 
	"Farmer", 
	"Faulkner", 
	"Fisher", 
	"Fuller", 
	"Gardener", 
	"Glover",  
	"Hunt",
	"Hunter", 
	"Judge", 
	"Mason", 
	"Page", 
	"Parker", 
	"Potter", 
	"Sawyer", 
	"Slater", 
	"Taylor", 
	"Thatcher", 
	"Turner", 
	"Weaver", 
	"Woodman",
	"Wright",
	
	"Hamm",
	"Joestar"
];

var epithets = [
	" the Great",
	" the Rightly-Guided",
	" the Lawgiver",
	" the Bringer of the Storm",
	" the Inquisitor",
	" the Damned",
	" the Quick",
	" the Kid",
	" the Nimble",
	" the Completely Average",
	" the Pretty Okay",
	" the Terrible",
	" the Lionhearted",
	" the Fearsome",
	" the Indomitable",
	" the Leper",
	" the Unfortunate",
	" the Insane",
	" the Weak",
	" the Strong",
	" the Cowardly",
	" the Fox",
	" the Cunning",
	" the Unerring",
	" the Unassailable",
	" the Majestic",
	" the Unconquerable",
	" the Hungry",
	" the Valiant",
	" the Elbow-High",
	" the Executioner",
	" the Muse",
	" the Fool",
	" the Dapper",
	" the Exalted",
	" the Humble",
	" the Usurper",
	" the Scourge",
	" the Scourge of God",
	" the Revenant",
	" the Ocelot",
	" the Stammerer",
	" the Avaricious",
	" the Sad Sack",
	" the Rising Star",
	" the Incompetent",
	" the Warmonger",
	" the Tolerant",
	" the Tolerable",
	" the Vainglorious",
	" the Stalwart",
	" the Vigorous",
	" the Amusing",
	" the Unruly",
	" the Strange",
	" the Spirited",
	" the Soft",
	" the Masochist",
	" the Mad",
	" the Paranoid"
];

var alignment = [
	"Lawful Good",
	"Lawful Neutral",
	"Lawful Evil",
	"Neutral Good",
	"True Neutral",
	"Neutral Evil",
	"Chaotic Good",
	"Chaotic Neutral",
	"Chaotic Evil"
];

var lawful = [
	"Honor. I don't steal from others in the trade.",
	"Tradition. The stories, legends, and songs of the past must never be forgotten.",
	"Fairness. No one should get preferential treatment before the law, and no one is above the law.",
	"Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization.",
	"Logic. Emotions must not cloud our sense of what is right and true, or our logical thinking.",
	"Community. We have to take care of each other, because no one else is going to do it.",
	"Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine.",
	"Honor. If I dishonor myself, I dishonor my whole clan.",
	"Responsibility. I do what I must and obey just authority.",
	"Fairness. We all do the work, so we all share in the rewards."
];

var neutral = [
	"People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care.",
	"People. I like seeing the smiles on people's faces when I perform. That's all that matters.",
	"Sincerity. There's no good pretending to be something I'm not.",
	"Live and Let Live. Meddling in the affairs of others only causes trouble.",
	"People. I'm committed to the people I care about, not to ideals.",
	"Nature. The natural world is more important than all the constructs of civilization.",
	"Knowledge. The path to power and self-improvement is through knowledge.",
	"People. I'm committed to my crewmates, not to ideals.",
	"Ideals aren't worth killing for or going to war for.",
	"People. I help people who help me -- that's what keeps us alive."

];

var chaotic = [
	"Freedom. Chains are meant to be broken, as are those who would forge them.",
	"Creativity. The world is in need of new ideas and bold action.",
	"Freedom. Tyrants must not be allowed to oppress the people.",
	"Free Thinking. Inquiry and curiosity are the pillars of progress.",
	"Freedom. Everyone should be free to pursue his or her livelihood.",
	"Change. Life is like the seasons, in constant change, and we must change with it.",
	"Independence. I must prove that I can handle myself without the coddling of my family.",
	"Freedom. The sea is freedom -- the freedom to go anywhere and do anything.",
	"No Limits. Nothing should fetter the infinite possibility inherent in all existence.",
	"Independence. When people follow orders blindly they embrace a kind of tyranny.",
	"Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things."

];

var good = [
	"Charity. I steal from the wealthy so that I can help people in need.",
	"Redemption. There's a spark of good in everyone.",
	"Greater Good. Our lot is to lay down our lives in defense of others.",
	"Beauty. When I perform, I make the world better than it was.",
	"Respect. People deserve to be treated with dignity and respect.",
	"Generosity. My talents were given to me so that I could use them to benefit the world.",
	"Greater Good. My gifts are meant to be shared with all, not used for my own benefit.",
	"Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity.",
	"Beauty. What is beautiful points us beyond itself toward what is true.",
	"Respect. All people, rich or poor, deserve respect.",
	"Noble Obligation. It is my duty to protect and care for the people beneath me.",
	"Greater Good. It is each person's responsibility to make the most happiness for the whole tribe.",
	"Respect. The thing that keeps a ship together is mutual respect between captain and crew."

];

var evil = [
	"Greed. I will do whatever it takes to become wealthy.",
	"Greed. I'm only in it for the money and fame.",
	"Might. If I become strong, I can take what I want -- what I deserve.",
	"Greed. I'm only in it for the money.",
	"Power. If I can attain more power, no one will tell me what to do.",
	"Power. Solitude and contemplation are paths toward mystical or magical power.",
	"Might. The strongest are meant to rule.",
	"Power. Knowledge is the path to power and domination.",
	"Master. I'm a predator, and the other ships on the sea are my prey.",
	"Might. In life as in war, the stronger force wins.",
	"Retribution. The rich need to be shown what life and death are like in the gutters."

];

var traits = [
	"I idolize a particular hero of my faith and constantly refer to that person's deeds and example.",
    "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.",
    "I see omens in every event and action. The gods try to speak to us, we just need to listen.",
    "Nothing can shake my optimistic attitude.",
    "I quote (or misquote) the sacred texts and proverbs in almost every situation.",
    "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.",
    "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me.",
    "I've spent so long in the temple that I have little practical experience dealing with people in the outside world.",
    "I fall in and out of love easily, and am always pursuing someone.",
    "I have a joke for every occasion, especially occasions where humor is inappropriate.",
    "Flattery is my preferred trick for getting what I want.",
    "I'm a born gambler who can't resist taking a risk for a potential payoff.",
    "I lie about almost everything, even when there's no good reason to.",
    "Sarcasm and insults are my weapons of choice.",
    "I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
    "I pocket anything I see that might have some value.",
    "I always have plan for what to do when things go wrong.",
    "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.",
    "The first thing I do in a new place is note the locations of everything valuable -- or where such things could be hidden.",
    "I would rather make a new friend than a new enemy.",
    "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
    "I don't pay attention to the risks in a situation. Never tell me the odds.",
    "The best way to get me to do something is to tell me I can't do it.",
    "I blow up at the slightest insult.",
    "I know a story relevant to almost every situation.",
    "Whenever I come to a new place, I collect local rumors and spread gossip.",
    "I'm a hopeless romantic, always searching for that 'special someone'.",
    "Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
    "I love a good insult, even one directed at me.",
    "I get bitter if I'm not the center of attention.",
    "I'll settle for nothing less than perfection.",
    "I change my mood or my mind as quickly as I change key in a song.",
    "I judge people by their actions, not their words.",
    "If someone is in trouble, I'm always willing to lend help.",
    "When I set my mind to something, I follow through no matter what gets in my way.",
    "I have a strong sense of fair play and always try to find the most equitable solution to arguments.",
    "I'm confident in my own abilities and do what I can to instill confidence in others.",
    "Thinking is for other people. I prefer action.",
    "I misuse long words in an attempt to sound smarter.",
    "I get bored easily. When am I going to get on with my destiny.",
    "I believe that everything worth doing is worth doing right. I can't help it -- I'm a perfectionist.",
    "I'm a snob who looks down on those who can't appreciate fine art.",
    "I always want to know how things work and what makes people tick.",
    "I'm full of witty aphorisms and have a proverb for every occasion.",
    "I'm rude to people who lack my commitment to hard work and fair play.",
    "I like to talk at length about my profession.",
    "I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
    "I'm well known for my work, and I want to make sure everyone appreciates it.",
	"I'm always taken aback when people haven't heard of me.",
    "I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
    "I am utterly serene, even in the face of disaster.",
    "The leader of my community has something wise to say on every topic, and I am eager to share that wisdom.",
    "I feel tremendous empathy for all who suffer.",
    "I'm oblivious to etiquette and social expectations.",
    "I connect everything that happens to me to a grand cosmic plan.",
    "I often get lost in my own thoughts and contemplations, becoming oblivious to my surroundings.",
    "I am working on a grand philosophical theory and love sharing my ideas.",
    "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
    "The common folk love me for my kindness and generosity.",
    "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
    "I take great pains to always look my best and follow the latest fashions.",
    "I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
    "Despite my birth, I do not place myself above other folk. We all have the same blood.",
    "My favor, once lost, is lost forever.",
    "If you do me an injury, I will crush you, ruin your name, and salt your fields.",
    "I'm driven by a wanderlust that led me away from home.",
    "I watch over my friends as if they were a litter of newborn pups.",
    "I once ran twenty-five miles without stopping to warn my clan of an approaching orc horde. I'd do it again if I had to.",
    "I have a lesson for every situation, drawn from observing nature.",
    "I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
    "I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
    "I feel far more comfortable around animals than people.",
    "I was, in fact, raised by wolves.",
    "I use polysyllabic words to convey the impression of great erudition.",
    "I've read every book in the world's greatest libraries -- or like to boast that I have.",
    "I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
    "There's nothing I like more than a good mystery.",
    "I'm willing to listen to every side of an argument before I make my own judgment.",
    "I...speak...slowly...when talking...to idiots...which...almost...everyone...is...compared ...to me.",
    "I am horribly, horribly awkward in social situations.",
    "I'm convinced that people are always trying to steal my secrets.",
    "My friends know they can rely on me, no matter what.",
    "I work hard so that I can play hard when the work is done.",
    "I enjoy sailing into new ports and making new friends over a flagon of ale.",
    "I stretch the truth for the sake of a good story.",
    "To me, a tavern brawl is a nice way to get to know a new city.",
    "I never pass up a friendly wager.",
    "My language is as foul as an otyugh nest.",
    "I like a job well done, especially if I can convince someone else to do it.",
    "I'm always polite and respectful.",
    "I'm haunted by memories of war. I can't get the images of violence out of my mind.",
    "I've lost too many friends, and I'm slow to make new ones.",
    "I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
    "I can stare down a hellhound without flinching.",
    "I enjoy being strong and like breaking things.",
    "I have a crude sense of humor.",
    "I face problems head-on. A simple direct solution is the best path to success.",
    "I hide scraps of food and trinkets away in my pockets.",
    "I ask a lot of questions.",
    "I like to squeeze into small places where no one else can get to me.",
    "I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.",
    "I eat like a pig and have bad manners.",
    "I think anyone who's nice to me is hiding evil intent.",
    "I don't like to bathe.",
    "I bluntly say what other people are hinting or hiding."
];

var flaws = [
	"I judge others harshly, and myself even more severely.",
    "I put too much trust in those who wield power within my temple's hierarchy.",
    "My piety sometimes leads me to blindly trust those that profess faith in my god.",
    "I am inflexible in my thinking.",
    "I am suspicious of strangers and suspect the worst of them.",
    "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.",
    "I can't resist a pretty face.",
    "I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
    "I'm convinced that no one could ever fool me in the way I fool others.",
    "I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
    "I can't resist swindling people who are more powerful than me.",
    "I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough.",
    "When I see something valuable, I can't think about anything but how to steal it.",
    "When faced with a choice between money and my friends, I usually choose the money.",
    "If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
    "I have a 'tell' that reveals when I'm lying.",
    "I turn tail and run when things go bad.",
    "An innocent person is in prison for a crime that I committed. I'm okay with that.",
    "I'll do anything to win fame and renown.",
    "I'm a sucker for a pretty face.",
    "A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
    "I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
    "I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
    "Despite my best efforts, I am unreliable to my friends.",
    "The tyrant who rules my land will stop at nothing to see me killed.",
    "I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.",
    "The people who knew me when I was young know my shameful secret, so I can never go home again.",
    "I have a weakness for the vices of the city, especially hard drink.",
    "Secretly, I believe that things would be better if I were a tyrant lording over the land.",
    "I have trouble trusting in my allies.",
    "I'll do anything to get my hands on something rare or priceless.",
    "I'm quick to assume that someone is trying to cheat me.",
    "No one must ever learn that I once stole money from guild coffers.",
    "I'm never satisfied with what I have -- I always want more.",
    "I would kill to acquire a noble title.",
    "I'm horribly jealous of anyone who outshines my handiwork. Everywhere I go, I'm surrounded by rivals.",
    "Now that I've returned to the world, I enjoy its delights a little too much.",
    "I harbor dark bloodthirsty thoughts that my isolation failed to quell.",
    "I am dogmatic in my thoughts and philosophy.",
    "I let my need to win arguments overshadow friendships and harmony.",
    "I'd risk too much to uncover a lost bit of knowledge.",
    "I like keeping secrets and won't share them with anyone.",
    "I secretly believe that everyone is beneath me.",
    "I hide a truly scandalous secret that could ruin my family forever.",
    "I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
    "I have an insatiable desire for carnal pleasures.",
    "In fact, the world does revolve around me.",
    "By my words and actions, I often bring shame to my family.",
    "I am too enamored of ale, wine, and other intoxicants.",
    "There's no room for caution in a life lived to the fullest.",
    "I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
    "I am slow to trust members of other races.",
    "Violence is my answer to almost any challenge.",
    "Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish.",
    "I am easily distracted by the promise of information.",
    "Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
    "Unlocking an ancient mystery is worth the price of a civilization.",
    "I overlook obvious solutions in favor of complicated ones.",
    "I speak without really thinking through my words, invariably insulting others.",
    "I can't keep a secret to save my life, or anyone else's.",
    "I follow orders, even if I think they're wrong.",
    "I'll say anything to avoid having to do extra work.",
    "Once someone questions my courage, I never back down no matter how dangerous the situation.",
    "Once I start drinking, it's hard for me to stop.",
    "I can't help but pocket loose coins and other trinkets I come across.",
    "My pride will probably lead to my destruction.",
    "The monstrous enemy we faced in battle still leaves me quivering with fear.",
    "I have little respect for anyone who is not a proven warrior.",
    "I made a terrible mistake in battle that cost many lives -- and I would do anything to keep that mistake secret.",
    "My hatred of my enemies is blind and unreasoning.",
    "I obey the law, even if the law causes misery.",
    "I'd rather eat my armor than admit when I'm wrong.",
    "If I'm outnumbered, I always run away from a fight.",
    "Gold seems like a lot of money to me, and I'll do just about anything for more of it.",
    "I will never fully trust anyone other than myself.",
    "I'd rather kill someone in their sleep than fight fair.",
    "It's not stealing if I need it more than someone else.",
    "People who don't take care of themselves get what they deserve."
];

function generate() {
	var coinFlip = Math.floor((Math.random() * 2 ) + 1);
	var lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
	var name;
	
	/*
	*  flips coin to determine if male or female
	*  whatever it is, flips coin to see if they should get an epithets
	*  then it applies color based on gender
	*/
	if(coinFlip == 1) {
		coinFlip = Math.floor((Math.random() * 2 ) + 1);
		name = femaleNames[Math.floor(Math.random() * femaleNames.length)] + " " + lastName;
		if(coinFlip == 1) {
			name = name + epithets[Math.floor(Math.random() * epithets.length)];
		}
		coinFlip = Math.floor((Math.random() * 2 ) + 1);
		if(coinFlip == 1) {
			coinFlip = Math.floor((Math.random() * 2 ) + 1);
			if(coinFlip == 1) {
				name = femaleTitles[Math.floor(Math.random() * femaleTitles.length)] + name;
			}
			else {
				name = neutralTitles[Math.floor(Math.random() * neutralTitles.length)] + name;
			}
		}
		document.getElementById("names").innerHTML = name;
		document.getElementById("names").style.color = "#FFC0CB";
	}
	else {
		coinFlip = Math.floor((Math.random() * 2 ) + 1);
		name = maleNames[Math.floor(Math.random() * maleNames.length)] + " " + lastName;
		if(coinFlip == 1) {
			name = name + epithets[Math.floor(Math.random() * epithets.length)];
		}
		coinFlip = Math.floor((Math.random() * 2 ) + 1);
		if(coinFlip == 1) {
			coinFlip = Math.floor((Math.random() * 2 ) + 1);
			if(coinFlip == 1) {
				name = maleTitles[Math.floor(Math.random() * maleTitles.length)] + name;
			}
			else {
				name = neutralTitles[Math.floor(Math.random() * neutralTitles.length)] + name;
			}
		}
		document.getElementById("names").innerHTML = name;
		document.getElementById("names").style.color = "#4169E1";
	}
	
	var gen = Math.floor(Math.random() * alignment.length);
	document.getElementById("alignment").innerHTML = "(" + alignment[gen] + ")";
	
	coinFlip = Math.floor((Math.random() * 2 ) + 1);
	alignmentIdealGenerator(coinFlip, gen);
	
	document.getElementById("traits").innerHTML = traits[Math.floor(Math.random() * traits.length)];
	document.getElementById("flaws").innerHTML = flaws[Math.floor(Math.random() * flaws.length)];
}
generate();

function alignmentIdealGenerator(flip, randNum) {
	if(randNum == 0) {
		if(flip == 1) { 
			document.getElementById("ideals").innerHTML = lawful[Math.floor(Math.random() * lawful.length)];
		}
		else {
			document.getElementById("ideals").innerHTML = good[Math.floor(Math.random() * good.length)];
		}
	}
	else if(randNum == 1) {
		if(flip == 1) { 
			document.getElementById("ideals").innerHTML = lawful[Math.floor(Math.random() * lawful.length)];
		}
		else {
			document.getElementById("ideals").innerHTML = neutral[Math.floor(Math.random() * neutral.length)];
		}
	}
	else if(randNum == 2) {
		if(flip == 1) { 
			document.getElementById("ideals").innerHTML = lawful[Math.floor(Math.random() * lawful.length)];
		}
		else {
			document.getElementById("ideals").innerHTML = evil[Math.floor(Math.random() * evil.length)];
		}
	}
	else if(randNum == 3) {
		if(flip == 1) { 
			document.getElementById("ideals").innerHTML = neutral[Math.floor(Math.random() * neutral.length)];
		}
		else {
			document.getElementById("ideals").innerHTML = good[Math.floor(Math.random() * evil.length)];
		}
	}
	else if(randNum == 4) {
		document.getElementById("ideals").innerHTML = neutral[Math.floor(Math.random() * neutral.length)];
	}
	else if(randNum == 5) {
		if(flip == 1) { 
			document.getElementById("ideals").innerHTML = neutral[Math.floor(Math.random() * neutral.length)];
		}
		else {
			document.getElementById("ideals").innerHTML = evil[Math.floor(Math.random() * evil.length)];
		}
	}
	else if(randNum == 6) {
		if(flip == 1) { 
			document.getElementById("ideals").innerHTML = chaotic[Math.floor(Math.random() * chaotic.length)];
		}
		else {
			document.getElementById("ideals").innerHTML = good[Math.floor(Math.random() * good.length)];
		}
	}
	else if(randNum == 7) {
		if(flip == 1) { 
			document.getElementById("ideals").innerHTML = chaotic[Math.floor(Math.random() * chaotic.length)];
		}
		else {
			document.getElementById("ideals").innerHTML = neutral[Math.floor(Math.random() * neutral.length)];
		}
	}
	else if(randNum == 8) {
		if(flip == 1) { 
			document.getElementById("ideals").innerHTML = chaotic[Math.floor(Math.random() * chaotic.length)];
		}
		else {
			document.getElementById("ideals").innerHTML = evil[Math.floor(Math.random() * evil.length)];
		}
	}
}