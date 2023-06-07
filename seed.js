const mongoose = require('mongoose');
const Member = require('./models/Members');
const Book = require('./models/Books');
const Review = require('./models/Reviews');

mongoose.connect('mongodb://localhost/book_club', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const membersData = [
  { name: 'John Doe', favouriteBook: '60a2a34c3f09a56e641d8c25' }, // Replace with valid ObjectId
  { name: 'Jane Smith', favouriteBook: '60a2a34c3f09a56e641d8c26' }, // Replace with valid ObjectId
  { name: 'David Johnson', favouriteBook: '60a2a34c3f09a56e641d8c27' }, // Replace with valid ObjectId
];

const booksData = [
  { name: 'How to Win Friends and Influence People', authorName: 'Dale Carnegie', yearPublished: 1936 },
  { name: 'To Kill a Mockingbird', authorName: 'Harper Lee', yearPublished: 1960 },
  { name: 'The Great Gatsby', authorName: 'F. Scott Fitzgerald', yearPublished: 1925 },
];

const reviewsData = [
  { book: '', member: '', reviewText: 'A great book!' },
  { book: '', member: '', reviewText: 'Highly recommended!' },
  { book: '', member: '', reviewText: 'An all-time favorite.' },
];

async function seedData() {
  try {
    const members = await Member.create(membersData);
    const memberIds = members.map(member => member._id);

    const books = await Book.create(booksData);
    const bookIds = books.map(book => book._id);

    reviewsData.forEach((review, index) => {
      review.member = memberIds[index];
      review.book = bookIds[index];
    });

    await Review.create(reviewsData);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    mongoose.disconnect();
  }
}

seedData();
