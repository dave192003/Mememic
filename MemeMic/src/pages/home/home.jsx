import NavBar from "../../components/navbar/navbar";
import "./home.css";
import samplePicture from "../../assets/videos/emotionalDamage.mp4";

function Home() {
    return (
        <div className="home-main grid-centered-2">
            < NavBar />
            <section className="content-page">

                {/* left part */}
                <div className="left-box flex-centered">
                    <div className="top-part flex">
                        <div className="top-left-part full-width">
                            <h2 className="home-header">Randomized Memes
                            </h2>
                            <h2 className="home-header-2">Do the <span>LINES</span>
                            </h2>
                        </div>

                        {/* right part */}
                        <div className="top-right-part flex-centered">
                            <video src={samplePicture}
                                muted
                                playsInline
                                loop
                                autoplay
                                preload="metadata"
                                draggable="false" />
                        </div>



                    </div>
                </div>


            </section>
        </div>
    )
}
export default Home;