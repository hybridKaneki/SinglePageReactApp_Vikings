import React from 'react';
import pic1 from "./vikings.jpg";
import pic2 from "./vkk.jpg";
import pic3 from "./vkkk.jpg";
import pic4 from "./vkkkk.jpg";
import pic5 from "./vk2.jpg";
import pic6 from "./vk3.jpg";
import {
	Link
} from 'react-router-dom';

export default class Main extends React.Component {
  render() {
    return (
     <main>
     <ol>
     <li>
     <img src={pic1 } alt="Vikings"  />
     <Link className="title" exact to="/Blog1"><strong>Vikings Season 5</strong></Link>
     <p id="t">June 18, 2018</p>
     <p> The episode may not have been action packed but what does happen is more emotionally charged. 
        The big revelation, of course, is Rollo (Clive Standen) telling Lagertha that he wants her and Bjorn to accompany
         him back to Normandy. You see, not only does he love her, he’s Bjorn’s father. (this point is still being debated by fans) 
         If this were true then it would mean that Lagertha  was cheating on Ragnar even before he was cheating on her with Auslag.
         Bjorn did not want any part of this revelation (he still feels he is only Ragnar’s son)Floki is also still his impish, youthful self, 
         though off in Iceland he puts his life into the hands of his motley band of settlers.</p>
     </li>
     <li>
     <img src={pic2 } alt="Vikings"  />
     <Link className="title" exact to="/Blog2"><strong>Vikings returns to San Diego</strong></Link>
     <p id="t">July 9, 2018</p>
     <p>Additionally, HISTORY’s upcoming new UFO drama series “Project Blue Book” will make its SDCC debut with a cast panel and a unique, 
        outside activation featuring real UFO cases and an attempt to make contact with life beyond earth from San Diego grounds. 
        Executive produced by Robert Zemeckis, the drama series is inspired by the true, Top Secret investigations into Unidentified Flying
      Objects (UFOs) conducted by the United States Air Force from 1952-1969 and stars Aidan Gillen (“Game of Thrones”) and Michael Malarkey (“The Vampire Diaries”).
      Floki is also still his impish, youthful self, though off in Iceland he puts his life into the hands of his motley band of settlers.  </p>
     </li>
     <li>
     <img src={pic3 } alt="Vikings"  />
     <Link className="title" exact to="/Blog3"><strong>Vikings Comic-con</strong></Link>
     <p id="t">Aug 15, 2018</p>
     <p>New York, NY – Aug 15, 2018 -HISTORY(R)’s hit drama series “Vikings” returns to San Diego Comic-Con with several exciting 
        opportunities for fans including: a cast panel with new exclusive season five footage; a bona fide Vikings longship set ablaze
         in the San Diego Bay; a booth on the convention floor; 
        drinking horn giveaways; an exclusive SDCC comic book and an elaborate funeral procession through downtown San Diego.
        Floki is also still his impish, youthful self, though off in Iceland he puts his life into the hands of his motley band of settlers.</p>
     </li>
     <li>
     <img src={pic4 } alt="Vikings"  />
     <Link className="title" exact to="/Blog4"><strong>Viking Settlements</strong></Link>
     <p id="t">Sep 5, 2018</p>
     <p>Meanwhile, Viking armies remained active on the European continent throughout the ninth century,
         brutally sacking Nantes (on the French coast) in 842 and attacking towns as far inland as Paris, Limoges, Orleans, 
         Tours and Nimes. In 844, Vikings stormed Seville (then controlled by the Arabs); in 859, they plundered Pisa, though 
         an Arab fleet battered them on the way back north. In 911, the West Frankish king granted Rouen and the surrounding territory
          by treaty to a Viking chief called Rollo in exchange for the latter’s denying passage to the Seine to other raiders.
           This region of northern France is now known as Normandy, or “land of the Northmen.”</p>
     </li>
     <li>
     <img src={pic5 } alt="Vikings"  />
     <Link className="title" exact to="/Blog5"><strong>Viking Raids</strong></Link>
     <p id="t">Sept 10, 2018</p>
     <p>In A.D. 793, an attack on the Lindisfarne monastery off the coast of Northumberland in northeastern England marked the
         beginning of the Viking Age. The culprits–probably Norwegians who sailed directly across the North Sea–did not destroy the
          monastery completely, but the attack shook the European religious world to its core. Unlike other groups, these strange new 
          invaders had no respect for religious institutions such as the monasteries, which were often left unguarded and vulnerable near
           the shore.Two years later, Viking raids struck the undefended island monasteries of Skye and Iona (in the Hebrides) as well as Rathlin 
           (off the northeast coast of Ireland).</p>
     </li>
     <li>
     <img src={pic6 } alt="Vikings"  />
     <Link className="title" exact to="/Blog6"><strong>Who are the Vikings ?</strong></Link>
     <p id="t">Sept 21, 2018</p>
     <p>Contrary to some popular conceptions of the Vikings, they were not a “race” linked by ties of common ancestry or patriotism, 
        and could not be defined by any particular sense of “Viking-ness.” Most of the Vikings whose activities are best known come from 
        the areas now known as Denmark, Norway and Sweden, though there are mentions in historical records of Finnish, Estonian and Saami
         Vikings as well. 
        Their common ground–and what made them different from the European peoples they confronted–was that they came from a foreign land
        they were not “civilized” in the local understanding of the word and–most importantly–they were not Christian.</p>
     </li>
     </ol>
     
     </main>
    );
  }
}
