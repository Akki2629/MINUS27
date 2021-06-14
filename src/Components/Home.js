import React, { Component } from 'react'
import BackImage from './BackgroundImage'
import DenseAppBar from './Navbar'

export class Home extends Component {
    render() {
        return (
            <div>
                <DenseAppBar />
                <BackImage />
            </div>
        )
    }
}

export default Home
