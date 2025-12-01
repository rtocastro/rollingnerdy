// server.js
const express = require('express');
const { OpenAI } = require('langchain/llms/openai');
const { PromptTemplate } = require("langchain/prompts");
const { StructuredOutputParser } = require("langchain/output_parsers");
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const model = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    temperature: 0,
    model: 'gpt-3.5-turbo'
});

const parser = StructuredOutputParser.fromNamesAndDescriptions({
    code: "Detailed answer that answers the user's question",
    explanation: "detailed explanation of the example provided",
});

const formatInstructions = parser.getFormatInstructions();

app.post('/api/ask', async (req, res) => {
    const input = req.body.question;
    try {
        const modelResponse = await model.call(input);

        const prompt = new PromptTemplate({
            template: "You are an expert on what information is needed during/before and after a car accident in Los Angeles County, California",
            inputVariables: ["question"],
            partialVariables: { format_instructions: formatInstructions },
        });

        const promptInput = await prompt.format({
            question: input
        });

        const parsedResponse = await parser.parse(modelResponse);

        res.json({ answer: parsedResponse });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
