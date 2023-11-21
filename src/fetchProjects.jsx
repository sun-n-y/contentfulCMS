import { createClient } from 'contentful';
import { useState } from 'react';
import { useEffect } from 'react';

const client = createClient({
  space: '4yts2s6194dp',
  environment: 'master',
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const projects = response.items.map((item) => {
        const { title, url } = item.fields;
        const { url: image } = item.fields.image.fields.file;
        const { id } = item.sys;
        console.log();
        return { title, url, image, id };
      });

      console.log(projects);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
};
export default useFetchProjects;

// client
//   .getEntries({ content_type: 'projects' })
//   .then((response) => console.log(response));

//title, url, id, image
