import { Link } from 'react-router-dom';
import './Navbar.css';
import { useEffect, useRef, useState } from 'react';

const intTab = 'home'
function Navbar({ products, carts, setToken }) {
    const [tab, setTab] = useState('')

    useEffect(() => {
        setTab(intTab)
    }, [])

    const homeRef = useRef()
    const calculatorRef = useRef()
    const todoRef = useRef()
    const productRef = useRef()
    const cartRef = useRef()
    const componentRaf = useRef()
    const animationRef = useRef()

    useEffect(() => {
        if (tab === 'calculator') calculatorRef.current.click()
        else if (tab === 'todo') todoRef.current.click()
        else if (tab === 'product') productRef.current.click()
        else if (tab === 'cart') cartRef.current.click()
        else if (tab === 'component') componentRaf.current.click()
        else if (tab === 'animation') animationRef.current.click() 
        else homeRef.current.click()
    }, [tab])

    return (<div className="navbar-container">
        <Link to={'/home'}>
            <button  className={'btn ' + (tab === 'home' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => setTab('home')} ref={homeRef} style={{boxShadow : '0 4px 8px rgba(0, 0, 0, 0.5)'}}>Home</button>
        </Link>

        <Link to={'/calculator'}>
            <button className={'btn ' + (tab === 'calculator' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => setTab('calculator')} ref={calculatorRef} style={{boxShadow : '0 4px 8px rgba(0, 0, 0, 0.5)'}}>Calculator</button>
        </Link>

        <Link to={'/animation'}>
            <button className={'btn ' + (tab === 'animation' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => setTab('animation')} ref={animationRef} style={{boxShadow : '0 4px 8px rgba(0, 0, 0, 0.5)'}}>Animation</button>
        </Link>

        <Link to={'/component'}>
            <button className={'btn ' + (tab === 'component' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => setTab('component')} ref={componentRaf} style={{boxShadow : '0 4px 8px rgba(0, 0, 0, 0.5)'}}>Component</button>
        </Link>
        
        <Link to={'/todo'}>
            <button className={'btn ' + (tab === 'todo' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => setTab('todo')} ref={todoRef} style={{boxShadow : '0 4px 8px rgba(0, 0, 0, 0.5)'}}>Todo</button>
        </Link>

        <Link to={'/product'}>
            <button className={'btn ' + (tab === 'product' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => setTab('product')} ref={productRef} style={{boxShadow : '0 4px 8px rgba(0, 0, 0, 0.5)'}}>Product({products.length})</button>
        </Link>

        <Link to={'/cart'}>
            <button className={'position-relative btn ' + (tab === 'cart' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => setTab('cart')} ref={cartRef} style={{boxShadow : '0 4px 8px rgba(0, 0, 0, 0.5)'}}>cart {carts.length > 0 && (
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {carts.length < 10 ? carts.length : '9+'}
                    <span class="visually-hidden">unread messages</span>
                </span>
            )}

            </button>
        </Link>
        <button className=' btn btn-outline-danger' style={{marginLeft : '1rem'}}  onClick={() => setToken('')} >Logout</button>

        
    </div>);
}

export default Navbar;