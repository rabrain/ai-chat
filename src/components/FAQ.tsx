"use client"

import React from "react"
import {Accordion, AccordionItem} from "@nextui-org/accordion"

export default function FAQ() {
  return (
    <Accordion>
      <AccordionItem key="1" title="What is AI Chat? Why did you create it?">
        <b>AI Chat is a cross-platform desktop application that lets you open AI chatbots like OpenAI ChatGPT from the menu bar (tray).</b>
        <p>
          By having it reside on the menu bar, we eliminate the need to switch between windows when using ChatGPT as our daily assistant. It also enables us to have a streamlined workflow, as we can easily multitask and communicate with the AI without interrupting our current tasks.
        </p>
      </AccordionItem>
      <AccordionItem key="2" title="Is it free?">
        Yes, AI Chat is a free ChatGPT desktop app.
      </AccordionItem>
      <AccordionItem key="3" title="What chatbots (LLM models) can I use in AI Chat?">
        AI Chat enables you to quickly open AI chatbots of your choice, including:
        <ul className="list-disc ml-4">
          <li><a href="https://chat.openai.com" rel="nofollow">OpenAI ChatGPT</a></li>
          <li><a href="https://claude.ai" rel="nofollow">Claude</a></li>
          <li><a href="https://gemini.google.com" rel="nofollow">Google Gemini</a></li>
          <li><a href="https://copilot.microsoft.com/" rel="nofollow">Microsoft Copilot</a></li>
          <li><a href="https://www.perplexity.ai/" rel="nofollow">Perplexity</a></li>
          <li><a href="https://pi.ai" rel="nofollow">Pi</a></li>
          <li><a href="https://poe.com" rel="nofollow">Poe</a></li>
        </ul>
      </AccordionItem>
      <AccordionItem key="4" title="What are the system requirements for AI Chat?">
        AI Chat is available on the following operating systems:
        <ul className="list-disc ml-4">
          <li>Windows</li>
          <li>Mac OS X</li>
          <li>Linux</li>
        </ul>
      </AccordionItem>
      <AccordionItem key="5" title="Is AI Chat available in the Mac App Store?">
        Yes, AI Chat is listed in the <a href="https://apps.apple.com/app/ai-chat-open-bot/id6479942223" target="_blank">Mac App Store</a> and available in most countries. But due to restrictions of Apple&lsquo;s app store, the version of AI Chat downloaded from the Mac App Store may lack some features of the version available from this official site.
      </AccordionItem>
    </Accordion>
  )
}
