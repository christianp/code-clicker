var challenges = {
	'echo': {
		reward: 260,
		price: 500,
		description: "Return what you're given",
		data_generator: function() {
			return Math.random()*1000;
		},
		test: function(value,data) {
			return value==data;
		},
		examples: [
			{
				from: 0.13214,
				to: 0.13214
			}
		]
	},

	'announce': {
		reward: 500,
		price: 15000,
		description: 'Announce guests at a ball, with their full titles',
		data_generator: function() {
			return {
				first_name: choice(corpora['firstNames.json'].firstNames),
				second_name: choice(corpora['lastNames.json'].lastNames),
				title: choice(corpora['englishHonorifics.json'].englishHonorifics),
			}
		},
		test: function(value,data) {
			var expect  = data.title+' '+data.first_name+' '+data.second_name;
			return value==expect;
		},
		examples: [
			{
				from: {
					first_name: "Bob",
					second_name: "Smythe",
					title: "Lord",
				},
				to: "Lord Bob Smythe"
			}
		]
	},

	'factorise1': {
		reward: 3000,
		price: 50000,
		description: "Factorise a given number between 10 and 100",
		data_generator: function() {
			return Math.floor(Math.random()*90+10);
		},
		test: function(value,data) {
			function is_prime(n) {
				if(n<2) {
					return false;
				}
				for(var i=2;i*i<=n;i++) {
					if(n%i==0) {
						return false;
					}
				}
				return true;
			}
			return value.every(is_prime) && value.reduce((t,x)=>t*x,1)==data;
		},
		examples: [
			{
				from: 24,
				to: [2,2,2,3]
			}
		]
	},

	'factorise2': {
		reward: 30000,
		price: 500000,
		description: "Factorise a given number between 100 and 1000",
		data_generator: function() {
			return Math.floor(Math.random()*900+100);
		},
		test: function(value,data) {
			function is_prime(n) {
				if(n<2) {
					return false;
				}
				for(var i=2;i*i<=n;i++) {
					if(n%i==0) {
						return false;
					}
				}
				return true;
			}
			return value.every(is_prime) && value.reduce((t,x)=>t*x,1)==data;
		},
		examples: [
			{
				from: 234,
				to: [2,3,3,13]
			}
		]
	}
}


