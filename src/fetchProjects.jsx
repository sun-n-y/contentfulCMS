import { createClient } from 'contentful';
import { useState } from 'react';
import { useEffect } from 'react';

const client = createClient({
  space: '4yts2s6194dp',
  environment: 'master',
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const img = image?.fields?.file.url;
        const id = item.sys.id;
        console.log();
        return { title, url, img, id };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};

// client
//   .getEntries({ content_type: 'projects' })
//   .then((response) => console.log(response));

//title, url, id, image
