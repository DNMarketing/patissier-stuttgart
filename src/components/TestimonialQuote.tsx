import { Reveal } from "./Reveal";
import type { Testimonial } from "@content/data/testimonials";

export function TestimonialQuote({ testimonial }: { testimonial: Testimonial }) {
  return (
    <section aria-label="Kundenstimme" className="hairline-t py-20 md:py-24">
      <div className="container-page">
        <Reveal>
          <figure className="mx-auto max-w-3xl text-center">
            <blockquote className="font-display text-quote">
              „{testimonial.quote}“
            </blockquote>
            <figcaption className="label mt-8 text-taupe">
              {testimonial.source}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
