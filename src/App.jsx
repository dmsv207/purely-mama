import Header from './Header.jsx';
import Footer from './Footer.jsx';
import './index.css';

function Main() {
  return (
    <main>
      <span></span>
    </main>
  )
}

function App() {
  return (
    <>
      <div className='app'>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App;