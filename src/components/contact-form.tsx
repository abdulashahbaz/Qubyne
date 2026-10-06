"use client";

import { useId, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { cx } from "@/lib/cx";
import {
  projectTypes,
  submitInquiry,
  timelines,
  validateInquiry,
  type Inquiry,
  type InquiryErrors,
} from "@/lib/contact";

const empty: Inquiry = { name: "", email: "", company: "", projectType: "", timeline: "", message: "" };

const controlClass =
  "w-full rounded-control border border-field bg-canvas px-4 text-ink transition-colors duration-(--duration-base) " +
  "placeholder:text-ink-subtle hover:border-ink-subtle focus-visible:border-accent aria-invalid:border-danger";

export function ContactForm() {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Inquiry>(empty);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [mailtoHref, setMailtoHref] = useState<string | null>(null);

  const id = (name: string) => `${uid}-${name}`;
  const set = (name: keyof Inquiry) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [name]: event.target.value }));
    if (name in errors) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validateInquiry(values);
    setErrors(found);
    setMailtoHref(null);

    const firstInvalid = (Object.keys(found) as Array<keyof InquiryErrors>)[0];
    if (firstInvalid) {
      // Move focus to the first problem so keyboard and screen-reader users land on it.
      const target = formRef.current?.elements.namedItem(firstInvalid);
      if (target instanceof HTMLElement) target.focus();
      return;
    }

    const { mailtoHref: href } = submitInquiry(values);
    setMailtoHref(href);
    window.location.href = href;
  }

  const errorProps = (name: keyof InquiryErrors) => ({
    "aria-invalid": errors[name] ? (true as const) : undefined,
    "aria-describedby": errors[name] ? id(`${name}-error`) : undefined,
  });

  const errorText = (name: keyof InquiryErrors) =>
    errors[name] ? (
      <p id={id(`${name}-error`)} className="mt-2 text-sm text-danger">
        {errors[name]}
      </p>
    ) : null;

  const labelClass = "block text-[0.9375rem] font-medium text-ink";
  const optional = <span className="font-normal text-ink-subtle"> (optional)</span>;

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={id("name")} className={labelClass}>
            Your name
          </label>
          <input
            id={id("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={set("name")}
            className={cx(controlClass, "mt-2 h-12")}
            {...errorProps("name")}
          />
          {errorText("name")}
        </div>
        <div>
          <label htmlFor={id("email")} className={labelClass}>
            Work email
          </label>
          <input
            id={id("email")}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            value={values.email}
            onChange={set("email")}
            className={cx(controlClass, "mt-2 h-12")}
            {...errorProps("email")}
          />
          {errorText("email")}
        </div>
      </div>

      <div>
        <label htmlFor={id("company")} className={labelClass}>
          Company{optional}
        </label>
        <input
          id={id("company")}
          name="company"
          type="text"
          autoComplete="organization"
          value={values.company}
          onChange={set("company")}
          className={cx(controlClass, "mt-2 h-12")}
        />
      </div>

      <div>
        <p id={id("projectType-label")} className={labelClass}>
          What are you building?
        </p>
        <div
          role="radiogroup"
          aria-labelledby={id("projectType-label")}
          aria-required="true"
          aria-invalid={errors.projectType ? true : undefined}
          aria-describedby={errors.projectType ? id("projectType-error") : undefined}
          data-invalid={errors.projectType ? "" : undefined}
          className="group mt-3 flex flex-wrap gap-2"
        >
          {projectTypes.map((type, i) => (
            <label key={type} className="cursor-pointer">
              <input
                type="radio"
                name="projectType"
                value={type}
                checked={values.projectType === type}
                onChange={set("projectType")}
                required={i === 0}
                className="peer sr-only"
              />
              <span className="inline-flex h-11 items-center rounded-pill border border-field px-5 text-[0.9375rem] text-ink-muted transition-colors duration-(--duration-base) group-data-[invalid]:border-danger hover:border-ink-subtle hover:text-ink peer-checked:border-accent peer-checked:bg-accent-soft peer-checked:text-ink peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-accent">
                {type}
              </span>
            </label>
          ))}
        </div>
        {errorText("projectType")}
      </div>

      <div>
        <label htmlFor={id("timeline")} className={labelClass}>
          Timeline{optional}
        </label>
        <div className="relative mt-2">
          <select
            id={id("timeline")}
            name="timeline"
            value={values.timeline}
            onChange={set("timeline")}
            className={cx(controlClass, "h-12 appearance-none pr-11")}
          >
            <option value="">Select one</option>
            {timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <Icon
            name="chevron-down"
            className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-ink-subtle"
          />
        </div>
      </div>

      <div>
        <label htmlFor={id("message")} className={labelClass}>
          Tell us about the product
        </label>
        <textarea
          id={id("message")}
          name="message"
          rows={6}
          required
          value={values.message}
          onChange={set("message")}
          placeholder="Who is it for, what problem does it solve, and what do you have so far?"
          className={cx(controlClass, "mt-2 resize-y py-3.5 leading-relaxed")}
          {...errorProps("message")}
        />
        {errorText("message")}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" arrow>
          Send message
        </Button>
        <p className="text-sm text-ink-subtle">We reply from a real person&rsquo;s inbox. No newsletters, no spam.</p>
      </div>

      {/* Polite live region: announced to screen readers when it appears. */}
      <div role="status" aria-live="polite">
        {mailtoHref && (
          <p className="rounded-control border border-accent-line bg-accent-soft p-4 text-[0.9375rem] text-ink">
            Your email app should open with your message ready to send. Nothing has been sent from this page yet. If
            nothing opens,{" "}
            <a href={mailtoHref} className="font-medium underline underline-offset-4">
              use this link
            </a>{" "}
            or write to{" "}
            <a href={`mailto:${site.email}`} className="font-medium underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
