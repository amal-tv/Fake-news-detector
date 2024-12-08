# Fake News Checker 🕵️‍♀️🗞️

## Project Overview

This React application provides a real-time fake news detection tool using advanced AI technology to help users verify the authenticity of text content.

## Features

- AI-powered news verification
- User-friendly interface
- Real-time analysis

## Technology Stack

- React
- Tailwind CSS
- Hugging Face Inference API
- Shadcn UI Components

## AI Model Details

### Model: RoBERTa Fake News Classification

- **Model Name**: `hamzab/roberta-fake-news-classification`
- **Model Type**: Natural Language Processing (NLP)

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
3. View the result.



## Dependencies

- React
- Hugging Face Inference
- Shadcn UI Components
- Tailwind CSS



## Limitations

- Accuracy depends on the AI model's training
- Works best with clear, contextual text
- May have biases inherent in training data




## License

MIT License
