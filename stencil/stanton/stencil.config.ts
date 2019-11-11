import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
export const config: Config = {
  namespace: 'stanton',
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'www',
      dir: 'public',
      copy: [
        {src: 'fonts', dest: 'static/web-fonts'}
      ]
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
