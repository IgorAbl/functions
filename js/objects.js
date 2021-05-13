// 1. создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные, методы: вывод адреса, смена пола.

const student = {
    name: 'Petya',
    sername: 'Pupkin',
    isMale: true,
    adress: 'eastStreet',
    met() {
        return this.adress;
    }
}
student.isMale = false;
console.log('student :>> ', student);


// 2. создать объект, который содержит свойства, о факультете и кафедре, методы: перевод на другой факультет. (можно на свой выбор) 

//       не совсем понятно что значит "методы: перевод на другой факультет". на уроке с помощью методов мы вычисляли bmi, а как сделать замену через методы - без понятия. может смысл задания в другом и я не понимаю формулировку задания?

const info = {
    fakultet: 'KNT',
    kafedra: 'KSS',
    met() {
        this.fakultet = 'mashinostroenie'; // без понятия =)
    }
}
info.fakultet = 'mashinostroenie';
console.log('info :>> ', info);

// 3 Создать функции-конструкторы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

function Book(autor, bookTitle, year, publishingHouse, format, eMail) {
    this.autor = autor;
    this.bookTitle = bookTitle;
    this.year = year;
    this.publishingHouse = publishingHouse;
    this.format = format;
    this.eMail = eMail;
  }
  
  const book2 = new Book("Pushkin", "interesnayaKniga", 2021, 'whiteHouse');
  console.log("book2 :>> ", book2);
  const book3 = new Book("Pushkin", "interesnayaKniga", 2021, 'pentagon', 'Udobniy', 'Pushkin@SpeechGrammarList.com');
  console.log("book3 :>> ", book3);