export default function Section_1() {
  // react uses JSX which is like HTML + Javascript
  // anything visual goes in the return
  return (
    <main>
  <header>
    <h1 className="text-3xl lg:text-6xl font-bold">Section 1: Origins of Domestic Cats</h1>
  </header>

  <section>
    <header>
      <h2>1.1 Evolutionary Background</h2>
    </header>
    <p>
      Domestic cats descended from the African wildcat (Felis silvestris lybica), a species native to North Africa and the Middle East. Genetic research shows that modern domestic cats share a close biological relationship with this wild ancestor. Unlike other domesticated animals, cats have undergone relatively little physical change, retaining many traits necessary for survival in the wild.
    </p>
    <p>
      Key inherited traits include:
    </p>
    <ul>
      <li>Retractable claws used for hunting and climbing</li>
      <li>Highly developed night vision</li>
      <li>Acute hearing and smell</li>
      <li>Solitary and stealth-based hunting behavior</li>
    </ul>
  </section>

  <section>
    <header>
      <h2>1.2 Early Domestication Process</h2>
    </header>
    <p>
      The domestication of cats was largely unintentional. As humans began farming and storing grain, rodent populations increased around settlements. Wildcats that hunted these rodents gained easy access to food, while humans benefited from pest control.
    </p>
    <p>
      This relationship developed through the following stages:
    </p>
    <ul>
      <li>Agricultural settlements created food sources for rodents</li>
      <li>Wildcats hunted rodents near human homes</li>
      <li>Humans tolerated and protected helpful cats</li>
      <li>Over generations, cats adapted to human environments</li>
    </ul>
    <p>
      This process began approximately 9,000–10,000 years ago, making cats one of the earliest domesticated animals.
    </p>
  </section>

  <section>
    <header>
      <h2>1.3 Cultural and Historical Importance</h2>
    </header>
    <p>
      Cats played a major role in ancient civilizations, especially in ancient Egypt, where they were considered sacred. They were associated with the goddess Bastet, symbolizing protection, fertility, and motherhood. Cats were often mummified and buried with care, and harming a cat was considered a serious crime.
    </p>
    <p>
      Through trade and travel, cats spread to Europe and Asia, particularly aboard ships where they helped control rodent populations.
    </p>
  </section>
</main>
  );
}