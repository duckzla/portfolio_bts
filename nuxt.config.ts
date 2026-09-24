// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css:	['~/assets/css/main.css'],
  app:	{
    baseURL:	'/portfolio_bts/',			//	nom	de	ton	repo	GitHub
    head:	{
      title:	'Léo	—	Portfolio',
      meta:	[
        {	name:	'description',	content:	'Portfolio	de	Léo,	développeur	en	formation	BTS	SIO'	}
      ]
    }
  }
})

