var allContacts = [];
var failedContacts = [];
var errorCount = 0;

if (!String.prototype.padEnd) {
	String.prototype.padEnd = function padEnd(targetLength, padString) {
		targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
		padString = String(padString || ' ');
		if (this.length > targetLength) {
			return String(this);
		} else {
			targetLength = targetLength - this.length;
			if (targetLength > padString.length) {
				padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
			}
			return String(this) + padString.slice(0, targetLength);
		}
	};
}


const addContact = function (firstName, lastName, email) {
	if (typeof firstName === 'string' && typeof lastName === 'string' && typeof email === 'string') {
		allContacts.push({
			fullName: firstName + " " + lastName,
			email: email
		});
		return true;
	} else {
		failedContacts.push({
			fullName: firstName + " " + lastName,
			email: email
		});
		throw new Error('not a string');
	}
}


const addContacts = function (contactData) {
	console.log('Loading contacts...');
	contactData.forEach(item => {
		try {
			addContact(item.first_name, item.last_name, item.email);
		} catch (e) {
			errorCount++;
		}
	});
	console.log('...contacts have been loaded');
}

const printContacts = function (contacts) {

	console.log('All Contacts:');
	console.log('|-------------------------+-----------------------------------|');
	console.log('| Full Name               | Email                             |');
	console.log('|-------------------------+-----------------------------------|');

	contacts.sort(function (a, b) {
		if (a.fullName < b.fullName) return -1;
		if (a.fullName > b.fullName) return 1;
		return 0;
	})

	contacts.forEach(contacts => {
		let name = '| ' + contacts.fullName;
		let contact = '| ' + contacts.email;
		console.log(name.padEnd(26) + contact.padEnd(36) + '|');
	});

	console.log('|-------------------------+-----------------------------------|');
	console.log('Could not import ' + errorCount + ' contacts');
	failedContacts.forEach(item => {
		console.log('unable to import ' + item.fullName + ' ' + item.email);
	});
}
///////////////////////////////////////////////////////////////////////////

addContacts([{
	"first_name": "Tanny",
	"last_name": "Vibert",
	"email": "tvibert0@illinois.edu"
}, {
	"first_name": 55,
	"last_name": "Myall",
	"email": "tmyall1@instagram.com"
}, {
	"first_name": "Engracia",
	"last_name": "Folger",
	"email": "efolger2@epa.gov"
}, {
	"first_name": "Conroy",
	"last_name": "Honsch",
	"email": "chonsch3@sohu.com"
}, {
	"first_name": "Virgina",
	"last_name": "Cankett",
	"email": true
}, {
	"first_name": "Mateo",
	"last_name": "Da Costa",
	"email": "mdacosta5@about.com"
}, {
	"first_name": "Ambrose",
	"last_name": "Scullard",
	"email": "ascullard6@timesonline.co.uk"
}, {
	"first_name": "Shaylah",
	"last_name": "Fairney",
	"email": "sfairney7@stumbleupon.com"
}, {
	"first_name": "Pier",
	"last_name": "Waine",
	"email": "pwaine8@unc.edu"
}, {
	"first_name": "Karita",
	"last_name": "Bough",
	"email": "kbough9@angelfire.com"
}, {
	"first_name": "Marguerite",
	"last_name": "Lafayette",
	"email": "mlafayettea@bravesites.com"
}, {
	"first_name": "Northrop",
	"last_name": "Bauchop",
	"email": "nbauchopb@pagesperso-orange.fr"
}, {
	"first_name": "Devon",
	"last_name": "Bocking",
	"email": "dbockingc@comcast.net"
}, {
	"first_name": "Willdon",
	"last_name": 22,
	"email": "whedleyd@purevolume.com"
}, {
	"first_name": "Charil",
	"last_name": "Clegg",
	"email": "cclegge@weibo.com"
}, {
	"first_name": "Nessi",
	"last_name": "Bywaters",
	"email": "nbywatersf@shop-pro.jp"
}, {
	"first_name": "Mercy",
	"last_name": "Browncey",
	"email": "mbrownceyg@yelp.com"
}, {
	"first_name": "Didi",
	"last_name": "Grose",
	"email": "dgroseh@google.com.hk"
}, {
	"first_name": "Niccolo",
	"last_name": "Spruce",
	"email": "nsprucei@wordpress.com"
}, {
	"first_name": "Winston",
	"last_name": "Hixley",
	"email": "whixleyj@homestead.com"
}]);
printContacts(allContacts)
