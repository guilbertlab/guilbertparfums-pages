# Conventions — Landing Page Guilbert Parfums

Landing page Astro pour campagnes Google Ads (sous-domaine `landing.guilbertparfums.com`),
cible France entière, conversion = audit olfactif offert.

## Stack
- Astro (latest) + Tailwind CSS v4 (config CSS-first `@theme` dans `src/styles/global.css`)
- GSAP + ScrollTrigger pour les animations
- Netlify Forms pour la capture (form unique `name="audit"`, soumission AJAX + fallback natif)
- Police de marque : **Arpona** (`public/fonts/`), titres en `font-display`

## Règles d'écriture (non négociable)
- **Jamais de tiret cadratin `—` ni demi-cadratin `–`** nulle part (copy, alt, commentaires).
  Utiliser `·`, `:`, `,`, `(...)` ou un point selon le cas.
- **Voix de marque toujours « nous » + vouvoiement** du visiteur. Jamais « on » en voix
  de marque (aligné sur guilbertparfums.com). Les citations clients peuvent rester naturelles.
- **Pas de numéro de téléphone affiché.** Tout CTA d'appel = texte « Appel gratuit »,
  numéro uniquement dans `href="tel:+33686537497"`.
- **Cible France entière.** Le showroom parisien est une option, jamais une obligation.
  Mentionner « partout en France », « à distance ou au showroom ».
- **Style direct** : phrases concrètes, pas de triplets vides, pas de verbes marketing
  type « transformer », « révéler », « sublimer ».

## Design system
- **Fond blanc pur** (`#ffffff`). Surfaces/cartes : `--color-ivory-50` (`#f7f6f4`).
- **Tous les boutons en noir** (`--color-ink`, hover `#000`). Sur sections sombres
  (`--color-ink`), boutons en blanc texte noir.
- **Bordeaux réservé à 3 accents uniquement** : prix « À partir de 65 € » (Offer.astro),
  grand guillemet `«` (Testimonials.astro), rail de progression (Process.astro).
  Tout autre accent en noir / gris neutre.
- **`border-radius: 0` partout** (angles vifs, style du site officiel). Forcé en global
  dans `global.css`. Ne pas réintroduire de `rounded-*`.
- Sections sombres volontaires : `WhyUs` et `FinalCta` (rupture de rythme).

## Conversion
- Le formulaire complet (nom, email, téléphone, secteur ; pas de champ message) est
  dans le **Hero** (`id="audit"`). Form unique, pas de doublon Netlify.
- Tous les CTA `#audit` scrollent vers le hero.
- Conversion tertiaire : simulateur Hestia → `https://hestia.guilbertparfums.com/`.

## Vérification après modification
- `npm run build` sans erreur.
- Dans `dist/` : aucun `—`, aucun numéro « 06 » visible en clair, `form name="audit"`
  une seule fois, fond blanc.
- Validation visuelle sur localhost.
