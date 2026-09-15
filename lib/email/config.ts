import { CONTACT_EMAIL } from "@/lib/site";

/** Every outgoing email is sent from this identity (domain verified in Resend). */
export const EMAIL_FROM = "Portfolio Alerts <alerts@teninlanimi.xyz>";

/** Where contact-form enquiries are delivered. */
export const CONTACT_TO = process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL;
