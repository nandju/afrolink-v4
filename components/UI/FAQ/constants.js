export const desktopHeaderPhrase = ['Questions fréquentes', 'sur Afrolink'];
export const mobileHeaderPhrase = ['Questions', 'fréquentes'];

export const animate = {
  initial: { y: '100%', opacity: 0 },
  open: (i) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData = [
  {
    question: 'Comment Afrolink construit-il une stratégie digitale ?',
    answer: "Nous démarrons par un audit data et des ateliers de co-création. Nous définissons ensuite vos audiences, vos messages clés et un plan d'activation sur-mesure.",
  },
  {
    question: 'Quels sont vos délais de production de contenus ?',
    answer: "Selon la complexité, nos productions s'étalent de 48h à 4 semaines. Nous travaillons en sprints hebdomadaires avec validations intermédiaires.",
  },
  {
    question: 'Proposez-vous un accompagnement média ?',
    answer: "Oui, nous gérons la stratégie média, l'achat, le suivi et les optimisations multi-plateformes avec un reporting clair et actionnable.",
  },
  {
    question: 'Comment se déroule la collaboration au quotidien ?',
    answer: 'Vous accédez à un hub projet partagé : points de synchro, outils de feedback, dashboards temps réel et un interlocuteur unique côté Afrolink.',
  },
];
