'use server';

/**
 * @fileOverview Selects the most relevant testimonial for a user based on their interests or needs.
 *
 * - selectPersonalizedTestimonial - A function that selects a testimonial based on user input.
 * - SelectPersonalizedTestimonialInput - The input type for the selectPersonalizedTestimonial function.
 * - SelectPersonalizedTestimonialOutput - The return type for the selectPersonalizedTestimonial function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SelectPersonalizedTestimonialInputSchema = z.object({
  userNeeds: z
    .string()
    .describe('The specific needs or interests of the user.'),
  testimonials: z
    .array(z.string())
    .describe('An array of testimonial strings.'),
});
export type SelectPersonalizedTestimonialInput = z.infer<
  typeof SelectPersonalizedTestimonialInputSchema
>;

const SelectPersonalizedTestimonialOutputSchema = z.object({
  selectedTestimonial: z
    .string()
    .describe('The testimonial most relevant to the user.'),
  reason: z.string().describe('The reason why this testimonial was selected.'),
});
export type SelectPersonalizedTestimonialOutput = z.infer<
  typeof SelectPersonalizedTestimonialOutputSchema
>;

export async function selectPersonalizedTestimonial(
  input: SelectPersonalizedTestimonialInput
): Promise<SelectPersonalizedTestimonialOutput> {
  return selectPersonalizedTestimonialFlow(input);
}

const prompt = ai.definePrompt({
  name: 'selectPersonalizedTestimonialPrompt',
  input: {schema: SelectPersonalizedTestimonialInputSchema},
  output: {schema: SelectPersonalizedTestimonialOutputSchema},
  prompt: `You are an expert at selecting testimonials.

  Given the following user needs: {{{userNeeds}}}
  And the following testimonials: 
  {{#each testimonials}}
  - {{{this}}}
  {{/each}}

  Select the testimonial that is most relevant to the user's needs and explain why.
  Return the selected testimonial and the reason for selecting it.
  `,
});

const selectPersonalizedTestimonialFlow = ai.defineFlow(
  {
    name: 'selectPersonalizedTestimonialFlow',
    inputSchema: SelectPersonalizedTestimonialInputSchema,
    outputSchema: SelectPersonalizedTestimonialOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
