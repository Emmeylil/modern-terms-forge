import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  FileText,
  ChevronRight,
  Download,
  Clock,
  Shield,
  Users,
  CreditCard,
  RefreshCcw,
  Lock,
  AlertCircle,
  Scale,
  Mail
} from "lucide-react";

const TermsOfUse = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: "introduction", title: "Introduction", icon: FileText },
    { id: "registration", title: "Registration & Account", icon: Users },
    { id: "terms-sale", title: "Terms & Conditions of Sale", icon: CreditCard },
    { id: "returns", title: "Returns & Refunds", icon: RefreshCcw },
    { id: "payments", title: "Payments", icon: CreditCard },
    { id: "store-credit", title: "Store Credit", icon: CreditCard },
    { id: "promotions", title: "Promotions", icon: AlertCircle },
    { id: "content-rules", title: "Rules About Your Content", icon: Shield },
    { id: "our-rights", title: "Our Rights to Use Your Content", icon: Scale },
    { id: "website-use", title: "Use of Website & Mobile Applications", icon: Lock },
    { id: "copyright", title: "Copyright & Trademarks", icon: Shield },
    { id: "privacy", title: "Data Privacy", icon: Lock },
    { id: "due-diligence", title: "Due Diligence & Audit Rights", icon: Shield },
    { id: "marketplace-role", title: "Our Role as Marketplace", icon: AlertCircle },
    { id: "limitations", title: "Limitations & Exclusions of Liability", icon: Scale },
    { id: "breaches", title: "Breaches of Terms", icon: AlertCircle },
    { id: "variations", title: "Variation of Terms", icon: FileText },
    { id: "third-party", title: "Third Party Websites", icon: AlertCircle },
    { id: "trade-marks", title: "Trade Marks", icon: Shield },
    { id: "competitions", title: "Competitions", icon: AlertCircle },
    { id: "entire-agreement", title: "Entire Agreement", icon: FileText },
    { id: "hierarchy", title: "Hierarchy", icon: Scale },
    { id: "severability", title: "Severability", icon: Scale },
    { id: "assignment", title: "Assignment", icon: FileText },
    { id: "law-jurisdiction", title: "Law & Jurisdiction", icon: Scale },
    { id: "statutory-rights", title: "Statutory & Regulatory Rights", icon: Scale },
    { id: "contact", title: "Contact Us", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("main-content");
      if (element) {
        const scrolled = element.scrollTop;
        const maxScroll = element.scrollHeight - element.clientHeight;
        const progress = (scrolled / maxScroll) * 100;
        setScrollProgress(progress);

        // Update active section based on scroll position
        sections.forEach((section) => {
          const sectionElement = document.getElementById(section.id);
          if (sectionElement) {
            const rect = sectionElement.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= 200) {
              setActiveSection(section.id);
            }
          }
        });
      }
    };

    const element = document.getElementById("main-content");
    if (element) {
      element.addEventListener("scroll", handleScroll);
      return () => element.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
        <div
          className="h-full bg-primary transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Terms & Conditions</h1>
              <p className="text-xs text-muted-foreground">General Terms of Use</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="gap-1">
              <Clock className="h-3 w-3" />
              Updated {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </Badge>
            <Button variant="outline" size="sm" onClick={() => window.print()}>
              <Download className="h-4 w-4 mr-2" />
              Print
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <Card className="p-4">
                <h3 className="mb-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Table of Contents
                </h3>
                <ScrollArea className="h-[calc(100vh-240px)]">
                  <nav className="space-y-1">
                    {sections.map((section) => {
                      const Icon = section.icon;
                      return (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-all ${activeSection === section.id
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                            }`}
                        >
                          <Icon className="h-3.5 w-3.5 flex-shrink-0" />
                          <span className="text-left flex-1">{section.title}</span>
                          {activeSection === section.id && (
                            <ChevronRight className="h-3.5 w-3.5" />
                          )}
                        </button>
                      );
                    })}
                  </nav>
                </ScrollArea>
              </Card>
            </div>
          </aside>

          {/* Main Content */}
          <ScrollArea id="main-content" className="h-[calc(100vh-140px)]">
            <main className="space-y-8 pr-4">
              <Card className="p-6 border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <AlertCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-2">Important Notice</h2>
                    <p className="text-sm text-muted-foreground">
                      Please read these terms and conditions carefully before using our marketplace. By using our platform,
                      you acknowledge that you have read, understood, and agree to be bound by these terms.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Introduction */}
              <section id="introduction" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">1</span>
                  </div>
                  <h2 className="text-2xl font-bold">Introduction</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">1.1.</strong> “Jumia” is the trading name for the Jumia group companies listed at Appendix 1. Each Jumia group company (“Jumia” or “we”) operates an e-commerce platform consisting of a website and mobile application (“marketplace”) together with supporting IT logistics and payment infrastructure for the sale and purchase of consumer products and services (“products”) in its allocated territory as defined at Appendix 1 (“territory”).




                    1.4.
                    1.4.1.
                    1.4.2.
                    1.4.3.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">1.2.</strong> These general terms and conditions shall apply to buyers and sellers on the marketplace and shall govern your use of the marketplace and related services.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">1.3.</strong> By using our marketplace you accept these general terms and conditions in full. If you disagree with these general terms and conditions or any part of these general terms and conditions you must not use our marketplace.

                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">1.4.</strong> If you use our marketplace in the course of a business or other organizational project then by so doing you:

                  </p>
                  <ul className="list-none pl-6 space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">1.4.1.</strong>  Confirm that you have obtained the necessary authority to agree to these general terms and conditions;</li>
                    <li><strong className="text-foreground">1.4.2.</strong> bind both yourself and the person company or other legal entity that operates that business or organizational project to these general terms and conditions; and</li>
                    <li><strong className="text-foreground">1.4.3.</strong>  agree that you in these general terms and conditions shall reference both the individual user and the relevant person company or legal entity unless the context requires otherwise.</li>
                  </ul>
                </div>
              </section>

              <Separator />

              {/* Registration and Account */}
              <section id="registration" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">2</span>
                  </div>
                  <h2 className="text-2xl font-bold">Registration and Account</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">2.1.</strong> You may not register with our marketplace if you are under 18 years of age. By using our marketplace or agreeing to these general terms and conditions, you warrant and represent to us that you are at least 18 years of age.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">2.2.</strong> If you register for an account with our marketplace, you will be asked to provide an email address/user ID and password, and you agree to:
                  </p>
                  <ul className="list-none pl-6 space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">2.2.1.</strong> Keep your password confidential;</li>
                    <li><strong className="text-foreground">2.2.2.</strong> Notify us in writing immediately if you become aware of any disclosure of your password;</li>
                    <li><strong className="text-foreground">2.2.3.</strong> Be responsible for any activity on our marketplace arising out of any failure to keep your password confidential, and you may be held liable for any losses arising out of such a failure;</li>
                    <li><strong className="text-foreground">2.2.4.</strong> Use your account exclusively, and you shall not transfer your account to any third party. If you authorize any third party to manage your account on your behalf, this shall be at your own risk;</li>
                    <li><strong className="text-foreground">2.2.5.</strong> We may suspend or cancel your account and/or edit your account details at any time in our sole discretion and without notice or explanation, provided that if we cancel any products or services you have paid for but not received and you have not breached these general terms and conditions, we will refund you in respect of the same.</li>
                  </ul>
                  <p className="text-muted-foreground">
                    You may cancel your account on our marketplace by contacting us.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Terms and Conditions of Sale */}
              <section id="terms-sale" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">3</span>
                  </div>
                  <h2 className="text-2xl font-bold">Terms and Conditions of Sale</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">3.1.</strong> You acknowledge and agree that:
                  </p>
                  <ul className="list-none pl-6 space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">3.1.1.</strong> The marketplace provides an online location for sellers to sell and buyers to purchase products;</li>
                    <li><strong className="text-foreground">3.1.2.</strong> We shall accept binding sales on behalf of sellers, but (unless we are indicated as the seller) we are not a party to the transaction between the seller and the buyer;</li>
                    <li><strong className="text-foreground">3.1.3.</strong> A contract for the sale and purchase of a product or products will come into force between the buyer and seller, and accordingly you commit to buying or selling the relevant product or products upon the buyer's confirmation of purchase via the marketplace.</li>
                  </ul>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">3.2.</strong> Subject to these general terms and conditions, the seller's terms of business shall govern the contract for sale and purchase between the buyer and the seller. Notwithstanding this, the following provisions will be incorporated into the contract of sale and purchase between the buyer and the seller:
                  </p>
                  <ul className="list-none pl-6 space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">3.2.1.</strong> The price for a product will be as stated in the relevant product listing;</li>
                    <li><strong className="text-foreground">3.2.2.</strong> The price for the product must include all taxes and comply with applicable laws in force from time to time;</li>
                    <li><strong className="text-foreground">3.2.3.</strong> Delivery charges, packaging charges, handling charges, administrative charges, insurance costs, and other ancillary costs and charges, where applicable, will only be payable by the buyer if this is expressly and clearly stated in the product listing; delivery of digital products may be made electronically;</li>
                    <li><strong className="text-foreground">3.2.4.</strong> Products must be of satisfactory quality, fit and safe for any purpose specified in and conform in all material respects to the product listing and any other description of the products supplied or made available by the seller to the buyer;</li>
                    <li><strong className="text-foreground">3.2.5.</strong> In respect of physical products sold, the seller warrants that the seller has good title to and is the sole legal and beneficial owner of the products and/or has the right to supply the products pursuant to this agreement, and that the products are not subject to any third party rights or restrictions including in respect of third party intellectual property rights and/or any criminal, insolvency, or tax investigation or proceedings.</li>
                  </ul>
                </div>
              </section>

              <Separator />

              {/* Returns and Refunds */}
              <section id="returns" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">4</span>
                  </div>
                  <h2 className="text-2xl font-bold">Returns and Refunds</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">4.1.</strong> Returns of products by buyers and acceptance of returned products by sellers shall be managed by us in accordance with the returns page on the marketplace as may be amended from time to time. Acceptance of returns shall be in our discretion, subject to compliance with applicable laws of the territory.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">4.2.</strong> Refunds in respect of returned products shall be managed in accordance with the refunds page on the marketplace as may be amended from time to time. Our rules on refunds shall be exercised in our discretion, subject to applicable laws of the territory. We may offer refunds in our discretion:
                  </p>
                  <ul className="list-none pl-6 space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">4.2.1.</strong> In respect of the product price;</li>
                    <li><strong className="text-foreground">4.2.2.</strong> Local and/or international shipping fees (as stated on the refunds page); and</li>
                    <li><strong className="text-foreground">4.2.3.</strong> By way of store credits, vouchers, mobile money transfer, bank transfers, or such other methods as we may determine from time to time.</li>
                  </ul>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">4.3.</strong> Returned products shall be accepted and refunds issued by us acting for and on behalf of the seller. Notwithstanding paragraphs 4.1 and 4.2 above, in respect of digital products or services and fresh food, we shall issue refunds in respect of failures in delivery only. Refunds of payment for such products for any other reasons shall be subject to the seller's terms and conditions of sale.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">4.4.</strong> Changes to our returns page or refunds page shall be effective in respect of all purchases made from the date of publication of the change on our website.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Payments */}
              <section id="payments" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">5</span>
                  </div>
                  <h2 className="text-2xl font-bold">Payments</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">5.1.</strong> You must make payments due under these general terms and conditions in accordance with the Payments Information and Guidelines on the marketplace.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Store Credit */}
              <section id="store-credit" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">6</span>
                  </div>
                  <h2 className="text-2xl font-bold">Store Credit</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">6.1.</strong> Store Credits may be earned and managed in accordance with our Store Credit Terms and Conditions as may be amended from time to time. We reserve the right to cancel or withdraw store credit rewards for any reason in our discretion, including if we suspect fraud or foul play. You can view Store Credit terms and conditions on our website.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Promotions */}
              <section id="promotions" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">7</span>
                  </div>
                  <h2 className="text-2xl font-bold">Promotions</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">7.1.</strong> Promotions and competitions run by us and/or other promoters shall be managed in accordance with the Promotions Terms and Conditions. You can view each Promotion's terms and conditions on our website.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Rules About Your Content */}
              <section id="content-rules" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">8</span>
                  </div>
                  <h2 className="text-2xl font-bold">Rules About Your Content</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">8.1.</strong> In these general terms and conditions, <strong>"your content"</strong> means:
                  </p>
                  <ul className="list-none pl-6 space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">8.1.1.</strong> All works and materials (including without limitation text, graphics, images, audio material, video material, audio-visual material, scripts, software, and files) that you submit to us or our marketplace for storage or publication, processing by, or onward transmission; and</li>
                    <li><strong className="text-foreground">8.1.2.</strong> All communications on the marketplace, including product reviews, feedback, and comments.</li>
                  </ul>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">8.2.</strong> Your content and the use of your content by us in accordance with these general terms and conditions must be accurate, complete, and truthful.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">8.3.</strong> Your content must be appropriate, civil, and tasteful, and accord with generally accepted standards of etiquette and behaviour on the internet, and must not:
                  </p>
                  <ul className="list-none pl-6 space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">8.3.1.</strong> Be offensive, obscene, indecent, pornographic, lewd, suggestive, or sexually explicit;</li>
                    <li><strong className="text-foreground">8.3.2.</strong> Depict violence in an explicit, graphic, or gratuitous manner;</li>
                    <li><strong className="text-foreground">8.3.3.</strong> Be blasphemous, in breach of racial or religious hatred or discrimination legislation;</li>
                    <li><strong className="text-foreground">8.3.4.</strong> Be deceptive, fraudulent, threatening, abusive, harassing, anti-social, menacing, hateful, discriminatory, or inflammatory;</li>
                    <li><strong className="text-foreground">8.3.5.</strong> Cause annoyance, inconvenience, or needless anxiety to any person; or</li>
                    <li><strong className="text-foreground">8.3.6.</strong> Constitute spam.</li>
                  </ul>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">8.4.</strong> Your content must not be illegal or unlawful, infringe any person's legal rights, or be capable of giving rise to legal action against any person (in each case in any jurisdiction and under any applicable law). Your content must not infringe or breach:
                  </p>
                  <ul className="list-none pl-6 space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">8.4.1.</strong> Any copyright, moral right, database right, trademark right, design right, right in passing off, or other intellectual property right;</li>
                    <li><strong className="text-foreground">8.4.2.</strong> Any right of confidence, right of privacy, or right under data protection legislation;</li>
                    <li><strong className="text-foreground">8.4.3.</strong> Any contractual obligation owed to any person; or</li>
                    <li><strong className="text-foreground">8.4.4.</strong> Any court order.</li>
                  </ul>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">8.5.</strong> You must not use our marketplace to link to any website or web page consisting of or containing material that would, were it posted on our marketplace, breach the provisions of these general terms and conditions.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">8.6.</strong> You must not submit to our marketplace any material that is or has ever been the subject of any threatened or actual legal proceedings or other similar complaint.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">8.7.</strong> The review function on the marketplace may be used to facilitate buyer reviews on products. You shall not use the review function or any other form of communication to provide inaccurate, inauthentic, or fake reviews.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">8.8.</strong> You must not interfere with a transaction by:
                  </p>
                  <ul className="list-none pl-6 space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">8.8.1.</strong> Contacting another user to buy or sell an item listed on the marketplace outside of the marketplace;</li>
                    <li><strong className="text-foreground">8.8.2.</strong> Communicating with a user involved in an active or completed transaction to warn them away from a particular buyer, seller, or item; or</li>
                    <li><strong className="text-foreground">8.8.3.</strong> Contacting another user with the intent to collect any payments.</li>
                  </ul>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">8.9.</strong> You acknowledge that all users of the marketplace are solely responsible for interactions with other users, and you shall exercise caution and good judgment in your communication with users. You shall not send them personal information, including credit card details.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">8.10.</strong> We may periodically review your content, and we reserve the right to remove any content at our discretion for any reason whatsoever.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">8.11.</strong> If you learn of any unlawful material or activity on our marketplace, or any material or activity that breaches these general terms and conditions, you may inform us by contacting us.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Our Rights to Use Your Content */}
              <section id="our-rights" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">9</span>
                  </div>
                  <h2 className="text-2xl font-bold">Our Rights to Use Your Content</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">9.1.</strong> You grant to us a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, store, adapt, publish, translate, and distribute your content on our marketplace and across our marketing channels and any existing or future media.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">9.2.</strong> You grant to us the right to sub-license the rights licensed under section 9.1.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">9.3.</strong> You grant to us the right to bring an action for infringement of the rights licensed under section 9.1.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">9.4.</strong> You hereby waive all your moral rights in your content to the maximum extent permitted by applicable law; and you warrant and represent that all other moral rights in your content have been waived to the maximum extent permitted by applicable law.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">9.5.</strong> Without prejudice to our other rights under these general terms and conditions, if you breach our rules on content in any way, or if we reasonably suspect that you have breached our rules on content, we may delete, unpublish, or edit any or all of your content.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Use of Website and Mobile Applications */}
              <section id="website-use" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">10</span>
                  </div>
                  <h2 className="text-2xl font-bold">Use of Website and Mobile Applications</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">10.1.</strong> In this section, the words "marketplace" and "website" shall be used interchangeably to refer to our websites and mobile applications.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">10.2.</strong> You may:
                  </p>
                  <ul className="list-none pl-6 space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">10.2.1.</strong> View pages from our website in a web browser;</li>
                    <li><strong className="text-foreground">10.2.2.</strong> Download pages from our website for caching in a web browser;</li>
                    <li><strong className="text-foreground">10.2.3.</strong> Print pages from our website for your own personal and non-commercial use, provided that such printing is not systematic or excessive;</li>
                    <li><strong className="text-foreground">10.2.4.</strong> Stream audio and video files from our website using the media player on our website; and</li>
                    <li><strong className="text-foreground">10.2.5.</strong> Use our marketplace services by means of a web browser, subject to the other provisions of these general terms and conditions.</li>
                  </ul>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">10.3.</strong> Except as expressly permitted by section 10.2 or the other provisions of these general terms and conditions, you must not download any material from our website or save any such material to your computer.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">10.4.</strong> You may only use our website for your own personal and business purposes in respect of selling or purchasing products on the marketplace.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">10.5.</strong> Except as expressly permitted by these general terms and conditions, you must not edit or otherwise modify any material on our website.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">10.6.</strong> Unless you own or control the relevant rights in the material, you must not:
                  </p>
                  <ul className="list-none pl-6 space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">10.6.1.</strong> Republish material from our website (including republication on another website);</li>
                    <li><strong className="text-foreground">10.6.2.</strong> Sell, rent, or sub-license material from our website;</li>
                    <li><strong className="text-foreground">10.6.3.</strong> Show any material from our website in public;</li>
                    <li><strong className="text-foreground">10.6.4.</strong> Exploit material from our website for a commercial purpose; or</li>
                    <li><strong className="text-foreground">10.6.5.</strong> Redistribute material from our website.</li>
                  </ul>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">10.7.</strong> Notwithstanding section 10.6, you may forward links to products on our website and redistribute our newsletter and promotional materials in print and electronic form to any person.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">10.8.</strong> We reserve the right to suspend or restrict access to our website, to areas of our website, and/or to functionality upon our website. We may, for example, suspend access to the website during server maintenance or when we update the website. You must not circumvent or bypass, or attempt to circumvent or bypass, any access restriction measures on the website.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">10.9.</strong> You must not:
                  </p>
                  <ul className="list-none pl-6 space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">10.9.1.</strong> Use our website in any way or take any action that causes or may cause damage to the website or impairment of the performance, availability, accessibility, integrity, or security of the website;</li>
                    <li><strong className="text-foreground">10.9.2.</strong> Use our website in any way that is unethical, unlawful, illegal, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity;</li>
                    <li><strong className="text-foreground">10.9.3.</strong> Hack or otherwise tamper with our website;</li>
                    <li><strong className="text-foreground">10.9.4.</strong> Probe, scan, or test the vulnerability of our website without our permission;</li>
                    <li><strong className="text-foreground">10.9.5.</strong> Circumvent any authentication or security systems or processes on or relating to our website;</li>
                    <li><strong className="text-foreground">10.9.6.</strong> Use our website to copy, store, host, transmit, send, use, publish, or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit, or other malicious computer software;</li>
                    <li><strong className="text-foreground">10.9.7.</strong> Impose an unreasonably large load on our website resources (including bandwidth, storage capacity, and processing capacity);</li>
                    <li><strong className="text-foreground">10.9.8.</strong> Decrypt or decipher any communications sent by or to our website without our permission;</li>
                    <li><strong className="text-foreground">10.9.9.</strong> Conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction, and data harvesting) on or in relation to our website without our express written consent;</li>
                    <li><strong className="text-foreground">10.9.10.</strong> Access or otherwise interact with our website using any robot, spider, or other automated means, except for the purpose of search engine indexing;</li>
                    <li><strong className="text-foreground">10.9.11.</strong> Use our website except by means of our public interfaces;</li>
                    <li><strong className="text-foreground">10.9.12.</strong> Violate the directives set out in the robots.txt file for our website;</li>
                    <li><strong className="text-foreground">10.9.13.</strong> Use data collected from our website for any direct marketing activity (including without limitation email marketing, SMS marketing, telemarketing, and direct mailing); or</li>
                    <li><strong className="text-foreground">10.9.14.</strong> Do anything that interferes with the normal use of our website.</li>
                  </ul>
                </div>
              </section>

              <Separator />

              {/* Copyright and Trademarks */}
              <section id="copyright" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">11</span>
                  </div>
                  <h2 className="text-2xl font-bold">Copyright and Trademarks</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">11.1.</strong> Subject to the express provisions of these general terms and conditions:
                  </p>
                  <ul className="list-none pl-6 space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">11.1.1.</strong> We, together with our licensors, own and control all the copyright and other intellectual property rights in our website and the material on our website; and</li>
                    <li><strong className="text-foreground">11.1.2.</strong> All the copyright and other intellectual property rights in our website and the material on our website are reserved.</li>
                  </ul>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">11.2.</strong> Our logos and our other registered and unregistered trademarks are trademarks belonging to us; we give no permission for the use of these trademarks, and such use may constitute an infringement of our rights.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">11.3.</strong> The third party registered and unregistered trademarks or service marks on our website are the property of their respective owners, and we do not endorse and are not affiliated with any of the holders of any such rights, and as such, we cannot grant any license to exercise such rights.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Data Privacy */}
              <section id="privacy" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">12</span>
                  </div>
                  <h2 className="text-2xl font-bold">Data Privacy</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">12.1.</strong> Buyers agree to processing of their personal data in accordance with the terms of our Privacy and Cookie Notice.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">12.2.</strong> We shall process all personal data obtained through the marketplace and related services in accordance with the terms of our Privacy and Cookie Notice and Privacy Policy.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">12.3.</strong> Sellers shall be directly responsible to buyers for any misuse of their personal data, and we shall bear no liability to buyers in respect of any misuse by sellers of their personal data.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Due Diligence and Audit Rights */}
              <section id="due-diligence" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">13</span>
                  </div>
                  <h2 className="text-2xl font-bold">Due Diligence and Audit Rights</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">13.1.</strong> We operate an anti-fraud and anti-money laundering compliance program and reserve the right to perform due diligence checks on all users of the marketplace.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">13.2.</strong> You agree to provide to us all such information, documentation, and access to your business premises as we may require:
                  </p>
                  <ul className="list-none pl-6 space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">13.2.1.</strong> In order to verify your adherence to and performance of your obligations under these terms and conditions;</li>
                    <li><strong className="text-foreground">13.2.2.</strong> For the purpose of disclosures pursuant to a valid order by a court or other governmental body; or</li>
                    <li><strong className="text-foreground">13.2.3.</strong> As otherwise required by law or applicable regulation.</li>
                  </ul>
                </div>
              </section>

              <Separator />

              {/* Our Role as Marketplace */}
              <section id="marketplace-role" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">14</span>
                  </div>
                  <h2 className="text-2xl font-bold">Our Role as a Marketplace</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">14.1.</strong> You acknowledge that we operate a marketplace connecting buyers and sellers, and while we facilitate transactions, we are generally not a party to the contract between buyer and seller (unless explicitly indicated as the seller).
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">14.2.</strong> We provide the platform, payment processing, and logistics support, but the primary contractual relationship for product quality, delivery, and customer satisfaction lies between the buyer and the seller.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">14.3.</strong> We reserve the right to intervene in disputes, manage returns and refunds, and take action against sellers or buyers who violate these terms or engage in fraudulent activity.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Limitations and Exclusions of Liability */}
              <section id="limitations" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">15</span>
                  </div>
                  <h2 className="text-2xl font-bold">Limitations and Exclusions of Liability</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">15.1.</strong> Nothing in these general terms and conditions will limit or exclude our liability for death or personal injury resulting from our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by applicable law.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">15.2.</strong> We will not be liable to you in respect of any losses arising out of events beyond our reasonable control.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">15.3.</strong> To the maximum extent permitted by law, we exclude all representations, warranties, and conditions relating to our website and the use of our website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose, and the use of reasonable care and skill).
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">15.4.</strong> Our aggregate liability to you in respect of any contract to provide services to you under these general terms and conditions shall not exceed the total amount paid and payable to us under the contract.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Breaches of Terms */}
              <section id="breaches" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">16</span>
                  </div>
                  <h2 className="text-2xl font-bold">Breaches of These Terms and Conditions</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">16.1.</strong> If we permit the registration of an account on our website, it will remain open indefinitely, subject to these general terms and conditions.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">16.2.</strong> If you breach these general terms and conditions, or if we reasonably suspect that you have breached these general terms and conditions in any way, we may:
                  </p>
                  <ul className="list-none pl-6 space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">16.2.1.</strong> Temporarily suspend your access to our website;</li>
                    <li><strong className="text-foreground">16.2.2.</strong> Permanently prohibit you from accessing our website;</li>
                    <li><strong className="text-foreground">16.2.3.</strong> Block computers using your IP address from accessing our website;</li>
                    <li><strong className="text-foreground">16.2.4.</strong> Contact your internet services provider and request that they block your access to our website;</li>
                    <li><strong className="text-foreground">16.2.5.</strong> Commence legal action against you; and/or</li>
                    <li><strong className="text-foreground">16.2.6.</strong> Take such other action as we deem appropriate.</li>
                  </ul>
                </div>
              </section>

              <Separator />

              {/* Variation */}
              <section id="variations" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">17</span>
                  </div>
                  <h2 className="text-2xl font-bold">Variation</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">17.1.</strong> We may revise these general terms and conditions from time to time. The revised terms and conditions shall apply from the date of publication on the website.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Third Party Websites */}
              <section id="third-party" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">18</span>
                  </div>
                  <h2 className="text-2xl font-bold">Third Party Websites</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">18.1.</strong> Our website may include hyperlinks to other websites owned and operated by third parties. These links are provided for your convenience only. We have no control over third party websites and their contents, and we accept no responsibility for them or for any loss or damage that may arise from your use of them.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Trade Marks */}
              <section id="trade-marks" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">19</span>
                  </div>
                  <h2 className="text-2xl font-bold">Trade Marks</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">19.1.</strong> All brand names, product names, logos, and trade marks (registered and unregistered) displayed on our website are the property of their respective owners. Nothing on our website should be construed as granting any license or right to use any trademark without the prior written permission of the trademark owner.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Competitions */}
              <section id="competitions" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">20</span>
                  </div>
                  <h2 className="text-2xl font-bold">Competitions</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">20.1.</strong> From time to time, we may run competitions, prize draws, and other promotions on our website. Each competition will have its own terms and conditions, which will be made available to participants. By entering a competition, you agree to be bound by those specific terms.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Entire Agreement */}
              <section id="entire-agreement" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">21</span>
                  </div>
                  <h2 className="text-2xl font-bold">Entire Agreement</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">21.1.</strong> These general terms and conditions, together with our Privacy Policy and any other legal notices published by us on our website, shall constitute the entire agreement between you and us in relation to your use of our website and shall supersede all previous agreements between you and us in relation to your use of our website.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Hierarchy */}
              <section id="hierarchy" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">22</span>
                  </div>
                  <h2 className="text-2xl font-bold">Hierarchy</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">22.1.</strong> In the event of any conflict or inconsistency between these general terms and conditions and any specific terms applicable to particular services or products, the specific terms shall prevail to the extent of the conflict or inconsistency.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Severability */}
              <section id="severability" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">23</span>
                  </div>
                  <h2 className="text-2xl font-bold">Severability</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">23.1.</strong> If any provision of these general terms and conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect. If any unlawful and/or unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Assignment */}
              <section id="assignment" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">24</span>
                  </div>
                  <h2 className="text-2xl font-bold">Assignment</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">24.1.</strong> You hereby agree that we may assign, transfer, sub-contract, or otherwise deal with our rights and/or obligations under these general terms and conditions.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">24.2.</strong> You may not assign, transfer, sub-contract, or otherwise deal with your rights and/or obligations under these general terms and conditions without our prior written consent.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Law and Jurisdiction */}
              <section id="law-jurisdiction" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">25</span>
                  </div>
                  <h2 className="text-2xl font-bold">Law and Jurisdiction</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">25.1.</strong> These general terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is registered.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">25.2.</strong> Any disputes relating to these general terms and conditions shall be subject to the exclusive jurisdiction of the courts of the territory in which our company is registered.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Statutory and Regulatory Rights */}
              <section id="statutory-rights" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">26</span>
                  </div>
                  <h2 className="text-2xl font-bold">Statutory and Regulatory Rights</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">26.1.</strong> Nothing in these general terms and conditions shall affect your statutory rights as a consumer, including your rights in relation to defective or misdescribed products. For more information about your statutory rights, contact your local Citizens Advice Bureau or Trading Standards office.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Contact */}
              <section id="contact" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <span className="text-sm font-semibold text-primary">27</span>
                  </div>
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms and Conditions or need to contact us regarding any matter, please use the following details:
                  </p>
                  <Card className="p-6 bg-muted/30">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-foreground font-medium">
                          <Mail className="h-4 w-4 text-primary" />
                          Email Support
                        </div>
                        <p className="text-sm text-muted-foreground">support@marketplace.com</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-foreground font-medium">
                          <Clock className="h-4 w-4 text-primary" />
                          Business Hours
                        </div>
                        <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-sm text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              <Separator />

              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="space-y-3 text-xs text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Effective Date:</strong> These Terms and Conditions are effective as of {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}.
                  </p>
                  <p>
                    <strong className="text-foreground">Acceptance:</strong> By continuing to use our marketplace after this date, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                  </p>
                  <p>
                    <strong className="text-foreground">Updates:</strong> We reserve the right to update these terms at any time. Continued use of the platform constitutes acceptance of any changes.
                  </p>
                </div>
              </Card>
            </main>
          </ScrollArea>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 border-t bg-muted/30">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Marketplace Platform. All rights reserved. These Terms of Use are legally binding.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="/privacy-policy">Privacy Policy</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="/cookie-policy">Cookie Policy</a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfUse;
