const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: '入门',
      collapsed: false,
      items: [
        'installation',
        'configuration',
        'playground',
        'typescript-support',
      ],
    },
    {
      type: 'category',
      label: '使用指南',
      items: [
        'guides/creating-pages',
        {
          文档功能: [
            'guides/docs/introduction',
            'guides/docs/create-doc',
            'guides/docs/sidebar',
            'guides/docs/versioning',
            'guides/docs/markdown-features',
            'guides/docs/multi-instance',
          ],
        },
        'blog',
        {
          type: 'category',
          label: '新增的 Markdown 功能',
          items: [
            'guides/markdown-features/introduction',
            'guides/markdown-features/react',
            'guides/markdown-features/tabs',
            'guides/markdown-features/code-blocks',
            'guides/markdown-features/admonitions',
            'guides/markdown-features/headings',
            'guides/markdown-features/inline-toc',
            'guides/markdown-features/assets',
            'guides/markdown-features/plugins',
            'guides/markdown-features/math-equations',
            'guides/markdown-features/head-metadata',
          ],
        },
        'styling-layout',
        'static-assets',
        'search',
        'browser-support',
        'seo',
        'deployment',
        {
          type: 'category',
          label: '国际化',
          items: [
            {
              type: 'doc',
              id: 'i18n/introduction',
              label: '简介',
            },
            {
              type: 'doc',
              id: 'i18n/tutorial',
              label: '教程',
            },
            {
              type: 'doc',
              id: 'i18n/git',
              label: '使用 Git',
            },
            {
              type: 'doc',
              id: 'i18n/crowdin',
              label: '使用 Crowdin',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '进阶指南',
      items: ['using-plugins', 'using-themes', 'presets'],
    },
    {
      type: 'category',
      label: '从 v1 迁移到 v2 版本',
      items: [
        'migration/migration-overview',
        'migration/migration-automated',
        'migration/migration-manual',
        'migration/migration-versioned-sites',
        'migration/migration-translated-sites',
      ],
    },
  ],
  api: [
    'cli',
    'docusaurus-core',
    {
      type: 'autogenerated',
      dirName: 'api',
    },
  ],
};