// src/ai/flows/generate-hero-section-headline.ts
'use server';

/**
 * @fileOverview Generates a hero section headline for a renewable energy company website.
 *
 * - generateHeroSectionHeadline - A function that generates the headline.
 * - GenerateHeroSectionHeadlineInput - The input type for the generateHeroSectionHeadline function.
 * - GenerateHeroSectionHeadlineOutput - The return type for the generateHeroSectionHeadline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHeroSectionHeadlineInputSchema = z.object({
  prompt: z.string().describe('A short prompt describing the renewable energy company and its goals.'),
});
export type GenerateHeroSectionHeadlineInput = z.infer<typeof GenerateHeroSectionHeadlineInputSchema>;

const GenerateHeroSectionHeadlineOutputSchema = z.object({
  headline: z.string().describe('The generated headline for the hero section.'),
});
export type GenerateHeroSectionHeadlineOutput = z.infer<typeof GenerateHeroSectionHeadlineOutputSchema>;

export async function generateHeroSectionHeadline(input: GenerateHeroSectionHeadlineInput): Promise<GenerateHeroSectionHeadlineOutput> {
  return generateHeroSectionHeadlineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHeroSectionHeadlinePrompt',
  input: {schema: GenerateHeroSectionHeadlineInputSchema},
  output: {schema: GenerateHeroSectionHeadlineOutputSchema},
  prompt: `You are a marketing expert specializing in renewable energy companies.

  Based on the following prompt, generate a catchy and engaging headline for the hero section of the company's website.

  Prompt: {{{prompt}}}

  Headline: `,
});

const generateHeroSectionHeadlineFlow = ai.defineFlow(
  {
    name: 'generateHeroSectionHeadlineFlow',
    inputSchema: GenerateHeroSectionHeadlineInputSchema,
    outputSchema: GenerateHeroSectionHeadlineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
