import { HfInference } from "@huggingface/inference";

const hf = new HfInference(import.meta.env.VITE_HUGGING_FACE_API_KEY);

export const detectFakeNews = async (text) => {
  try {
    const response = await hf.textClassification({
      model: "hamzab/roberta-fake-news-classification",
      inputs: text,
    });
  
   
    
   
    
    const highestConfidence = response.reduce((fakeNs, trueNs) => {
      return fakeNs.score > trueNs.score ? fakeNs : trueNs;
    });

    
    return highestConfidence.label === "FAKE";
  } catch (error) {
    console.error("Error detecting fake news:", error);
    return null;
  }
};