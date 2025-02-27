import CreativeEngine from 'https://cdn.img.ly/packages/imgly/cesdk-engine/1.9.2/index.js';

const config = {
  baseURL: 'https://cdn.img.ly/packages/imgly/cesdk-engine/1.9.2/assets'
};

CreativeEngine.init(config).then(async (engine) => {
  // highlight-save
  engine.scene.saveToString().then((sceneAsString) => {
    console.log('Save succeeded');
    // highlight-result
    console.log(sceneAsString);
    // highlight-result
  }).catch((error) => {
    console.error('Save failed', error)
  });
  // highlight-save
});
