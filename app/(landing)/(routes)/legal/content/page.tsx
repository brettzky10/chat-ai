"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ContentPolicy() {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "prohibited-content", title: "Prohibited Content" },
    { id: "disclosure", title: "AI Involvement Disclosure" },
    { id: "rights", title: "Respecting Others Rights" },
    { id: "reporting", title: "Reporting Violations" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Bearear Content Policy</h1>
          <p className="text-sm">Last modified Oct 12, 2024</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Card className="lg:w-1/4 h-fit hidden lg:flex sticky top-4">
            <CardHeader>
              <CardTitle>Table of Contents</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[calc(100vh-200px)]">
                <nav>
                  <ul className="space-y-2">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`} className="text-sm hover:underline">
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </ScrollArea>
            </CardContent>
          </Card>
          <div className="lg:w-3/4 space-y-8">
            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="introduction">
                  <h2>Introduction</h2>
                  <p>
                    Thank you for trying our generative AI fine-tuning service! In your usage, you must adhere to our Content Policy. This policy is designed to ensure a safe and respectful environment for all users of our service.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="prohibited-content">
                  <h2>Prohibited Content</h2>
                  <p>
                    Do not attempt to create, upload, or share images that are not G-rated or that could cause harm. The following types of content are strictly prohibited:
                  </p>
                  <ul>
                    <li><strong>Hate:</strong> Hateful symbols, negative stereotypes, comparing certain groups to animals/objects, or otherwise expressing or promoting hate based on identity.</li>
                    <li><strong>Harassment:</strong> Mocking, threatening, or bullying an individual.</li>
                    <li><strong>Violence:</strong> Violent acts and the suffering or humiliation of others.</li>
                    <li><strong>Self-harm:</strong> Suicide, cutting, eating disorders, and other attempts at harming oneself.</li>
                    <li><strong>Sexual:</strong> Nudity, sexual acts, sexual services, or content otherwise meant to arouse sexual excitement.</li>
                    <li><strong>Shocking:</strong> Bodily fluids, obscene gestures, or other profane subjects that may shock or disgust.</li>
                    <li><strong>Illegal activity:</strong> Drug use, theft, vandalism, and other illegal activities.</li>
                    <li><strong>Deception:</strong> Major conspiracies or events related to major ongoing geopolitical events.</li>
                    <li><strong>Political:</strong> Politicians, ballot-boxes, protests, or other content that may be used to influence the political process or to campaign.</li>
                    <li><strong>Public and personal health:</strong> The treatment, prevention, diagnosis, or transmission of diseases, or people experiencing health ailments.</li>
                    <li><strong>Spam:</strong> Unsolicited bulk content.</li>
                  </ul>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="disclosure">
                  <h2>AI Involvement Disclosure</h2>
                  <p>
                    Don&apos;t mislead your audience about AI involvement. When sharing your work, we encourage you to proactively disclose AI involvement in your work.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="rights">
                  <h2>Respecting Others&apos; Rights</h2>
                  <p>
                    It is crucial to respect the rights of others when using our service. Please adhere to the following guidelines:
                  </p>
                  <ul>
                    <li>Do not upload images of people without their consent.</li>
                    <li>Do not upload images to which you do not hold appropriate usage rights.</li>
                    <li>Do not create images of public figures.</li>
                  </ul>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="reporting">
                  <h2>Reporting Violations</h2>
                  <p>
                    Please report any suspected violations of these rules to our team through our support email. We will investigate and take action accordingly, up to and including terminating the violating account.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Button onClick={() => window.history.back()} className="mt-8">
              Back to Previous Page
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}