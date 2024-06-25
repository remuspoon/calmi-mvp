import React, { useState, useEffect } from 'react';
import './App.scss';
import JournalForm from './Components/journalForm';
import CalmiCharacter from './Components/calmiCharacter';
import GptResponse from './Components/gptResponse';
import LoadingScreen from './Components/loadingScreen';

function App({ isSubmitting }) {
  const [text, setText] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chunks, setChunks] = useState([]);
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
  const [button, setButton] = useState(false);

  useEffect(() => {
    if (response) {
      const rand = getRandomInt(2, 3);
      const splitChunks = splitString(response, rand);
      setChunks(splitChunks);
      setCurrentChunkIndex(0);
    }
  }, [response]);

  const handleClick = () => {
    setCurrentChunkIndex((prevIndex) => (prevIndex + 1) % chunks.length);
  };

  const handleGptResponse = async (text) => {
    try {
      setIsLoading(true);

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
              content: "You are a therapist robot called Calmi with a kind and loving tone. You are reading a journal entry from me and giving me support. In your response, start by highlighting positive aspects of the journal entry, then provide words of encouragement on the negative aspects if there are any, and finish the response by congratulating me for sharing and completing the journal entry. Complete the response in less than 200 words.",
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
      setIsLoading(false);
      setButton(true);
    }
  };

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function splitString(text, rand) {
    const parts = text.split('.').filter(part => part);
    const result = [];

    for (let i = 0; i < parts.length; i += rand) {
      result.push(parts.slice(i, i + rand).join('.') + '.');
    }

    return result;
  }

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
              <div className='relative flex flex-col items-end'>
                <GptResponse response={chunks[currentChunkIndex]} />
              </div>
            )}
            {button && (
              <div className='absolute left-0 right-0 mx-auto w-max mt-5'>
                <button
                  type='button'
                  onClick={handleClick}
                  className="bg-blue-950 text-white font-medium py-2 px-4 rounded border-blue-950 hover:bg-opacity-0 hover:border-2 hover:border-blue-950 border-2 hover:text-blue-950 duration-200 shadow-lg">
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
        <CalmiCharacter response={response} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
