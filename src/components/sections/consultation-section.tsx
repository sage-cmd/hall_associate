"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { consultationSchema, practiceAreas, type ConsultationInput } from "@/validations/consultation";

type SubmissionResult = { kind: "success" | "error"; message: string } | null;

export function ConsultationSection() {
  const [result, setResult] = useState<SubmissionResult>(null);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationInput>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      practiceArea: undefined,
      caseDetails: "",
    },
  });

  async function submitConsultation(data: ConsultationInput) {
    setResult(null);
    try {
      const response = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload: { message?: string; errors?: Record<string, string[]> } = await response.json();

      if (response.status === 422 && payload.errors) {
        for (const [field, messages] of Object.entries(payload.errors)) {
          if (messages?.[0] && Object.hasOwn(data, field)) {
            setError(field as keyof ConsultationInput, { type: "server", message: messages[0] });
          }
        }
        setResult({ kind: "error", message: payload.message ?? "Please check your details and try again." });
        return;
      }

      if (!response.ok) {
        setResult({ kind: "error", message: payload.message ?? "We could not submit your request. Please try again." });
        return;
      }

      setResult({
        kind: "success",
        message:
          "Thank you. Your request has been received. Please note that this is a historical-concept website and no legal consultation will take place.",
      });
      reset();
    } catch {
      setResult({ kind: "error", message: "We could not reach the server. Please try again when your connection is restored." });
    }
  }

  const fieldError = (name: keyof ConsultationInput) => {
    const message = errors[name]?.message;
    return message ? (
      <span id={`${name}-error`} className="mt-2 block text-xs text-[#b1463f]" role="alert">
        {message}
      </span>
    ) : null;
  };

  return (
    <section id="consultation" className="bg-[var(--navy)] py-24 text-white sm:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-14">
        <div className="flex flex-col justify-center">
          <p className="flex items-center gap-3 text-[10px] uppercase tracking-[0.27em] text-[#D4B474]">
            <span className="h-px w-9 bg-[#C6A15B]" /> Start a conversation
          </p>
          <h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-[-0.035em] sm:text-6xl">
            Let us hear
            <br />
            <span className="italic text-[#D9C08E]">your perspective.</span>
          </h2>
          <p className="mt-7 max-w-md text-sm leading-7 text-white/65">
            Share a little about the matter you have in mind. This concept form securely records submissions for
            demonstration purposes only; it is not monitored by a legal team.
          </p>
          <div className="mt-12 border-t border-white/15 pt-5">
            <p className="font-serif text-lg text-white">Confidentiality & important notice</p>
            <p className="mt-2 max-w-md text-xs leading-6 text-white/50">
              Do not send sensitive or confidential details. Submitting this form does not create a lawyer–client
              relationship or constitute a request for real legal services.
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(submitConsultation)}
          noValidate
          className="border border-white/15 bg-white/[0.03] p-6 sm:p-9 lg:p-11"
          aria-label="Consultation concept form"
        >
          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className="text-[10px] uppercase tracking-[0.16em] text-white/70">Full name</label>
              <Input
                id="fullName"
                autoComplete="name"
                placeholder="Your name"
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                {...register("fullName")}
                className="border-white/25 text-white placeholder:text-white/35"
              />
              {fieldError("fullName")}
            </div>
            <div>
              <label htmlFor="email" className="text-[10px] uppercase tracking-[0.16em] text-white/70">Email address</label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                {...register("email")}
                className="border-white/25 text-white placeholder:text-white/35"
              />
              {fieldError("email")}
            </div>
            <div>
              <label htmlFor="phone" className="text-[10px] uppercase tracking-[0.16em] text-white/70">Phone number</label>
              <Input
                id="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+44 0000 000000"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                {...register("phone")}
                className="border-white/25 text-white placeholder:text-white/35"
              />
              {fieldError("phone")}
            </div>
            <div>
              <label htmlFor="practiceArea" className="text-[10px] uppercase tracking-[0.16em] text-white/70">Practice area</label>
              <Select
                id="practiceArea"
                defaultValue=""
                aria-invalid={Boolean(errors.practiceArea)}
                aria-describedby={errors.practiceArea ? "practiceArea-error" : undefined}
                {...register("practiceArea")}
                className="border-white/25 text-white [&_option]:bg-[#0B1628]"
              >
                <option value="" disabled>Select an area</option>
                {practiceAreas.map((area) => <option key={area} value={area}>{area}</option>)}
              </Select>
              {fieldError("practiceArea")}
            </div>
          </div>
          <div className="mt-7">
            <div className="flex items-center justify-between gap-4">
              <label htmlFor="caseDetails" className="text-[10px] uppercase tracking-[0.16em] text-white/70">Brief description</label>
              <span className="text-[10px] text-white/40">Please do not include sensitive information</span>
            </div>
            <Textarea
              id="caseDetails"
              placeholder="A brief, general overview of your enquiry…"
              aria-invalid={Boolean(errors.caseDetails)}
              aria-describedby={errors.caseDetails ? "caseDetails-error" : undefined}
              {...register("caseDetails")}
              className="border-white/25 text-white placeholder:text-white/35"
            />
            {fieldError("caseDetails")}
          </div>
          <div className="mt-8">
            <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
              {isSubmitting ? (
                <>Submitting <LoaderCircle aria-hidden="true" size={16} className="animate-spin" /></>
              ) : (
                <>Send enquiry <ArrowRight aria-hidden="true" size={15} /></>
              )}
            </Button>
          </div>
          {result && (
            <div
              role={result.kind === "success" ? "status" : "alert"}
              aria-live="polite"
              className={`mt-6 flex items-start gap-3 border p-4 text-sm leading-6 ${
                result.kind === "success"
                  ? "border-[#D9C08E]/45 bg-[#D9C08E]/10 text-[#F2E6C7]"
                  : "border-red-300/40 bg-red-300/10 text-red-100"
              }`}
            >
              {result.kind === "success" && <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0" size={17} />}
              <span>{result.message}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
