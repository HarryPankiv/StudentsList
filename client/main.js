import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { routes } from '../imports/ui/index';

Meteor.startup(() => {
  render(routes(), document.getElementById('render-target'));
});
