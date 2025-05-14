export const announcements = [
  {
    text: "⚡ Flash Sale! 50% off all tickets for the next",
    hasSale: true,
    endTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
  },
  {
    text: "🎁 Buy one ticket, get one free this weekend only! Ends in",
    hasSale: true,
    endTime: new Date(Date.now() + 48 * 60 * 60 * 1000), // 48 hours from now
  },
  {
    text: "⏰ Limited time offer: Marvel collection drawing closes soon!",
    hasSale: false,
  },
  {
    text: "🏷️ New members: Use code WELCOME10 for 10% off your first ticket",
    hasSale: false,
  },
  {
    text: "🔥 Hot Deal! Hogwarts Castle tickets just restocked!",
    hasSale: false,
  },
];

// Badge categories
export const BADGE_CATEGORIES = {
  WELCOME: {
    text: "WELCOME TO BRICK DRAFT",
    className: "bg-accent text-black",
  },
  SALE: {
    text: "SALE",
    className: "bg-red-500 text-white",
  },
  NEW: {
    text: "NEW ARRIVAL",
    className: "bg-green-500 text-black",
  },
  SPECIAL: {
    text: "SPECIAL OFFER",
    className: "bg-purple-500 text-white",
  },
  COLLECTION: {
    text: "COLLECTION",
    className: "bg-blue-500 text-white",
  },
};

export const banners = [
  {
    image:
      "https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2017/09/lego_world.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5",
    badge: BADGE_CATEGORIES.WELCOME,
    title: "Build Your LEGO Dreams One Brick at a Time",
    description:
      "Save up to 70% compared to retail prices while enjoying the thrill of building your collection one brick at a time. It's like a treasure hunt for LEGO enthusiasts!",
    primaryLink: {
      text: "How It Works",
      href: "/about",
    },
    showVideoButton: true,
    videoUrl:
      "https://drive.google.com/file/d/1XWC_0rZ9wcN7324J2t8FIz9psIrndBhs/preview",
  },

  {
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmRsMHpuaTdza2Fkd2c4NXpxYnpiN2Iwd25rMG9naWVjeWVkNWdwbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1xljZ6jByg4EnptnTz/giphy.gif",
    badge: BADGE_CATEGORIES.NEW,
    title: "Join the Galactic Empire\nBuild Your Star Wars Legacy!",
    description:
      "Collect iconic Star Wars LEGO sets from a galaxy far, far away. From the Millennium Falcon to the Death Star, your collection awaits!",
    primaryLink: {
      text: "Explore Star Wars Sets",
      href: "/lottery/all",
    },
  },
  {
    image:
      "https://res.cloudinary.com/dhpccjumk/image/upload/v1745979338/ssmwbbvdfkpxp0h6y59o.png",
    badge: BADGE_CATEGORIES.SALE,
    title: "Final Hours to Enter Drawing!",
    description:
      "Don't miss your chance to win this incredible set. Enter now before the drawing closes.",
    timer: {
      label: "Drawing Closes In:",
      endDate: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString(), // 48 hours from now
    },
    primaryLink: {
      text: "Buy Ticket Now",
      href: "/lottery/all",
    },
  },
  {
    image:
      "https://res.cloudinary.com/dhpccjumk/image/upload/v1745935011/htpgltdpfo3bqdfv4sps.webp",
    badge: BADGE_CATEGORIES.COLLECTION,
    title: "Assemble Your Marvel LEGO Collection",
    description:
      "Enter to win exclusive Marvel sets and build your own superhero universe!",
    primaryLink: {
      text: "View Marvel Sets",
      href: "/lottery/all",
    },
  },
  {
    image:
      "https://res.cloudinary.com/dhpccjumk/image/upload/v1745937598/incgz1c6x2jr6x9roffd.webp",
    badge: BADGE_CATEGORIES.SPECIAL,
    title: "BUY ONE GET ONE FREE!",
    description:
      "Buy any ticket this weekend and get a second entry absolutely FREE. Limited time offer!",
    timer: {
      label: "Offer Ends In:",
      endDate: new Date(Date.now() + 72 * 60 * 60 * 1000).toISOString(), // 72 hours from now
    },
    primaryLink: {
      text: "Claim Offer Now",
      href: "/lottery/all",
    },
  },
];
