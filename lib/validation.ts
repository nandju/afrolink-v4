/**
 * Validation et nettoyage des données du formulaire "Planifier un appel".
 * Utilisé côté serveur uniquement (pages/api).
 */

export interface ScheduleCallPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  acceptComms: boolean;
  acceptAdvisor: boolean;
  /** Champ honeypot anti-spam — doit toujours être vide. */
  website: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_REGEX = /^[+()0-9.\-\s]{6,20}$/;

export const FIELD_LIMITS = {
  firstName: 80,
  lastName: 80,
  email: 254,
  phone: 25,
  message: 3000,
} as const;

/** Échappe les caractères HTML pour empêcher l'injection dans les e-mails. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

/** Transforme le body brut en payload typé et normalisé. */
export function parsePayload(body: unknown): ScheduleCallPayload {
  const raw = (body ?? {}) as Record<string, unknown>;
  return {
    firstName: asString(raw.firstName).slice(0, FIELD_LIMITS.firstName),
    lastName: asString(raw.lastName).slice(0, FIELD_LIMITS.lastName),
    email: asString(raw.email).slice(0, FIELD_LIMITS.email).toLowerCase(),
    phone: asString(raw.phone).slice(0, FIELD_LIMITS.phone),
    message: asString(raw.message).slice(0, FIELD_LIMITS.message),
    acceptComms: raw.acceptComms === true,
    acceptAdvisor: raw.acceptAdvisor === true,
    website: asString(raw.website),
  };
}

export function validatePayload(data: ScheduleCallPayload): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.firstName) errors.firstName = 'Le prénom est obligatoire.';
  if (!data.lastName) errors.lastName = 'Le nom est obligatoire.';

  if (!data.email) {
    errors.email = "L'adresse e-mail est obligatoire.";
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = "L'adresse e-mail est invalide.";
  }

  if (data.phone && !PHONE_REGEX.test(data.phone)) {
    errors.phone = 'Le numéro de téléphone est invalide.';
  }

  if (!data.message) {
    errors.message = 'La description du projet est obligatoire.';
  } else if (data.message.length < 10) {
    errors.message = 'La description est trop courte (10 caractères minimum).';
  }

  if (!data.acceptAdvisor) {
    errors.acceptAdvisor = "Vous devez accepter d'être contacté par un conseiller.";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
