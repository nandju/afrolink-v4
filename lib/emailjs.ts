/**
 * Client EmailJS — envoi direct depuis le navigateur via @emailjs/browser.
 * Un seul e-mail : la notification interne à l'équipe AfroLink.
 * Le destinataire (afrolinkci@gmail.com) est fixé dans le template EmailJS —
 * le navigateur ne peut pas le modifier.
 *
 * Les identifiants sont des variables NEXT_PUBLIC_ (propres à EmailJS :
 * la clé publique est conçue pour être exposée — ce n'est pas un secret).
 */

import emailjs from '@emailjs/browser';
import type { ScheduleCallPayload } from './validation';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const TEAM_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEAM_TEMPLATE_ID;

/** Renvoie un message d'erreur si la configuration EmailJS est incomplète. */
export function getEmailJsConfigError(): string | null {
  if (!SERVICE_ID || !PUBLIC_KEY || !TEAM_TEMPLATE_ID) {
    return "Le service d'envoi n'est pas encore configuré. Veuillez réessayer plus tard.";
  }
  return null;
}

function formatDate(date: Date): string {
  return date.toLocaleString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/** Notification à l'équipe — destinataire fixé dans le template EmailJS. */
export async function sendTeamNotification(data: ScheduleCallPayload): Promise<void> {
  await emailjs.send(
    SERVICE_ID as string,
    TEAM_TEMPLATE_ID as string,
    {
      first_name: data.firstName,
      last_name: data.lastName,
      full_name: `${data.firstName} ${data.lastName}`.trim(),
      from_email: data.email,
      reply_to: data.email,
      phone: data.phone || 'Non renseigné',
      message: data.message,
      accept_comms: data.acceptComms ? 'Oui' : 'Non',
      accept_advisor: data.acceptAdvisor ? 'Oui' : 'Non',
      submitted_at: formatDate(new Date()),
      site_name: 'AfroLink',
      subject: 'Nouvelle demande de planification — AfroLink',
    },
    { publicKey: PUBLIC_KEY as string }
  );
}
