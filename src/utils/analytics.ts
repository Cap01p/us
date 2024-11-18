type EventParams = {
  [key: string]: string | number | boolean;
};

export const trackEvent = (
  eventName: string,
  eventParams: EventParams = {}
) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as any).gtag;
    gtag('event', eventName, eventParams);
  }
};

export const trackDownload = (resourceName: string) => {
  trackEvent('resource_download', {
    resource_name: resourceName
  });
};

export const trackMapInteraction = (stateName: string) => {
  trackEvent('map_interaction', {
    state_name: stateName
  });
};

export const trackFAQInteraction = (question: string) => {
  trackEvent('faq_interaction', {
    question: question
  });
}; 