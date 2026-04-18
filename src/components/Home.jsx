import './Home.css'
import photo from '../assets/me.jpeg'
import { GitHubCalendar } from 'react-github-calendar'

function Home() {
    return (
        <div className="main-container">
            <div className='hero'>
                <div className='hero-image'>
                    <img src={photo} alt="Gabriel" />
                </div>
                <div className="hero-bio">
                    <h1>Hi, my name is Gabriel</h1>
                    <p>I am a Computer Science student at the University of Wisconsin Stout 
                        and I have been writing code for 5 years. I will be graduating soon and if you have 
                        work it would be super cool if you paid me! If you want some assurance you can visit 
                        my projects page which will have some of my school and personal projects listed. Thanks
                        for Visiting!</p>
                </div>
            </div>
            <div className="github-container">
                <h1>This is my github contributions calendar: </h1>
                <div className="github-calendar">
                    <GitHubCalendar username="GabrielAlme" />
                </div>
            </div>
            <div className="whatever-i-want">
                <h1>This is the section where I can put whatever I want and talk about whatever I want. Awesome right? I know.</h1>
                <p>
                    Right now I am working on a financial manager that will be powered by React, Node.js, and Plaid API. If you
                    want a look at this project it will be listed on my projects page or on my github under my repositories.
                </p>
            </div>
        </div>
    )
}

export default Home