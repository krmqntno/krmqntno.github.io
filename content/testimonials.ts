/**
 * TODO Kerim: Einwilligung einholen, bevor hier echte Zitate erscheinen.
 * Screenshots aus ~/Desktop/Testimonials zeigen Namen und Profilbilder Dritter,
 * die dürfen ohne Zustimmung nicht auf eine öffentliche Seite.
 * Sauberer Weg: Zitat abtippen, Vorname plus Initiale, kein Foto.
 *
 * Leeres Array bedeutet: die Sektion wird nicht gerendert.
 */

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [];
