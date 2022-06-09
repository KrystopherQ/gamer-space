// const axios = require('axios');
// const cheerio = require('cheerio');

// function bot(){

// const getPostLinks = async () => {
// 	try {
// 		const { data } = await axios.get(
// 			'https://old.reddit.com/r/gamingnews/'
// 		);
// 		const $ = cheerio.load(data);
// 		const links = [];
// 		// const postTitles = [];
// $('.outbound').each( (index, value) => {
// 	var link = $(value).attr('href');
// 	var title = $(value).text()
// 	if(title) {
// 		links.push({title,link});}
// 	});
// // $('div > p.title>a').each((_idx,el) => {
// 	// const postTitle = $(el).text()
// // 	// var link = $(value).attr('href');
// // 	links.push([postTitle, link])
// // // 	links.push({"link": link});
// // });

// // });
// return links;
// } catch (error) {
// 	throw error;
// }
// }
// getPostLinks()
// .then((links) => console.log(links));



// const getPostNames = async () => {
// 	try {
// 		const { data } = await axios.get(
// 			'https://old.reddit.com/r/games/'
// 		);
// 		const $ = cheerio.load(data);
// 		const PostNames = [];
// 		// $('div > p.title > a').each((_idx, el) => {
// 		// 	const postTitle = $(el).text()
// 		// 	var link = $(value).attr('href');
// 		// 	PostNames.push(postTitle,{"link": link})
// 		// });
		
// 		$('.outbound').each( (index, value) => {
// 					var link = $(value).attr('href');
// 			    var postTitle = $(value).text()
// 			if(link){
// 					PostNames.push({postTitle,link});}
// 				});
// 		return PostNames;
// 	} catch (error) {
// 		throw error;
// 	}
// };
// getPostNames()
// .then((PostNames) => console.log(PostNames));

// }

// bot();