const MESSAGE = 'Добрых снов,Юля;) ';
const rootApp = document.getElementById('text-elems');

 const  createrTextElem = () => {
	const MESSAGE_ARRAY = MESSAGE.split('');
	const addElement = (symbol) => {
		const textNode = document.createElement('span');
		const newContent = document.createTextNode(symbol);
		textNode.appendChild(newContent);
		textNode.classList.add('item-text');
		let RANDOM_ATR_NUMBER = Math.floor(Math.random() * 10) + 1;
		textNode.setAttribute('data-depth', `0.${RANDOM_ATR_NUMBER}`);
		return textNode;
	};
	const wrapperContainer = document.createElement('div');
	wrapperContainer.classList.add('items-wrap');
	MESSAGE_ARRAY.forEach(symbol => {
		wrapperContainer.appendChild(addElement(symbol));
	});

	return wrapperContainer;
};

 const createrTextContainer = () => {
	 let textEl =  document.getElementsByClassName('.item-text').length === 0;
	 if (textEl) {
		 debugger
		 rootApp.appendChild(createrTextElem());
	 }
}




