import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
//console.log(AlexaImage);
//console.log(SiriImage);

function App() {
    return (
        <div>
            <div>
                Personal Digital Assistant
            </div>

            <img src={AlexaImage}/>
            <img src={SiriImage}/>
            <img src={CortanaImage}/>
            <ProfileCard title= "Alexa" handle = "@alexa99"/>
            <ProfileCard title= "Cortana" handle = "@cortana32"/>
            <ProfileCard title= "Siri" handle = "@Siri01"/>
        </div>
    );
}

export default App;