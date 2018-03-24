const incident1 = {
	id: '12345',
	incidentType: 'Theft',
	shortSummary: 'Man seen peering into car windows.',
	detailedSummary: 'Middle-aged man in brown jacket last seen at 4:45PM peering into car windows. 3 similar reports from same area.',
	location: '4th & Mission St.',
	distance: '0.5 miles',
	travelTime: '6 mins',
	reportStatus: 'Officer Smith on scene.',
	priority: 'High',
	imageSrc: {'uri': 'https://facebook.github.io/react-native/docs/assets/favicon.png'},
}
const incident2 = {
	id: '54923',
	incidentType: 'Alcoholic Rage',
	shortSummary: 'Man smashing shit no fucks given',
	detailedSummary: 'This man does not care anymore and is destroying everything like Godzilla in SF.',
	location: '16th & Van Ness',
	distance: '1.6 miles',
	travelTime: '10 mins',
	reportStatus: 'Ominous silence',
	priority: 'Low',
	imageSrc: {'uri': 'https://facebook.github.io/react-native/docs/assets/favicon.png'},
}
const incident3 = {
	id: '12345',
	incidentType: 'Theft',
	shortSummary: 'Man seen peering into car windows.',
	detailedSummary: 'Middle-aged man in brown jacket last seen at 4:45PM peering into car windows. 3 similar reports from same area.',
	location: '4th & Mission St.',
	distance: '0.5 miles',
	travelTime: '6 mins',
	reportStatus: 'Officer Smith on scene.',
	priority: 'High',
	imageSrc: {'uri': 'https://facebook.github.io/react-native/docs/assets/favicon.png'},
}
const incident4 = {
	id: '12345',
	incidentType: 'Theft',
	shortSummary: 'Man seen peering into car windows.',
	detailedSummary: 'Middle-aged man in brown jacket last seen at 4:45PM peering into car windows. 3 similar reports from same area.',
	location: '4th & Mission St.',
	distance: '0.5 miles',
	travelTime: '6 mins',
	reportStatus: 'Officer Smith on scene.',
	priority: 'High',
	imageSrc: {'uri': 'https://facebook.github.io/react-native/docs/assets/favicon.png'},
}
const incident5 = {
	id: '12345',
	incidentType: 'Theft',
	shortSummary: 'Man seen peering into car windows.',
	detailedSummary: 'Middle-aged man in brown jacket last seen at 4:45PM peering into car windows. 3 similar reports from same area.',
	location: '4th & Mission St.',
	distance: '0.5 miles',
	travelTime: '6 mins',
	reportStatus: 'Officer Smith on scene.',
	priority: 'High',
	imageSrc: {'uri': 'https://facebook.github.io/react-native/docs/assets/favicon.png'},
}

function getIncidents() {
	return [incident1, incident2, incident3, incident4, incident5];
}

module.exports = getIncidents;