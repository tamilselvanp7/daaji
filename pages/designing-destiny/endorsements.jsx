import React from "react";
import styles from "../../styles/DesigningCSS/endorsements.module.css"
import Footer from "../../components/DesigningDestiny/Footer";
import Navbar from "../../components/DesigningDestiny/Navbar";
import Seo from "../../components/Seo";

function Endorsements() {
const data=[
  {
    id:'dr-elizabeth-denley',
    img:'https://www.daaji.org/wp-content/uploads/2019/01/denley.png',
    name:'Dr. Elizabeth Denley',
    designation:'Yogic researcher, writer and editor',
    description:"<p>In November 2014, Daaji embarked on an inspiring program for the youth of the Heartfulness Movement. He hosted the first of an ongoing series of seminars about meditative practices and lifestyle, and challenged the participants to design their own destiny. Since then, Daaji has developed and expanded the themes from that first youth seminar, and has explored both meditative practices and lifestyle changes in greater depth in the light of neuroscience, genetics and psychology.</p><p>The result is the book, Designing Destiny, the Heartfulness Way. As the work evolved during the ensuing three years, there were many late night sessions with Daaji, when he dictated new inspirations from his diaries, and challenged those around him with more and more questions. Each time he posed a question to us, he would also explore it himself, and a few hours, days or weeks later he would open his diary to a new set of pages, revealing another treasure of discovery to enrich the dialogue. These unique dictations travelled across three continents – North America, Europe and the subcontinent of India. The experience of seeing the text mature and unfold has been worthy of the spiritual journey itself, and of course it will continue to evolve, as do all good ideas. For now, the essence of Daaji’s wisdom has been distilled in this very simple, practical book.</P><p>As an editor of the book since the beginning, it has personally been an unbelievably transformative experience. Concepts and principles that now seem so natural and obvious have subtly seeped into my consciousness over the last four years, and the result has been nothing short of life-changing. But of course the real impact is not in simply reading.</p><p>This book is a catalyst – a manual for change. Every chapter and every section has practical advice to live a better life. So I have tried to live the words on the page. There is still a long way to go! The real impact comes from taking up Daaji’s challenge of doing the meditative practices, transforming your lifestyle and seeing in real time how destiny is woven.</p><p>Actually there is no end to this journey of discovery, to the unfolding of new states of consciousness, and to the blossoming of life that comes with Daaji’s practical teachings and guidance. If you are young at heart, flexible, and willing to make something of your life, this is a practical manual that will help you to excel in every endeavour. Try it and see!</p> "
  },
  {
    id:'ira',
    img:'https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/ira_4aeb308482.png?updated_at=2022-11-23T07:13:32.594Z',
    name:'Ira Trivedi',
    designation:'Author and Yoga acharya',
    description:'<p>Daaji’s new book is a real game changer, especially for the youth. I loved this book and read it in a single sitting. With short chapters which breaks down spiritual transformation for all of us, this book is a must-read for anybody interested in embarking on a spiritual journey.</p>'
  },
  {
    id:'vani-kola',
    img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/vani_kola_img_8010d41bc5.png?updated_at=2022-11-23T07:16:36.750Z",
    name: "Vani Kola",
    designation: "Managing Director at Kalaari Capital",
    description: "<p>If you believed that fate and karma shape our lives, think again! We have heard this many times, in many forms, from many sources. Designing Destiny, the Heartfulness Way shows us the freedom we have to shape our destiny, and the easy-to-understand narrative changes any limiting beliefs about destiny. Inspirational!</P>"
    },
    {
      id:'sanjay-bhatia',
    img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/sanjay_bhatia_692985204b.png?updated_at=2022-11-23T07:24:30.196Z",
    name: "Sanjay Bhatia",
    designation: "Chairman, Mumbai Port Trust",
    description: "<p>Daaji, the real spiritual scientist has wonderfully enunciated the power of meditation for one and all to understand. Explained in simple language with inspiring stories!</P>"
    },
    {
      id:'suresh-prabnu',
    img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/suresh_prabhu_d5d88a6ebd.png?updated_at=2022-11-23T07:22:29.751Z",
    name: "Suresh Prabhu",
    designation: "Minister of Commerce & Industry and Civil Aviation",
    description: "<p>A book for those who are interested in personal transformation and have covered some distance,those who are seeking to go deeper into the subject, and those who would like to discover how spirituality can help us lead a life filled with worldly and inner fulfillment.</P>"
    }
]

const seoContent = {
  metaTitle: "Endorsements | Kamlesh D Patel"
};
    
  return (
    <div>
      <Seo seo={seoContent} />
      <Navbar />
      <div className={styles.titlecon}>
        <div className="container">
          <h1 className="text-center">Endorsements</h1>
        </div>
      </div>

      <div className={styles.bodycontainer}>
        <div className="container ">
          {data.map((item) => (
            <>
              <div className="py-5" id={item.id}>
                <img src={item.img} alt='' />
                <h5> {item.name}</h5>
                <p>{item.designation}</p>
                <div dangerouslySetInnerHTML={{ __html: item.description }} />

              </div>
              <hr />
            </>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Endorsements;
