import React from "react";
import Navbar from "../../components/DesigningDestiny/Navbar";
import Seo from "../../components/Seo";
import Styles from "../../styles/DesigningCSS/readmore.module.css";

const relationships = () => {
  const seoContent = {
    metaTitle: "3 Ways Relationships Change Our Destiny I Relationship Advice"
  };

  return (
    <div>
      <Seo seo={seoContent} />

      <div className={Styles.media_coverage_page}>
        <Navbar />
      </div>
      <div className={Styles.top_div}>
        <div className={Styles.top_inside_div}>
          <div className={`mt-5 ${Styles.top_heading}`}>
            <h1>Relationships</h1>
            <h4>
              <em>Designing Destiny, the Heartfulness Way</em>
            </h4>
          </div>
        </div>
      </div>
      <div className={`text-center p-3 ${Styles.youtube_box}`}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Xd9oXwErtg0"
          title="Daaji's Wisdom|Insights on Relationships"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div className={` container col-lg-12 ${Styles.down_div}`}>
        <p>
          <br />
          <strong>Dear friends,</strong>
        </p>
        <p>
          How often do you come out of a business meeting or a conversation with
          a loved one to find yourself upset or angry? Despite having a regular
          meditation practice, many of us still struggle with emotional
          reactions to the ups and downs of daily life. Sometimes we feel calm
          and contented with the world around us, and other times we feel
          anxious, over-excited, annoyed or fearful.
        </p>
        <p>
          In Designing Destiny, The Heartfulness Way, we explore these emotions
          in depth, understanding their origin and how they influence our
          consciousness. How can we work with emotions and reactions so that our
          lives are more balanced and calm? When we observe the patterns our
          emotional lives follow, we notice that there are certain cyclical
          rhythms in the ups and downs.
        </p>
        <p>
          The first thing we observe through meditation is that emotions and
          feelings arise in the heart. Just as there is the brain and the mind,
          likewise we have the physical heart and the vibratory or energetic
          heart, also known as the subtle body and emotional heart.
        </p>
        <p>
          Qualities associated with emotional intelligence – compassion,
          empathy, resilience, gratitude and love – arise in the vibratory
          heart, and whenever the vibratory heart is affected in any way, this
          then affects the physical heart. For example, when we are angry, our
          heart rate variability becomes erratic and unstable, our blood
          pressure goes up etc., even though the origin of the emotion is in the
          subtle body. So to improve our emotional intelligence we need to work
          through the heart.
        </p>
        <p>
          The second thing we observe is the difference between emotions and
          feelings. Feelings are like pure fire without smoke, where the wood
          burns clear and pure. Emotions are like fire with a lot of smoke due
          to dampness or impurities in the wood. And the purest feelings of all
          are like electricity, where there is not even any burning. Pure
          feelings are natural and helpful for our evolution, whereas emotions
          are clouded by impurities, just like smoky wood. What causes the
          impurities? Impressions or samskaras that settle in the heart as a
          result of emotional reactions. The purer the heart, the clearer the
          feelings.
        </p>
        <p>
          The third thing we observe in meditation is that the vibratory heart
          is where we find the chakras of the heart. The heart chakra consists
          broadly of five different energy centres or chakras, associated with
          the five traditional elements: earth, space, fire, water and air. Each
          one has a particular spectrum of emotions and feelings that we master
          as we travel on our inner journey. In fact, feelings and emotions
          collect in the human system in quite a specific way, which we can map
          in our spiritual anatomy. Unless and until we master these chakras
          through spiritual practice, we will not master the emotions associated
          with them. Each of the five chakras is associated with a particular
          duality of feelings or opposites, e.g. fear and courage, anger and
          love.
        </p>
        {/* <div className='text-center'>
            <img src="	https://www.daaji.org/wp-content/uploads/2019/02/chakras.png" alt='' />
        </div> */}
        <p>
          As we journey through each chakra of the heart, removing the
          impressions that have lodged there, as well as mastering the
          associated feelings and emotions, step-by-step we develop greater
          levels of emotional intelligence and maturity.
        </p>
        <p>
          How can we work with the spiritual anatomy of the chakras to gain
          insight into our emotions?
        </p>
        <p>What are some practical tools to help us master these chakras?</p>
        <p>
          Is it possible to let go of our habitual patterns or subconscious
          patterns and redesign our destiny?
        </p>
        <p>
          We dive deeper into these and more questions in Designing Destiny, The
          Heartfulness Way.
        </p>
        <p>
          All the best,
          <br />
          Daaji
        </p>
      </div>

      <div className={Styles.footer}>
        <div className="container">
          <h5 className="regular">For any queries please contact us at</h5>
          <h4 className="regular pt-2">
            <a href="mailto:dd@heartfulness.org">dd@heartfulness.org</a>
          </h4>
        </div>
      </div>
      <div className="text-center pt-3 pb-3">
        <div className="container">
          <small className="pt-2">
            This site has been donated by Smith family and their children Sarah
            and Noah with the wish that all children know the blessing of
            growing up with a full heart.
          </small>
        </div>
      </div>
    </div>
  );
};

export default relationships;
