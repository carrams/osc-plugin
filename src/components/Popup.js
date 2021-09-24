import React, {Component} from 'react';
import '../css/popup.css';

// import HorizontalCarousel from './HorizontalCarousel.js';

class Popup extends Component {
    openTab = (e) => {
        chrome.tabs.create({url:'sasb-browser.html'})
    }
    
    render() {
        return (
            <div style={styles.main}>
                <h6 className="h1-popup">OSC SASB Browswer</h6>
                <div className="div-launch-brsr">
                    <a href="#" className="active" onClick={this.openTab}>Launch SASB Browser >></a>
                </div>
                
                {/* <HorizontalCarousel /> */}
            </div>
        ) 
    } 
}

const styles = {
    main: {
        width: "300px",
        height: "150px"        
    }
}

export default Popup;