import Card from "../components/card";

const features = [
  {
    iconClass: "bi bi-collection",
    title: "Fresh new layout",
    description:
      "With Bootstrap 5, we've created a fresh new layout for this template!",
  },
  {
    iconClass: "bi bi-cloud-download",
    title: "Free to download",
    description:
      "As always, Start Bootstrap has a powerful, free-to-use license.",
  },
  {
    iconClass: "bi bi-card-heading",
    title: "Jumbotron hero header",
    description:
      "The heroic part of this template is the jumbotron-style header!",
  },
  {
    iconClass: "bi bi-bootstrap",
    title: "Feature four",
    description: "Using Bootstrap icons for nice little visuals.",
  },
  {
    iconClass: "bi bi-code-slash",
    title: "Easy to customize",
    description: "Customize this template to suit your needs!",
  },
  {
    iconClass: "bi bi-check2-circle",
    title: "Ready to go",
    description: "Deploy it and you’re done — quick and easy!",
  },
];

function Features() {
  return (
    <section className="py-5">
      <div className="container px-5 my-5">
        <div className="row gx-5">
          {features.map((feature, index) => (
            <Card
              key={index}
              iconClass={feature.iconClass}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
