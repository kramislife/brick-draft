import React, { useState, useEffect } from "react";
import { CircleSmall } from "lucide-react";

const TermsofUse = () => {
  const [activeSection, setActiveSection] = useState("acceptance");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop - 150 &&
          window.scrollY < sectionTop + sectionHeight - 150
        ) {
          setActiveSection(section.getAttribute("data-section"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  const termsSections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content: `By accessing and using the Site and Services, you represent and warrant that you are at least the age of 18 years old and have the legal capacity to enter into these Terms. If you are accessing or using the Site and Services on behalf of an entity, you represent and warrant that you have the authority to bind that entity to these Terms.`,
    },
    {
      id: "registration",
      title: "Account Registration",
      content: [
        {
          subtitle: "Eligibility",
          text: "To participate in the Services, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.",
        },
        {
          subtitle: "Account Security",
          text: "You are responsible for maintaining the confidentiality of your account credentials (username and password) and for all activities that occur under your account. You agree to notify us immediately of any unauthorized access to or use of your account. We are not liable for any loss or damage arising from your failure to comply with this section.",
        },
        {
          subtitle: "Account Suspension/Termination",
          text: "We reserve the right to suspend or terminate your account at our sole discretion, without prior notice, for any reason, including but not limited to a breach of these Terms.",
        },
      ],
    },
    {
      id: "services",
      title: "Use of Services",
      content: [
        {
          subtitle: "Game Participation",
          text: "Our Services involve draw-based games where you can purchase tickets for a chance to pick specific LEGO® pieces from a featured set. Participation is subject to the rules and conditions outlined on the Site for each specific draw.",
        },
        {
          subtitle: "Ticket Purchases",
          text: "You agree to pay the price displayed for any tickets you purchase. All payments are processed through our designated payment gateway, and you agree to abide by its terms and conditions as well. All ticket purchases are final and non-refundable, except as expressly stated by us.",
        },
        {
          subtitle: "Picking Process",
          text: 'The picking process will occur as described on our "How It Works" page. You agree to abide by the rules and timelines associated with the picking process. Failure to make your selections within the allotted time may result in forfeiture of your turn.',
        },
        {
          subtitle: "LEGO® Piece Selection",
          text: "The availability of specific LEGO® pieces is subject to the contents of the featured set and the selections made by other participants. We do not guarantee that you will be able to select the exact pieces you desire.",
        },
        {
          subtitle: "Payment for other fees",
          text: "Once you have successfully picked your LEGO® pieces, you agree to pay any applicable taxes and shipping fees.",
        },
        {
          subtitle: "Shipping",
          text: "We will arrange for the shipping of your drafted LEGO® pieces to the address you provide. Shipping costs and estimated delivery times will be displayed during the checkout process. We are not responsible for delays or damages caused by the shipping carrier.",
        },
        {
          subtitle: "Fair Use",
          text: "You agree to use our Site and Services in a fair and responsible manner and not to engage in any activities that may disrupt or interfere with the operation of the Site or the Services, or infringe upon the rights of others.",
        },
      ],
    },
    {
      id: "ip",
      title: "Intellectual Property",
      content: [
        {
          subtitle: "Our Content",
          text: "The Site and its original content, features, and functionality (including but not limited to text, graphics, logos, images, software) are and will remain the exclusive property of Brick Draft and its licensors and are protected by copyright, trademark, and other intellectual property laws.",
        },
        {
          subtitle: "Your Content",
          text: "By posting, uploading, or otherwise submitting content to our Site (if applicable), you grant us a non-exclusive, worldwide, royalty-free, perpetual, irrevocable, sub-licensable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content in connection with the Services. You represent and warrant that you have all necessary rights to grant this license.",
        },
        {
          subtitle: "LEGO® Trademarks",
          text: "The LEGO® Group is the owner of numerous trademarks, including but not limited to LEGO®. Brick Draft is an independent entity and is not affiliated with, endorsed, sponsored, or authorized by the LEGO® Group. We use LEGO® trademarks for descriptive purposes only to identify the products involved in our draws.",
        },
      ],
    },
    {
      id: "disclaimer",
      title: "Disclaimer of warranties",
      content: `The site and services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance. we do not warrant that the site or services will be uninterrupted, error-free, secure, or free of viruses or other harmful components. we make no warranties regarding the availability or specificity of lego® pieces in any draw.`,
    },
    {
      id: "liability",
      title: "Limitation of liability",
      content: `To the maximum extent permitted by applicable law, in no event shall brick draft, its affiliates, officers, directors, employees, agents, or licensors be liable for any indirect, incidental, special, consequential, or punitive damages (including without limitation damages for loss of profits, data, use, goodwill, or other intangible losses) arising out of or relating to your use of or inability to use the site or services, any transactions entered into through the site, or these terms, whether based on warranty, contract, tort (including negligence), statute, or any other legal theory, even if we have been advised of the possibility of such damages. our total liability to you for all claims arising out of or relating to these terms or the services shall not exceed the total amount you have paid to us in the twelve (12) months preceding the event giving rise to the liability.`,
    },
    {
      id: "indemnification",
      title: "Indemnification",
      content: `You agree to indemnify, defend, and hold harmless Brick Draft, its affiliates, officers, directors, employees, agents, and licensors from and against all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your breach of these Terms, your use of the Site or Services, or your violation of any law or the rights of a third party.`,
    },
    {
      id: "law",
      title: "Law and Dispute Resolution",
      content: `These Terms shall be governed by and construed following the laws of the United States of America, without regard to its conflict of law provisions. Any dispute arising out of or relating to these Terms or the Services shall be exclusively resolved in the courts of Utah state. You hereby consent to the personal jurisdiction of such courts.`,
    },
    {
      id: "modifications",
      title: "Modifications to Terms",
      content: `We reserve the right to modify these Terms at any time, in our sole discretion. We will notify you of any material changes by posting the updated Terms on our Site and updating the "Last Updated" date. Your continued use of the Site and Services after the posting of the revised Terms constitutes your acceptance of the changes. It is your responsibility to review these Terms periodically for any updates or changes.`,
    },
    {
      id: "agreement",
      title: "Entire Agreement",
      content: `These Terms constitute the entire agreement between you and Brick Draft regarding your use of the Site and Services and supersede all prior or contemporaneous communications and proposals, whether oral or written, between you and Brick Draft.`,
    },
    {
      id: "severability",
      title: "Severability",
      content: `If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect.`,
    },
    {
      id: "waiver",
      title: "Waiver",
      content: `Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.`,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 p-5 font-[Inter]">
      {/* Left Navigation */}
      <div className="lg:col-span-1">
        <div className="sticky top-24">
          <nav className="space-y-3">
            {termsSections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 cursor-pointer ${
                  activeSection === section.id
                    ? "bg-accent text-accent-foreground shadow-md font-semibold"
                    : "text-muted-foreground hover:bg-ring/20"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm text-accent-foreground font-semibold ${
                    activeSection === section.id
                      ? "bg-background dark:bg-foreground"
                      : "bg-accent"
                  }`}
                >
                  {index + 1}
                </div>
                <span>{section.title.replace(/^\d+\.\s/, "")}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-3 md:border-l">
        <div className="px-5 py-3">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
            <p className="text-muted-foreground text-sm">Updated May 2025</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-10">
            {termsSections.map((section) => (
              <div key={section.id} id={section.id} data-section={section.id}>
                <div className="mb-3">
                  <h2 className="text-2xl font-bold mb-1">{section.title}</h2>
                  <div className="w-12 h-0.5 bg-accent"></div>
                </div>

                {Array.isArray(section.content) ? (
                  <div className="space-y-5">
                    {section.content.map((item, idx) => (
                      <div key={idx}>
                        <div className="flex items-start gap-2 ml-5">
                          <CircleSmall className="w-4 h-4 fill-accent-foreground shrink-0 mt-1" />

                          <span className="font-semibold">
                            {item.subtitle} -{" "}
                            <span className="text-muted-foreground font-normal">
                              {item.text}
                            </span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsofUse;
