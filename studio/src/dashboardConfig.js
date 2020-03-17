export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e70243a844c7a838a9f6780',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wbgccwdj',
                  apiId: '8f3d498f-f30e-4c9c-8ace-72d349bb4681'
                },
                {
                  buildHookId: '5e70243ad05ac95fc4aba23f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5bna8hv3',
                  apiId: 'faa451b1-4306-4b0c-8df4-c2f716ec65da'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/orlandos20/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5bna8hv3.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
