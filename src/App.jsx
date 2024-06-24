import React, { useState } from 'react';
import './App.scss';
import JournalForm from './Components/journalForm';
import CalmiCharacter from './Components/calmiCharacter';
import GptResponse from './Components/gptResponse'; // Corrected to GptResponse (Component names should start with a capital letter)
import LoadingScreen from './Components/loadingScreen';

function App() {
  const [text, setText] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add a new state for loading

  const handleGptResponse = async (text) => {
    try {
      setIsLoading(true); // Set isLoading to true when making the API request

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer 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`,
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content: "You are a therapist robot called Calmi with a kind and loving tone. You are reading a journal entry from me and giving me support. In your response, start by highlighting positive aspects of the journal entry, then provide words of encouragement on the negative aspects if there are any, And finish the response by congratulating me for sharing and completing the journal entry. Complete the response in less than 200 words.",
            },
            {
              role: "user",
              content: text,
            },
          ],
          temperature: 0.8,
          top_p: 1,
          max_tokens: 250,
        }),
      });

      const data = await response.json();
      setResponse(data.choices[0].message.content);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false); // Set isLoading to false after receiving the response
    }
  };

  return (
    <div style={{ backgroundImage: "url(/BG2.jpg)" }}>
      <div className='min-h-screen grid grid-cols-4'>
        <div></div>
        <div className="flex flex-col justify-top align-middle mt-40 text-white col-span-2">
          <div className='text-center mb-5 font-baloo-chettan-2 font-bold'>
            <h2 className='text-4xl drop-shadow-lg'>Take 2 minutes and</h2>
            <h1 className='text-6xl drop-shadow-lg'>Tell me about your day :)</h1>
          </div>
          <div>
            <JournalForm text={text} setText={setText} handleGptResponse={handleGptResponse} />
            {isLoading ? (
              <LoadingScreen />
            ) : (
              <GptResponse response={response}/>
            )}
          </div>
        </div>
        <CalmiCharacter response={response} isLoading={isLoading}/>
      </div>
    </div>
  );
}

export default App;
