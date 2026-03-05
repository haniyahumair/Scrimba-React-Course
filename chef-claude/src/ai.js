import Anthropic from "@anthropic-ai/sdk";

const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;

const anthropic = new Anthropic({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
})

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page`

export async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    try {
        const msg = await anthropic.messages.create({
            // Updated to the latest 2026 flagship model
            model: "claude-sonnet-4-6", 
            max_tokens: 1024,
            system: SYSTEM_PROMPT,
            messages: [
                { 
                    role: "user", 
                    content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` 
                },
            ],
        });
        
        return msg.content[0].text;
    } catch (err) {
        console.error("Chef Claude Error:", err.message);
        return `Chef Claude is having trouble. (Error: ${err.message})`;
    }
}