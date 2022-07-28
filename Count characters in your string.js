function count (string) {
	let array = string.split('')
	return string === ''
		? {}
		: array.reduce((acc,item)=>{
			let keys = Object.keys(acc)
			if(keys.includes(item)){
				acc[item] +=1
			}else{
				acc[item]=1
			}return acc
		},{})
}