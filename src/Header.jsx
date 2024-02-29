import 'bootstrap-icons/font/bootstrap-icons.css'

function Header() {
    return (
        <header>
            <nav id='menu'>
                <i className='bi bi-apple'></i>
                <a href="">plates</a>
                <a href="">bowls</a>
                <a href="">cup</a>
                <a href="">spoon</a>
                <a href="">support</a>
                <i className='bi bi-search'></i>
                <i className='bi bi-bag'></i>
            </nav>
        </header>
    )
}

export default Header;