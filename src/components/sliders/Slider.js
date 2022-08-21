import React from "react";
import Dots from '../../components/dots/Dot';
import "./slider.css";
class Slider extends React.Component {
  state = {
    foto: 1,
   
  }
   prevFoto = () => {
    let { foto } = this.state;
    this.setState({foto:foto+1})
    if(foto === 3){
      this.setState({foto:1})
    }
  }
  nextFoto = () => {
    let { foto } = this.state;
    this.setState({foto:foto-1})
    if(foto === 1){
      this.setState({foto:3})
    }
  }
  render() {
 
    return (
      <div>
       <img src= {`/images/foto${this.state.foto}.png`} alt="foto" />
        <div
        onClick={this.prevFoto}
         className="btn button-prev"
         >
        &#10095;
        </div>
        <div className="btn button-next"
        onClick={this.nextFoto}
        >
        &#10094;
        </div>
        <Dots 
        active={this.state.foto-1}
        />
      </div>
    );
  }
}
export default Slider;
