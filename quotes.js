const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "If you look at what you have in life, you'll always have more.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa"
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou"
    },
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        quote: "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
        author: "Marilyn Monroe"
    },
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "Whether you think you can or you think you can't, you're right.",
        author: "Henry Ford"
    },
    {
        quote: "Act as if what you do makes a difference. It does.",
        author: "William James"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Happiness is not something ready-made. It comes from your own actions.",
        author: "Dalai Lama"
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        quote: "Turn your wounds into wisdom.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Don't let yesterday take up too much of today.",
        author: "Will Rogers"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar"
    },
    {
        quote: "You can't cross the sea merely by standing and staring at the water.",
        author: "Rabindranath Tagore"
    },
    {
        quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
        author: "Joshua J. Marine"
    },
    {
        quote: "Life is really simple, but we insist on making it complicated.",
        author: "Confucius"
    },
    {
        quote: "He who has a why to live can bear almost any how.",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
        author: "Jamie Paolinetti"
    },
    {
        quote: "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
        author: "Joseph Campbell"
    },
    {
        quote: "Life is a long lesson in humility.",
        author: "James M. Barrie"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        quote: "Opportunities don't happen. You create them.",
        author: "Chris Grosser"
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    },
    {
        quote: "The harder the conflict, the greater the triumph.",
        author: "George Washington"
    },
    {
        quote: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Don’t wait. The time will never be just right.",
        author: "Napoleon Hill"
    },
    {
        quote: "Everything you’ve ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        quote: "You can’t build a reputation on what you are going to do.",
        author: "Henry Ford"
    },
    {
        quote: "Nothing is impossible, the word itself says ‘I’m possible’!",
        author: "Audrey Hepburn"
    },
    {
        quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
        author: "C.S. Lewis"
    },
    {
        quote: "Do not let what you cannot do interfere with what you can do.",
        author: "John Wooden"
    }
];

function newquote() {
    let random = Math.floor(Math.random() * quotes.length); // Corrected "math" to "Math"
    document.getElementById("quote").innerHTML = quotes[random].quote;
    document.getElementById("person").innerHTML = quotes[random].author;    
}

