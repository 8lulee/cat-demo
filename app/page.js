// app/page.js
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

      <section className="section">
        <h2>About Cats</h2>

        <article>
          <h3>1. Origin</h3>
          <p>
            Domestic cats are believed to originate from wildcats in the Near East.
            They began living close to humans because they hunted rodents near human
            settlements, eventually becoming companion animals.
          </p>
        </article>

        <article>
          <h3>2. Habits</h3>
          <p>
            Cats are most active during dusk and night. They enjoy climbing, sleeping
            in high places, and grooming themselves. Although independent, they still
            need interaction and care.
          </p>
        </article>

        <article>
          <h3>3. Breeds</h3>
          <p>
            There are many cat breeds worldwide, including short-haired and long-haired
            types. Each breed has different appearances and personalities.
          </p>
        </article>
      </section>
    </main>
  );
}
