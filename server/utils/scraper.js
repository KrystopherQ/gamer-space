const axios = require('axios');
const cheerio = require('cheerio');



const getPostLinks = async () => {
	try {
		const { data } = await axios.get(
			'https://old.reddit.com/r/gamingnews/'
		);
		const $ = cheerio.load(data);
		const links = [];
		// const postTitles = [];
$('.outbound').each( (index, value) => {
	var link = $(value).attr('href');
	links.push({"link": link});
});
$('div > p.title > a').each((_idx, el) => {
	const postTitle = $(el).text()
	links.push(postTitle)
});
return links;
} catch (error) {
	throw error;
}
}
getPostLinks()
.then((links) => console.log(links));


const getPostNames = async () => {
	try {
		const { data } = await axios.get(
			'https://old.reddit.com/r/games/'
		);
		const $ = cheerio.load(data);
		const PostNames = [];
		$('div > p.title > a').each((_idx, el) => {
			const postTitle = $(el).text()
			PostNames.push(postTitle)
		});
		return PostNames;
	} catch (error) {
		throw error;
	}
};
getPostNames()
.then((PostNames) => console.log(PostNames));