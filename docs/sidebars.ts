import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    'installation',
    'theming',
    {
      type: 'category',
      label: 'Layout',
      items: ['components/page', 'components/card', 'components/card-list', 'components/divider'],
    },
    {
      type: 'category',
      label: 'Navigation',
      items: ['components/navbar', 'components/sidebar', 'components/tabs', 'components/breadcrumbs', 'components/pagination'],
    },
    {
      type: 'category',
      label: 'Data Display',
      items: ['components/typography', 'components/avatar', 'components/badge', 'components/chip', 'components/tooltip', 'components/accordion'],
    },
    {
      type: 'category',
      label: 'Forms',
      items: ['components/button', 'components/input', 'components/select', 'components/checkbox', 'components/radio', 'components/switch', 'components/date-picker', 'components/time-picker'],
    },
    {
      type: 'category',
      label: 'Feedback',
      items: ['components/alert', 'components/toast', 'components/spinner', 'components/skeleton'],
    },
    {
      type: 'category',
      label: 'Overlays',
      items: ['components/modal', 'components/drawer'],
    },
  ],
};

export default sidebars;
