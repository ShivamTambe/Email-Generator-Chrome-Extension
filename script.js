let resultElement = document.getElementById('result');
let obj = {
	"message": "Dear Hiring Manager"
  }
async function sendText(data) {
	console.log(obj["response"]);
	let text = document.getElementById("grammer_text").value;
    resultElement.style.display = 'block';
	let append="";
	let temp="";
	for (let i = 0; i < text.length; i++) {
		if(i==text.length-1){
			append+=temp;
		}
		if(text[i]==' '){
			append+=temp+"%20";
			temp="";
		}else{
			temp+=text[i];
		}
	}
	const url = `https://ai-writer1.p.rapidapi.com/text/?text=${append}`;
    const options = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'X-RapidAPI-Key': process.env.ApiKey,
			'X-RapidAPI-Host': 'ai-writer1.p.rapidapi.com'
		}
	};
    
    try {
		const response = await fetch(url, options);
		const result = await response.text();
		if(result["response"]){
			console.log("IF");
			resultElement.value = result["response"];
		}else{
			console.log("else");
			resultElement.value = JSON.parse(result).message;
		}
		console.log(JSON.parse(result).message);
		console.log(result);
		
	} catch (error) {
		resultElement.value = "Eerror";
	}
}
const btn = document.getElementById('btn');
btn.addEventListener('click', sendText);