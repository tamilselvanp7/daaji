import BuyNow from "../../components/DesigningDestiny/BuyNow";
import Navbar from "../../components/DesigningDestiny/Navbar";
import Press from "../../components/DesigningDestiny/Press";
import Review from "../../components/DesigningDestiny/Review";
import DestinyBook from "../../components/DesigningDestiny/DesigningDestiny";
import Seo from "../../components/Seo";

export default function Home() {
  const seoContent = {
    metaTitle: "Designing Destiny | Kamlesh D Patel"
  };
  return (
    <div>
      <Seo seo={seoContent} />
      <Navbar />
      <div className="pt-5">
        <DestinyBook />
      </div>
      <Review />
      <Press />
      <BuyNow />
    </div>
  );
}
