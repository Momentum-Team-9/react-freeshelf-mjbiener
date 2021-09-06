import React, { useState } from 'react';


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
          <img src= {coverImageUrl} alt={title} width="200"></img>

          {isExpanded ? <button onClick={handleExpanded} aria-expanded="false" aria-controls="collapseExample">Less Information</button> : 
          <button onClick={handleExpanded} aria-expanded="true" aria-controls="collapseExpample">More Information </button>}

          {isExpanded &&
            <div>
            Link: <a href={url} rel="noopener noreferrer">{url}</a> 
            <p>Publisher: {publisher}</p>
            <p>Published: {publicationDate}</p>
            <p>Detailed Description: {detailedDescription}</p>
            </div>
            }
        </div>
        <footer>
        </footer>
      </div>
    </div>
    )
}