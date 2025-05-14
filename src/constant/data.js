export const announcements = [
  {
    text: "⚡ Flash Sale! 50% off all tickets for the next",
    color: "bg-red-500",
    hasSale: true,
    endTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
  },
  {
    text: "🎁 Buy one ticket, get one free this weekend only! Ends in",
    color: "bg-green-500",
    hasSale: true,
    endTime: new Date(Date.now() + 48 * 60 * 60 * 1000), // 48 hours from now
  },
  {
    text: "⏰ Limited time offer: Marvel collection drawing closes soon!",
    color: "bg-blue-500",
    hasSale: false,
  },
  {
    text: "🏷️ New members: Use code WELCOME10 for 10% off your first ticket",
    color: "bg-purple-500",
    hasSale: false,
  },
  {
    text: "🔥 Hot Deal! Hogwarts Castle tickets just restocked!",
    color: "bg-amber-500",
    hasSale: false,
  },
];
