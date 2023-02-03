
import 'https://cdn.img.ly/packages/imgly/cesdk-js/1.10.0-preview.1/cesdk.umd.js';

CreativeEditorSDK.init('#cesdk_container').then(async (cesdk) => {
  // highlight-fetch-string
  const sceneUrl = 'https://cdn.img.ly/packages/imgly/cesdk-js/1.10.0-preview.1/assets/templates/cesdk_postcard_1.scene';
  const scene = await fetch(sceneUrl)
    .then((response) => { return response.text() });
  // highlight-fetch-string

  // highlight-load
  cesdk.loadFromString(scene).then(() => {
    console.log('Load succeeded')
  }).catch((error) => {
    console.error('Load failed', error)
  });
  // highlight-load
});
