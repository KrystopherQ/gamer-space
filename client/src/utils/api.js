

export default{
 botScraper:()=>{
  return  fetch('/api/news').then(res=>res.json())
 },
 bot:()=>{
    return fetch('/api/gamenews').then(res=>res.json())
 }
}