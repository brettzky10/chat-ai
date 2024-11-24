"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function PrivacyPolicy() {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "personal-information", title: "1. Personal Information We Collect" },
    { id: "use-of-information", title: "2. How We Use Personal Information" },
    { id: "sharing-information", title: "3. Sharing and Disclosure of Personal Information" },
    { id: "contact", title: "4. How to Contact Us" },
    { id: "california-rights", title: "5. California Privacy Rights" },
    { id: "children", title: "6. Children" },
    { id: "third-party-sites", title: "7. Links to Other Websites" },
    { id: "security", title: "8. Security" },
    { id: "international-users", title: "9. International Users" },
    { id: "your-choices", title: "10. Your Choices" },
    { id: "changes", title: "11. Changes to the Privacy Policy" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Bearear Privacy Policy</h1>
          <p className="text-sm">Last modified November 02, 2022</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Card className="lg:w-1/4 h-fit hidden lg:flex top-4">
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
                    We at Bearear, (together with our affiliates, Bearear, we, our or us) respect your privacy and are strongly committed to keeping secure any information we obtain from you or about you. This Privacy Policy describes our practices with respect to Personal Information we collect from or about you when you access Bearear and its affiliates websites (collectively, the Site), or use Bearear and its affiliates products and services, including application programming interfaces, associated software, tools, developer services, data and documentation (collectively, the Services).
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="personal-information">
                  <h2>1. Personal Information We Collect</h2>
                  <p>
                    We collect information that alone or in combination with other information in our possession could be used to identify you (Personal Information) as follows:
                  </p>
                  <h3>Personal Information You Provide:</h3>
                  <p>
                    We may collect Personal Information if you create an account to use our Services or communicate with us as follows.
                  </p>
                  <h4>Communication Information:</h4>
                  <p>
                    If you communicate with us, we may collect your name, contact information, and the contents of any messages you send (Communication Information).
                  </p>
                  <h3>Personal Information We Collect Through Our Social Media Pages:</h3>
                  <p>
                    We have pages on social media sites like Instagram, Facebook, Medium, Twitter, YouTube and LinkedIn (Social Media Pages). When you interact with our Social Media Pages, we will collect Personal Information that you elect to provide to us, such as your contact details (Social Information). In addition, the companies that host our Social Media Pages may provide us with aggregate information and analytics regarding the use of our Social Media Pages.
                  </p>
                  <h3>Personal Information We Receive Automatically From Your Use of the Services:</h3>
                  <p>
                    When you visit, use, and interact with the Services, we may receive certain information about your visit, use, or interactions (Technical Information), including the following:
                  </p>
                  <ul>
                    <li>Log data</li>
                    <li>Usage data</li>
                    <li>Device information</li>
                    <li>Cookies</li>
                    <li>Analytics</li>
                  </ul>
                  <h4>Online Tracking and Do Not Track Signals:</h4>
                  <p>
                    We and our third party service providers may use cookies or other tracking technologies to collect information about your browsing activities over time and across different websites following your use of the Site. Our Site currently does not respond to Do Not Track (DNT) signals and operates as described in this Privacy Policy whether or not a DNT signal is received.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="use-of-information">
                  <h2>2. How We Use Personal Information</h2>
                  <p>We may use Personal Information for the following purposes:</p>
                  <ul>
                    <li>To provide, administer, maintain, improve and/or analyze the Services;</li>
                    <li>To conduct research, which may remain internal or may be shared with third parties, published or made generally available;</li>
                    <li>To communicate with you;</li>
                    <li>To develop new programs and services;</li>
                    <li>To prevent fraud, criminal activity, or misuses of our Services, and to ensure the security of our IT systems, architecture, and networks; and</li>
                    <li>To comply with legal obligations and legal process and to protect our rights, privacy, safety, or property, and/or that of our affiliates, you, or other third parties.</li>
                  </ul>
                  <h3>Aggregated Information</h3>
                  <p>
                    We may aggregate Personal Information and use the aggregated information to analyze the effectiveness of our Services, to improve and add features to our Services, to conduct research (which may remain internal or may be shared with third parties, published or made generally available) and for other similar purposes. In addition, from time to time, we may analyze the general behavior and characteristics of users of our Services and share aggregated information like general user statistics with third parties, publish such aggregated information or make such aggregated information generally available. We may collect aggregated information through the Services, through cookies, and through other means described in this Privacy Policy.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="sharing-information">
                  <h2>3. Sharing and Disclosure of Personal Information</h2>
                  <p>
                    In certain circumstances we may share your Personal Information with third parties without further notice to you, unless required by the law, including without limitation in the situations below:
                  </p>
                  <ul>
                    <li>Vendors and Service Providers</li>
                    <li>Business Transfers</li>
                    <li>Legal Requirements</li>
                    <li>Affiliates</li>
                    <li>Other Users</li>
                  </ul>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="contact">
                  <h2>4. How to Contact Us</h2>
                  <p>
                    Please contact us at support@Bearear.ai if you need to change or correct your Personal Information, or if you have any questions or concerns not already addressed in this Privacy Policy.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="california-rights">
                  <h2>5. California Privacy Rights</h2>
                  <p>
                    The following disclosures are intended to provide additional information about (1) the categories of Personal Information we collect (as defined above), (2) the source of the Personal Information, (3) how we use each category of Personal Information, and (4) how we disclose Personal Information. These disclosures do not limit our ability to use or disclose information as described above.
                  </p>
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th>Category of Personal Information</th>
                        <th>Sources of Personal Information</th>
                        <th>Use of Personal Information</th>
                        <th>Disclosure of Personal Information</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Social Information</td>
                        <td>We may collect Social Information from you when you interact with our Social Media Pages.</td>
                        <td>We may use Social Information to perform analytics and to communicate with you.</td>
                        <td>We may disclose Social Information to our affiliates.</td>
                      </tr>
                      <tr>
                        <td>Communication Information</td>
                        <td>We collect Communication Information directly from you.</td>
                        <td>We use Communication Information for providing our Services and responding to you.</td>
                        <td>We disclose Communication Information to our affiliates and communication services providers.</td>
                      </tr>
                      <tr>
                        <td>Technical Information</td>
                        <td>We collect Technical Information from you.</td>
                        <td>We use Technical Information for analytics and in some cases, for moderation and prevention of fraud and malicious activity by users of our Services.</td>
                        <td>We disclose Technical Information to our affiliates and analytics provider(s).</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    To the extent provided for by law and subject to applicable exceptions, California residents have the following privacy rights in relation to the Personal Information we collect:
                  </p>
                  <ul>
                    <li>The right to know what Personal Information we have collected and how we have used and disclosed that Personal Information;</li>
                    <li>The right to request deletion of your Personal Information; and</li>
                    <li>The right to be free from discrimination relating to the exercise of any of your privacy rights.</li>
                  </ul>
                  <p>We do not and will not sell your Personal Information.</p>
                  <h3>Exercising Your Rights:</h3>
                  <p>California residents can exercise the above privacy rights by emailing us at: support@bearear.ai.</p>
                  <h3>Verification:</h3>
                  <p>
                    In order to protect your Personal Information from unauthorized access or deletion, we may require you to verify your credentials before you can submit a request to know or delete Personal Information. If you do not have an account with us, or if we suspect fraudulent or malicious activity, we may ask you to provide additional Personal Information and proof of residency for verification. If we cannot verify your identity, we will not provide or delete your Personal Information.
                  </p>
                  <h3>Authorized Agents:</h3>
                  <p>
                    You may submit a request to know or a request to delete your Personal Information through an authorized agent. If you do so, the agent must present signed written permission to act on your behalf and you may also be required to independently verify your identity and submit proof of your residency with us.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="children">
                  <h2>6. Children</h2>
                  <p>
                    Our Service is not directed to children who are under the age of 16. Bearear does not knowingly collect Personal Information from children under the age of 16. If you have reason to believe that a child under the age of 16 has provided Personal Information to Bearear through the Service please email us at support@bearear.ai and we will endeavor to delete that information from our databases.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="third-party-sites">
                  <h2>7. Links to Other Websites</h2>
                  <p>
                    The Service may contain links to other websites not operated or controlled by Bearear, including social media services (Third Party Sites). The information that you share with Third Party Sites will be governed by the specific privacy policies and terms of service of the Third Party Sites and not by this Privacy Policy. By providing these links we do not imply that we endorse or have reviewed these sites. Please contact the Third Party Sites directly for information on their privacy practices and policies.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="security">
                  <h2>8. Security</h2>
                  <p>
                    You use the Service at your own risk. We implement commercially reasonable technical, administrative, and organizational measures to protect Personal Information both online and offline from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. However, no Internet or e-mail transmission is ever fully secure or error free. In particular, e-mail sent to or from us may not be secure. Therefore, you should take special care in deciding what information you send to us via the Service or e-mail. In addition, we are not responsible for circumvention of any privacy settings or security measures contained on the Service, or third party websites.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="international-users">
                  <h2>9. International Users</h2>
                  <p>
                    By using our Service, you understand and acknowledge that your Personal Information will be transferred from your location to our facilities and servers.
                  </p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="your-choices">
                  <h2>10. Your Choices</h2>
                  <p>
                    If you choose not to provide Personal Information that is needed to use some features of our Service, you may be unable to use those features.
                  </p>
                </section>
              </CardContent>
            </Card>

            

            <Card>
              <CardContent className="prose dark:prose-invert max-w-none pt-6">
                <section id="changes">
                  <h2>11. Changes to the Privacy Policy</h2>
                  <p>
                    We may change this Privacy Policy at any time. When we do we will post an updated version on this page, unless another type of notice is required by applicable law. By continuing to use our Service or providing us with Personal Information after we have posted an updated Privacy Policy, or notified you by other means, you consent to the revised Privacy Policy.
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

  /* import React from 'react'
  
  const PrivacyPage = () => {
    return (
      <div>PrivacyPage</div>
    )
  }
  
  export default PrivacyPage */