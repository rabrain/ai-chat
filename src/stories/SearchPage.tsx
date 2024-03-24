/**
 * v0 by Vercel.
 * @see https://v0.dev/t/x1ZA2g4bO7s
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { CardTitle, CardDescription, CardHeader, Card, CardContent } from "@/components/ui/card"
import { JSX, SVGProps } from "react"
import Image from "next/image"

export default function SearchPage() {
  return (
    <div className="dark:text-white text-gray-900 p-8">
      <header className="flex justify-between items-center">
        <div className="flex space-x-4 items-center w-2/3">
          <Image alt="Search Engine Logo" className="h-10" src="/placeholder.svg" />
          <Input className="dark:bg-gray-100 text-gray-900" placeholder="tailwind add dark mode?" type="text" />
          <Button className="btn-primary">Search</Button>
        </div>
        <div className="flex space-x-4 items-center">
          <SettingsIcon className="text-gray-400" />
          <Avatar>
            <AvatarImage alt="User Profile" src="/avatar.svg" />
          </Avatar>
        </div>
      </header>
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-2">
          <Button variant="ghost">All</Button>
          <Button variant="ghost">Videos</Button>
          <Button variant="ghost">Images</Button>
          <Button variant="ghost">Shopping</Button>
          <Button variant="ghost">News</Button>
          <Button variant="ghost">More</Button>
        </div>
      </div>
      <div className="flex mt-6">
        <div className="flex-grow">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Tailwind CSS</CardTitle>
                <CardDescription>Lorem ipsum</CardDescription>
              </CardHeader>
            </Card>
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Dark Mode</CardTitle>
                <CardDescription>
                  To enable it, set the darkMode option in your tailwind.config.js file to media...
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Tailwind CSS Dark Mode</CardTitle>
                <CardDescription>
                  Luckily, Tailwind CSS has a dark mode functionality enabled and the components from Flowbite...
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
        <aside className="w-96 ml-8">
          <Card className="bg-gray-100">
            <CardHeader>
              <CardTitle><span className="text-pink-600">AI Chat </span><span className="text-sm">powered by ChatGPT</span></CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                To add dark mode functionality to a Tailwind CSS project, you have several options depending on your
                preference and project requirements...
              </p>
              <ul className="list-disc pl-4 mt-4">
                <li>Using Utility Classes: Tailwind CSS provides utility classes for enabling dark mode...</li>
                <li>
                  Configuring tailwind.config.js: Another approach is to enable dark mode by configuring your
                  tailwind.config.js file...
                </li>
              </ul>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  )
}

function SettingsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
