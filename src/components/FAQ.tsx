import React, { ReactNode } from "react"

type Props = {
  title: string,
  default?: boolean,
  children?: ReactNode
}

function QuestionAnswer(props: Props) {
  return (
    <div className="collapse collapse-arrow bg-slate-800">
      <input type="radio" name="my-accordion-2" defaultChecked={props.default} />
      <div className="collapse-title text-xl font-medium">
        {props.title}
      </div>
      <div className="collapse-content space-y-2">
        {props.children}
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <div className="flex flex-col gap-2">
      <QuestionAnswer title="What is AI Chat? Why do you create it?">
        <b>AI Chat is a cross-platform desktop application that let you open AI chat bot like OpenAI ChatGPT from the menu bar (tray).</b>
        <p>
          By having it reside on the menu bar, we eliminate the need to switch between windows when using ChatGPT as our daily assistant. It also enables us to have a streamlined workflow, as we can easily multitask and communicate with the AI without interrupting our current tasks.
        </p>
      </QuestionAnswer>
      <QuestionAnswer title="What chat bots (LLM models) can I use in AI Chat?">
        AI Chat enables you to quickly open AI chatbot of your choice, including
        <ul className="list-disc ml-4">
          <li><a href="https://chat.openai.com" rel="nofollow">OpenAI ChatGPT</a></li>
          <li><a href="https://claude.ai" rel="nofollow">Claude</a></li>
          <li><a href="https://gemini.google.com" rel="nofollow">Google Gemini</a></li>
          <li><a href="https://copilot.microsoft.com/" rel="nofollow">Microsoft Copilot</a></li>
          <li><a href="https://www.perplexity.ai/" rel="nofollow">Perplexity</a></li>
          <li><a href="https://pi.ai" rel="nofollow">Pi</a></li>
          <li><a href="https://poe.com" rel="nofollow">Poe</a></li>
        </ul>
      </QuestionAnswer>
      <QuestionAnswer title="What are the system requirements of AI Chat?">
        AI Chat is avaiable in the following operating systems.
        <ul className="list-disc ml-4">
          <li>Windows</li>
          <li>Mac OS X</li>
          <li>Linux</li>
        </ul>
      </QuestionAnswer>
      <QuestionAnswer title="Is AI Chat available in Mac App Store?">
        Yes, AI Chat is listed in Mac App Store, and available in most countries. But due to restrictions of Apple's app store, the AI Chat downloaded from the Mac App Store may lack some features of the version got from this official site.
      </QuestionAnswer>
    </div>
  )
}
