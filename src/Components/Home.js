const Home = () => {
    return (
        <div>
            <div className="Header-home">
                <h5 className="text-box">Hi! I'm Fakhra Aslam</h5>
                <p>An associate front end developer</p>
            </div>
            <br /><br />
            <div className="Cv-grid ">
                <br/>
                <h1 style={{textAlign:"center"}}>My Resume </h1>
                <p style={{textAlign:"center"}}>Here is short documened discription of this website</p>
                <div className=" Cv-grid homegrid">
                <div className="img-cv"><a href=" " className="hero-btn text-box">Read Resume</a></div>
                <div className="des"><a href=" " className="hero-btn text-box">Read Resume</a></div>
                </div>
           
            </div>
            <br /> <br />
            <div className="result-grid ">
            <br/>
                <h1 style={{textAlign:"center"}}>My Grdatuion Result </h1>
                <p style={{textAlign:"center"}}>87% || 3.45cgpa</p>
                <div className="result-grid homegrid">
                <div className="img-result"><a href=" " className="hero-btn text-box">Read Result</a></div>
                <div className="des"><a href=" " className="hero-btn text-box">Read Result</a></div>
                </div>
               
            </div>
            <br /><br />
        </div>

    )
}
export default Home;