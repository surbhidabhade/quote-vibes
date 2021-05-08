const quotes = [{
        quote: "Code Never Lies, Comments Sometimes Do.",
        author: "Ron Jeffries"
    },
    {
        quote: "Programmers are constantly making things more complicated than they need to be because future. Program for Today.",
        author: "David Heinemeier Hansson"
    },
    {
        quote: "Ruby is rubbish! PHP is phpantastic!",
        author: "Nikita Popov"
    },
    {
        quote: "Code is like humor. When you have to explain it, It's Bad.",
        author: "Cory House"
    },
    {
        quote: "The proper use of comments is to compensate for our failure to express ourself in code.",
        author: "Robert C Martin"
    },
    {
        quote: "Java is to JavaScript what car is to Carpet.",
        author: "Chris Heilmann "
    },
    {
        quote: "First, solve the problem. Then, write the code. ",
        author: "John Johnson"
    },
    {
        quote: "In programming, the hard part isn't solving problems, but deciding what problems to solve.",
        author: "Paul Graham "
    },
    {
        quote: "Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
        author: " Linus Torvalds"
    },
    {
        quote: "Programming is key concept who want to understand and must have interested of ourself.",
        author: " Code Express"
    }
];

//Button Generate Quotes
const btn = document.querySelector('.generate');

//Add Event Listener
btn.addEventListener('click', () => {

    //Get Random text of Quotes
    let random = Math.floor(Math.random() * quotes.length);
    // console.log(random);

    //Now Show Text On Screen
    document.querySelector('.quote').innerText = quotes[random].quote;
    document.querySelector('.author').innerText = quotes[random].author;

});