// app/page.js
import Section3 from "./component/section3";  

export default function HomePage() {
  return (
    <main className="page">
      <header className="header">
        <h1>Cat</h1>
      </header>

      <section className="section two-column">
        <div className="image-box">
          <img src="/ragdoll_cat.jpg" alt="Ragdoll Cat" />

        </div>

        <div className="info-box">
          <h2>Taxonomic Information</h2>
          <ul>
            <li><strong>Kingdom:</strong> Animalia</li>
            <li><strong>Phylum:</strong> Chordata</li>
            <li><strong>Class:</strong> Mammalia</li>
            <li><strong>Order:</strong> Carnivora</li>
            <li><strong>Family:</strong> Felidae</li>
            <li><strong>Genus:</strong> Felis</li>
            <li><strong>Species:</strong> F. catus</li>
          </ul>
        </div>
      </section>
      <Section3 />
      
    </main>
  );
}
