import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content mt-10">
            <aside>
                <p>Copyright © {currentYear} - All right reserved by Arpit Bansal</p>
            </aside>
        </footer>
    )
}
