class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = type;
		
	}

	fix() {
		this.state *= 1.5;
	}
    
	set state(number) {
		if(number < 0) {
			this._state = 0;
		} else if (number > 100) {
			this._state = 100;
		} else {
			this._state = number;
		}
		
	}

	get state() {
		return this._state;
	}
		
}

const sherlock = new PrintEditionItem(
	"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
	2019,
	1008
   );
   
   console.log(sherlock.releaseDate); //2019
   console.log(sherlock.state); //100
   sherlock.fix();
   console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}

}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		super.author = author;
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		super.author = author;
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		super.author = author;
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		return this.books.find(book => book[type] === value) || null;
	}

	giveBookByName(bookName) {
		const book = this.findBookBy("name", bookName);
		if (book) {
			this.books.splice(this.books.indexOf(book), 1);
		}

		return book;

	}
}

