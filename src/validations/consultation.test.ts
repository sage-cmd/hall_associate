// Runtime validation coverage for consultation input validation.
import { describe, expect, it } from "vitest";
import { consultationSchema } from "./consultation";

describe("consultationSchema", () => {
  it("accepts valid consultation details and trims text fields", () => {
    const result = consultationSchema.safeParse({
      fullName: "  Ada Example  ",
      email: " ada@example.com ",
      phone: "+1 (555) 123-4567",
      practiceArea: "Criminal Defense",
      caseDetails: "Requesting an initial consultation about a matter.",
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.fullName).toBe("Ada Example");
      expect(result.data.email).toBe("ada@example.com");
    }
  });

  it("rejects practice areas outside the supported list", () => {
    const result = consultationSchema.safeParse({
      fullName: "Ada Example",
      email: "ada@example.com",
      phone: "5551234567",
      practiceArea: "General Advice",
      caseDetails: "Requesting an initial consultation about a matter.",
    });

    expect(result.success).toBe(false);
  });

  it("rejects phone numbers with fewer than seven digits", () => {
    const result = consultationSchema.safeParse({
      fullName: "Ada Example",
      email: "ada@example.com",
      phone: "123-456",
      practiceArea: "Criminal Defense",
      caseDetails: "Requesting an initial consultation about a matter.",
    });

    expect(result.success).toBe(false);
  });
});
