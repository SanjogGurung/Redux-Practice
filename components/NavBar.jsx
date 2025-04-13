import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
      
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className = "navbar">
            <div className="navbar-logo">
                <a href="/">SuSankhya</a>
            </div>

            <div className = "navbar-right">
                <div className="search-bar">
                    <div>
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div>
                    <a href="/">Brands</a>
                </div>
                <div>
                    <a href="/">Sale</a>
                </div>
                <div>
                    <a href="/">Profile</a>
                </div>
                <div>
                    <a href="/">Cart</a>
                </div>
                



            </div>
        </nav>
    )
        
    
}
