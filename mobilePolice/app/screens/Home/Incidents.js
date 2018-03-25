const incident1 = {
	id: '12345',
	incidentType: 'Theft',
	shortSummary: 'Man seen peering into car windows.',
	detailedSummary: 'Middle-aged man in brown jacket last seen at 4:45PM peering into car windows. Black hair. About 6ft.',
	location: '4th & Mission St.',
	distance: '0.5 miles',
	travelTime: '6 mins',
	reportStatus: 'Officer Smith on scene.',
	priority: 'High',
	imageSrc: {'uri': 'https://www.goodnewsnetwork.org/wp-content/uploads/2012/07/giving_away_money_at_intersection-ABCvid.jpg'},
}
const incident2 = {
	id: '54923',
	incidentType: 'Vandalism',
	shortSummary: 'Street sign on Polk St. graffitied',
	detailedSummary: 'Street sign on intersection covered in black spray paint. Potential danger at busy intersection.',
	location: '16th & Polk St.',
	distance: '1.6 miles',
	travelTime: '15 mins',
	reportStatus: 'Unchecked/Unverified',
	priority: 'Low',
	imageSrc: {'uri': 'https://www.bulletintimesnews.com/sites/bulletintimesnews.com/files/styles/slideshow/public/field/image/damaged%20speed%20sign%20%281%29.jpg?itok=1EyGF9LY'},
}
const incident3 = {
	id: '94851',
	incidentType: 'Harassment',
	shortSummary: 'Aggressive panhandling on BART.',
	detailedSummary: 'Multiple reports of woman in blue rainjacket yelling at passengers.',
	location: 'Montgomery St.',
	distance: '0.4 miles',
	travelTime: '8 mins',
	reportStatus: 'Possibly the same suspect as ID#49828',
	priority: 'Medium',
	imageSrc: {'uri': 'https://images.thestar.com/content/dam/thestar/news/city_hall/2011/04/03/angry_finch_commuters_tell_the_mayor_to_walk_in_our_shoes/finch_buslineup.jpeg.size-custom-crop.1086x0.jpg'},
}
const incident4 = {
	id: '19234',
	incidentType: 'Domestic',
	shortSummary: 'Shouting and yelling from apartment',
	detailedSummary: 'Middle-aged man in brown jacket last seen at 4:45PM peering into car windows. 3 similar reports from same area.',
	location: '4th & Mission St.',
	distance: '0.5 miles',
	travelTime: '6 mins',
	reportStatus: 'Officer Smith on scene.',
	priority: 'High',
	imageSrc: {'uri': 'http://tsoulosconstruction.gr/wp-content/uploads/2014/12/%CE%BA%CF%84%CE%B9%CF%81%CE%B9%CE%BF-1_%CE%A0%CE%B1%CF%8D%CE%BB%CE%BF%CF%85-%CE%9C%CE%B5%CE%BB%CE%AC-830x460.jpg'},
}
const incident5 = {
	id: '19523',
	incidentType: 'Hackathon',
	shortSummary: 'Large group gathered at Covo working space',
	detailedSummary: 'Reports of frenzied, fast-talking individuals meeting up for hours on end. Unsure what motivations are.',
	location: '4th & Mission St.',
	distance: '0.5 miles',
	travelTime: '6 mins',
	reportStatus: 'Officer Smith on scene.',
	priority: 'High',
	imageSrc: {'uri': 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2014/08/0803_yc1-730x318.jpg'},
}

function getIncidents() {
	return [incident1, incident2, incident3, incident4, incident5];
}

module.exports = getIncidents;