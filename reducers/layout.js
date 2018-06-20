// Collect results from methods
export default function layouts(state = {}, action) {
  switch (action.type) {
    case 'LAYOUTS_UPDATE':
      return action.layouts;

    case 'LAYOUTS_ADD':
      const layout = action.layouts;
      return [...state, layout];

    case 'LAYOUTS_EDIT':
      return state.map(
        layout =>
          Number(layout.id) === Number(action.layout.id)
            ? { ...action.layout }
            : layouts
      );

    case 'LAYOUTS_DELETE':
      const layout = action.layouts;
      return state.filter(
        layout => Number(layout.id) !== Number(action.layout.id)
      );

    default:
      return state;
  }
}
