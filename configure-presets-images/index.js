import 'https://cdn.img.ly/packages/imgly/cesdk-js/1.10.0-preview.1/cesdk.umd.js';

let config = {
  baseURL: 'https://cdn.img.ly/packages/imgly/cesdk-js/1.10.0-preview.1/assets',
  presets: {
    // highlight-images
    images: {
      imgly_logo: {
        // highlight-imageURL
        imageURL: 'https://img.ly/static/ubq_samples/imgly_logo.jpg',
        // highlight-imageURL
        // highlight-thumbnailURL
        thumbnailURL: 'https://img.ly/static/ubq_samples/thumbnails/imgly_logo.jpg',
        // highlight-thumbnailURL
        // highlight-width
        width: 1980,
        // highlight-width
        // highlight-height
        height: 720
        // highlight-height
      }
    }
    // highlight-images
  }
};

CreativeEditorSDK.init('#cesdk_container', config).then((instance) => {
  /** do something with the instance of CreativeEditor SDK **/
});
