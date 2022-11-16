import '../Stylesheets/Header.css'

const Header = ({ onchange, onclick }) => {
  return (
    <header>
      <nav>
        <div className='logo-header-container'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png' alt='nasa' />
        </div>
        {/* <div className='title-container'>
          <h1>Nasa Image Search</h1>
        </div> */}
        <div className='ul-container'>
          <form>
            <input
              type='search'
              name='text'
              className='input'
              placeholder='Search something'
              onChange={onchange}
            />
            <button onClick={onclick} className='search-button'>
              <span>Search</span>
            </button>
          </form>
          {/* <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About Us</a></li>
          </ul> */}
        </div>
      </nav>
    </header>
  )
}

export default Header
