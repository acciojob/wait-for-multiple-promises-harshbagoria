//your JS code here. If required.
function random_number() {
	return Math.floor(Math.random()*3+1);	
	
}

function createPromise() {
   const delay = random_number();

	return new Promise((resolve) => {

		setTimeout(() => {

			resolve(delay);

			
},delay*1000);
});
}

   const startTime = performance.now();

 const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

Promise.all([promise1,promise2,promise3]).then((result)=>{

	const endTime = performance.now();

	const TotalTime = (endTime-startTime)/1000;
    const output = document.getElementById("output");
	output.innerHTML = "";
	output.innerHTML += `
	<tr>
	<td>Promise 1</td>
	<td>${result[0].toFixed()}</td>
	</tr>

	`
		output.innerHTML += `
	<tr>
	<td>Promise 2 </td>
	<td>${result[1].toFixed()}</td>
	
	</tr>
	`
			output.innerHTML += `
	<tr>
	<td>promise 3</td>
	<td>${result[2].toFixed()}</td>
	</tr>
	`

	output.innerHTML += `

			
	<tr>
	<td>finial Result</td>
	<td>${TotalTime.toFixed()}</td>
	</tr>
	`
	
	
	
	 
	
	
	
	
})


