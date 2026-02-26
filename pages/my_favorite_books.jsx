import React from 'react';

export default function FavoriteBooks() {
  const books = [
    { title: "Remarkably Bright Creatures", author: "Shelby Van Pelt", cover: "https://images-na.ssl-images-amazon.com/images/P/0593389248.01.L.jpg", publisherLink: "https://www.harpercollins.com/products/remarkably-bright-creatures-shelby-van-pelt?variant=41039357706274" },
    { title: "Indira", author: "Katherine Frank", cover: "https://images-na.ssl-images-amazon.com/images/P/B000FC10KE.01.L.jpg", publisherLink: "https://harpercollins.co.uk/products/indira-the-life-of-indira-nehru-gandhi-katherine-frank?variant=32552528248910" },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", cover: "https://images-na.ssl-images-amazon.com/images/P/0330258552.01.L.jpg", publisherLink: "https://www.panmacmillan.com/authors/douglas-adams" },
    { title: "Peril at End House", author: "Agatha Christie", cover: "https://images-na.ssl-images-amazon.com/images/P/0062073818.01.L.jpg", publisherLink: "https://www.harpercollins.com/products/peril-at-end-house-agatha-christie" },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", cover: "https://images-na.ssl-images-amazon.com/images/P/0307269752.01.L.jpg", publisherLink: "https://www.penguinrandomhouse.com/books/id/200736/" },
    { title: "Ajaya: Roll of the Dice", author: "Anand Neelakantan", cover: "https://images-na.ssl-images-amazon.com/images/P/0143419900.01.L.jpg", publisherLink: "https://www.leadstartcorp.com/mythology/ajaya-epic-of-the-kaurava-clan-roll-of-the-dice-book-1/" },
    { title: "And Then There Were None", author: "Agatha Christie", cover: "https://images-na.ssl-images-amazon.com/images/P/0062073490.01.L.jpg", publisherLink: "https://www.harpercollins.com/products/and-then-there-were-none-agatha-christie" },
    { title: "The Mysterious Affair at Styles", author: "Agatha Christie", cover: "https://images-na.ssl-images-amazon.com/images/P/006207381X.01.L.jpg", publisherLink: "https://www.harpercollins.com/products/the-mysterious-affair-at-styles-agatha-christie" },
    { title: "Sherlock Holmes: Complete Novels & Stories Vol I", author: "Arthur Conan Doyle", cover: "https://images-na.ssl-images-amazon.com/images/P/0375756515.01.L.jpg", publisherLink: "https://www.penguinrandomhouse.com/books/id/9491/" },
    { title: "A Man Called Ove", author: "Fredrik Backman", cover: "https://images-na.ssl-images-amazon.com/images/P/1476738017.01.L.jpg", publisherLink: "https://www.simonandschuster.com/books/A-Man-Called-Ove/Fredrik-Backman/9781476738017" },
    { title: "All the Light We Cannot See", author: "Anthony Doerr", cover: "https://images-na.ssl-images-amazon.com/images/P/1491904542.01.L.jpg", publisherLink: "https://www.simonandschuster.com/books/All-the-Light-We-Cannot-See/Anthony-Doerr/9780385521734" },
    { title: "The Importance of Being Earnest", author: "Oscar Wilde", cover: "https://images-na.ssl-images-amazon.com/images/P/0486284335.01.L.jpg", publisherLink: "https://www.doverpublications.com/products/9780486284339" },
    { title: "Animal Farm", author: "George Orwell", cover: "https://images-na.ssl-images-amazon.com/images/P/0451526341.01.L.jpg", publisherLink: "https://www.penguinrandomhouse.com/books/id/40961/" },
    { title: "The Handmaid's Tale", author: "Margaret Atwood", cover: "https://images-na.ssl-images-amazon.com/images/P/0385490232.01.L.jpg", publisherLink: "https://www.penguinrandomhouse.com/books/id/42504/" },
    { title: "The Complete Sherlock Holmes", author: "Arthur Conan Doyle", cover: "https://images-na.ssl-images-amazon.com/images/P/0385050321.01.L.jpg", publisherLink: "https://www.penguinrandomhouse.com/books/id/287045/" },
    { title: "In Like Flynn", author: "Rhys Bowen", cover: "https://images-na.ssl-images-amazon.com/images/P/0312330847.01.L.jpg", publisherLink: "https://us.macmillan.com/books/9781429901758/inlikeflynn/" },
    { title: "Sherlock Holmes Investigates: Stories", author: "Arthur Conan Doyle", cover: "https://images-na.ssl-images-amazon.com/images/P/B00BBKUQY0.01.L.jpg", publisherLink: "https://www.penguinrandomhouse.com/authors/arthur-conan-doyle/" },
    { title: "Living Biographies of Famous Men", author: "Henry Thomas", cover: "https://images-na.ssl-images-amazon.com/images/P/B000VLL7CY.01.L.jpg", publisherLink: "https://www.goodreads.com/book/show/1297706.Living_Biographies_of_Famous_Men" },
    { title: "The Paris Library", author: "Janet Skeslien Charles", cover: "https://images-na.ssl-images-amazon.com/images/P/0593311949.01.L.jpg", publisherLink: "https://www.penguinrandomhouse.com/books/id/659836/" },
    { title: "Where'd You Go, Bernadette", author: "Maria Semple", cover: "https://images-na.ssl-images-amazon.com/images/P/0316129208.01.L.jpg", publisherLink: "https://www.littlebrown.com/titles/maria-semple/whered-you-go-bernadette/9780316224185/" },
    { title: "Educated", author: "Tara Westover", cover: "https://images-na.ssl-images-amazon.com/images/P/0399590013.01.L.jpg", publisherLink: "https://www.penguinrandomhouse.com/books/id/656092/" },
    { title: "Man's Search for Meaning", author: "Viktor E. Frankl", cover: "https://images-na.ssl-images-amazon.com/images/P/0807014958.01.L.jpg", publisherLink: "https://www.beaconpress.com/products/mans-search-for-meaning-the-classic-tribute-to-hope-from-the-holocaust" },
    { title: "The Nightingale", author: "Kristin Hannah", cover: "https://images-na.ssl-images-amazon.com/images/P/0312577222.01.L.jpg", publisherLink: "https://www.stmartins.com/authors/kristin-hannah" },
    { title: "The Hound of the Baskervilles", author: "Arthur Conan Doyle", cover: "https://images-na.ssl-images-amazon.com/images/P/0440175441.01.L.jpg", publisherLink: "https://www.penguinrandomhouse.com/books/id/281411/" },
    { title: "The Bell Jar", author: "Sylvia Plath", cover: "https://images-na.ssl-images-amazon.com/images/P/0061148466.01.L.jpg", publisherLink: "https://www.harpercollins.com/products/the-bell-jar-sylvia-plath" },
    { title: "My Year of Rest and Relaxation", author: "Ottessa Moshfegh", cover: "https://images-na.ssl-images-amazon.com/images/P/0374217491.01.L.jpg", publisherLink: "https://us.macmillan.com/books/9780374217495/myyearofrestrelaxation" },
    { title: "The Humans", author: "Matt Haig", cover: "https://images-na.ssl-images-amazon.com/images/P/0606351167.01.L.jpg", publisherLink: "https://us.macmillan.com/authors/matt-haig" },
    { title: "The Wisdom of Insecurity", author: "Alan Watts", cover: "https://images-na.ssl-images-amazon.com/images/P/0394704645.01.L.jpg", publisherLink: "https://www.penguinrandomhouse.com/books/id/28833/" },
    { title: "Interesting Facts About Space", author: "Emily Austin", cover: "https://images-na.ssl-images-amazon.com/images/P/0525555498.01.L.jpg", publisherLink: "https://www.penguinrandomhouse.com/books/id/722819/" },
    { title: "Mother Mary Comes to Me", author: "Arundhati Roy", cover: "https://images-na.ssl-images-amazon.com/images/P/0393867196.01.L.jpg", publisherLink: "https://wwnorton.com/books/Mother-Mary-Comes-to-Me" }
  ];

  return (
    <div className="min-h-screen bg-white p-8 md:p-12">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lora:wght@400;500&display=swap');
        
        body {
          font-family: 'Lora', serif;
          background: white;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            My Favorite Reads
          </h1>
          <div className="w-20 h-1 bg-slate-800 mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            A carefully curated collection of thirty books that have captivated, inspired, and moved me. 
            Each one earned a five-star rating for its profound impact.
          </p>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {books.map((book, idx) => (
            <div key={idx} className="group relative">
              {/* Book Cover Container */}
              <a 
                href={book.publisherLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-slate-100 aspect-[2/3] shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105 block cursor-pointer"
                style={{
                  animationDelay: `${idx * 20}ms`,
                }}
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 450'%3E%3Crect fill='%23e2e8f0' width='300' height='450'/%3E%3Ctext x='50%' y='50%' font-family='serif' font-size='18' text-anchor='middle' dominant-baseline='middle' fill='%23475569'%3E${encodeURIComponent(book.title.substring(0, 20))}.../`
                  }}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </a>

              {/* Book Info */}
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-slate-900 line-clamp-2 mb-1 group-hover:text-slate-700 transition">
                  {book.title}
                </h3>
                <p className="text-xs text-slate-500">
                  {book.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-slate-600 text-sm">
            All books rated ★★★★★ — 30 titles that deserve a place on every reader's shelf.
          </p>
        </div>
      </div>
    </div>
  );
}
