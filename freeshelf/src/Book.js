import React, { useState } from 'react'

export const Book = ({title, author, url, shortDescription, coverImageUrl, publisher, publicationDate, detailedDescription}) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleExpanded = () => {
        setIsExpanded(!isExpanded)
    }
    return (
        <div>
            <div className='card'>
        <header>
          <h3>{title}</h3>
        </header>
        <div className='card-content'>
          <p><span>Author:</span>{author}</p>
          <p><span>Description:</span> {shortDescription} </p>
          <img src= {coverImageUrl} alt={title}></img>

          {isExpanded ? <a href='#' onClick={handleExpanded}>Show Less <i class='fas fa-caret-up' /></a> : <a href='#' onClick={handleExpanded}>Show More <i class='fas fa-caret-down' /></a>}
          {isExpanded &&
            <p>{url} {publisher}
            {publisher}
            {publicationDate}
            {detailedDescription}</p>
            }
        </div>
        <footer>
        </footer>
      </div>
    </div>
    )
}