import { createClient } from 'contentful';

console.log();

const client = createClient({
  space: '4yts2s6194dp',
  environment: 'master',
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response));
