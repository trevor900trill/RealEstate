'use server';

import { generatePropertySummary, type GeneratePropertySummaryInput } from '@/ai/flows/generate-property-summary';

export async function generateSummaryAction(input: GeneratePropertySummaryInput): Promise<string> {
  try {
    const result = await generatePropertySummary(input);
    return result.summary;
  } catch (error) {
    console.error("Error generating property summary:", error);
    return "Could not generate a summary at this time. Please see the full description below.";
  }
}
