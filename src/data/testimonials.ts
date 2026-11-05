export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

/** Solo recensioni vere. L’array vuoto non disegna citazioni. */
export const testimonials: Testimonial[] = [];
