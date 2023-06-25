//Adding Javascript so that add these Quotes Dynamicaly.
const text = document.querySelector('.quote');//.quote is a class
const author = document.querySelector('.author');//Select a author class
const nextBtn = document.querySelector('.next');//Selecting next button using next class
const tweetBtn = document.querySelector('.twitter-share-button');
const getQuote = async () => {
    //Use fetch method to fetch the API
    const res = await fetch('https://type.fit/api/quotes');//Save the response inside the response Variable
    const quotes = await res.json();//After getting Response we have to catch that response in json.
    //This will convert to json and store in a variable called Quotes
    //Explaination of above code
    //whenever promise is resolved it is stored inside a query(in our case it is "res")
    //It will generate a promise,so we will ude await
     const num = Math.floor(Math.random()*quotes.length);//It is returning a length of numbers,but we want a particular number or index of an array
    //we can get on that numbers which are inside that length//fetch will return a promise we have to handle it using await keyword
    const item = quotes[num];//We have to access only a particular index of an array(i.e. quote)
    const quote = item.text;//This is to access that particular quote.
    const authorName = item.author;
    //Changing it Dynamically.
    text.innerText = quote;
    author.innerText = authorName;
    //console.log(item)//Either it was here->console.log(num);//Quote is Array,what we are getting
    //Each time we refresh the Page we will get a new number
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${quote} - ${authorName}`
}
nextBtn.addEventListener('click', getQuote)//Whenever we click on next button it will run
getQuote()//function call.Ctrl+Shift+I to open dev control
//we are using a particular method so that we can access on a a single part or element of array;
//instead of getting the whole array