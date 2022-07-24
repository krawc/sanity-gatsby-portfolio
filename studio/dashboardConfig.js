export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62dd180379f6ba4239f35100',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ock2yndw',
                  apiId: 'c0e2950b-699e-4f75-96b3-6fc734296d8e'
                },
                {
                  buildHookId: '62dd18031cba533ac15fbb1e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-si9uhv2x',
                  apiId: '422aa8a5-4690-4fc8-bfef-ecaf245653de'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/krawc/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-si9uhv2x.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
