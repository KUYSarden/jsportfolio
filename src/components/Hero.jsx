import scientist from "../assets/scientist.png"
import bootstrap from "../assets/bootstrap.png"
import coding from "../assets/coding.png"
import js from "../assets/js.png"
import node from "../assets/node.png"


const Hero = () => {
    return (
        <div className="hero">
            <div className="body">
            <div>
                <h1>Hi I`m Arden</h1>
                <h3>I am an aspiring Full stack web developer.</h3>
                <div className="img">
                    <img src={bootstrap} alt="" />
                    <img src={coding} alt="" />
                    <img src={js} alt="" />
                    <img src={node} alt="" />
                </div>
                <div>
                    <a href="" className="A">Download CV</a>
                    <a href="" className="b">Explore</a>
                </div>
            </div>
            <div>
              <img src={scientist} alt="" />
            </div>
            </div>
        </div>
     
    )
  }


  export default Hero


 