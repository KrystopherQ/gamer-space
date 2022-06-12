// const axios = require('axios');
// const cheerio = require('cheerio');

// const getGamingNews = async () => {
// 	try {
// 		const { data } = await axios.get(
// 			'https://old.reddit.com/r/gamingnews/'
// 		);
// 		const $ = cheerio.load(data);
// 		const gamingNews = [];
// $('.outbound').each( (index, value) => {
// 	var link = $(value).attr('href');
// 	var title = $(value).text()
// 	if(title) {
// 		gamingNews.push([title,link]);}
// 	});
// return gamingNews;
// } catch (error) {
// 	throw error;
// }
// }
// getGamingNews().then((gamingNews) => console.log(gamingNews));    



// const getRGames = async () => {
// 	try {
// 		const { data } = await axios.get(
// 			'https://old.reddit.com/r/games/'
// 		);
// 		const $ = cheerio.load(data);
// 		const games = [];		
// 		$('.outbound').each( (index, value) => {
// 					var link = $(value).attr('href');
// 			    var title = $(value).text()
// 			if(link){
// 					games.push([title,link]);}
// 				});
// 		return games;
// 	} catch (error) {
// 		throw error;
// 	}
// };
// getRGames().then((games) => console.log(games));

