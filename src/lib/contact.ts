import { site } from "@/content/site";

// TODO(placeholder): confirm which enquiries you want to receive. Edit this list to change the topic chips on /contact.
export const topics = ["Early access", "Partnership", "Press", "Join the team", "Something else"] as const;

export type Inquiry = {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
};

export type InquiryErrors = Partial<Record<"name" | "email" | "topic" | "message", string>>;

export function validateInquiry(values: Inquiry): InquiryErrors {
  const errors: InquiryErrors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name.";
  if (!values.email.trim()) errors.email = "Please enter your email so we can reply.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "That email doesn't look right. Check for typos.";
  if (!values.topic) errors.topic = "Pick the closest match. You can add detail below.";
  if (values.message.trim().length < 10) errors.message = "A sentence or two helps us reply well.";
  return errors;
}

/**
 * TODO(backend): there is no backend yet. Until one exists this builds a
 * prefilled mailto: link, so a submission is never silently lost.
 *
 * To wire up a real endpoint, replace the body of this function with e.g.
 *   await fetch("/api/contact", { method: "POST", body: JSON.stringify(inquiry) })
 * (a Next.js route handler, Formspree, Resend, etc.) and update the status copy
 * in src/components/contact-form.tsx to match.
 */
export function submitInquiry(inquiry: Inquiry): { mailtoHref: string } {
  const lines = [
    inquiry.message.trim(),
    "",
    "—",
    `Name: ${inquiry.name.trim()}`,
    `Email: ${inquiry.email.trim()}`,
    inquiry.company.trim() && `Company: ${inquiry.company.trim()}`,
    `Topic: ${inquiry.topic}`,
  ].filter((line): line is string => typeof line === "string");

  const subject = `Website enquiry: ${inquiry.topic}`;
  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  return { mailtoHref };
}
