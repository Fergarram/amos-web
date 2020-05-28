import CardViewStories from './views/CardViewStories.svelte';

export default {
  title: 'CardView',
  component: CardViewStories,
  parameters: {
    backgrounds: [
      { name: 'squares', value: '#eeeeee', default: true },
    ]
  }
};

export const Multiple = () => ({
  Component: CardViewStories,
  props: { story: 'multiple' }
});
