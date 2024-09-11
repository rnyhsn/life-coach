import React from 'react'
import BookCard from './BookCard'


const books = {
    category1: {
        name: "Category 1",
        categories: [
            {
                title: "Book Name1",
                img: "/books/sarah-book-1.jpg"
            },
            {
                title: "Book Name1",
                img: "/books/sarah-book-2.jpg"
            },
            {
                title: "Book Name1",
                img: "/books/sarah-book-3.jpg"
            },
            {
                title: "Book Name1",
                img: "/books/sarah-book-4.jpg"
            },
        ]
    },
    category2: {
        name: "Category 1",
        categories: [
            {
                title: "Book Name1",
                img: "/books/sarah-book-5.jpg"
            },
            {
                title: "Book Name1",
                img: "/books/sarah-book-6.jpg"
            },
            {
                title: "Book Name1",
                img: "/books/sarah-book-7.jpg"
            },
            {
                title: "Book Name1",
                img: "/books/sarah-book-8.jpg"
            },
        ]
    },
    category3: {
        name: "Category 1",
        categories: [
            {
                title: "Book Name1",
                img: "/books/sarah-book-2.jpg"
            },
            {
                title: "Book Name1",
                img: "/books/sarah-book-4.jpg"
            },
            {
                title: "Book Name1",
                img: "/books/sarah-book-8.jpg"
            },
            {
                title: "Book Name1",
                img: "/books/sarah-book-6.jpg"
            },
        ]
    },
}

const Books = () => {
  return (
    <div className="px-4 md:px-10 lg:px-28 pt-20">
      <div className="h-0.5 w-16 bg-secondary mb-10"></div>
      <h2 className="text-4xl font-semibold">Book I Love</h2>
      <div className="border-t border-gray-400 border-dashed my-16"></div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col 5">
            <h1 className="text-3xl font-semibold mb-5"> {books.category1.name} </h1>
            <div className="grid grid-cols-4 gap-10">
            {
                books.category1.categories.map((item) => (
                    <BookCard item={item} key={item.title} />
                ))
            }
            </div>
        </div>
        <div className="border-t border-gray-400 border-dashed my-16"></div>
        <div className="flex flex-col 5">
            <h1 className="text-3xl font-semibold mb-5"> {books.category1.name} </h1>
            <div className="grid grid-cols-4 gap-5">
            {
                books.category2.categories.map((item) => (
                    <BookCard item={item} key={item.title} />
                ))
            }
            </div>
        </div>
        <div className="border-t border-gray-400 border-dashed my-16"></div>
        <div className="flex flex-col 5">
            <h1 className="text-3xl font-semibold mb-5"> {books.category1.name} </h1>
            <div className="grid grid-cols-4 gap-5">
            {
                books.category2.categories.map((item) => (
                    <BookCard item={item} key={item.title} />
                ))
            }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Books
