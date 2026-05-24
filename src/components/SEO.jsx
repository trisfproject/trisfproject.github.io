import { useEffect } from 'react';

const defaultDescription =
  'TRISF PROJECTS provides Infrastructure, Monitoring, Observability, Automation, Cloud Engineering, Android Development, and Web Solutions.';

function setMeta(selector, value) {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute('content', value);
}

export function SEO({
  title = 'TRISF PROJECTS | Engineering & Technical Services',
  description = defaultDescription,
  url = 'https://trisfproject.github.io/',
}) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
  }, [description, title, url]);

  return null;
}
