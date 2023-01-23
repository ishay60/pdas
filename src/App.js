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
            <section className="hero is-primary"> 
                <div className="hero-body">
                    <p className="title">Personal Digital Assistant</p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns is-multiline">
                        <div className="column is-4 ">
                            <ProfileCard
                                title="Alexa"
                                handle="@alexa99"
                                image={AlexaImage}
                                description="Alexa was created by Amazon and helps you buy things."    
                            />
                        </div>
                        <div className="column is-4 ">
                            <ProfileCard
                                title="Cortana"
                                handle="@cortana32"
                                image={CortanaImage}
                                description= "Cortana is a Microsoft helper tool"
                            />
                        </div>
                        <div className="column  is-4 ">
                            <ProfileCard
                                title="Siri"
                                handle="@Siri01"
                                image={SiriImage}
                                description="Siri was made by Apple and it is kinda dead"
                            />                            
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default App;