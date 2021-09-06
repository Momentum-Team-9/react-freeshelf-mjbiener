import React, { useState } from 'react'
import { books as data } from './data'
import { Book } from './Book'


export const App = () => {
  const [books] = useState(data)

//  const newBooks = books.map((dev))
  return (
    <>
      <div className='flex center five'>
        <h1> Freeshelf Library</h1>
      </div>
      <div className='flex center'>
        {books.map((dev, idx) => {
          return <Book key={idx} title={dev.title} author={dev.author} shortDescription={dev.shortDescription} coverImageUrl={dev.coverImageUrl} url={dev.url} publisher={dev.publisher} publicationDate={dev.publicationDate} detailedDescription={dev.detailedDescription} />
        })}
      </div>
    </>
  )
}