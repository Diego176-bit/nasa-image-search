import { useState, useEffect } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import './App.css'
import Header from './Components/Header'
import Card from './Components/Card'

function App () {
  /* useState */
  const [media, setMedia] = useState('')
  /* const [paginationMedia, setPaginationMedia] = useState('') */
  const [search, setSearch] = useState('')

  const nasaApi = (q) => {
    fetch(`https://images-api.nasa.gov/search?q=${q}&media_type=image`)
      .then(res => res.json())
      .then(resMedia => {
        console.log(resMedia)
        setMedia(resMedia)
      })
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const buttonSearch = (e) => {
    e.preventDefault()
    nasaApi(search)
  }
  useEffect(() => {
    nasaApi(search)
  }, [])
  const scrollUp = () => {
    const currentScroll = document.documentElement.scrollTop
    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollUp)
      window.scrollTo(0, currentScroll - (currentScroll / 8))
    }
  }

  return (
    <div className='App'>
      <Header
        onclick={buttonSearch}
        onchange={handleChange}
      />
      <button className='button-go-top' onClick={scrollUp}><IoIosArrowUp /></button>
      <main>
        {media !== ''
          ? media.collection.items.map((item) => {
            return (
              <Card
                key={item.data[0].nasa_id}
                title={item.data[0].title}
                description={item.data[0].description}
                img={item.links[0].href}
              />
            )
          })

          : nasaApi()}
      </main>

    </div>
  )
}

export default App
