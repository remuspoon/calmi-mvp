import React, { useState, useEffect } from 'react';
import './App.scss';
import JournalForm from './Components/journalForm';
import CalmiCharacter from './Components/calmiCharacter';
import GptResponse from './Components/gptResponse';
import LoadingScreen from './Components/loadingScreen';
import InterestForm from './Components/interestForm';
import { Helmet } from 'react-helmet';

function App({ isSubmitting }) {
  const [text, setText] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chunks, setChunks] = useState([]);
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
  const [button, setButton] = useState(false);
  const [responseCount, setResponseCount] = useState(0);
  const [buttonCount, setButtonCount] = useState(10);

  useEffect(() => {
    if (response) {
      const num = 2;
      const splitChunks = splitString(response, num);
      setChunks(splitChunks);
      setCurrentChunkIndex(0);
    }
  }, [response]);

  const handleClick = () => {
    setCurrentChunkIndex((prevIndex) => (prevIndex + 1) % chunks.length);
    setButtonCount(buttonCount + 1);
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
      setButtonCount(0);
    }
  };

  function splitString(text, num) {
    const parts = text.match(/[^.!?]+[.!?]*/g) || [];
    const result = [];
  
    for (let i = 0; i < parts.length; i += num) {
      result.push(parts.slice(i, i + num).join('').trim());
      setResponseCount((responseCount) => responseCount + 1);
    }
  
    return result;
  }
  

  return (
    <div className=" min-h-screen min-w-screen" style={{ backgroundImage: "url(/BG2.jpg)" }}>
      <Helmet>
        <title>Calmi</title>
        <meta name="calmi" content="Your Journaling Companion:)"/>
        <meta property="og:title" content="Calmi" />
        <meta property="og:description" content="Your Journaling Companion:)" />
        <meta property="og:image" content="%PUBLIC_URL%/favicon.ico" />
        <meta property="og:url" content="http://www.calmi.app" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className='md:grid md:grid-cols-4'>
        <div></div>
        <div className="md:flex md:flex-col justify-top align-middle md:py-28 text-white md:col-span-2 pt-20">
          {responseCount === buttonCount ? (
            <div></div>
          ) : (<div className='text-center mb-5 font-baloo-chettan-2-regular font-bold md:px-0 px-6'>
            <h2 className='md:text-4xl text-3xl drop-shadow-lg md:pb-0 pb-2'>Take 2 minutes and</h2>
            <h1 className='md:text-6xl text-5xl drop-shadow-lg md:pb-0 pb-2'>Write about your day :)</h1>
          </div>)
          }
          <div>
            <JournalForm text={text} setText={setText} handleGptResponse={handleGptResponse} />
            {responseCount === buttonCount ? (
              <InterestForm />
            ):(
              <div>
                {isLoading ? (
                  <LoadingScreen />
                ) : (
                  <div>
                    <GptResponse response={chunks[currentChunkIndex]} />
                    {button && (
                      <div className='text-center mt-5'>
                        <button
                          type='button'
                          onClick={handleClick}
                          className="bg-blue-950  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </div>
                )}
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
