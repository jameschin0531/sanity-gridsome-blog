export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5fb69490fa2ff140dcc6dabb',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-rc4ks4gx',
                  apiId: 'b6a87849-b27b-4b3e-9f99-18d32b83b7f9'
                },
                {
                  buildHookId: '5fb6949083e1a338c1f12966',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-3cy9ex2z',
                  apiId: '2c1b53b2-6ef4-4741-88a5-1b3eccf71f83'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jameschin0531/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-3cy9ex2z.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
