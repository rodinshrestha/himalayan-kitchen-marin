import settings from "content/settings/settings.json";

const defaultOrderURL = "https://www.toasttab.com/yak-and-yeti/v3";
export const navLink = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Menu",
    url: "/menu",
  },
  {
    label: "Gallery",
    url: "/gallery",
  },
  {
    label: "Order Online",
    url: settings?.order_online_url || defaultOrderURL,
  },

  {
    label: "Everest",
    url: "/everest-trek",
  },
  {
    label: "Contact Us",
    url: "/contact-us",
  },
];
