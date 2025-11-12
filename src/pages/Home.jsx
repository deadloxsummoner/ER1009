import Banner from '../assets/banner.png'
import Long from '../assets/long.png'
import Short from '../assets/short.png'

function Home () {
   const PhisbolLink = () => {
        window.open('https://www.roblox.com/users/8936295871/profile','_blank')
   }

   const ZhasamLink = () =>{
        window.open('https://www.roblox.com/users/3388987200/profile', '_blank')
   }

   const Portfolio = () =>{
        window.open('https://ph1sbol-portfolio.vercel.app/', '_blank')
   }


    return (
        <>
            <section className="banner">
                <div className="banner-content" style={{backgroundImage:`url(${Banner})`}}>
                    <div className="banner-wrapper">
                        <div className="banner-title-container">
                            <p>ECHOES OF ROOM 1009</p>
                            <p>By <span className="banner-player" onClick={PhisbolLink}>Phisbol</span> & <span className="banner-player" onClick={ZhasamLink}>Zhasam</span></p>
                        </div>
                        <div className="play-butt">
                            🔧
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="about">
                        <p className="sub-head">/ABOUT ℹ️</p>
                        <div className="desc" >
                            <p>is a thriller–horror exploration game inspired by some of my favorite horror titles and the eerie memories of my former school. Step into a place where every shadow hides a story, and every hallway whispers your name.</p>
                            <br></br>
                            <p>Explore, uncover secrets, and piece together the truth behind what happened here. Your choices matter—each decision shapes your fate, leading to multiple endings. Will you make it out alive, or become another part of the school’s dark history?</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" style={{marginTop:"10vh"}}> 
                <div className="container">
                   <div className="gameplay">
                        <p className="sub-head">/GAMEPLAY 🕹️</p>
                        <div className="gameplay-banner"></div>
                        <div className="desc">
                           <p>Game play is just simple, you just run... Aside from that it’s just like any <br></br> other horror games, you just follow the objectives and just don’t die.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" style={{marginTop:"10vh"}}>
                <div className="container">
                    <div className="updates">
                        <p className="sub-head" style={{paddingBottom:"1.5vh"}}>/UPDATES 🆕</p>
                        <div className="updates-wrapper">
                            <div className="updates-content">
                                <div className="long" style={{backgroundImage:`url(${Long})`}}></div>
                                <div className="short">
                                    <div className="short-card" style={{backgroundImage:`url(${Short})`}}></div>
                                    <p className="short-head">TO DO</p>
                                    <ul className="todo-list">
                                        <li>Map</li>
                                        <li>Game Physics</li>
                                        <li>Story</li>
                                        <li className="striked">Cats</li>
                                    </ul>
                                    <p className="short-desc">
                                        Pretty much 99% of  the game is still on progress, 
                                        I’ll put much effort in  this game because I really lovethe idea. I’m still learning how to make models for the game, I spent days working just modeling chairs 

                                        <span>Portfolio</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="footer-container" style={{marginTop:"10vh"}}>
                    <p onClick={Portfolio}>Phisbol ©</p>
                </div>
            </section>
        </>
    )
}

export default Home