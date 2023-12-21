import { defineConfig, presetUno, presetIcons, transformerDirectives } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
export default defineConfig({

  presets:[
    presetUno(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }), 
    presetWebFonts({
      provider: 'google',
      fonts:{
        sans: 'Maven Pro'
      }
     }),
   ],
  
   theme:{
    colors:{
      'mi':{
      'tx':'var(--text-color)', 
      'bg':'var(--background-color)', 
      'brand':'var(--brand)', 
      'sec':'var(--secondary)', 
      'surf':'var(--surface-color)', 
      'pale':'var(--pale-color)', 
      'link':'var(--link-color)' ,
      'lka':'var(--link-active-color)', 

    }
  }},
  shortcuts:{
    "container":"mx-auto w-86% xl:w-1194px ",
    "seccion-base":"py-16 md:py-24 lg:py-36",
    "ic": "items-center",
    "icc":"items-center justify-center",
    "icb":"items-center justify-between",
  },

  transformers: [
    transformerDirectives(),
  ],
})

