
function delayNoPromise(ms) {
	setTimeout(() => {
      console.log('inside delayNoPromise');
	}, ms);
}

function delay(ms) {
	return new Promise((resolve) => {
		setTimeout(() => {
             resolve();
             console.log('resolved');
		}, ms);
	});
}

const promise = delay(2000);
delayNoPromise(2005);

promise
		.then(() => setTimeout(console.log(1),3000))
 		.then(() => setTimeout(console.log(2),3000))
		.then(() => setTimeout(console.log(3),3000));