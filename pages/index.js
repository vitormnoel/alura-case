import React from 'react'
import Link from '../src/components/link/index'
import Footer from '../src/components/patterns/footer/footer'
import Home from '../src/screens/Home/index'

function Title({ children, as }) {
    const Tag = as;
    return (
        <React.Fragment>
            <Tag>
                {children}
            </Tag>
        </React.Fragment>
    )
}

export default function HomePage() {
    return (
        <div>
            <Home/>
        </div>
    )
}