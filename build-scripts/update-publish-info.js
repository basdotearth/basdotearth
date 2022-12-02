const { argv } = require('process');
const matter = require('gray-matter');
const { writeFile } = require('fs/promises');

const updatePublishInfo = async () => {
  const [, , ...mdFilePaths] = argv;

  for await (const path of mdFilePaths) {
    const file = matter.read(path);

    if (file.data.isPublished === true) {
      file.data = {
        ...file.data,
        updatedOn: new Date().toISOString(),
      };

      const updatedFileContent = matter.stringify(file);
      await writeFile(path, updatedFileContent);
    }
  }
};

(async () =>  await updatePublishInfo())();