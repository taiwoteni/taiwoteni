import { CONTACT_EMAIL } from "@/lib/site";

/** Enquiry alerts delivered to Teni (domain verified in Resend). */
export const ALERTS_FROM = "Portfolio Alerts <alerts@teninlanimi.xyz>";

/** Personal confirmation replies sent to visitors. */
export const PERSONAL_FROM = "Teni Taiwo <truly@teninlanimi.xyz>";

/** Where contact-form enquiries are delivered. */
export const CONTACT_TO = process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL;
