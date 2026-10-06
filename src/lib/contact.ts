import { site } from "@/content/site";

export const projectTypes = ["SaaS platform", "Creative tool", "Productivity app", "Internal tool", "Something else"] as const;
export const timelines = ["Just exploring", "Within 3 months", "Ready to start now"] as const;

export type Inquiry = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  timeline: string;
  message: string;
};

export type InquiryErrors = Partial<Record<"name" | "email" | "projectType" | "message", string>>;

export function validateInquiry(values: Inquiry): InquiryErrors {
  const errors: InquiryErrors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name.";
  if (!values.email.trim()) errors.email = "Please enter your email so we can reply.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "That email doesn't look right. Check for typos.";
  if (!values.projectType) errors.projectType = "Pick the closest match. You can add detail below.";
  if (values.message.trim().length < 10) errors.message = "A sentence or two about what you're building helps us reply well.";
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
    `Building: ${inquiry.projectType}`,
    inquiry.timeline && `Timeline: ${inquiry.timeline}`,
  ].filter((line): line is string => typeof line === "string");

  const subject = `New project enquiry: ${inquiry.projectType}${inquiry.company.trim() ? ` (${inquiry.company.trim()})` : ""}`;
  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  return { mailtoHref };
}
