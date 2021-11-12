export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '618e35a8dc52bd55c60f8ccd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nkze488f',
                  apiId: '4b1b1e4d-d8f8-40e5-88d2-874f129a8eed'
                },
                {
                  buildHookId: '618e35a8742b293ccb3daf30',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wm3rd9mr',
                  apiId: '719e4b7f-57fb-4948-a0b1-dc5854d3c3a0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/julrich/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wm3rd9mr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
