import ProfileCard from "./ProfileCard";
import "bulma/css/bulma.css";
import { DIGITAL_ASSISTANTS } from "./constants";

const App = () => {
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
            {DIGITAL_ASSISTANTS.map(({ title, handle, image, description }) => (
              <div className="column is-4 ">
                <ProfileCard
                  title={title}
                  handle={handle}
                  image={image}
                  description={description}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;

/* <div className="column is-4 ">
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
    description="Cortana is a Microsoft helper tool"
    />
</div>
<div className="column  is-4 ">
    <ProfileCard
    title="Siri"
    handle="@Siri01"
    image={SiriImage}
    description="Siri was made by Apple and it is kinda dead"
    />
</div> */
