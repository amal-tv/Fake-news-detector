# Fake News Checker 🕵️‍♀️🗞️

## Project Overview

This React application provides a real-time fake news detection tool using advanced AI technology to help users verify the authenticity of text content.

## Features

- AI-powered news verification
- User-friendly interface
- Real-time analysis
- Confidence score display
- Visual feedback for fake news detection

## Technology Stack

- React
- Tailwind CSS
- Hugging Face Inference API
- Shadcn UI Components

## AI Model Details

### Model: RoBERTa Fake News Classification

- **Model Name**: `hamzab/roberta-fake-news-classification`
- **Library**: Hugging Face Transformers
- **Model Type**: Natural Language Processing (NLP)
- **Task**: Binary Text Classification (Fake vs. True News)

#### Model Characteristics
- Based on RoBERTa (Robustly Optimized BERT Approach)
- Pre-trained on large text corpora
- Fine-tuned for fake news detection
- Provides probabilistic classification with confidence scores

## Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/fake-news-checker.git
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file and add your Hugging Face API key:
```
VITE_HUGGING_FACE_API_KEY=your_hugging_face_api_key
```

## Usage

1. Enter the text you want to verify in the text area
2. Click "Check News"
3. View the result and confidence score

## How It Works

1. User inputs text
2. Text is sent to the RoBERTa AI model
3. Model classifies text as "FAKE" or "TRUE"
4. Confidence score is calculated
5. Result is displayed with color-coded feedback

## Dependencies

- React
- Hugging Face Inference
- Shadcn UI Components
- Tailwind CSS

## Configuration

Modify the Hugging Face model by changing the model parameter in `apiFakeChecker.ts`:
```typescript
const response = await hf.textClassification({
  model: "hamzab/roberta-fake-news-classification",
  inputs: text,
});
```

## Limitations

- Accuracy depends on the AI model's training
- Works best with clear, contextual text
- May have biases inherent in training data

## Future Improvements

- Support multiple languages
- Integrate more advanced AI models
- Add detailed analysis breakdown
- Implement caching mechanism

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

MIT License

## Contact

[Your Name/Organization]
[Your Email/Contact Information]
