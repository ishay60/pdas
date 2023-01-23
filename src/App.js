import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import 'bulma/css/bulma.css'
//console.log(AlexaImage);
//console.log(SiriImage);

function App() {
    return (
        <div>
            <div>Personal Digital Assistant</div>

            <div className="container">
                <section className="section">
                    <div className="culomns">
                        <div className="column is-3">
                            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage}/>
                        </div>
                        <div className="column is-3">
                            <ProfileCard title= "Cortana" handle = "@cortana32" image={CortanaImage}/>
                        </div>
                        <div className="column is-3">
                            <ProfileCard title="Siri" handle="@Siri01" image={SiriImage} />                            
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default App;