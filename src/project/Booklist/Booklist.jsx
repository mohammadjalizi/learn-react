import React, { Component } from 'react'
import { BsBookFill } from 'react-icons/bs';
import Book from './Book';
export class Booklist extends Component {

    constructor() {
        super()

        this.state = {
            books: [],

            title: '',
            author: '',
            year: '',
        }

        this.titleHandler = this.titleHandler.bind(this)
        this.authorHandler = this.authorHandler.bind(this)
        this.yearHandler = this.yearHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)

    }

    submitHandler(event) {
        event.preventDefault()

        let {title, author, year} = this.state

        if (title && author && year) {
            let newBook = {
                id: this.state.books.length + 1,
                title,
                author,
                year
            }

            this.setState({
                books: [...this.state.books, newBook]
            })

            this.setState({
                title: '',
                author: '',
                year: '',
            })

        }

    }

    titleHandler(event) {
        this.setState({
            title: event.target.value
        })
    }

    authorHandler(event) {
        this.setState({
            author: event.target.value
        })
    }

    yearHandler(event) {
        this.setState({
            year: event.target.value
        })
    }


  render() {
    return (
        <>
        <form  className=' bg-orange-400 ' autocomplete="off" onSubmit={this.submitHandler}>
            <div className=" my-8">
                <label for="title">Title</label>
                <input type="text"  className=" block w-full rounded-full p-2 " onChange={this.titleHandler} value={this.state.title} />
            </div>

            <div className=" my-4">
                <label for="author">Author</label>
                <input type="text"  className=" block  w-full  rounded-full p-2  " onChange={this.authorHandler} value={this.state.author} />
            </div>

            <div className="form-group">
                <label for="year">Year</label>
                <input type="text" className=" block  w-full  rounded-full p-2  "onChange={this.yearHandler} value={this.state.year} />
            </div>
            <input type="submit" value="Add Book" className=" my-4 p-4   rounded-3xl  bg-cyan-500 hover:bg-cyan-600 block w-full" />
        </form>
        <table className=' w-full'>
            <thead className='  '>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody id="book-list">
                {this.state.books.map(book => (
                    <Book {...book} key={book.id} />
                ))}
            </tbody>
        </table>


    </>
    )
  }
}

export default Booklist

// git push origin master
// git commit -m "  added project  "
// git push origin master