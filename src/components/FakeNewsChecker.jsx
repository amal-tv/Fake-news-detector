import React, { useState } from 'react';
import { detectFakeNews } from '../api/apiFakeChecker';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Progress } from './ui/progress';
import fakeNewsImage from '../assets/fake-news.png'; // Ensure the path and file name are correct

export const FakeNewsChecker = () => {
  const [result, setResult] = useState(null);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheck = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      setError('Please enter some text to check');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const isFake = await detectFakeNews(text);

      if (isFake !== null) {
        setResult(isFake ? 'This is likely fake news' : 'This appears to be real news');
      } else {
        setError('Unable to verify the news');
      }
    } catch (err) {
      setError('An error occurred while checking the news');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-slate-300 to-slate-500 mx-8 rounded-xl flex-1 flex flex-col">
      <div className="w-[700px] mx-auto pt-20">
        <Textarea
          className="h-[250px] p-2 border rounded mb-4"
          rows="4"
          placeholder="Enter text to check for fake news"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button
          className="w-full"
          onClick={handleCheck}
          disabled={loading}
        >
          {loading ? 'Checking...' : 'Check News'}
        </Button>
      </div>

      <div className="mt-4 w-[400px] mx-auto h-[50px] flex items-center justify-center">
        {loading ? (
          <Progress value={33} className="w-full" />
        ) : result ? (
          <div className={`p-3 w-full text-center rounded ${result.includes('fake') ? 'bg-red-800 text-white' : 'bg-green-400'}`}>
            <h3 className="font-bold">{result}</h3>
          </div>
        ) : null}
      </div>

      {result && result.includes('fake') && (
        <div className="mt-4 w-full flex justify-center">
          <img src={fakeNewsImage} alt="Fake News Warning" className="w-[300px] h-auto rounded-md shadow-lg" />
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-500 text-center">
          {error}
        </div>
      )}
    </div>
  );
};
