import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Leaderboard } from "flywheel-leaderboard";

function App() {

  const top10LLMData = 
  [
    {
      name: 'StableLM-Alpha',
      description: 'StableLM-Alpha models are trained on the new dataset that build on The Pile',
      huggingface: 'https://huggingface.co/stabilityai/stablelm-base-alpha-3b',
      github: 'https://github.com/Stability-AI/StableLM#stablelm-alpha',
      paper: 'https://stability.ai/blog/stability-ai-launches-the-first-of-its-stablelm-suite-of-language-models',
      license: 'CC BY-SA-4.0',
      points: 5,
    },
    {
      name: 'replit-code-v1-3b',
      description: 'a 2.7B Causal Language Model focused on Code Completion',
      huggingface: 'https://huggingface.co/replit/replit-code-v1-3b',
      github: 'https://github.com/replit/ReplitLM',
      paper: 'none',
      license: 'CC BY-SA-4.0',
      points: 4,
    },
    {
      name: 'mpt-7b',
      description: 'MPT-7B is a decoder-style transformer pretrained from scratch on 1T tokens of English text and code',
      huggingface: 'https://huggingface.co/mosaicml/mpt-7b',
      github: 'https://github.com/mosaicml/llm-foundry',
      paper: 'https://www.mosaicml.com/blog/mpt-7b',
      license: 'Apache 2.0, CC BY-SA-3.0',
      points: 6,
    },
    {
      name: 'open llama',
      description: 'an open source reproduction of Meta AIs LLaMA large language model',
      huggingface: 'https://huggingface.co/openlm-research/open_llama_7b_preview_200bt',
      github: 'https://github.com/openml/OpenML',
      paper: 'https://arxiv.org/abs/1407.7722',
      license: 'Apache 2.0',
      points: 1
    },
    {
      name: 'starcoder',
      description: '15.5B parameter models trained on 80+ programming languages',
      huggingface: 'https://huggingface.co/bigcode/starcoder#%23model-summary',
      github: 'https://github.com/bigcode-project/starcoder',
      paper: 'https://drive.google.com/file/d/1cN-b9GnWtHzQRoE7M7gAEyivY0kl4BYs/view',
      license: 'OpenRAIL-M v1',
      points: 3,
    },
    {
      name: 'bert base uncased',
      description: 'a transformers model pretrained on a large corpus of English data in a self-supervised fashion.',
      huggingface: 'https://huggingface.co/bert-base-uncased',
      github: 'https://github.com/google-research/bert',
      paper: 'https://arxiv.org/abs/1810.04805',
      license: 'Apache 2.0',
      points: 10,
    },
    {
      name: 'bloom',
      description: 'an autoregressive Large Language Model',
      huggingface: 'https://huggingface.co/bigscience/bloom',
      github: 'https://github.com/bigscience-workshop/bigscience',
      paper: 'https://arxiv.org/abs/2211.05100',
      license: 'OpenRAIL-M v1',
      points: 8,
    },
    {
      name: 'Cerebras-GPT-13b',
      description: 'released to facilitate research into LLM scaling laws',
      huggingface: 'https://huggingface.co/cerebras/Cerebras-GPT-13B',
      github: 'https://github.com/Cerebras',
      paper: 'https://arxiv.org/abs/2304.03208',
      license: 'Apache 2.0',
      points: 7
    },
    {
      name: 'Dolly',
      description: 'an instruction-following large language model',
      huggingface: 'https://huggingface.co/databricks/dolly-v2-12b',
      github: 'https://github.com/databrickslabs/dolly#getting-started-with-response-generation',
      paper: 'https://www.databricks.com/blog/2023/04/12/dolly-first-open-commercially-viable-instruction-tuned-llm',
      license: 'MIT',
      points: 9,
    },
    {
      name: 'h2oGPT',
      description: 'the worlds best open source GPT',
      huggingface: 'none',
      github: 'https://github.com/h2oai/h2ogpt',
      paper:'https://github.com/h2oai/h2ogpt',
      license: 'Apache 2.0',
      points: 2,
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Leaderboard className='max-w-full h-fit mx-2' theme='emerald' scoringMetric="points" id="name" cell1="description" cell2="huggingface" cell3="github" cell4="paper" cell5="license" items={top10LLMData} ></Leaderboard>
      </header>
    </div>
  );
}

export default App;
