import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="section-pad py-24 text-center">
      <p className="eyebrow justify-center">Not Found</p>
      <h1>We could not find that page.</h1>
      <p className="hero-text max-w-2xl mx-auto">
        The route may have moved or the link may be outdated. Use the button below to return to the homepage.
      </p>
      <div className="mt-10 flex justify-center">
        <Link className="button primary" to="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}