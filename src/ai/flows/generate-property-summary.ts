'use server';

/**
 * @fileOverview A property summary generator AI agent.
 *
 * - generatePropertySummary - A function that handles the property summary generation process.
 * - GeneratePropertySummaryInput - The input type for the generatePropertySummary function.
 * - GeneratePropertySummaryOutput - The return type for the generatePropertySummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePropertySummaryInputSchema = z.object({
  propertyDescription: z.string().describe('The detailed description of the property.'),
  propertyFeatures: z.string().describe('Key features of the property, comma separated.'),
});
export type GeneratePropertySummaryInput = z.infer<typeof GeneratePropertySummaryInputSchema>;

const GeneratePropertySummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the property.'),
});
export type GeneratePropertySummaryOutput = z.infer<typeof GeneratePropertySummaryOutputSchema>;

export async function generatePropertySummary(input: GeneratePropertySummaryInput): Promise<GeneratePropertySummaryOutput> {
  return generatePropertySummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePropertySummaryPrompt',
  input: {schema: GeneratePropertySummaryInputSchema},
  output: {schema: GeneratePropertySummaryOutputSchema},
  prompt: `You are a real estate expert, your job is to create a short summary of the property so a potential buyer can quickly understand the key features and benefits.\n\nDescription: {{{propertyDescription}}}\nFeatures: {{{propertyFeatures}}}\n\nWrite a summary of the property, focusing on the key selling points. Keep the summary concise and engaging, no more than 100 words.`,
});

const generatePropertySummaryFlow = ai.defineFlow(
  {
    name: 'generatePropertySummaryFlow',
    inputSchema: GeneratePropertySummaryInputSchema,
    outputSchema: GeneratePropertySummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
