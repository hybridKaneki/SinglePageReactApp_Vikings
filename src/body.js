import React from 'react';
import pic1 from "./vikings.jpg";

export default class Main extends React.Component {
  render() {
    return (
     <main>
     <ol>
     <li>
     <a href="./blog1.js">Kylian Mbappe, the Future of Soccer</a>
     <p className="title">Date: JULY 23, 2018</p>
     <img src={pic1 } alt="Sports"  />
     <p> The episode may not have been action packed but what does happen is more emotionally charged. 
       The big revelation, of course, is Rollo (Clive Standen) telling Lagertha that he wants her and Bjorn to accompany him back 
       to Normandy. You see, not only does he love her, he’s Bjorn’s father. (this point is still being debated by fans) If this were 
       true then it would mean that Lagertha  was cheating on Ragnar even before he was cheating on her with Auslag. 
       Bjorn did not want any part of this revelation (he still feels he is only Ragnar’s son)</p>
     </li>
     </ol>
     
     </main>
    );
  }
}
