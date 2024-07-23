import React, { useState } from 'react';
import './AddBook.css'

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState('');

  return (
    <div className="card">
      <h1 className="card-title">Add New Book</h1>
      <form className="card-form">
        <div className="form-group">
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder='Type the title of the book'/>
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input type="text" value={author}onChange={(e) => setAuthor(e.target.value)} required placeholder='Type the name of the author'/>
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required  placeholder='Give a brief description of the book'/>
        </div>
        <div className="form-group">
          <label>Publication-year:</label>
          <input type="text" value={year}onChange={(e) => setYear(e.target.value)} required placeholder='Type the language in which the book is written'/>
        </div>
        <div className="form-group">
          <label>Genre:</label>
          <select value={genre} onChange={(e) => setGenre(e.target.value)} required>
            <option value="">Select a genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Mystery">Mystery</option>
            <option value="Biography">Biography</option>
            <option value="Romance">Romance</option>
            <option value="Historical-Fiction">Historical-Fiction</option>
            <option value="Adventure">Adventure</option>
            <option value="Cookbook">Cookbook</option>
            <option value="Children's">Children's</option>
            <option value="Thriller">Thriller</option>
           
          </select>
        </div>
        <div className="form-group">
          <label>Cover Image:</label>
          <input type="url" value={image} onChange={(e) => setImage(e.target.value)} required  placeholder='Paste the url of the cover page of the book'/>
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}