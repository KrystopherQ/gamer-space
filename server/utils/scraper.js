const axios = require('axios');
const cheerio = require('cheerio');



const getPostTitles = async () => {
	try {
		const { data } = await axios.get(
			'https://old.reddit.com/r/gamingnews/'
		);
		const $ = cheerio.load(data);
		const postTitles = [];

		$('div > p.title > a').each((_idx, el) => {
			const postTitle = $(el).text()
			postTitles.push(postTitle)
		});

		return postTitles;
	} catch (error) {
		throw error;
	}
};
getPostTitles()
.then((postTitles) => console.log(postTitles));

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