"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function TermsAndConditions() {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "use-of-bearear", title: "Use of Bearear" },
    { id: "age-requirements", title: "Age Requirements" },
    { id: "use-of-images", title: "Use of Images" },
    { id: "prompt-guidelines", title: "Prompt Guidelines" },
    { id: "buying-photoshoots", title: "Buying Photoshoots" },
    { id: "no-infringing-use", title: "No Infringing or Harmful Use" },
    { id: "ownership", title: "Ownership of photoshoots" },
    { id: "storage-policy", title: "Storage Policy" },
    { id: "no-guarantees", title: "No Guarantees" },
    { id: "modification", title: "Modification of Terms of Service" },
    { id: "choice-of-law", title: "Choice of Law" },
    { id: "limitation-of-liability", title: "Limitation of Liability" },
    { id: "indemnity", title: "Indemnity Clause" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Bearear Terms and Conditions</h1>
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
                    Thank you for your interest in Bearear. By using Bearear, you agree to these terms.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="use-of-bearear">
                  <h2>Use of Bearear</h2>
                  <p>
                    Bearear can generate images (photoshoots), combined with a set of pictures you upload.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="age-requirements">
                  <h2>Age Requirements</h2>
                  <p>
                    By accessing the Services, you confirm that you&apos;re at least 16 years old and meet the minimum age of digital consent in your country. If you are not old enough to consent to our Terms of use in your country, your parent or guardian must agree to this Agreement on your behalf. Please ask your parent or guardian to read these terms with you. If you&apos;re a parent or legal guardian, and you allow your teenager to use the Services, then these terms also apply to you and you&apos;re responsible for your teenager&apos;s activity on the Services. No assurances are made as to the suitability of the Generations for you.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="use-of-images">
                  <h2>Use of Images</h2>
                  <p>
                    Subject to your compliance with these terms and our Content Policy, you may use photoshoots for any legal purpose, including for commercial use. This means you may sell your rights to the photoshoots you create, incorporate them into works such as books, websites, and presentations, and otherwise commercialize them.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="prompt-guidelines">
                  <h2>Prompt Guidelines</h2>
                  <p>Bearear should not be used for:</p>
                  <ul>
                    <li>NSFW, lewd, or sexual material</li>
                    <li>Hateful or violent imagery, such as antisemitic iconography, racist caricatures, misogynistic and misandrist propaganda, etc</li>
                    <li>Copyrighted or trademarked material should be avoided in prompts and uploads.</li>
                  </ul>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="buying-photoshoots">
                  <h2>Buying Photoshoots</h2>
                  <p>
                    You may buy photoshoots to create additional creating, subject to the payment terms in our Terms of Use. Photoshoots must be used within one year of purchase or they will expire. We may change our prices at any time by updating our pricing page.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="no-infringing-use">
                  <h2>No Infringing or Harmful Use</h2>
                  <p>
                    You must comply with our Content Policy, and you may not use Bearear in a way that may harm a person or infringe their rights. For example, you may not submit Uploads for which you don&apos;t have the necessary rights, images of people without their consent, or Prompts intended to generate harmful or illegal images. We may delete Prompts and Uploads, or suspend or ban your account for any violations.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="ownership">
                  <h2>Ownership of photoshoots</h2>
                  <p>
                    To the extent allowed by law and as between you and Bearear, you own your Prompts, Uploads and photoshoots. Bearear grants you the exclusive rights to reproduce and display such photoshoots and will not resell photoshoots that you have created, or assert any copyright in such photoshoots against you or your end users, all provided that you comply with these terms and our Content Policy. If you violate our terms or Content Policy, you will lose rights to use photoshoots, but we will provide you written notice and a reasonable opportunity to fix your violation, unless it was clearly illegal or abusive. You understand and acknowledge that similar or identical photoshoots may be created by other people using their own Prompts, and your rights are only to the specific Generation that you have created.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="storage-policy">
                  <h2>Storage Policy</h2>
                  <p>
                    Generated images, created  photoshoots, will be automatically deleted 30 days after the creating time ended. You may delete the generated images at any time before.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="no-guarantees">
                  <h2>No Guarantees</h2>
                  <p>
                    We plan to continue to develop and improve Bearear, but we make no guarantees or promises about how Bearear operates or that it will function as intended, and your use of Bearear is at your own risk.
                  </p>
                  <p>
                    The Service is provided on an AS IS and AS AVAILABLE basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
                  </p>
                  <p>
                    Bearear do not warrant that (a) the Service will function uninterrupted, secure or available at any particular time or location; (b) any errors or defects will be corrected; (c) the Service is free of viruses or other harmful components; or (d) the results of using the Service will meet your requirements.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="modification">
                  <h2>Modification of Terms of Service</h2>
                  <p>
                    At its sole discretion, Bearear may modify or replace any of the Terms of Service, or change, suspend, or discontinue the Service (including without limitation, the availability of any feature, database, or content) at any time by posting a notice on the Bearear or Service or by sending you an email. Bearear may also impose limits on certain features and services or restrict your access to parts or all of the Service without notice or liability. It is your responsibility to check the Terms of Service periodically for changes. Your continued use of the Service following the posting of any changes to the Terms of Service constitutes acceptance of those changes.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="choice-of-law">
                  <h2>Choice of Law</h2>
                  <p>
                    Should any dispute arise under this Terms of Use, the access or use of Bearear web app, etc, the law of the Israel in all respects shall govern, without regard for the jurisdiction or forum in which the user is domiciled, resides, or located at the time of such access/use. Use of Bearear without the user&apos;s acceptance of this Terms of Use and all incorporated provisions constitutes unauthorised use for which the user disclaims any/all potential or actual right to relief against Bearear, regardless of the legal jurisdiction of Bearear or the user&apos;s domicile, residence, or location.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="limitation-of-liability">
                  <h2>Limitation of Liability</h2>
                  <p>
                    In no event shall Bearear nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="indemnity">
                  <h2>Indemnity Clause</h2>
                  <p>
                    Users, by use of Bearear, hereby agree to indemnify and hold harmless Bearear against any and all claims, demands, charges, complaints, controversies, and causes of action of any kind or nature whatsoever, both at law and in equity, known or unknown, suspected or unsuspected (from now on Claims), arising out of and relating in any way to intellectual property infringement claims made against Bearear concerning your Content if such Claims inure to your benefit in any way and also to hold harmless and indemnify Bearear against all Claims relating in any way to your use of Bearear. This indemnity includes reimbursement to Bearear for any applicable court costs and expenses of litigation, including but not limited to reasonable attorneys&apos; fees, and reimbursement for any losses and liabilities of Bearear, including but not limited to, judgments, settlements, fees, costs, expenses, legal debts, legal obligations, and any third-party Claims against Bearear.
                  </p>
                  <p>
                    Bearear makes no warranties or representations concerning user Content and is not responsible for unauthorised use. Users are responsible for using Bearear only as authorised and in compliance with applicable laws of the jurisdictions in which such users are domiciled, reside, or are located at the time of such use.
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