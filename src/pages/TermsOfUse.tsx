import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { FileText, ChevronRight } from "lucide-react";

const TermsOfUse = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "acceptance", title: "Acceptance of Terms" },
    { id: "use", title: "Use of Platform" },
    { id: "accounts", title: "User Accounts" },
    { id: "products", title: "Products & Services" },
    { id: "payment", title: "Payment & Pricing" },
    { id: "returns", title: "Returns & Refunds" },
    { id: "intellectual", title: "Intellectual Property" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "privacy", title: "Privacy & Data" },
    { id: "modifications", title: "Modifications" },
    { id: "contact", title: "Contact Information" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">Terms of Use</span>
          </div>
          <Button asChild variant="outline">
            <a href="/">Back to Home</a>
          </Button>
        </div>
      </header>

      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-2">
              <h3 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Contents
              </h3>
              <ScrollArea className="h-[calc(100vh-200px)]">
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                        activeSection === section.id
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      <ChevronRight className="h-4 w-4" />
                      {section.title}
                    </button>
                  ))}
                </nav>
              </ScrollArea>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">Terms of Use</h1>
              <p className="text-lg text-muted-foreground">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            <Separator />

            {/* Introduction */}
            <section id="introduction" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl font-semibold">1. Introduction</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Welcome to our platform. These Terms of Use ("Terms") govern your access to and use of our e-commerce marketplace, 
                  including our website, mobile applications, and related services (collectively, the "Platform").
                </p>
                <p>
                  Our Platform operates as a marketplace connecting buyers and sellers for the purchase and sale of consumer products 
                  and services. We provide the infrastructure, technology, and support services that enable transactions between users.
                </p>
                <p>
                  By accessing or using our Platform, you acknowledge that you have read, understood, and agree to be bound by these 
                  Terms. If you do not agree with any part of these Terms, you must not use our Platform.
                </p>
              </div>
            </section>

            <Separator />

            {/* Acceptance */}
            <section id="acceptance" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl font-semibold">2. Acceptance of Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By creating an account, browsing, or making a purchase on our Platform, you expressly agree to comply with and be 
                  bound by these Terms, along with our Privacy Policy and any additional guidelines or rules applicable to specific 
                  services or features.
                </p>
                <p>
                  If you are using the Platform on behalf of an organization, you represent and warrant that you have the authority 
                  to bind that organization to these Terms, and your acceptance of these Terms will be treated as acceptance by that 
                  organization.
                </p>
                <p>
                  You must be at least 18 years old or have reached the age of majority in your jurisdiction to use our Platform. 
                  By using the Platform, you represent and warrant that you meet these age requirements.
                </p>
              </div>
            </section>

            <Separator />

            {/* Use of Platform */}
            <section id="use" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl font-semibold">3. Use of Platform</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  You are granted a limited, non-exclusive, non-transferable license to access and use the Platform for personal, 
                  non-commercial purposes, or for legitimate business purposes in accordance with these Terms.
                </p>
                <p className="font-medium text-foreground">You agree NOT to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the Platform for any unlawful purpose or in violation of any applicable laws or regulations</li>
                  <li>Impersonate any person or entity, or falsely state or misrepresent your affiliation with any person or entity</li>
                  <li>Interfere with or disrupt the Platform or servers or networks connected to the Platform</li>
                  <li>Attempt to gain unauthorized access to any portion of the Platform or any other systems or networks</li>
                  <li>Use any automated means, including robots, crawlers, or scrapers, to access or collect data from the Platform</li>
                  <li>Upload, post, or transmit any content that is unlawful, harmful, threatening, abusive, or otherwise objectionable</li>
                  <li>Engage in any activity that could damage, disable, or impair the Platform's functionality</li>
                </ul>
                <p>
                  We reserve the right to suspend or terminate your access to the Platform at any time, without notice, for any 
                  violation of these Terms or for any other reason we deem appropriate.
                </p>
              </div>
            </section>

            <Separator />

            {/* User Accounts */}
            <section id="accounts" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl font-semibold">4. User Accounts</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  To access certain features of the Platform, you may be required to create an account. You are responsible for 
                  maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
                <p>
                  You agree to provide accurate, current, and complete information during the registration process and to update 
                  such information to keep it accurate, current, and complete. Providing false or misleading information may result 
                  in termination of your account.
                </p>
                <p>
                  You must immediately notify us of any unauthorized use of your account or any other breach of security. We will 
                  not be liable for any loss or damage arising from your failure to comply with these security obligations.
                </p>
                <p>
                  We reserve the right to refuse service, terminate accounts, or remove or edit content at our sole discretion, 
                  particularly if we believe you have violated these Terms or engaged in fraudulent or suspicious activity.
                </p>
              </div>
            </section>

            <Separator />

            {/* Products & Services */}
            <section id="products" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl font-semibold">5. Products & Services</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our Platform facilitates the sale of products and services by third-party sellers. While we strive to ensure the 
                  quality and accuracy of listings, we do not manufacture, store, or directly sell most products available on the Platform.
                </p>
                <p>
                  All product descriptions, images, prices, and availability information are provided by sellers and are subject to 
                  change without notice. We make reasonable efforts to ensure accuracy but cannot guarantee that all information is 
                  complete, accurate, or current.
                </p>
                <p>
                  Product colors displayed on your screen may vary from actual product colors due to individual monitor settings and 
                  display capabilities. We recommend contacting the seller directly if you have specific questions about a product.
                </p>
                <p>
                  We reserve the right to limit quantities, refuse orders, or discontinue products at any time. Certain products may 
                  be available exclusively online or in limited quantities, and not all products may be available in all locations.
                </p>
              </div>
            </section>

            <Separator />

            {/* Payment & Pricing */}
            <section id="payment" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl font-semibold">6. Payment & Pricing</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All prices are displayed in the applicable currency for your region and are subject to applicable taxes and fees. 
                  The final price, including all taxes, shipping fees, and additional charges, will be displayed at checkout before 
                  you complete your purchase.
                </p>
                <p>
                  Payment must be made at the time of order placement using one of our accepted payment methods. We accept major 
                  credit cards, debit cards, and other payment methods as indicated on the Platform. All payments are processed 
                  securely through our payment service providers.
                </p>
                <p>
                  By providing payment information, you represent and warrant that you are authorized to use the payment method and 
                  authorize us to charge the applicable amount for your purchase. You agree to pay all charges incurred by you or 
                  any users of your account at the prices in effect when such charges are incurred.
                </p>
                <p>
                  We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, 
                  errors in pricing or product information, or suspected fraud or unauthorized transactions. If your order is cancelled 
                  after payment has been processed, we will issue a full refund.
                </p>
              </div>
            </section>

            <Separator />

            {/* Returns & Refunds */}
            <section id="returns" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl font-semibold">7. Returns & Refunds</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We want you to be completely satisfied with your purchase. If you are not satisfied for any reason, you may return 
                  eligible products within the specified return period, subject to our return policy and any applicable seller policies.
                </p>
                <p>
                  To be eligible for a return, items must be unused, in their original condition, and in the original packaging. 
                  Certain products may be excluded from returns for hygiene or safety reasons, including but not limited to perishable 
                  goods, personalized items, and intimate or sanitary products.
                </p>
                <p>
                  Return requests must be initiated within the applicable return period from the date of delivery. To initiate a return, 
                  please contact customer service or use the returns portal in your account. You may be required to provide proof of 
                  purchase and photos of the product.
                </p>
                <p>
                  Refunds will be processed to your original payment method within a reasonable timeframe after we receive and inspect 
                  the returned item. Shipping costs are non-refundable except in cases where the return is due to our error or a 
                  defective product.
                </p>
              </div>
            </section>

            <Separator />

            {/* Intellectual Property */}
            <section id="intellectual" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl font-semibold">8. Intellectual Property</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All content on the Platform, including but not limited to text, graphics, logos, images, software, and other materials 
                  (collectively, "Content"), is the property of our company or our licensors and is protected by copyright, trademark, 
                  and other intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, 
                  download, store, or transmit any Content without our prior written consent, except for temporary copies stored 
                  automatically by your web browser for display purposes.
                </p>
                <p>
                  Product names, logos, and brands displayed on the Platform are trademarks of their respective owners. Use of these 
                  trademarks without permission may violate trademark laws and is strictly prohibited.
                </p>
                <p>
                  If you believe that any Content on the Platform infringes your intellectual property rights, please contact us 
                  immediately with detailed information about the alleged infringement, and we will investigate and take appropriate action.
                </p>
              </div>
            </section>

            <Separator />

            {/* Limitation of Liability */}
            <section id="liability" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl font-semibold">9. Limitation of Liability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Platform and all Content are provided on an "as is" and "as available" basis without warranties of any kind, 
                  either express or implied. We do not warrant that the Platform will be uninterrupted, error-free, or free from 
                  viruses or other harmful components.
                </p>
                <p>
                  To the fullest extent permitted by applicable law, we disclaim all warranties, express or implied, including but 
                  not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
                <p>
                  In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including 
                  but not limited to loss of profits, data, use, or other intangible losses, resulting from your access to or use of 
                  or inability to access or use the Platform.
                </p>
                <p>
                  Our total liability to you for all claims arising out of or relating to these Terms or your use of the Platform 
                  shall not exceed the amount you paid to us in the twelve (12) months preceding the claim, or one hundred dollars 
                  ($100), whichever is greater.
                </p>
              </div>
            </section>

            <Separator />

            {/* Privacy & Data */}
            <section id="privacy" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl font-semibold">10. Privacy & Data Protection</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Your privacy is important to us. Our collection, use, and disclosure of your personal information are governed by 
                  our Privacy Policy, which is incorporated into these Terms by reference. By using the Platform, you consent to our 
                  collection and use of your personal information as described in the Privacy Policy.
                </p>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet 
                  or electronic storage is completely secure, and we cannot guarantee absolute security.
                </p>
                <p>
                  You are responsible for maintaining the confidentiality of any personal information you provide through the Platform. 
                  You should not share your account credentials with others and should log out of your account after each session.
                </p>
                <p>
                  We may use cookies and similar tracking technologies to enhance your experience on the Platform. You can control 
                  cookie settings through your browser, but disabling cookies may limit your ability to use certain features of the Platform.
                </p>
              </div>
            </section>

            <Separator />

            {/* Modifications */}
            <section id="modifications" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl font-semibold">11. Modifications to Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We reserve the right to modify, update, or change these Terms at any time without prior notice. Any changes will 
                  be effective immediately upon posting on the Platform. Your continued use of the Platform after any such changes 
                  constitutes your acceptance of the new Terms.
                </p>
                <p>
                  We encourage you to review these Terms periodically to stay informed of any updates. Material changes to these Terms 
                  may be highlighted on our Platform or communicated to you via email if you have an account with us.
                </p>
                <p>
                  If you do not agree with any modifications to these Terms, you must discontinue your use of the Platform immediately. 
                  Your only remedy for dissatisfaction with these Terms or any changes thereto is to stop using the Platform.
                </p>
              </div>
            </section>

            <Separator />

            {/* Contact Information */}
            <section id="contact" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl font-semibold">12. Contact Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you have any questions, concerns, or complaints regarding these Terms or the Platform, please contact us using 
                  the information below. We are committed to addressing your inquiries and resolving any issues in a timely manner.
                </p>
                <div className="rounded-lg border bg-card p-6 space-y-3">
                  <p className="font-medium text-foreground">Customer Support</p>
                  <p>Email: support@example.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Business Hours: Monday - Friday, 9:00 AM - 6:00 PM (Local Time)</p>
                  <p className="text-sm">
                    For urgent matters, please mark your correspondence as "Urgent" in the subject line.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            <div className="rounded-lg border bg-muted/50 p-6 space-y-4">
              <p className="text-sm text-muted-foreground">
                <strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of the 
                jurisdiction in which our company is registered, without regard to its conflict of law provisions.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Severability:</strong> If any provision of these Terms is found to be unenforceable or invalid, that provision 
                shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force 
                and effect.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy and any other legal notices published 
                by us on the Platform, constitute the entire agreement between you and us concerning your use of the Platform.
              </p>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t bg-muted/30">
        <div className="container py-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved. These Terms of Use are legally binding.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfUse;
