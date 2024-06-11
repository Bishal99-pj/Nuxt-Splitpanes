import { defineNuxtModule, addPlugin, createResolver, addComponentsDir } from '@nuxt/kit'

import { name, version } from '../package.json'

// Module options TypeScript interface definition
export interface ModuleOptions {
  isGlobal?: boolean
 }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    // Nuxt config key for module options in playground
    configKey: 'splitpanes',
  },
  // Default configuration options of the Nuxt module
  defaults: {

  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    // Add css
    nuxt.options.css.push('splitpanes/dist/splitpanes.css')

    // Add componets
    addComponentsDir({
      path: resolver.resolve('runtime/components'),
      global: options.isGlobal,
    })
  },
})
