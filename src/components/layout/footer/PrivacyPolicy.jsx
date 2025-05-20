import React, { useState, useEffect } from "react";
import { CircleSmall } from "lucide-react";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("collect");

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

  const privacySections = [
    {
      id: "collect",
      title: "Information We Collect",
      content: [
        {
          subtitle: "Information You Provide Directly",
          text: "We collect several types of information from and about users of our Services, including:",
        },
        {
          subtitle: "Account Information",
          text: "When you create an account, we collect your name, email address, password, and username.",
        },
        {
          subtitle: "Profile Information",
          text: "You may choose to provide additional information in your profile, such as your location, interests, and LEGO® preferences.",
        },
        {
          subtitle: "Transaction Information",
          text: "When you purchase tickets or draft LEGO® pieces, we collect information related to your transactions, including your billing address, shipping address, and payment details (processed by our payment gateway).",
        },
        {
          subtitle: "Communications",
          text: "If you contact us directly, we may keep a record of your communication.",
        },
        {
          subtitle: "Participation Information",
          text: "Information related to the draws you participate in, the tickets you purchase, and the LEGO® pieces you select.",
        },
        {
          subtitle: "Information We Collect Automatically",
          text: "We also collect information about your interactions with our Services:",
        },
        {
          subtitle: "Usage Data",
          text: "We collect information about how you use our Site and Services, such as the pages you visit, the links you click, the time you spend on our Site, and other usage statistics.",
        },
        {
          subtitle: "Device Information",
          text: "We may collect information about your device, including your IP address, browser type, operating system, device identifiers, and mobile network information.",
        },
        {
          subtitle: "Cookies and Similar Technologies",
          text: "We use cookies, web beacons, and other similar technologies to collect information about your browsing activities and preferences. You can control cookies through your browser settings.",
        },
      ],
    },
    {
      id: "use",
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "To Provide and Maintain Our Services",
          text: "To operate our Site, manage your account, process your transactions, and fulfill your requests.",
        },
        {
          subtitle: "To Communicate with You",
          text: "To send you important notices, updates about draws, promotional materials (where permitted by law), and respond to your inquiries.",
        },
        {
          subtitle: "To Personalize Your Experience",
          text: "To tailor the content and offers you see on our Site based on your interests and preferences.",
        },
        {
          subtitle: "To Improve Our Services",
          text: "To analyze how our Site and Services are used, identify trends, and make improvements.",
        },
        {
          subtitle: "To Ensure Security and Prevent Fraud",
          text: "To protect our Site and Services from unauthorized access, misuse, and fraudulent activities.",
        },
        {
          subtitle: "To Comply with Legal Obligations",
          text: "To comply with applicable laws, regulations, and legal processes.",
        },
        {
          subtitle: "To Administer Draws and Picking Processes",
          text: "To manage ticket purchases, determine the picking order, and facilitate the selection and shipment of LEGO® pieces.",
        },
      ],
    },
    {
      id: "share",
      title: "How We Share Your Information",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share information with third-party service providers who assist us with various operations, such as payment processing, shipping, website hosting, data analysis, email marketing, and customer support. These providers are contractually obligated to protect your information.",
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, reorganization, or sale of all or a portion of our assets, your information may be transferred to the acquiring entity.",
        },
        {
          subtitle: "Legal Compliance",
          text: "We may disclose your information if required to do so by law or in response to a valid legal request, such as a court order or government investigation.",
        },
        {
          subtitle: "With Your Consent",
          text: "We may share your information with third parties when we have your explicit consent to do so.",
        },
        {
          subtitle: "Aggregated and Anonymized Data",
          text: "We may share aggregated and anonymized information that does not directly identify you with third parties for various purposes, including analytics and marketing.",
        },
      ],
    },
    {
      id: "rights",
      title: "Your Rights and Choices",
      content: [
        {
          subtitle: "Access",
          text: "The right to request access to the personal information we hold about you.",
        },
        {
          subtitle: "Correction",
          text: "The right to request that we correct any inaccurate or incomplete personal information.",
        },
        {
          subtitle: "Deletion",
          text: "The right to request that we delete your personal information under certain circumstances.",
        },
        {
          subtitle: "Objection",
          text: "The right to object to the processing of your personal information for certain purposes, such as direct marketing.",
        },
        {
          subtitle: "Restriction of Processing",
          text: "The right to request that we restrict the processing of your personal information under certain circumstances.",
        },
        {
          subtitle: "Data Portability",
          text: "The right to receive your personal information in a structured, commonly used, and machine-readable format and to transmit it to another controller.",
        },
      ],
    },
    {
      id: "security",
      title: "Data Security",
      content: `We take reasonable measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. These measures include encryption, secure servers, and access controls. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.`,
    },
    {
      id: "retention",
      title: "Data Retention",
      content: `We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.`,
    },
    {
      id: "children",
      title: "Children's Privacy",
      content: `Our Services are not intended for children under the age of 13. We do not knowingly collect personal information from children without verifiable parental consent. If you believe that we have collected personal information from a child without such consent, please contact us immediately, and we will take steps to delete the information.`,
    },
    {
      id: "links",
      title: "Links to Other Websites",
      content: `Our Site may contain links to third-party websites. We are not responsible for the privacy practices or the content of those websites. We encourage you to review the privacy policies of any third-party websites you visit.`,
    },
    {
      id: "changes",
      title: "Changes to This Privacy Policy",
      content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our Site and updating the "Last Updated" date. Your continued use of our Site and Services after the posting of the revised Privacy Policy constitutes your acceptance of the changes.`,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 p-5 font-[Inter]">
      {/* Left Navigation */}
      <div className="lg:col-span-1">
        <div className="sticky top-24">
          <nav className="space-y-3">
            {privacySections.map((section, index) => (
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
            <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground text-sm">Updated May 2025</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-10">
            {privacySections.map((section) => (
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

export default PrivacyPolicy;
