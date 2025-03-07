import React from 'react'
import Mainframe from '../Common/Mainframe'
import Whowe from '../Components/Whowe'
import Missions from '../Components/Missions'
import Portfolio from '../Components/Portfolio'

function Home() {
    return (
        <section className='homepage'>


            <Mainframe/>


            <Portfolio/>

            <Whowe/>

            <Missions/>



        </section>
    )
}

export default Home
